export interface Course {
  id: string;
  name: string;
  degree: "Bachelor" | "Master" | "PhD";
  duration: string;
  tuitionFee: number;
  currency: string;
  intakeDates: string[];
}

export interface University {
  id: string;
  name: string;
  slug: string;
  country: string;
  countryCode: string;
  city: string;
  description: string;
  logo: string;
  ranking: number;
  website: string;
  established: number;
  type: "Public" | "Private";
  courses: Course[];
  admissionRequirements: {
    bachelor: string[];
    master: string[];
    phd: string[];
  };
  campusLife: string;
  scholarships: string[];
}

export const universities: University[] = [
  {
    id: "1",
    name: "Massachusetts Institute of Technology",
    slug: "mit",
    country: "United States",
    countryCode: "US",
    city: "Cambridge, MA",
    description: "MIT is a world-renowned research university with a strong emphasis on scientific and technological education. Known for its innovation and entrepreneurial spirit, MIT has been at the forefront of groundbreaking research and has produced numerous Nobel laureates and innovators.",
    logo: "🏛️",
    ranking: 1,
    website: "https://mit.edu",
    established: 1861,
    type: "Private",
    courses: [
      {
        id: "mit-1",
        name: "Computer Science and Engineering",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 55878,
        currency: "USD",
        intakeDates: ["Fall (September)"]
      },
      {
        id: "mit-2",
        name: "Electrical Engineering and Computer Science",
        degree: "PhD",
        duration: "4-6 years",
        tuitionFee: 55878,
        currency: "USD",
        intakeDates: ["Fall (September)"]
      },
      {
        id: "mit-3",
        name: "Mechanical Engineering",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 55878,
        currency: "USD",
        intakeDates: ["Fall (September)", "Spring (January)"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with excellent grades",
        "SAT/ACT scores",
        "TOEFL (90+) or IELTS (7.0+) for international students",
        "Strong mathematics and science background",
        "Extracurricular activities and achievements",
        "Letters of recommendation"
      ],
      master: [
        "Bachelor's degree in relevant field with strong GPA (3.5+)",
        "GRE scores (recommended)",
        "TOEFL (100+) or IELTS (7.5+)",
        "Statement of purpose",
        "3 letters of recommendation",
        "Research experience preferred"
      ],
      phd: [
        "Master's degree or exceptional bachelor's degree",
        "Strong research background and publications",
        "GRE scores (recommended)",
        "TOEFL (100+) or IELTS (7.5+)",
        "Research proposal",
        "3-4 letters of recommendation"
      ]
    },
    campusLife: "MIT's campus life is vibrant and diverse, with over 500 student organizations, world-class facilities, and a strong focus on innovation and entrepreneurship. The campus features state-of-the-art laboratories, maker spaces, and collaborative work environments.",
    scholarships: [
      "MIT Scholarship (need-based)",
      "MISTI Global Seed Funds",
      "External fellowships (Fulbright, Rhodes, etc.)",
      "Research assistantships",
      "Teaching assistantships"
    ]
  },
  {
    id: "2",
    name: "Stanford University",
    slug: "stanford",
    country: "United States",
    countryCode: "US",
    city: "Stanford, CA",
    description: "Stanford University is a leading research university located in Silicon Valley. Known for its entrepreneurial culture and innovation, Stanford has produced numerous tech leaders and successful startups. The university excels in engineering, business, and sciences.",
    logo: "🌲",
    ranking: 3,
    website: "https://stanford.edu",
    established: 1885,
    type: "Private",
    courses: [
      {
        id: "stanford-1",
        name: "Computer Science",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 58746,
        currency: "USD",
        intakeDates: ["Fall (September)"]
      },
      {
        id: "stanford-2",
        name: "MBA",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 76950,
        currency: "USD",
        intakeDates: ["Fall (September)"]
      },
      {
        id: "stanford-3",
        name: "Artificial Intelligence",
        degree: "PhD",
        duration: "4-6 years",
        tuitionFee: 58746,
        currency: "USD",
        intakeDates: ["Fall (September)"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with outstanding grades",
        "SAT/ACT scores",
        "TOEFL (100+) or IELTS (7.5+)",
        "Strong academic record",
        "Leadership and extracurricular achievements",
        "Essays and letters of recommendation"
      ],
      master: [
        "Bachelor's degree with excellent GPA (3.7+)",
        "GRE/GMAT scores (program dependent)",
        "TOEFL (100+) or IELTS (7.5+)",
        "Statement of purpose",
        "3 letters of recommendation",
        "Relevant work or research experience"
      ],
      phd: [
        "Master's degree or exceptional bachelor's degree",
        "Outstanding research potential",
        "GRE scores",
        "TOEFL (100+) or IELTS (7.5+)",
        "Research proposal",
        "Strong letters of recommendation"
      ]
    },
    campusLife: "Stanford offers a beautiful campus with world-class facilities, 600+ student organizations, Division I athletics, and proximity to Silicon Valley tech companies. The campus culture emphasizes innovation, collaboration, and entrepreneurship.",
    scholarships: [
      "Stanford Fellowship",
      "Knight-Hennessy Scholars",
      "Research assistantships",
      "Teaching assistantships",
      "External scholarships"
    ]
  },
  {
    id: "3",
    name: "University of Oxford",
    slug: "oxford",
    country: "United Kingdom",
    countryCode: "GB",
    city: "Oxford",
    description: "The University of Oxford is one of the oldest and most prestigious universities in the world. Known for its tutorial system, world-class faculty, and beautiful historic colleges, Oxford offers an unparalleled academic experience across all disciplines.",
    logo: "🎓",
    ranking: 4,
    website: "https://ox.ac.uk",
    established: 1096,
    type: "Public",
    courses: [
      {
        id: "oxford-1",
        name: "Computer Science",
        degree: "Bachelor",
        duration: "3 years",
        tuitionFee: 37760,
        currency: "GBP",
        intakeDates: ["October"]
      },
      {
        id: "oxford-2",
        name: "Business Administration (MBA)",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 74100,
        currency: "GBP",
        intakeDates: ["September"]
      },
      {
        id: "oxford-3",
        name: "Law",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 32740,
        currency: "GBP",
        intakeDates: ["October"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "Exceptional A-level or equivalent qualifications",
        "IELTS (7.5+ with 7.0 in each component) or TOEFL (110+)",
        "Admissions test (depends on course)",
        "Personal statement",
        "Academic reference",
        "Interview (for shortlisted candidates)"
      ],
      master: [
        "First-class or strong upper-second class undergraduate degree",
        "IELTS (7.5+) or TOEFL (110+)",
        "Personal statement",
        "2-3 academic references",
        "Research proposal (for research courses)",
        "GMAT/GRE (for certain courses)"
      ],
      phd: [
        "Master's degree with distinction",
        "Strong research proposal",
        "IELTS (7.5+) or TOEFL (110+)",
        "Academic references",
        "Potential supervisor agreement",
        "Interview"
      ]
    },
    campusLife: "Oxford's collegiate system creates a close-knit community within the larger university. Students enjoy access to historic libraries, beautiful gardens, hundreds of societies, and a rich cultural scene. The tutorial system ensures personalized attention.",
    scholarships: [
      "Clarendon Scholarship",
      "Rhodes Scholarship",
      "Reach Oxford Scholarship",
      "Oxford-Weidenfeld and Hoffmann Scholarships",
      "College-specific scholarships"
    ]
  },
  {
    id: "4",
    name: "University of Toronto",
    slug: "toronto",
    country: "Canada",
    countryCode: "CA",
    city: "Toronto, ON",
    description: "The University of Toronto is Canada's leading research university and consistently ranks among the world's top institutions. Known for groundbreaking research, diverse programs, and strong industry connections, U of T offers excellent opportunities in a vibrant, multicultural city.",
    logo: "🍁",
    ranking: 21,
    website: "https://utoronto.ca",
    established: 1827,
    type: "Public",
    courses: [
      {
        id: "toronto-1",
        name: "Computer Science",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 59320,
        currency: "CAD",
        intakeDates: ["September"]
      },
      {
        id: "toronto-2",
        name: "Data Science",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 48200,
        currency: "CAD",
        intakeDates: ["September"]
      },
      {
        id: "toronto-3",
        name: "Engineering",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 61850,
        currency: "CAD",
        intakeDates: ["September"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with strong grades (85%+ average)",
        "English proficiency: IELTS (6.5+) or TOEFL (100+)",
        "Prerequisites vary by program",
        "Supplemental application for certain programs",
        "Extracurricular activities",
        "Letters of recommendation (program dependent)"
      ],
      master: [
        "Bachelor's degree with B+ average or higher",
        "IELTS (7.0+) or TOEFL (93+)",
        "GRE/GMAT (program dependent)",
        "Statement of interest",
        "2-3 references",
        "CV/Resume"
      ],
      phd: [
        "Master's degree with strong academic record",
        "Research proposal",
        "IELTS (7.0+) or TOEFL (93+)",
        "Academic references",
        "Publications or research experience",
        "Supervisor agreement"
      ]
    },
    campusLife: "U of T offers three campuses with diverse student communities, 800+ student organizations, state-of-the-art facilities, and location in downtown Toronto. Students enjoy access to world-class museums, libraries, and the vibrant cultural life of Canada's largest city.",
    scholarships: [
      "Lester B. Pearson International Scholarship",
      "University of Toronto Excellence Award",
      "Ontario Graduate Scholarship",
      "Faculty-specific scholarships",
      "Research assistantships"
    ]
  },
  {
    id: "5",
    name: "University of Melbourne",
    slug: "melbourne",
    country: "Australia",
    countryCode: "AU",
    city: "Melbourne, VIC",
    description: "The University of Melbourne is Australia's leading university, consistently ranking among the world's best. Known for research excellence, innovative teaching, and strong alumni network, it offers a comprehensive range of programs in a vibrant, liveable city.",
    logo: "🦘",
    ranking: 33,
    website: "https://unimelb.edu.au",
    established: 1853,
    type: "Public",
    courses: [
      {
        id: "melbourne-1",
        name: "Information Technology",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 47712,
        currency: "AUD",
        intakeDates: ["February", "July"]
      },
      {
        id: "melbourne-2",
        name: "Engineering",
        degree: "Master",
        duration: "2-3 years",
        tuitionFee: 48544,
        currency: "AUD",
        intakeDates: ["February", "July"]
      },
      {
        id: "melbourne-3",
        name: "Business Analytics",
        degree: "Master",
        duration: "1.5 years",
        tuitionFee: 49088,
        currency: "AUD",
        intakeDates: ["February", "July"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "Completion of Australian Year 12 or equivalent",
        "IELTS (6.5+ with no band below 6.0) or TOEFL (79+)",
        "Subject prerequisites vary by program",
        "ATAR or equivalent score",
        "Personal statement (some programs)",
        "Portfolio (for creative programs)"
      ],
      master: [
        "Bachelor's degree with minimum GPA requirement (varies)",
        "IELTS (6.5-7.0+) or TOEFL (79-94+)",
        "GRE/GMAT (for some programs)",
        "Work experience (for MBA and some courses)",
        "Statement of purpose",
        "2 references"
      ],
      phd: [
        "Master's degree or bachelor's with honours",
        "Research proposal (2,000-3,000 words)",
        "IELTS (7.0+) or TOEFL (94+)",
        "Academic references",
        "Supervisor agreement",
        "Publications or research experience preferred"
      ]
    },
    campusLife: "Melbourne's parkland campus is located in the heart of one of the world's most liveable cities. Students enjoy access to world-class facilities, 200+ clubs and societies, excellent sports facilities, and Melbourne's famous coffee culture and arts scene.",
    scholarships: [
      "Melbourne Graduate Scholarship",
      "Research Training Program",
      "Australia Awards Scholarship",
      "Melbourne International Undergraduate Scholarship",
      "Faculty-specific awards"
    ]
  },
  {
    id: "6",
    name: "Technical University of Munich",
    slug: "tum",
    country: "Germany",
    countryCode: "DE",
    city: "Munich",
    description: "TUM is one of Europe's leading universities, excelling in engineering, technology, and natural sciences. With strong industry partnerships and a focus on innovation, TUM offers world-class education with minimal tuition fees at its public institution.",
    logo: "⚙️",
    ranking: 49,
    website: "https://tum.de",
    established: 1868,
    type: "Public",
    courses: [
      {
        id: "tum-1",
        name: "Automotive Engineering",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 0,
        currency: "EUR",
        intakeDates: ["October", "April"]
      },
      {
        id: "tum-2",
        name: "Computer Science",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 0,
        currency: "EUR",
        intakeDates: ["October"]
      },
      {
        id: "tum-3",
        name: "Management & Technology",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 0,
        currency: "EUR",
        intakeDates: ["October"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "Abitur or equivalent qualification",
        "German proficiency: DSH-2 or TestDaF 4 (for German-taught programs)",
        "English proficiency: IELTS (6.5+) or TOEFL (88+) for English programs",
        "Subject-specific prerequisites",
        "Entrance examination (some programs)",
        "Motivation letter"
      ],
      master: [
        "Bachelor's degree in relevant field (minimum 2.5 GPA German system)",
        "German or English proficiency (program dependent)",
        "IELTS (6.5+) or TOEFL (88+) for English programs",
        "Statement of purpose",
        "CV",
        "2 letters of recommendation"
      ],
      phd: [
        "Master's degree or equivalent",
        "Research proposal",
        "German or English proficiency",
        "Contact with potential supervisor required",
        "Academic references",
        "Strong academic record"
      ]
    },
    campusLife: "TUM's modern campus offers excellent facilities including research labs, maker spaces, and sports centers. Munich provides high quality of life, rich culture, proximity to the Alps, and numerous tech company headquarters. Student semester ticket provides unlimited public transport.",
    scholarships: [
      "DAAD Scholarships",
      "Deutschlandstipendium",
      "TUM University Foundation Fellowships",
      "Konrad Adenauer Foundation",
      "Research assistantships"
    ]
  },
  {
    id: "7",
    name: "Trinity College Dublin",
    slug: "trinity-dublin",
    country: "Ireland",
    countryCode: "IE",
    city: "Dublin",
    description: "Trinity College Dublin is Ireland's oldest and most prestigious university. Located in the heart of Dublin and surrounded by leading tech companies, TCD offers world-class education with strong industry connections and a vibrant campus life.",
    logo: "☘️",
    ranking: 98,
    website: "https://tcd.ie",
    established: 1592,
    type: "Public",
    courses: [
      {
        id: "trinity-1",
        name: "Computer Science",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 24800,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "trinity-2",
        name: "Data Science",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 24800,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "trinity-3",
        name: "Business",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 21350,
        currency: "EUR",
        intakeDates: ["September"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "Leaving Certificate or equivalent with strong grades",
        "English proficiency: IELTS (6.5+) or TOEFL (90+)",
        "Subject-specific requirements",
        "Personal statement",
        "Reference letter",
        "Interview (for some programs)"
      ],
      master: [
        "Upper second-class honours degree (2:1) or equivalent",
        "IELTS (6.5+) or TOEFL (88+)",
        "Statement of purpose",
        "2 academic references",
        "CV",
        "Work experience (for some programs)"
      ],
      phd: [
        "Master's degree or first-class honours bachelor's",
        "Research proposal",
        "IELTS (6.5+) or TOEFL (88+)",
        "Academic references",
        "Supervisor agreement",
        "Interview"
      ]
    },
    campusLife: "Trinity's historic campus in central Dublin offers a unique blend of tradition and innovation. Students enjoy access to the famous Long Room Library, 180+ societies and sports clubs, and Dublin's vibrant tech and cultural scene including Google, Facebook, and LinkedIn offices nearby.",
    scholarships: [
      "Trinity International Scholarship",
      "Provost's PhD Awards",
      "Trinity Access Programme",
      "Country-specific scholarships",
      "Research scholarships"
    ]
  },
  {
    id: "8",
    name: "University of Auckland",
    slug: "auckland",
    country: "New Zealand",
    countryCode: "NZ",
    city: "Auckland",
    description: "The University of Auckland is New Zealand's leading university, offering world-class education in a stunning natural environment. Known for research excellence and innovation, it provides excellent opportunities in New Zealand's largest and most diverse city.",
    logo: "🥝",
    ranking: 87,
    website: "https://auckland.ac.nz",
    established: 1883,
    type: "Public",
    courses: [
      {
        id: "auckland-1",
        name: "Engineering",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 43766,
        currency: "NZD",
        intakeDates: ["March", "July"]
      },
      {
        id: "auckland-2",
        name: "Business Analytics",
        degree: "Master",
        duration: "15 months",
        tuitionFee: 51450,
        currency: "NZD",
        intakeDates: ["March", "July"]
      },
      {
        id: "auckland-3",
        name: "Computer Science",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 42046,
        currency: "NZD",
        intakeDates: ["March", "July"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "NCEA Level 3 or equivalent qualification",
        "IELTS (6.0+ with no band below 5.5) or TOEFL (80+)",
        "Subject prerequisites vary by program",
        "Good academic record",
        "Personal statement (some programs)",
        "Portfolio (for creative programs)"
      ],
      master: [
        "Bachelor's degree with B average or higher",
        "IELTS (6.5+ with no band below 6.0) or TOEFL (90+)",
        "Statement of purpose",
        "2 references",
        "CV",
        "Work experience (for some programs)"
      ],
      phd: [
        "Master's degree or bachelor's with first-class honours",
        "Research proposal",
        "IELTS (6.5+) or TOEFL (90+)",
        "Academic references",
        "Supervisor agreement",
        "Strong research background"
      ]
    },
    campusLife: "Auckland's beautiful campus is located minutes from the city center and harbors. Students enjoy access to modern facilities, 200+ clubs, excellent sports facilities, and Auckland's diverse culture. The city offers easy access to beaches, islands, and outdoor adventures.",
    scholarships: [
      "University of Auckland International Student Excellence Scholarship",
      "Doctoral Scholarship",
      "Faculty-specific scholarships",
      "New Zealand Government Scholarship",
      "Research scholarships"
    ]
  }
];

export function getUniversityBySlug(slug: string): University | undefined {
  return universities.find(uni => uni.slug === slug);
}

export function getUniversitiesByCountry(countryCode: string): University[] {
  return universities.filter(uni => uni.countryCode === countryCode);
}

export function getAllUniversitySlugs(): string[] {
  return universities.map(uni => uni.slug);
}
