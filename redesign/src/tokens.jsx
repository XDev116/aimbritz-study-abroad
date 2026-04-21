// Shared data for the prototype
const PLACEMENTS = [
  { name: "Priya Nair",    first: "Priya",  uni: "Oxford",         country: "UK",        flag: "GB", course: "MSc Computer Science",   year: "'26", photo: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=900&q=80" },
  { name: "Ahmed Khan",    first: "Ahmed",  uni: "Birmingham",     country: "UK",        flag: "GB", course: "MBA",                    year: "'26", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80" },
  { name: "Meera Iyer",    first: "Meera",  uni: "Toronto",        country: "Canada",    flag: "CA", course: "MS Data Science",        year: "'26", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80" },
  { name: "Arjun Das",     first: "Arjun",  uni: "Edinburgh",      country: "UK",        flag: "GB", course: "MSc Finance",            year: "'26", photo: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=900&q=80" },
  { name: "Neha Varma",    first: "Neha",   uni: "Sydney",         country: "Australia", flag: "AU", course: "BArch",                  year: "'26", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80" },
  { name: "Rajesh Menon",  first: "Rajesh", uni: "Trinity Dublin", country: "Ireland",   flag: "IE", course: "MSc Pharmacology",       year: "'26", photo: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=900&q=80" },
];

const COUNTRIES = [
  { code: "GB", name: "United Kingdom",  unis: 142, topCourse: "MSc Computer Science", cost: "£22k / yr",  intake: "Sept",   hero: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1600&q=80" },
  { code: "CA", name: "Canada",          unis: 96,  topCourse: "MS Data Science",      cost: "C$28k / yr", intake: "Sept",   hero: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1600&q=80" },
  { code: "AU", name: "Australia",       unis: 68,  topCourse: "BArch",                cost: "A$34k / yr", intake: "Feb",    hero: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=80" },
  { code: "US", name: "United States",   unis: 182, topCourse: "MS Engineering",       cost: "$42k / yr",  intake: "Fall",   hero: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600&q=80" },
  { code: "IE", name: "Ireland",         unis: 24,  topCourse: "MSc Pharma",           cost: "€18k / yr",  intake: "Sept",   hero: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1600&q=80" },
  { code: "DE", name: "Germany",         unis: 58,  topCourse: "MS Automotive Eng",    cost: "€0 public",  intake: "Oct",    hero: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=1600&q=80" },
  { code: "FR", name: "France",          unis: 41,  topCourse: "MSc Business",         cost: "€12k / yr",  intake: "Sept",   hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80" },
  { code: "NL", name: "Netherlands",     unis: 28,  topCourse: "MSc Econ",             cost: "€16k / yr",  intake: "Sept",   hero: "https://images.unsplash.com/photo-1534351590666-13e3e96c5017?w=1600&q=80" },
];

const UNIVERSITIES = [
  { id: 1, rank: 2,   name: "University of Oxford",      city: "Oxford",     country: "UK",     accept: "17.5%", type: "Public",  photo: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1200&q=80" },
  { id: 2, rank: 5,   name: "University of Cambridge",   city: "Cambridge",  country: "UK",     accept: "21.0%", type: "Public",  photo: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80" },
  { id: 3, rank: 18,  name: "University of Toronto",     city: "Toronto",    country: "Canada", accept: "43.0%", type: "Public",  photo: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80" },
  { id: 4, rank: 19,  name: "University of Sydney",      city: "Sydney",     country: "Aus",    accept: "30.0%", type: "Public",  photo: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80" },
  { id: 5, rank: 27,  name: "TU Munich",                 city: "Munich",     country: "DE",     accept: "8.0%",  type: "Public",  photo: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=1200&q=80" },
  { id: 6, rank: 34,  name: "Trinity College Dublin",    city: "Dublin",     country: "IE",     accept: "33.0%", type: "Public",  photo: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1200&q=80" },
];

const STORY_CHAPTERS = [
  { tag: "CH.01", title: "The dream",       copy: "Priya, 21, from Kochi. Top of her BTech class, but no family abroad, no map.",            ts: 0.00 },
  { tag: "CH.02", title: "The fit",         copy: "We ran 14 profile matches across 4 countries. Oxford MSc CS came up strongest.",        ts: 0.22 },
  { tag: "CH.03", title: "The craft",       copy: "31 drafts of her SOP. A new LOR. IELTS 8.0. Portfolio rebuilt in 3 weeks.",             ts: 0.48 },
  { tag: "CH.04", title: "The answer",      copy: "October 14th, 2:07 PM. A single line: 'We are delighted to offer you a place.'",        ts: 0.70 },
  { tag: "CH.05", title: "The departure",   copy: "Heathrow, September '25. First in her family to study abroad.",                          ts: 0.92 },
];

window.PLACEMENTS = PLACEMENTS;
window.COUNTRIES = COUNTRIES;
window.UNIVERSITIES = UNIVERSITIES;
window.STORY_CHAPTERS = STORY_CHAPTERS;
