import featurePlot from '../assets/BIONICS-1.webp'
import outputPlot from '../assets/BIONICS-2.webp'

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
    title: 'Spillbox PyTorch Training',
    org: { label: 'Spillbox', href: 'https://spillbox.io' },
    kind: 'AI infrastructure',
    year: '2025',
    lede: 'GPU cloud bursting for PyTorch: on-prem jobs spill onto an AWS Kubernetes cluster that pulls their packages and training data back over NFS.',
    body: [
      'Set up the AWS Kubernetes cluster and integrated it with Spillbox for on-prem to cloud deployment of AI workloads.',
      'Automated GPU access on Kubernetes and mounted host Python packages and training data dynamically over Spillbox NFS, with a CLI to manage the cloud training workflows.',
      'Demoed a 1.5 GB sentiment classifier trained on 50 MB of data in 7.3 minutes; optimizing cross-GPU communication made 2-GPU training 40% faster than 1-GPU with accuracy unchanged.',
    ],
    stack: ['Kubernetes', 'AWS', 'PyTorch', 'NFS'],
    media: { kind: 'video', src: 'https://youtu.be/Jk3v7Ytrxuw' },
    caption: 'Walkthrough of the cluster spilling a training job to cloud GPUs.',
  },
  {
    id: 'greenhouse',
    title: 'Greenhouse Robot',
    org: { label: 'UCLA Structures-Computer Interaction Lab', href: 'https://structures.computer' },
    kind: 'Robotics & perception',
    year: '2026',
    lede: 'An arm that finds a leaf, plans around everything else in the greenhouse, and photographs it.',
    body: [
      'Collision-free motion planning in ROS/MoveIt on an AgileX Piper arm with an Intel RealSense D405.',
      'Point-cloud fusion, 3D reconstruction, and segmentation to map the plant before each imaging pass.',
    ],
    stack: ['ROS', 'MoveIt', 'RealSense', 'Open3D'],
    media: { kind: 'video', src: 'https://youtu.be/XXWZRo8ODFQ' },
    caption: 'Autonomous leaf-imaging run in the lab greenhouse.',
  },
  {
    id: 'rehab',
    title: 'Autonomous Rehabilitation',
    org: { label: 'UCLA Bionics Lab', href: 'http://bionics.seas.ucla.edu/' },
    kind: 'Computer vision',
    year: '2025',
    lede: 'Scoring stroke recovery from motion capture instead of a clinician\u2019s stopwatch.',
    body: [
      'Processed 30+ stroke patients from CV and sensor streams into a 12 GB training set with NumPy and Pandas.',
      'Raised tremor quantification accuracy 5% with multi-joint features, validated by feature-ablation runs.',
    ],
    stack: ['PyTorch', 'OpenCV', 'NumPy', 'Pandas'],
    media: {
      kind: 'figure-flow',
      steps: [
        {
          step: 'Input',
          title: 'One engineered feature',
          note: 'Head-to-hand distance per trial, per arm, with reach peaks and troughs detected automatically.',
          src: featurePlot,
          alt: 'Head-to-hand distance over time for three trials, left and right arm, with peaks marked',
        },
        {
          step: 'Output',
          title: 'Tremor score',
          note: 'Normalized jerk per reach segment — the quantity a clinician would otherwise eyeball.',
          src: outputPlot,
          alt: 'Normalized jerk per movement segment for three trials, left and right arm',
        },
      ],
      connector: 'feeds into',
    },
    caption:
      'Head-to-hand distance is one of several engineered signals behind the tremor score. Click either plot for full resolution.',
  },
  {
    id: 'gambling-coach',
    title: 'Responsible Gambling Coach',
    org: { label: 'UCLA Anderson', href: 'https://www.anderson.ucla.edu' },
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
    href: 'https://joinhandshake.com/ai/',
  },
  {
    org: 'Spillbox',
    role: 'Software Intern',
    period: '2025',
    note: 'Distributed training infrastructure and GPU orchestration.',
    href: 'https://spillbox.io',
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
  title: 'Add support for Fusion analysis_overrides',
  href: 'https://github.com/vllm-project/semantic-router/pull/2618',
  repoHref: 'https://github.com/vllm-project/semantic-router',
  status: 'Merged',
  mergedOn: 'Jul 2026',
  blurb:
    'Per-model analysis overrides for the router: Go config validation, merge and normalization logic, panel execution, tests, and docs.',
  stats: [
    { value: '+298 / −7', label: 'lines changed' },
    { value: '7', label: 'files touched' },
    { value: '5.1k', label: 'stars on the repo' },
  ],
}
