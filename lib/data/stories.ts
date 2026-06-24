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
  photoPosition?: string; // CSS object-position override, default "top"
  photoScale?: number; // CSS scale override for zooming out, default 1
}

export const STORIES: Story[] = [
  {
    id: "abhiram",
    name: "Abhiram",
    photo: "/images/testimonials/Abhiram .webp",
    uni: "Northumbria University, Newcastle",
    course: "Study Abroad",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "Aim Britz is the foremost agency for student solutions. I found they are genuinely trustworthy.",
    journey:
      "Excellent assistance in matching my point of interest with the appropriate university and course. The university admissions process was simplified. My counsellor patiently worked with me to resolve all of my uncertainties. Aim Britz is the foremost agency for student solutions. I found they are genuinely trustworthy because I completed all of my processes online and still I am fully satisfied. Overall, this is a great consultancy that I wholeheartedly endorse to everyone.",
    before: "Uncertain about universities",
    after: "Northumbria University",
    featured: true,
  },
  {
    id: "jasmine",
    name: "Jasmine",
    photo: "/images/testimonials/Jasmine.webp",
    uni: "Northumbria University, London Campus",
    course: "Study Abroad",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "I did not have to visit the office even once, and everything was done online.",
    journey:
      "I received excellent support from Aim Britz during my university process. Counselor Vishnu was particularly helpful in guiding me throughout the process, clarifying all my doubts and providing valuable assistance. The other staff members were also great in their roles and were very kind and helpful. Since I was from another state, I did not have to visit the office even once, and everything was done online. I have now arrived in the UK, and everything is going well. I would like to thank Aimbritz for their excellent service and wish them all the best for their future endeavors.",
    before: "From another state, all online",
    after: "Arrived in the UK",
    featured: true,
    photoPosition: "center top",
  },
  {
    id: "lekshmi-priya",
    name: "Lekshmi Priya",
    photo: "",
    uni: "Northumbria University, London Campus",
    course: "Study Abroad",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "A very helpful team whose assistance is something you will never forget during the journey.",
    journey:
      "I submitted my application through Aimbritz. They correctly update everything and keep it up to date. Faizal, Abu and Afna were in the forefront of clearing out all of my queries. A very helpful team whose assistance is something you will never forget during the journey. Much appreciation to the team AimBritz.",
    before: "Needed application guidance",
    after: "Northumbria University",
    featured: true,
  },
  {
    id: "shahin-shamnad",
    name: "Shahin Shamnad",
    photo: "/images/testimonials/Shahin Shamnad.webp",
    uni: "University of East London",
    course: "Study Abroad",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "Despite facing delays from the university, Vishnu's assistance strengthened me to resolve.",
    journey:
      "Highlighting the exceptional support from Aim Britz, particularly counselor Vishnu, guiding me through challenges in obtaining the offer letter. Despite facing delays from the university, Vishnu's assistance strengthened me to resolve, and now, I have reached UK and everything is going good. I have not even once visited the office everything was done online from abroad. Thank you Aimbritz for the service and all the best for your future endeavours.",
    before: "Delays from university",
    after: "Reached the UK",
    featured: true,
    photoPosition: "center",
  },
  {
    id: "kavya-krishnan",
    name: "Kavya Krishnan",
    photo: "/images/testimonials/KAVYA KRISHNAN.webp",
    uni: "Middlesex University, London",
    course: "Study Abroad",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "I started off as a staff member here, and am now gonna fly. Thanks to the amazing crew at Aim Britz.",
    journey:
      "I started off as a staff member here, and am now gonna fly. Thanks to the amazing crew at Aim Britz. I was incredibly motivated when students travelled to the United Kingdom to guarantee their future, and now my dream is coming true as well. Aim Britz was a pivotal moment in my professional career. Aimbritz stands out because of its pre-determinant staff and top-notch service. As a staff member, I value the openness that the team provides to each of our students. Contact the team to take advantage of this once-in-a-lifetime chance to settle down and achieve your desires.",
    before: "Staff member at AimBritz",
    after: "Middlesex University, London",
    featured: true,
    photoPosition: "center",
  },
  {
    id: "devika-ys",
    name: "Devika Y S",
    photo: "/images/testimonials/DEVIKA Y S.webp",
    uni: "University of Roehampton, London",
    course: "Study Abroad",
    country: "United Kingdom",
    flag: "GB",
    year: "2024",
    quote: "I have the mental fortitude and self-assurance to tackle the difficulties thanks to my counsellor Abdul.",
    journey:
      "Very supportive staff, with the finest counsellor assistance. Throughout the whole journey, Abdu was a great help. I had difficulty receiving the unconditional offer letter owing to some latency on the university's end. However, I have the mental fortitude and self-assurance to tackle the difficulties thanks to my counsellor Abdul, and I am now here with my visa, set to go on 15th of this month. I wholeheartedly suggest Aim Britz. What a fantastic group they were!",
    before: "Difficulty with offer letter",
    after: "Visa approved, ready to fly",
    featured: true,
    photoPosition: "right center",
  },
  {
    id: "thameem-hadhi",
    name: "Thameem Hadhi",
    photo: "/images/students/Thameem Hadhi.webp",
    uni: "Anglia Ruskin University",
    course: "MBA",
    country: "United Kingdom",
    flag: "GB",
    year: "2025",
    quote: "AimBritz made my MBA dream a reality with their dedicated guidance.",
    journey: "With the support of the AimBritz team, I successfully secured admission to Anglia Ruskin University for my MBA. The entire process was handled smoothly and professionally.",
    before: "Aspiring MBA student",
    after: "Anglia Ruskin University",
  },
  {
    id: "manu-ajith",
    name: "Manu Ajith",
    photo: "/images/students/Manu Ajith.webp",
    uni: "Northumbria University",
    course: "MSc International Project Management",
    country: "United Kingdom",
    flag: "GB",
    year: "2025",
    quote: "The team guided me through every step of my application process seamlessly.",
    journey: "AimBritz helped me secure a place at Northumbria University for MSc International Project Management with Advanced Practice. Their professional approach made the entire journey stress-free.",
    before: "Seeking the right programme",
    after: "Northumbria University",
  },
  {
    id: "arshad-farook",
    name: "Arshad Farook",
    photo: "/images/students/Arshad Farook .webp",
    uni: "De Montfort University",
    course: "MSc International Business & Management",
    country: "United Kingdom",
    flag: "GB",
    year: "2025",
    quote: "AimBritz provided excellent support throughout my university application journey.",
    journey: "With AimBritz's guidance, I was accepted into De Montfort University for International Business and Management MSc. Their expertise in UK university admissions was invaluable.",
    before: "Exploring UK universities",
    after: "De Montfort University",
  },
  {
    id: "sreejith-sadasivan",
    name: "Sreejith Sadasivan",
    photo: "/images/students/Sreejith Sadasivan.webp",
    uni: "University of Salford",
    course: "MSc Procurement & Supply Chain Management",
    country: "United Kingdom",
    flag: "GB",
    year: "2025",
    quote: "The counsellors at AimBritz were incredibly knowledgeable and supportive.",
    journey: "AimBritz helped me navigate the application process for the University of Salford's MSc Procurement, Logistics and Supply Chain Management programme with great professionalism.",
    before: "Looking for the right course",
    after: "University of Salford",
  },
  {
    id: "lyjan-siluvai-cruz",
    name: "Lyjan Siluvai Cruz",
    photo: "/images/students/Lyjan Siluvai Cruz.webp",
    uni: "University of Chester",
    course: "MSc International Business",
    country: "United Kingdom",
    flag: "GB",
    year: "2025",
    quote: "AimBritz turned my study abroad dream into reality with their expert guidance.",
    journey: "Thanks to AimBritz, I successfully got admitted to the University of Chester for MSc International Business. The team was always available to answer my questions and guide me through every step.",
    before: "Planning to study abroad",
    after: "University of Chester",
  },
  {
    id: "viji-francis",
    name: "Viji Francis",
    photo: "/images/students/Viji Francis.webp",
    uni: "Middlesex University",
    course: "MA International Business Management",
    country: "United Kingdom",
    flag: "GB",
    year: "2025",
    quote: "The AimBritz team made my transition to studying in the UK incredibly smooth.",
    journey: "AimBritz supported me throughout my application to Middlesex University for MA International Business Management. Their dedicated team ensured everything was handled efficiently.",
    before: "Seeking UK education",
    after: "Middlesex University",
  },
  {
    id: "anjana-vijayan",
    name: "Anjana Vijayan",
    photo: "/images/students/Anjana vijayan.webp",
    uni: "Northumbria University",
    course: "MSc Global Logistics & Supply Chain",
    country: "United Kingdom",
    flag: "GB",
    year: "2025",
    quote: "AimBritz provided exceptional support from start to finish.",
    journey: "With AimBritz's professional guidance, I secured admission to Northumbria University for MSc Global Logistics Operations and Supply Chain. The team was thorough and responsive throughout.",
    before: "Researching programmes",
    after: "Northumbria University",
  },
  {
    id: "kavya-krishnan-msx",
    name: "Kavya Krishnan",
    photo: "/images/students/Kavya Krishnan .webp",
    uni: "Middlesex University",
    course: "MSc Management",
    country: "United Kingdom",
    flag: "GB",
    year: "2025",
    quote: "AimBritz helped me find the perfect programme to advance my career.",
    journey: "The AimBritz team guided me to Middlesex University for MSc Management. Their personalised approach and attention to detail made the entire application process effortless.",
    before: "Career advancement goals",
    after: "Middlesex University",
  },
  {
    id: "aparna-nandakumar",
    name: "Aparna Nandakumar",
    photo: "/images/students/Aparna Nandakumar.webp",
    uni: "De Montfort University",
    course: "MSc International Business & Management",
    country: "United Kingdom",
    flag: "GB",
    year: "2025",
    quote: "The guidance from AimBritz was instrumental in my successful application.",
    journey: "AimBritz helped me secure a place at De Montfort University for International Business and Management MSc. Their expertise and dedication made all the difference.",
    before: "Applying to UK universities",
    after: "De Montfort University",
  },
  {
    id: "fathima-siraj",
    name: "Fathima Siraj",
    photo: "/images/students/Fathima Siraj.webp",
    uni: "Anglia Ruskin University",
    course: "MBA in Finance",
    country: "United Kingdom",
    flag: "GB",
    year: "2025",
    quote: "AimBritz made the entire process of studying abroad stress-free and straightforward.",
    journey: "With AimBritz's support, I was admitted to Anglia Ruskin University for MBA in Finance. The team handled every detail professionally and kept me informed throughout the process.",
    before: "Pursuing MBA in Finance",
    after: "Anglia Ruskin University",
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