const PATTERNS = [
  /[?&]v=([a-zA-Z0-9_-]{11})/,
  /youtu\.be\/([a-zA-Z0-9_-]{11})/,
  /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
]

export function getYouTubeEmbedUrl(url) {
  if (!url) return null

  const trimmed = url.trim()
  for (const pattern of PATTERNS) {
    const match = trimmed.match(pattern)
    if (match) return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`
  }

  return null
}
