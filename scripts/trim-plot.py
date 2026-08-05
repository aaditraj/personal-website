#!/usr/bin/env python3
"""Trim the white matplotlib margin off a figure and re-encode it.

matplotlib exports leave a wide white gutter on every side, which makes the
figures read as tiny when they are dropped into a fixed-height frame on the
page. This finds the bounding box of everything that is not near-white, adds a
small pad, and rewrites the file through ffmpeg.
"""

import subprocess
import sys
from pathlib import Path

WHITE_CUTOFF = 246  # anything lighter than this on all channels counts as page white
PAD = 6


def raw_rgb(path: Path, width: int, height: int) -> bytes:
    out = subprocess.run(
        ["ffmpeg", "-v", "error", "-i", str(path), "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
        check=True,
        stdout=subprocess.PIPE,
    ).stdout
    if len(out) != width * height * 3:
        raise SystemExit(f"unexpected raw size for {path}")
    return out


def dimensions(path: Path) -> tuple[int, int]:
    out = subprocess.run(
        [
            "ffprobe", "-v", "error", "-select_streams", "v:0",
            "-show_entries", "stream=width,height", "-of", "csv=p=0:s=x", str(path),
        ],
        check=True,
        stdout=subprocess.PIPE,
        text=True,
    ).stdout.strip()
    w, h = out.split("x")
    return int(w), int(h)


def content_box(data: bytes, width: int, height: int) -> tuple[int, int, int, int]:
    top, bottom, left, right = height, -1, width, -1
    for y in range(height):
        row = data[y * width * 3 : (y + 1) * width * 3]
        row_left, row_right = None, None
        for x in range(width):
            p = x * 3
            if row[p] < WHITE_CUTOFF or row[p + 1] < WHITE_CUTOFF or row[p + 2] < WHITE_CUTOFF:
                if row_left is None:
                    row_left = x
                row_right = x
        if row_left is not None:
            top = min(top, y)
            bottom = y
            left = min(left, row_left)
            right = max(right, row_right)
    if bottom < 0:
        raise SystemExit("image is entirely white")
    return left, top, right, bottom


def main() -> None:
    for arg in sys.argv[1:]:
        src = Path(arg)
        width, height = dimensions(src)
        left, top, right, bottom = content_box(raw_rgb(src, width, height), width, height)

        x = max(0, left - PAD)
        y = max(0, top - PAD)
        w = min(width - x, right - left + 1 + PAD * 2)
        h = min(height - y, bottom - top + 1 + PAD * 2)

        dst = src.with_suffix(".trimmed.png")
        subprocess.run(
            ["ffmpeg", "-v", "error", "-y", "-i", str(src),
             "-vf", f"crop={w}:{h}:{x}:{y}", str(dst)],
            check=True,
        )
        print(f"{src.name}: {width}x{height} -> {w}x{h} (offset {x},{y})")


if __name__ == "__main__":
    main()
