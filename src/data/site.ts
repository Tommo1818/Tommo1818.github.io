/**
 * Single source of truth for links and copy that isn't tied to a case study.
 *
 * Anything left as an empty string is simply not rendered, so the site never
 * ships fake dates or dead links. Fill these in as they arrive.
 */

export const site = {
  name: 'Tom Vernon',
  handle: 'Tommo1818',
  url: 'https://tommo1818.github.io',
  role: 'Data, hardware & house music',
  /** Shown in the availability pill under the hero. */
  availability: 'Open to data, software and engineering roles',
  /** One-line positioning. Keep it concrete. */
  tagline:
    'Geospatial data engineer, MSc Data Science student, and I make house music and hardware projects.',
};

export const links = {
  github: 'https://github.com/Tommo1818',
  blog: 'https://tomsblog.data.blog/',
  /** The blog's own contact page — swap for a dedicated address when there is one. */
  contact: 'https://tomsblog.data.blog/contact/',
  /** TODO: fill in when available — hidden until then. */
  email: '',
  linkedin: 'https://www.linkedin.com/in/tom-vernon-7442b0197',
  music: 'https://solo.to/tomvernon2',
};

export type SubRole = {
  role: string;
  when: string;
  current?: boolean;
};

export type Entry = {
  id: string;
  role: string;
  org: string;
  location?: string;
  when: string;
  grade?: string;
  blurb?: string;
  subRoles?: SubRole[];
  points?: string[];
  activities?: string[];
  link?: { label: string; href: string };
  note?: string;
};

export const experience: Entry[] = [
  {
    id: 'aspia',
    role: 'Geospatial Data Engineer',
    org: 'Aspia Space',
    when: 'Nov 2025 – Present',
    subRoles: [
      { role: 'Geospatial Data Engineer', when: 'Mar 2026 – Present', current: true },
      { role: 'Geospatial Data Engineer Intern', when: 'Nov 2025 – Feb 2026' },
    ],
    blurb: 'Earth-observation and geospatial data pipelines. Started as an intern and moved into the full-time role.',
    points: [],
  },
  {
    id: 'options',
    role: 'Technical Support Engineer',
    org: 'Options Technology',
    location: 'London Area, UK',
    when: 'Aug 2024 – Aug 2025',
    blurb: '1st and 2nd-line finance support, fixing incidents end to end on live systems.',
    points: [],
  },
  {
    id: 'threesixty',
    role: 'Disassembly Engineer',
    org: 'ThreeSixty Jersey',
    location: 'Jersey',
    when: 'Sep 2019 – Feb 2020',
    blurb: 'Stripping down and salvaging old electronics for recycling across Jersey.',
    points: [],
  },
];

export const education: Entry[] = [
  {
    id: 'bristol',
    role: 'MSc Data Science',
    org: 'University of Bristol',
    when: 'Sep 2026 – Sep 2027',
    blurb: 'Large-scale data engineering and statistical methods.',
    activities: ['Badminton', 'Music Prod', 'DJ', 'Gaming', 'Anime'],
  },
  {
    id: 'swansea',
    role: 'BSc (Hons) Computer Science',
    org: 'Swansea University',
    when: 'Nov 2020 – Jan 2024',
    grade: '2:1',
    blurb: 'Dissertation on catching toxicity in Counter-Strike chat using NLP and human raters.',
    activities: ['DJ', 'eSports', 'Motorsports', 'Badminton'],
    link: {
      label: 'Dissertation',
      href: 'https://github.com/Tommo1818/csgo-detoxify-final-project',
    },
  },
  {
    id: 'malvern',
    role: 'A Levels',
    org: 'Malvern College',
    when: 'Sep 2017 – Jul 2019',
    grade: 'C, B, A, A',
    blurb: 'Maths, Physics, Music Tech and EPQ.',
    activities: ['Badminton Club'],
  },
];

export const earlierEducation = [
  { school: 'Hautlieu School', when: '2015–17' },
  { school: 'Victoria College Jersey', when: '2013–15' },
  { school: 'Cité Scolaire Internationale de Lyon', when: '2011–13' },
];

