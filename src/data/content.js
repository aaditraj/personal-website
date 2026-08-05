import featurePlot from '../assets/BIONICS-1.png'
import outputPlot from '../assets/BIONICS-2.png'

export const profile = {
  name: 'Aaditya Raj',
  role: 'CS @ UCLA',
  status: 'AI Intern at Nutanix',
  location: 'Los Angeles / SF Bay Area',
  email: 'adraj@ucla.edu',
  github: 'https://github.com/aaditraj',
  linkedin: 'https://linkedin.com/in/aadityadraj',
}

export const projects = [
  {
    id: 'spillbox',
    title: 'Spillbox',
    kind: 'AI infrastructure',
    year: '2025',
    lede: 'A Kubernetes training stack that spills on-prem GPU jobs into the cloud when the rack runs out.',
    body: [
      'Wired an AWS cluster into Spillbox and automated GPU provisioning plus the PyTorch training path around it.',
      'Trained a 1.5 GB sentiment model in 7.3 minutes and cut distributed training time 40% going from one GPU to two.',
    ],
    stack: ['Kubernetes', 'AWS', 'PyTorch', 'Python'],
    media: { kind: 'video', src: 'https://youtu.be/Jk3v7Ytrxuw' },
    caption: 'Walkthrough of the cluster spilling a training job to cloud GPUs.',
    link: { label: 'spillbox.ai', href: 'https://www.spillbox.ai' },
  },
  {
    id: 'greenhouse',
    title: 'Greenhouse Robot',
    kind: 'Robotics & perception',
    year: '2026',
    lede: 'An arm that finds a leaf, plans around everything else in the greenhouse, and photographs it.',
    body: [
      'Collision-free motion planning in ROS/MoveIt on an AgileX Piper arm with an Intel RealSense D405.',
      'Point-cloud fusion, 3D reconstruction, and segmentation to map the plant before each imaging pass.',
    ],
    stack: ['ROS', 'MoveIt', 'RealSense', 'Open3D'],
    media: { kind: 'video', src: 'https://youtu.be/XXWZRo8ODFQ' },
    caption: 'Autonomous leaf-imaging run at the UCLA Structures-Computation Lab.',
    link: { label: 'UCLA Structures-Computation Lab', href: 'https://ucla.edu' },
  },
  {
    id: 'rehab',
    title: 'Autonomous Rehabilitation',
    kind: 'Computer vision',
    year: '2025',
    lede: 'Scoring stroke recovery from motion capture instead of a clinician\u2019s stopwatch.',
    body: [
      'Processed 30+ stroke patients from CV and sensor streams into a 12 GB training set with NumPy and Pandas.',
      'Raised tremor quantification accuracy 5% with multi-joint features, validated by feature-ablation runs.',
    ],
    stack: ['PyTorch', 'OpenCV', 'NumPy', 'Pandas'],
    media: {
      kind: 'figure-pair',
      from: { src: featurePlot, alt: 'Head-to-hand distance feature over a session' },
      to: { src: outputPlot, alt: 'Aggregate tremor analysis output across patients' },
      fromLabel: 'One engineered feature',
      toLabel: 'Aggregate model output',
    },
    caption:
      'Head-to-hand distance is one of several engineered signals feeding the final tremor analysis. Click a plot for full resolution.',
    link: { label: 'UCLA Bionics Lab', href: 'https://ucla.edu' },
  },
  {
    id: 'gambling-coach',
    title: 'Responsible Gambling Coach',
    kind: 'Mobile product',
    year: '2025',
    lede: 'A behavioral-nudge app for UCLA Anderson, taken from a whiteboard to the app stores.',
    body: [
      'Built the iOS and Android client in React Native (Expo) with SQLite for offline-first local data.',
      'Owned the whole line: requirements with the Anderson team, wireframes, implementation, EAS releases.',
    ],
    stack: ['React Native', 'Expo', 'SQLite', 'TypeScript'],
    media: {
      kind: 'video-pair',
      items: [
        { src: 'https://youtube.com/shorts/anm369Qhnfs?feature=share', label: 'Profile setup' },
        { src: 'https://youtube.com/shorts/FyZLQlT5xjc?feature=share', label: 'Daily check-in' },
      ],
    },
    caption: 'Onboarding and day-to-day use, recorded on device.',
    link: { label: 'UCLA Anderson', href: 'https://www.anderson.ucla.edu' },
  },
]

export const experience = [
  {
    org: 'Nutanix',
    role: 'AI Intern',
    period: 'Jun 2026 — present',
    note: 'SWE-Bench model-fusion benchmarking; vLLM served behind the vLLM Semantic Router and Envoy AI Gateway on Kubernetes.',
    href: 'https://www.nutanix.com',
  },
  {
    org: 'Handshake AI',
    role: 'AI Fellow, Project Helix',
    period: 'Mar — Jun 2026',
    note: 'Evaluation framework for LLM output quality across model families.',
    href: 'https://www.handshake.com',
  },
  {
    org: 'Spillbox',
    role: 'Software Intern',
    period: '2025',
    note: 'Distributed training infrastructure and GPU orchestration.',
    href: 'https://www.spillbox.ai',
  },
  {
    org: 'UCLA Anderson',
    role: 'App Developer',
    period: '2025',
    note: 'Cross-platform mobile product from requirements through release.',
    href: 'https://www.anderson.ucla.edu',
  },
]

export const openSource = {
  repo: 'vllm-project/semantic-router',
  pr: '#2618',
  href: 'https://github.com/vllm-project/semantic-router/pull/2618',
  blurb:
    'Added per-model analysis overrides to the router: Go config validation, merge and normalization logic, panel execution, tests, docs. +298 / −7 across 7 files, merged upstream.',
}
