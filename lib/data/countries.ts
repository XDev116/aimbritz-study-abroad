export interface Country {
  id: string;
  name: string;
  slug: string;
  code: string;
  flag: string;
  description: string;
  benefits: string[];
  visaInfo: string;
  costOfLiving: string;
  topCourses: string[];
  universitiesCount: number;
}

export const countries: Country[] = [
  {
    id: "1",
    name: "United States",
    slug: "usa",
    code: "US",
    flag: "🇺🇸",
    description: "The United States offers world-class education with unparalleled research opportunities and diverse academic programs. Home to many of the world's top-ranked universities, the USA attracts students globally with its innovative teaching methods and cutting-edge facilities.",
    benefits: [
      "Access to top-ranked universities and research facilities",
      "Diverse range of academic programs and specializations",
      "Optional Practical Training (OPT) for work experience",
      "Strong emphasis on research and innovation",
      "Multicultural environment with global networking opportunities",
      "Flexible education system with interdisciplinary options"
    ],
    visaInfo: "F-1 student visa is required for full-time academic study. Students must be accepted by a SEVP-approved school and demonstrate financial ability. The visa allows for Optional Practical Training (OPT) after graduation, providing 12 months (or 36 months for STEM) of work authorization.",
    costOfLiving: "Living costs vary significantly by location. Major cities like New York or San Francisco can range from $2,000-3,500/month, while smaller college towns may be $1,000-1,800/month. Includes accommodation, food, transport, and personal expenses.",
    topCourses: [
      "Computer Science & Engineering",
      "Business Administration (MBA)",
      "Data Science & Analytics",
      "Medicine & Healthcare",
      "Artificial Intelligence",
      "Finance & Accounting"
    ],
    universitiesCount: 200
  },
  {
    id: "2",
    name: "United Kingdom",
    slug: "uk",
    code: "GB",
    flag: "🇬🇧",
    description: "The UK boasts prestigious universities with centuries of academic excellence. Known for shorter course durations and world-renowned teaching quality, it remains one of the most popular destinations for international students.",
    benefits: [
      "Shorter course duration (3-year bachelor's, 1-year master's)",
      "Historic universities with global recognition",
      "Post-Study Work visa (2 years for graduates)",
      "Rich cultural heritage and diverse student community",
      "High-quality research and teaching standards",
      "Gateway to European opportunities"
    ],
    visaInfo: "Student visa (formerly Tier 4) is required for courses longer than 6 months. Students need a Confirmation of Acceptance for Studies (CAS) from a licensed institution. The Graduate Route allows students to work in the UK for 2 years (3 years for PhD graduates) after completing their degree.",
    costOfLiving: "London: £1,200-1,800/month. Other cities: £900-1,400/month. Includes accommodation, food, transport, bills, and social activities. Many universities offer accommodation at competitive rates.",
    topCourses: [
      "Business & Management",
      "Engineering (Mechanical, Civil, Electrical)",
      "Computer Science",
      "Law",
      "Medicine",
      "Arts & Humanities"
    ],
    universitiesCount: 150
  },
  {
    id: "3",
    name: "Canada",
    slug: "canada",
    code: "CA",
    flag: "🇨🇦",
    description: "Canada offers high-quality education at affordable costs with excellent post-study work opportunities. Known for its welcoming immigration policies and safe, multicultural cities, Canada is increasingly popular among international students.",
    benefits: [
      "Affordable tuition compared to US and UK",
      "Post-Graduation Work Permit (up to 3 years)",
      "Pathway to permanent residency",
      "Safe and welcoming multicultural society",
      "High quality of life and excellent healthcare",
      "Co-op programs for work experience"
    ],
    visaInfo: "Study permit is required for courses longer than 6 months. Students need a letter of acceptance from a Designated Learning Institution (DLI). The Post-Graduation Work Permit allows graduates to work for up to 3 years, depending on program length.",
    costOfLiving: "Major cities: CAD 1,200-2,000/month. Smaller cities: CAD 800-1,500/month. Includes rent, food, transport, utilities, and entertainment. On-campus accommodation often available.",
    topCourses: [
      "Information Technology",
      "Business Analytics",
      "Nursing & Healthcare",
      "Engineering (Software, Mechanical)",
      "Hospitality Management",
      "Environmental Sciences"
    ],
    universitiesCount: 100
  },
  {
    id: "4",
    name: "Australia",
    slug: "australia",
    code: "AU",
    flag: "🇦🇺",
    description: "Australia combines academic excellence with an outstanding quality of life. Its universities are globally recognized for research and innovation, and the country offers excellent weather, beautiful landscapes, and a relaxed lifestyle.",
    benefits: [
      "World-class universities and research facilities",
      "Post-study work rights (2-4 years)",
      "Safe, multicultural, and student-friendly cities",
      "Excellent climate and outdoor lifestyle",
      "Strong job market for graduates",
      "Part-time work allowed during studies (48 hours/fortnight)"
    ],
    visaInfo: "Student visa (subclass 500) is required. Students must have a Confirmation of Enrolment (CoE) and meet health insurance requirements (OSHC). Temporary Graduate visa (subclass 485) allows 2-4 years of post-study work rights.",
    costOfLiving: "Major cities (Sydney, Melbourne): AUD 1,800-2,500/month. Other cities: AUD 1,400-2,000/month. Includes accommodation, food, transport, utilities, and entertainment.",
    topCourses: [
      "Engineering (Mining, Civil, Electrical)",
      "Information Technology",
      "Business & Management",
      "Healthcare & Nursing",
      "Accounting",
      "Hospitality & Tourism"
    ],
    universitiesCount: 80
  },
  {
    id: "5",
    name: "Germany",
    slug: "germany",
    code: "DE",
    flag: "🇩🇪",
    description: "Germany offers tuition-free or low-cost education at public universities, making it an attractive destination for international students. Known for engineering excellence and strong industry connections, Germany provides world-class education with practical focus.",
    benefits: [
      "Tuition-free education at public universities",
      "Strong emphasis on research and practical learning",
      "18-month post-study work permit",
      "Central European location for travel",
      "Strong economy with excellent job opportunities",
      "Learning German can open European career doors"
    ],
    visaInfo: "Student visa requires admission to a recognized German university and proof of financial resources (currently €11,208/year in blocked account). Students can work 120 full days or 240 half days per year. 18-month job seeker visa available after graduation.",
    costOfLiving: "€800-1,200/month depending on city. Berlin and Munich are more expensive. Includes rent, food, transport (discounted student tickets), insurance, and personal expenses. Many students also work part-time.",
    topCourses: [
      "Mechanical Engineering",
      "Automotive Engineering",
      "Computer Science",
      "Business Engineering",
      "Electrical Engineering",
      "Industrial Engineering"
    ],
    universitiesCount: 90
  },
  {
    id: "6",
    name: "Ireland",
    slug: "ireland",
    code: "IE",
    flag: "🇮🇪",
    description: "Ireland has emerged as a leading study destination, especially for tech and business. Home to European headquarters of major tech companies, it offers quality education with strong industry connections and a friendly, English-speaking environment.",
    benefits: [
      "English-speaking country with friendly culture",
      "Hub for global tech companies (Google, Facebook, Apple)",
      "Post-study work visa (2 years for graduates)",
      "EU member state with excellent quality of life",
      "Shorter flight times to USA compared to other European countries",
      "Growing startup ecosystem and innovation"
    ],
    visaInfo: "Student visa requires letter of acceptance, proof of €10,000 for living expenses, and private medical insurance. Students can work 20 hours/week during term and 40 hours/week during holidays. Third Level Graduate Scheme allows 2 years of work after graduation.",
    costOfLiving: "Dublin: €1,000-1,500/month. Other cities: €700-1,200/month. Includes accommodation, food, transport, and personal expenses. Dublin is relatively expensive, but other cities offer more affordable options.",
    topCourses: [
      "Data Science",
      "Cloud Computing",
      "Cybersecurity",
      "Business Analytics",
      "Pharmaceutical Sciences",
      "Digital Marketing"
    ],
    universitiesCount: 40
  },
  {
    id: "7",
    name: "New Zealand",
    slug: "new-zealand",
    code: "NZ",
    flag: "🇳🇿",
    description: "New Zealand offers world-class education in a stunning natural environment. Known for its innovative teaching methods, welcoming culture, and excellent quality of life, it's an ideal destination for students seeking adventure alongside their studies.",
    benefits: [
      "High-quality education with innovative teaching",
      "Post-study work visa (3 years)",
      "Safe and welcoming environment",
      "Spectacular natural beauty and outdoor activities",
      "Reasonable tuition fees and living costs",
      "Work rights during and after studies"
    ],
    visaInfo: "Student visa requires offer of place from approved institution, proof of funds (NZD 20,000/year), return ticket or funds, and health insurance. Students can work 20 hours/week during studies and full-time during breaks. Post-study work visa available for up to 3 years.",
    costOfLiving: "NZD 1,250-2,000/month depending on city. Auckland is most expensive. Includes accommodation, food, transport, entertainment. Many students choose flatting (shared accommodation) to reduce costs.",
    topCourses: [
      "Agriculture & Viticulture",
      "Tourism & Hospitality",
      "Information Technology",
      "Engineering",
      "Business & Management",
      "Environmental Sciences"
    ],
    universitiesCount: 35
  }
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(country => country.slug === slug);
}

export function getAllCountrySlugs(): string[] {
  return countries.map(country => country.slug);
}
