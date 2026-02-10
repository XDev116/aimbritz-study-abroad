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
    id: "2",
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
    id: "3",
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
  },
  {
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
    name: "France",
    slug: "france",
    code: "FR",
    flag: "🇫🇷",
    description: "France offers world-renowned education with a rich cultural heritage. Known for excellence in arts, fashion, business, and engineering, France provides affordable education at prestigious institutions with a vibrant student life in historic cities.",
    benefits: [
      "Affordable tuition at public universities",
      "Rich cultural and artistic heritage",
      "Excellent business schools (INSEAD, HEC)",
      "Central European location for travel",
      "Post-study work visa available",
      "Learn French - a global language"
    ],
    visaInfo: "Long-stay student visa (VLS-TS) is required for studies longer than 3 months. Students need proof of admission, financial resources (approximately €615/month), and accommodation. After graduation, students can apply for a temporary residence permit to seek employment.",
    costOfLiving: "Paris: €1,200-1,800/month. Other cities: €800-1,200/month. Includes accommodation, food, transport, and personal expenses. Student housing (CROUS) offers affordable options.",
    topCourses: [
      "Business & Management",
      "Fashion & Luxury Goods",
      "Engineering",
      "Hospitality & Culinary Arts",
      "Arts & Design",
      "Political Science"
    ],
    universitiesCount: 75
  },
  {
    id: "9",
    name: "Dubai",
    slug: "dubai",
    code: "AE",
    flag: "🇦🇪",
    description: "Dubai has emerged as a global education hub with international branch campuses and world-class facilities. Offering tax-free income, a cosmopolitan lifestyle, and strategic location between East and West, Dubai attracts students seeking modern education with career opportunities.",
    benefits: [
      "International branch campuses of top universities",
      "Tax-free income and modern infrastructure",
      "Strategic location connecting Asia, Europe, and Africa",
      "Multicultural environment with global networking",
      "State-of-the-art facilities and technology",
      "Growing job market in various sectors"
    ],
    visaInfo: "Student visa is sponsored by the educational institution. Students need admission letter, proof of funds, and medical fitness certificate. Part-time work is permitted with university approval. Graduates can transition to employment visa with job offer.",
    costOfLiving: "AED 4,000-7,000/month (approximately $1,100-1,900 USD). Includes accommodation, food, transport, and personal expenses. Student accommodation and shared housing help reduce costs.",
    topCourses: [
      "Business & Finance",
      "Hospitality Management",
      "Engineering",
      "Information Technology",
      "Aviation",
      "Real Estate & Construction"
    ],
    universitiesCount: 65
  },
  {
    id: "10",
    name: "Malaysia",
    slug: "malaysia",
    code: "MY",
    flag: "🇲🇾",
    description: "Malaysia offers affordable, quality education with many international branch campuses and English-taught programs. With its multicultural society, modern cities, and tropical climate, Malaysia provides a unique study abroad experience at a fraction of Western costs.",
    benefits: [
      "Affordable tuition and living costs",
      "English-medium instruction widely available",
      "International branch campuses of UK/Australian universities",
      "Multicultural and multilingual environment",
      "Modern infrastructure and technology",
      "Gateway to Southeast Asia"
    ],
    visaInfo: "Student Pass is required for international students. Application is made through the educational institution. Students need admission letter, financial proof, and medical examination. Part-time work (20 hours/week) is permitted during semester breaks.",
    costOfLiving: "MYR 2,000-3,500/month (approximately $450-800 USD). Includes accommodation, food, transport, and personal expenses. Very affordable compared to Western countries.",
    topCourses: [
      "Business & Accounting",
      "Engineering",
      "Information Technology",
      "Medicine & Healthcare",
      "Hospitality & Tourism",
      "Islamic Finance"
    ],
    universitiesCount: 50
  },
  {
    id: "11",
    name: "Singapore",
    slug: "singapore",
    code: "SG",
    flag: "🇸🇬",
    description: "Singapore is a global education hub with world-ranked universities and strong industry connections. Known for academic excellence, safety, and multicultural environment, Singapore offers cutting-edge education with excellent career prospects in Asia's financial center.",
    benefits: [
      "World-ranked universities (NUS, NTU)",
      "Strong industry connections and internships",
      "Safe and clean city with excellent infrastructure",
      "Multicultural English-speaking environment",
      "Gateway to Asian markets and opportunities",
      "High employment rate for graduates"
    ],
    visaInfo: "Student's Pass is required for full-time studies. Application through the Immigration & Checkpoints Authority (ICA). Students need admission letter, financial proof, and medical examination. Part-time work (16 hours/week during term) is permitted for approved institutions.",
    costOfLiving: "SGD 1,500-2,500/month (approximately $1,100-1,850 USD). Includes accommodation, food, transport, and personal expenses. On-campus housing offers more affordable options.",
    topCourses: [
      "Business & Finance",
      "Computer Science & AI",
      "Engineering",
      "Law",
      "Medicine",
      "Data Science"
    ],
    universitiesCount: 35
  },
  {
    id: "12",
    name: "Mauritius",
    slug: "mauritius",
    code: "MU",
    flag: "🇲🇺",
    description: "Mauritius is an emerging education hub offering quality education at affordable costs. With its multicultural environment, English and French-speaking population, and strategic location between Africa and Asia, it provides a unique study abroad experience with strong connections to international universities.",
    benefits: [
      "Affordable tuition fees and living costs",
      "Multicultural and multilingual environment",
      "Safe and politically stable country",
      "Beautiful tropical island with high quality of life",
      "Growing hub for international branch campuses",
      "Strategic location connecting Africa, Asia, and Europe"
    ],
    visaInfo: "Student visa is required for international students. Applicants need an acceptance letter from a recognized institution, proof of financial means, and medical insurance. The visa allows part-time work during studies, and graduates may apply for work permits.",
    costOfLiving: "MUR 15,000-25,000/month (approximately $350-600 USD). Includes accommodation, food, transport, and personal expenses. Living costs are significantly lower than most Western countries.",
    topCourses: [
      "Business & Finance",
      "Information Technology",
      "Hospitality & Tourism Management",
      "Law",
      "Medicine & Health Sciences",
      "Marine Sciences"
    ],
    universitiesCount: 15
  }
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(country => country.slug === slug);
}

export function getAllCountrySlugs(): string[] {
  return countries.map(country => country.slug);
}
