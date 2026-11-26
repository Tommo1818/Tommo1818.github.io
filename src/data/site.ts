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
  role: 'Data, software and hardware',
  /** Shown in the availability pill under the hero. */
  availability: 'Open to data, software and engineering roles',
  /** One-line positioning. Keep it concrete. */
  tagline:
    "I take systems apart, work out how they tick, and ship tools that make them better — whether that's a data pipeline, a firmware protocol, or a drawer full of Gridfinity.",
};

export const links = {
  github: 'https://github.com/Tommo1818',
  blog: 'https://tomsblog.data.blog/',
  /** The blog's own contact page — swap for a dedicated address when there is one. */
  contact: 'https://tomsblog.data.blog/contact/',
  polarsteps:
    'https://www.polarsteps.com/TomVernon/7568138-tom-and-kath-return-to-japan',
  /** TODO: fill in when available — hidden until then. */
  email: '',
  linkedin: '',
  music: 'https://solo.to/tomvernon2',
};

export type Entry = {
  role: string;
  org: string;
  when: string;
  blurb?: string;
  points?: string[];
  link?: { label: string; href: string };
  note?: string;
};

export const experience: Entry[] = [
  {
    role: 'Data Engineer',
    org: 'Asia Space',
    when: '1 year',
    blurb:
      'A year building and maintaining the pipelines that turn raw operational data into something people can actually query and trust.',
    points: [],
  },
  {
    role: 'Technical Support Engineer',
    org: 'Options Technology',
    when: '1 year',
    blurb: 'First- and second-line support in a regulated finance environment.',
    points: [
      'Front-line triage through to second-line diagnosis, owning issues end to end rather than handing them off.',
      'Worked directly with users and internal systems where downtime has a real cost, so clarity and accuracy mattered more than speed alone.',
    ],
  },
];

export const education: Entry[] = [
  {
    role: 'MSc Data Science',
    org: 'University of Bristol',
    when: 'In progress',
    blurb:
      'Current postgraduate study across large-scale data engineering, statistical methods and the organisational side of technical work.',
    link: {
      label: 'Coursework hub',
      href: 'https://github.com/Tommo1818/data-science-helper',
    },
  },
  {
    role: 'BSc (Hons) Computer Science',
    org: 'Swansea University',
    when: '',
    blurb:
      'Undergraduate computer science, finishing with a dissertation on detecting toxicity in real Counter-Strike chat using NLP and deep learning, evaluated with human raters.',
    link: {
      label: 'Read the dissertation',
      href: 'https://github.com/Tommo1818/csgo-detoxify-final-project',
    },
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript / JavaScript', 'SQL', 'C / C++', 'C#', 'PHP', 'GDScript'],
  },
  {
    title: 'Data & ML',
    items: ['pandas', 'NumPy', 'scikit-learn', 'NLP & transformers', 'Jupyter', 'Data pipelines', 'Human evaluation'],
  },
  {
    title: 'AI workflows',
    items: ['LLM APIs (DeepSeek, Gemini)', 'Retrieval over local data', 'Agentic tooling', 'Prompt & system design'],
  },
  {
    title: 'Infrastructure',
    items: ['Linux', 'Docker', 'GitHub Actions', 'Tailscale', 'Cloudflare Workers', 'Self-hosting', 'Bash'],
  },
  {
    title: 'Hardware & making',
    items: ['ESP32 / embedded C', 'WebHID', 'I2C & QSPI', 'Parametric CAD (Build123d)', 'FDM 3D printing', 'Electronics'],
  },
  {
    title: 'Web & delivery',
    items: ['Astro', 'Vanilla JS', 'WebGL2', 'Static-first architecture', 'Git', 'Accessibility'],
  },
];

export const music = {
  headline: 'House music, released as Tom Vernon.',
  blurb:
    'Debut EP <em>Amber Fade</em> landed on Lost Palms, the Shall Not Fade sub-label, in 2021. Since then: releases on Misplaced Recordings and Monolithic&rsquo;s Platonic Solids Inc., a 2022 EP called <em>Minobu</em> — named after the Yamanashi town at the centre of the Laid-Back Camp trips written up on the blog — and remixes on Beatport and Tidal.',
  /** Static cover art: no third-party iframe, so the section can never render blank. */
  art: '/music/miracle.jpg',
  latest: {
    title: 'Miracle (Tom Vernon Remix)',
    href: 'https://open.spotify.com/album/0oDK8Gcvq2BYC1wnfbEHeX',
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
    { title: 'Minobu', year: '2022', note: 'EP · the Yamanashi link' },
    { title: 'Amber Fade', year: '2021', note: 'Debut EP · Lost Palms' },
  ],
};

export const posts = [
  {
    tag: 'Yuru Camp',
    title: 'River Camping and Healing Onsens — Yuru Camp Backpacking Season 3',
    excerpt:
      'Backpacking the Yamanashi locations behind Laid-Back Camp, with onsens, river camps and mountain trains.',
    date: '22 Apr 2025',
    href: 'https://tomsblog.data.blog/2025/04/22/river-camping-and-healing-onsens-yuru-camp-backpacking-season-3/',
  },
  {
    tag: 'Hibike Euphonium',
    title: 'A Brief Visit to Uji After Hibike Euphonium Season 3',
    excerpt:
      'A day in Uji following the Sound! Euphonium locations, after the final season aired.',
    date: '13 Jul 2024',
    href: 'https://tomsblog.data.blog/2024/07/13/a-brief-visit-to-uji-after-hibike-euphonium-season-3/',
  },
  {
    tag: 'Tsuki ga Kirei',
    title: 'Tsukigakirei — Pilgrimage to Kawagoe',
    excerpt:
      'The original pilgrimage: Kawagoe, the setting for Tsuki ga Kirei, and the start of a habit.',
    date: '12 Mar 2020',
    href: 'https://tomsblog.data.blog/2020/03/12/tsukigakirei-pilgrimage-to-kawagoe/',
  },
];

export const outside = [
  {
    title: 'Gaming',
    body: 'Counter-Strike at <strong>FACEIT level 9</strong> and osu! at <strong>5-digit global rank</strong>. Competitive games are where I learned to review my own mistakes without flinching.',
  },
  {
    title: 'PC building',
    body: 'Years of building, rebuilding and troubleshooting machines for myself and other people — the reason I am comfortable at every layer from BIOS to drivers.',
  },
  {
    title: 'Making',
    body: '3D printing, parametric CAD and custom electronics: Gridfinity baseplates, a WebHID macropad configurator, and a growing pile of parts that nearly worked first time.',
  },
];
