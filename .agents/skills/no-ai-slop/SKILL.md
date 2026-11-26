---
name: no-ai-slop
description: >-
  De-slop and edit portfolio copy, case studies, and CV text for
  tommo1818.github.io while keeping Tom's natural conversational British voice.
  Activate whenever drafting, proofreading, tightening, or editing copy in
  src/pages/, src/data/site.ts, or src/content/work/.
---

# No AI Slop — Keep Tom's Voice

Use this skill whenever editing, proofreading, tightening, or drafting copy for **tommo1818.github.io** (homepage, case studies in `src/content/work/`, `src/data/site.ts`, and `src/pages/cv.astro`).

Your job is to make the site clear and easy to scan **without making it sound like an AI wrote it**.

---

## 1. Tom's Authentic Voice (Preserve This!)

Tom writes directly, casually, and honestly without corporate or AI fluff:

- **Casual, grounded British phrasing:** Natural UK spelling and idioms (`favourite`, `centre`, `rubbish`, `mates`, `uni`, `grabbed`, `ended up`, `sorted`, `fiddle with`, `a bit`). Never Americanise spelling or turn casual lines into stiff corporate prose.
- **Concrete over abstract:** Say what actually happened, broke, or got built rather than reaching for grand statements about engineering philosophy.
- **Dry humour & self-deprecation:** Honest, understated reactions (`My first version was technically right and produced rubbish layouts.`, `gets boring fast`).
- **Short, punchy beats:** Keep sections and case study paragraphs crisp (1–3 sentences). Don't pad simple points.

---

## 2. AI Slop Patterns to Eliminate

Ruthlessly cut or rewrite any of the following if they appear in a draft (or in your own edits):

### Banned AI clichés & filler
- `nestled in`, `tucked away in`, `hidden gem`, `a testament to`, `a tapestry of`
- `delve`, `embark on a journey`, `unforgettable`, `breathtaking`, `landscape` (metaphorical)
- `vibrant`, `bustling`, `serene`, `tranquil`, `picturesque`, `enchanting`, `whimsical`
- `immersive`, `seamless`, `elevate`, `resonates`, `captures the essence of`
- `the long way round`, `occasional rabbit hole`, `truly something special`

### Banned AI structural tics
- **Negative-parallelism formulas:** `"It's not just X — it's Y."`, `"The interesting part is not X, it is Y."`, `"Stops being X and starts being Y."`, `"Rather than X, I Y."`, `"The distinction matters:"`
- **Aphorism / thesis openers & wrap-ups:** Opening or closing a case study with a neat moral lesson or philosophical rule (`"Constraint work is mostly about defining 'good' precisely."`, `"Undocumented protocols reward patience more than cleverness."`, `"Reliability comes from removing degrees of freedom."`, `"is the difference between X and Y"`). End naturally on what actually happened.
- **Rule-of-three padding:** Turning one simple observation into three symmetrical clauses or adjectives (`"no backend, no install and no build step"`, `"for a build, a record, a lesson, a trip or a role"`).
- **Em-dash overuse:** Don't replace normal commas, periods, colons, or parentheses with `—` everywhere. Keep `—` only in clean title/metadata separators where standard.
- **Fake transition signposts:** `Furthermore,`, `Moreover,`, `Additionally,`, `In conclusion,`, `All in all,`, `Ultimately,`, `That being said,`.
- **Over-explained jokes or points:** If a sentence already lands, don't add a second sentence explaining why it mattered.

---

## 3. Editing Workflow

1. **Read the whole page or case study first** so the tone is consistent across `src/data/site.ts`, `src/pages/index.astro`, `src/pages/cv.astro`, and `src/content/work/*.md`.
2. **Preserve verified facts untouched:** Exact dates, companies (`Aspia Space`, `Options Technology`, `ThreeSixty Jersey`), degrees/grades (`Bristol`, `Swansea 2:1`, `Malvern`), tech stack (`Python`, `Java`, `C# (Unity)`, etc.), stats, and working links. Never invent details.
3. **Strip AI slop:** Replace clichés, em-dash chains, negative parallelisms, and aphorism wrap-ups with plain, direct British phrasing.
4. **Regenerate CV PDF if `cv.astro` or `site.ts` changed** so `public/tom-vernon-cv.pdf` stays in sync.

---

## 4. Quick Before / After Examples

- **Slop:** *Undocumented protocols reward patience more than cleverness. Small, boring experiments — change one byte, observe what the device echoes — beat trying to infer the whole format up front.*
- **Tom's voice:** *Reverse engineering an undocumented protocol is mostly patience. Changing one byte at a time and watching what comes back works much better than trying to guess the whole packet format in one go.*

- **Slop:** *The gap between a working model and a system you would trust with a punishment is almost entirely about evaluation.*
- **Tom's voice:** *Evaluation is the tricky bit. The human raters didn't always agree with the model, and half the time they didn't agree with each other either, which no accuracy score prepares you for.*
