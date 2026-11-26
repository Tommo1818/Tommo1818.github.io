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
  music: '',
  soundcloud: '',
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
    org: '',
    when: '1 year',
    blurb:
      'A year building and maintaining the pipelines that turn raw operational data into something people can actually query and trust.',
    points: [],
  },
  {
    role: 'Technical Support Engineer',
    org: 'Financial services',
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
    title: 'Music',
    body: 'House music, released as <strong>Tom Vernon</strong>. Producing and mixing is the other half of the same instinct — build something, listen critically, iterate until it holds up.',
  },
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
    body: '3D printing, parametric CAD and custom electronics. Recent builds include Gridfinity baseplates, a WebHID macropad configurator and an ESP32 desk clock.',
  },
];