export type SkillGroup = {
  id: string;
  shortLabel: string;
  title: string;
  accent: 'violet' | 'cyan' | 'emerald' | 'amber' | 'pink';
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'data',
    shortLabel: 'Data',
    title: 'Data & ML',
    accent: 'violet',
    items: [
      'Geospatial pipelines',
      'pandas',
      'NumPy',
      'scikit-learn',
      'NLP & transformers',
      'Jupyter',
      'Human evaluation',
    ],
  },
  {
    id: 'languages',
    shortLabel: 'Code',
    title: 'Languages',
    accent: 'cyan',
    items: ['Python', 'Java', 'C# (Unity)', 'SQL', 'C / C++', 'PHP', 'GDScript'],
  },
  {
    id: 'ai',
    shortLabel: 'AI',
    title: 'AI workflows',
    accent: 'pink',
    items: ['LLM APIs (DeepSeek, Gemini)', 'Local RAG', 'Agentic tooling', 'System design'],
  },
  {
    id: 'infra',
    shortLabel: 'Infra',
    title: 'Infrastructure',
    accent: 'emerald',
    items: ['Linux', 'Docker', 'GitHub Actions', 'Tailscale', 'Cloudflare Workers', 'Bash'],
  },
  {
    id: 'hardware',
    shortLabel: 'Hardware',
    title: 'Hardware & making',
    accent: 'amber',
    items: ['ESP32 / embedded C', 'WebHID', 'I2C & QSPI', 'Build123d CAD', '3D printing'],
  },
  {
    id: 'web',
    shortLabel: 'Web',
    title: 'Web & delivery',
    accent: 'cyan',
    items: ['Astro', 'Vanilla JS', 'WebGL2', 'Static-first', 'Git', 'Accessibility'],
  },
];

export const music = {
  headline: 'House music.',
  blurb:
    'House records on <em>Lost Palms</em> (Shall Not Fade), <em>Misplaced Recordings</em> and <em>Platonic Solids Inc.</em>',
  /** Static cover art: no third-party iframe, so the section can never render blank. */
  art: '/music/miracle.jpg',
  latest: {
    title: 'Miracle (Tom Vernon Remix)',
    href: 'https://open.spotify.com/album/0oDK8Gcvq2BYc1wnfbEHeX',
  },
  stats: [
    { value: '13k+', label: 'monthly listeners' },
    { value: '2.9k+', label: 'Spotify followers' },
    { value: '10+', label: 'releases since 2021' },
  ],
  links: [
    { label: 'Spotify', href: 'https://open.spotify.com/artist/0te5MBzPmi8hTk4dLkAfI7' },
    { label: 'Bandcamp', href: 'https://tomvernon.bandcamp.com' },
    { label: 'SoundCloud', href: 'https://soundcloud.com/tomvmusic2' },
    { label: 'Apple Music', href: 'https://music.apple.com/gb/artist/tom-vernon/212562595' },
    { label: 'Instagram', href: 'https://instagram.com/tom_vernon_music' },
    { label: 'All links', href: 'https://solo.to/tomvernon2' },
  ],
  releases: [
    { title: 'Miracle (Tom Vernon Remix)', year: '2026', note: 'Single' },
    { title: 'I Try', year: '2025', note: 'EP · Lost Palms' },
    { title: 'Minobu', year: '2022', note: 'EP · Yamanashi' },
    { title: 'Amber Fade', year: '2021', note: 'Debut EP · Lost Palms' },
  ],
};

export type PostItem = {
  tag: string;
  theme: 'yuru' | 'hibike' | 'tsuki';
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

export const posts: PostItem[] = [
  {
    tag: 'Yuru Camp',
    theme: 'yuru',
    title: 'River Camping and Healing Onsens — Yuru Camp Season 3',
    excerpt: 'Backpacking Yamanashi onsens, rainy river camps and the Minobu line.',
    date: '22 Apr 2025',
    href: 'https://tomsblog.data.blog/2025/04/22/river-camping-and-healing-onsens-yuru-camp-backpacking-season-3/',
  },
  {
    tag: 'Hibike Euphonium',
    theme: 'hibike',
    title: 'A Brief Visit to Uji — Hibike Euphonium Season 3',
    excerpt: 'Walking round Uji’s bridges and viewpoints after the last season aired.',
    date: '13 Jul 2024',
    href: 'https://tomsblog.data.blog/2024/07/13/a-brief-visit-to-uji-after-hibike-euphonium-season-3/',
  },
  {
    tag: 'Tsuki ga Kirei',
    theme: 'tsuki',
    title: 'Tsukigakirei — Pilgrimage to Kawagoe',
    excerpt: 'Kawagoe’s old streets. The trip that kicked off the whole blog.',
    date: '12 Mar 2020',
    href: 'https://tomsblog.data.blog/2020/03/12/tsukigakirei-pilgrimage-to-kawagoe/',
  },
];

export const outside = [
  {
    title: 'Gaming',
    body: 'Counter-Strike with my ex-Swansea uni team (<strong>top 30 in the UK</strong>, FACEIT level 9), plus <strong>5-digit global rank</strong> on osu!',
  },
  {
    title: 'PC building',
    body: 'Custom PCs for mates and clients, from picking parts to BIOS and drivers.',
  },
  {
    title: 'Making',
    body: '3D printing, Build123d CAD and whatever hardware problem is annoying me that week.',
  },
];
