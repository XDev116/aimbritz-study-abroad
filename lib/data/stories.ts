/* ─────────────────────────────────────────────────────────────────────
   SUCCESS STORIES — edit the placeholder text below with real details.
   Each story maps to a real graduation photo in /public/images/students/.
   Replace `name`, `quote`, `journey`, `before`/`after`, `course`, `uni`.
   Add or remove entries freely. `country` drives the filter chips.
   ───────────────────────────────────────────────────────────────────── */

export interface Story {
  id: string;
  name: string;
  photo: string;
  uni: string;
  course: string;
  country: string; // used for filtering — keep consistent labels
  flag: string; // ISO-2 for the flag chip
  year: string;
  quote: string; // short pull-quote shown on the card
  journey: string; // longer paragraph shown when expanded
  before: string; // e.g. "6.5 IELTS, no plan"
  after: string; // e.g. "Imperial College London"
  featured?: boolean;
}

export const STORIES: Story[] = [
  {
    id: "aparna",
    name: "Aparna Menon",
    photo: "/images/students/student1.webp",
    uni: "University of Leicester",
    course: "MSc Management",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "I walked in with doubts and walked out with a master's from a UK university.",
    journey:
      "Aparna came to AimBritz unsure if she could even afford to study abroad. We mapped a funding plan, sharpened her SOP, and filed early. Six months later she had her offer and a part-scholarship — and today she's a Leicester graduate.",
    before: "Unsure, tight budget",
    after: "MSc, part-scholarship",
    featured: true,
  },
  {
    id: "reshma",
    name: "Reshma K.",
    photo: "/images/students/student2.webp",
    uni: "Queen Mary, University of London",
    course: "LLM Law",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "They believed in my profile before I did.",
    journey:
      "Reshma's grades didn't tell her whole story. We built an application around her work experience and a standout personal statement — and Queen Mary said yes. She's now practising law with an international qualification.",
    before: "Average grades",
    after: "LLM, London",
  },
  {
    id: "sanjay",
    name: "Sanjay R.",
    photo: "/images/students/student3.webp",
    uni: "University of Greenwich",
    course: "MBA",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "Visa rejected once — approved in three weeks with AimBritz.",
    journey:
      "After a refusal on his own, Sanjay nearly gave up. We rebuilt his financial documentation and prepped him for the interview. The second application was approved in three weeks. He's now an MBA graduate working in London.",
    before: "1 visa refusal",
    after: "MBA, approved",
    featured: true,
  },
  {
    id: "nimisha",
    name: "Nimisha P.",
    photo: "/images/students/student5.webp",
    uni: "Coventry University",
    course: "MSc Nursing",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "From Kerala to a UK hospital ward — exactly the path I dreamed of.",
    journey:
      "Nimisha wanted a nursing career abroad but didn't know where to start. We matched her to the right programme, handled the OSCE and visa steps, and supported her landing. She's now nursing in the UK.",
    before: "No clear path",
    after: "MSc Nursing, NHS-bound",
  },
  {
    id: "akhil",
    name: "Akhil V.",
    photo: "/images/students/student6.webp",
    uni: "University of Hertfordshire",
    course: "MSc Data Science",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "A scholarship I didn't even know existed.",
    journey:
      "Akhil qualified for funding he'd never heard of. We filed it on his behalf alongside his application — and he started his data science master's with reduced tuition. Now he's building a career in analytics.",
    before: "Full-fee assumption",
    after: "Scholarship + MSc",
  },
  {
    id: "divya",
    name: "Divya S.",
    photo: "/images/students/student4.webp",
    uni: "University of Greenwich",
    course: "MA Education",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "They spoke to my parents until everyone was confident.",
    journey:
      "For Divya's family, trust mattered most. Our team counselled her parents in their own language at every step. With everyone aligned, the application was smooth — and she's now an Education graduate planning to teach.",
    before: "Family hesitation",
    after: "MA Education",
    featured: true,
  },
];

export const STORY_STATS = [
  { value: 5012, suffix: "", label: "Students placed" },
  { value: 500, suffix: "+", label: "Partner universities" },
  { value: 98, suffix: "%", label: "Visa success rate" },
  { value: 14, suffix: "", label: "Countries" },
];

/* "Where they went" — destinations proof band. Edit counts/flags freely. */
export const STORY_DESTINATIONS = [
  { country: "United Kingdom", flag: "GB", count: 2840 },
  { country: "Canada", flag: "CA", count: 920 },
  { country: "Australia", flag: "AU", count: 640 },
  { country: "Ireland", flag: "IE", count: 310 },
  { country: "Germany", flag: "DE", count: 180 },
  { country: "USA", flag: "US", count: 122 },
];

/* Real Instagram reels — video proof strip. */
export const STORY_REELS = [
  { url: "https://www.instagram.com/reel/DPOlXHQj8If/", thumb: "/images/reels/reel1.jpg" },
  { url: "https://www.instagram.com/reel/DNavzAqP-YO/", thumb: "/images/reels/reel2.jpg" },
  { url: "https://www.instagram.com/reel/DLsB3JnP2Ox/", thumb: "/images/reels/reel3.jpg" },
  { url: "https://www.instagram.com/reel/DJeTT4fPw_e/", thumb: "/images/reels/reel4.jpg" },
  { url: "https://www.instagram.com/reel/DPq71cmD3Q8/", thumb: "/images/reels/reel5.jpg" },
  { url: "https://www.instagram.com/reel/DUQZXP1j6VD/", thumb: "/images/reels/reel6.jpg" },
  { url: "https://www.instagram.com/reel/DRhaM6Dj8Ji/", thumb: "/images/reels/reel7.jpg" },
];

/** Unique country list for the filter chips, in display order. */
export const STORY_COUNTRIES = Array.from(
  new Set(STORIES.map((s) => s.country))
);