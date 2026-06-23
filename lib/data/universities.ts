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
    name: "University of Liverpool",
    slug: "liverpool",
    country: "United Kingdom",
    countryCode: "GB",
    city: "Liverpool",
    description: "The University of Liverpool is a prestigious Russell Group university with a rich history of academic excellence and groundbreaking research. Founded in 1881, it was the first university to establish departments in oceanography, civic design, architecture, and biochemistry. Liverpool offers world-class facilities and strong industry connections.",
    logo: "🏛️",
    ranking: 176,
    website: "https://www.liverpool.ac.uk",
    established: 1881,
    type: "Public",
    courses: [
      {
        id: "liverpool-1",
        name: "Computer Science",
        degree: "Bachelor",
        duration: "3 years",
        tuitionFee: 24500,
        currency: "GBP",
        intakeDates: ["September"]
      },
      {
        id: "liverpool-2",
        name: "Business Management",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 23000,
        currency: "GBP",
        intakeDates: ["September", "January"]
      },
      {
        id: "liverpool-3",
        name: "Engineering",
        degree: "Bachelor",
        duration: "3-4 years",
        tuitionFee: 26600,
        currency: "GBP",
        intakeDates: ["September"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "A-Levels: AAB-BBB or equivalent qualifications",
        "IELTS: 6.0-6.5 overall (minimum 5.5 in each component)",
        "High school diploma with strong grades",
        "Personal statement",
        "Academic reference letter",
        "Subject-specific prerequisites"
      ],
      master: [
        "Bachelor's degree with 2:1 (Upper Second Class) or equivalent",
        "IELTS: 6.5 overall (minimum 6.0 in each component)",
        "Statement of purpose",
        "Two academic references",
        "CV/Resume",
        "Work experience (for some programs)"
      ],
      phd: [
        "Master's degree or First Class Honours bachelor's",
        "Research proposal",
        "IELTS: 6.5-7.0 overall",
        "Academic references",
        "Supervisor agreement",
        "Interview may be required"
      ]
    },
    campusLife: "Liverpool's campus is located in the vibrant city center with excellent facilities including modern libraries, sports centers, and student accommodation. The city offers a rich cultural scene, famous for The Beatles, football, and nightlife. Strong student community with 200+ societies.",
    scholarships: [
      "Vice-Chancellor's International Attainment Scholarship",
      "Liverpool International College Progression Scholarship",
      "Subject-specific scholarships",
      "Postgraduate taught scholarships",
      "Research scholarships"
    ]
  },
  {
    id: "2",
    name: "Queen's University Belfast",
    slug: "queens-belfast",
    country: "United Kingdom",
    countryCode: "GB",
    city: "Belfast",
    description: "Queen's University Belfast is a member of the prestigious Russell Group and one of the UK's leading research-intensive universities. Founded in 1845, it combines world-class research with outstanding teaching quality. The university is known for its welcoming atmosphere and excellent value for money.",
    logo: "👑",
    ranking: 202,
    website: "https://www.qub.ac.uk",
    established: 1845,
    type: "Public",
    courses: [
      {
        id: "queens-1",
        name: "Law",
        degree: "Bachelor",
        duration: "3 years",
        tuitionFee: 18900,
        currency: "GBP",
        intakeDates: ["September"]
      },
      {
        id: "queens-2",
        name: "Software Engineering",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 23100,
        currency: "GBP",
        intakeDates: ["September"]
      },
      {
        id: "queens-3",
        name: "Business for International Students",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 23100,
        currency: "GBP",
        intakeDates: ["September", "January"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "A-Levels: AAA-BBB depending on program",
        "IELTS: 6.0-6.5 overall",
        "Equivalent international qualifications accepted",
        "Personal statement",
        "Academic reference",
        "Subject prerequisites for specific courses"
      ],
      master: [
        "2:1 Honours degree or international equivalent",
        "IELTS: 6.5 overall (minimum 5.5-6.0 in each skill)",
        "Two references",
        "Personal statement",
        "CV",
        "Relevant work experience for some programs"
      ],
      phd: [
        "Master's degree with Merit or Distinction",
        "Strong research proposal",
        "IELTS: 6.5 overall",
        "Academic references",
        "Agreement from potential supervisor",
        "Interview"
      ]
    },
    campusLife: "Queen's has a beautiful historic campus in the heart of Belfast, one of the UK's most affordable and friendly cities. The Students' Union is one of the best in the UK with 200+ clubs and societies. Belfast offers excellent nightlife, culture, and easy access to stunning natural scenery.",
    scholarships: [
      "International Office Scholarship",
      "Vice-Chancellor's International Scholarship",
      "Early Bird Discount",
      "Partner scholarships",
      "Postgraduate research awards"
    ]
  },
  {
    id: "3",
    name: "University of Leicester",
    slug: "leicester",
    country: "United Kingdom",
    countryCode: "GB",
    city: "Leicester",
    description: "The University of Leicester is a leading UK university with a strong reputation for research excellence. Famous for pioneering DNA fingerprinting and discovering Richard III, Leicester combines innovative research with excellent teaching. The university has a strong focus on student experience and employability.",
    logo: "🎓",
    ranking: 272,
    website: "https://www.le.ac.uk",
    established: 1921,
    type: "Public",
    courses: [
      {
        id: "leicester-1",
        name: "Media and Communication",
        degree: "Bachelor",
        duration: "3 years",
        tuitionFee: 21250,
        currency: "GBP",
        intakeDates: ["September"]
      },
      {
        id: "leicester-2",
        name: "Business Analysis and Finance",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 21500,
        currency: "GBP",
        intakeDates: ["September", "January"]
      },
      {
        id: "leicester-3",
        name: "Computer Science",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 23500,
        currency: "GBP",
        intakeDates: ["September"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "A-Levels: ABB-BBC or equivalent",
        "IELTS: 6.0-6.5 overall",
        "International Baccalaureate: 30-32 points",
        "Personal statement",
        "Reference letter",
        "Subject-specific requirements"
      ],
      master: [
        "2:2 or 2:1 Honours degree depending on program",
        "IELTS: 6.0-6.5 overall",
        "Statement of purpose",
        "Two references",
        "CV",
        "Interview for some programs"
      ],
      phd: [
        "Master's degree or strong bachelor's degree",
        "Research proposal",
        "IELTS: 6.5 overall",
        "Academic references",
        "Supervisor identification",
        "Interview"
      ]
    },
    campusLife: "Leicester's compact campus is a short walk from the city center. The university offers excellent sports facilities, a vibrant Students' Union, and 150+ societies. Leicester is one of the UK's most multicultural cities with great food, festivals, and affordable living costs.",
    scholarships: [
      "Undergraduate Excellence Scholarship",
      "Global Study Award",
      "Chancellor's International Scholarship",
      "Postgraduate taught scholarships",
      "PhD studentships"
    ]
  },
  {
    id: "4",
    name: "Aston University",
    slug: "aston",
    country: "United Kingdom",
    countryCode: "GB",
    city: "Birmingham",
    description: "Aston University is a leading university located in the heart of Birmingham, known for its strong links with industry and excellent graduate employment rates. With a focus on business, engineering, and health sciences, Aston provides career-focused education with integrated placement opportunities.",
    logo: "🔬",
    ranking: 446,
    website: "https://www.aston.ac.uk",
    established: 1895,
    type: "Public",
    courses: [
      {
        id: "aston-1",
        name: "Business and Management",
        degree: "Bachelor",
        duration: "3-4 years",
        tuitionFee: 18700,
        currency: "GBP",
        intakeDates: ["September"]
      },
      {
        id: "aston-2",
        name: "International Business",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 21000,
        currency: "GBP",
        intakeDates: ["September", "January"]
      },
      {
        id: "aston-3",
        name: "Computer Science",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 21500,
        currency: "GBP",
        intakeDates: ["September"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "A-Levels: AAB-BBC depending on program",
        "IELTS: 6.0-6.5 overall (5.5 minimum per component)",
        "BTEC and Access courses accepted",
        "Personal statement",
        "Reference",
        "Interview for some programs"
      ],
      master: [
        "2:2 or 2:1 Honours degree",
        "IELTS: 6.5 overall (6.0 in each skill)",
        "Personal statement",
        "Two references",
        "CV",
        "Work experience valued"
      ],
      phd: [
        "Master's degree with Merit or Distinction",
        "Research proposal",
        "IELTS: 6.5-7.0 overall",
        "Academic references",
        "Supervisor agreement",
        "Interview"
      ]
    },
    campusLife: "Aston's modern campus is in central Birmingham, the UK's second-largest city. Students enjoy excellent facilities including a newly refurbished library, sports center, and on-campus accommodation. Birmingham offers world-class shopping, dining, and entertainment.",
    scholarships: [
      "Aston Excellence Scholarship",
      "International Scholarship",
      "Ferguson Scholarship for exceptional students",
      "Postgraduate scholarships",
      "Alumni discount"
    ]
  },
  {
    id: "5",
    name: "University of Huddersfield",
    slug: "huddersfield",
    country: "United Kingdom",
    countryCode: "GB",
    city: "Huddersfield",
    description: "The University of Huddersfield is known for its strong focus on employability and practical learning. With excellent industry links and high-quality teaching, Huddersfield prepares students for successful careers. The university has invested heavily in state-of-the-art facilities and offers exceptional value for money.",
    logo: "🎯",
    ranking: 651,
    website: "https://www.hud.ac.uk",
    established: 1841,
    type: "Public",
    courses: [
      {
        id: "huddersfield-1",
        name: "Business Management",
        degree: "Bachelor",
        duration: "3-4 years",
        tuitionFee: 17600,
        currency: "GBP",
        intakeDates: ["September", "January"]
      },
      {
        id: "huddersfield-2",
        name: "Engineering",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 18000,
        currency: "GBP",
        intakeDates: ["September", "January"]
      },
      {
        id: "huddersfield-3",
        name: "Computing",
        degree: "Bachelor",
        duration: "3-4 years",
        tuitionFee: 17600,
        currency: "GBP",
        intakeDates: ["September"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "A-Levels: BBC-CCC or equivalent",
        "IELTS: 6.0 overall (minimum 5.5 in each skill)",
        "BTEC and vocational qualifications accepted",
        "Personal statement",
        "Reference",
        "Portfolio for creative courses"
      ],
      master: [
        "Bachelor's degree (2:2 or above)",
        "IELTS: 6.0-6.5 overall",
        "Statement of purpose",
        "References",
        "CV",
        "Work experience for some programs"
      ],
      phd: [
        "Master's degree or strong Honours degree",
        "Research proposal",
        "IELTS: 6.5 overall",
        "References",
        "Supervisor agreement",
        "Interview"
      ]
    },
    campusLife: "Huddersfield's award-winning campus offers modern facilities, affordable living, and a friendly community. The town has excellent transport links to Leeds and Manchester. Students enjoy a supportive environment with over 100 societies and excellent sports facilities.",
    scholarships: [
      "International Scholarship",
      "Vice-Chancellor's Scholarship",
      "Excellence Scholarship",
      "Postgraduate scholarship",
      "Alumni discount"
    ]
  },
  {
    id: "6",
    name: "Coventry University",
    slug: "coventry",
    country: "United Kingdom",
    countryCode: "GB",
    city: "Coventry",
    description: "Coventry University is a forward-looking, modern university with a proud tradition of innovation and industry engagement. Known for excellent student satisfaction and employability outcomes, Coventry has invested over £500 million in new facilities. The university is one of the fastest-rising in UK rankings.",
    logo: "🚀",
    ranking: 571,
    website: "https://www.coventry.ac.uk",
    established: 1843,
    type: "Public",
    courses: [
      {
        id: "coventry-1",
        name: "International Business",
        degree: "Bachelor",
        duration: "3-4 years",
        tuitionFee: 16800,
        currency: "GBP",
        intakeDates: ["September", "January", "May"]
      },
      {
        id: "coventry-2",
        name: "Engineering Management",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 18600,
        currency: "GBP",
        intakeDates: ["September", "January", "May"]
      },
      {
        id: "coventry-3",
        name: "Data Science",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 18600,
        currency: "GBP",
        intakeDates: ["September", "January"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "A-Levels: BCC-CCC or equivalent",
        "IELTS: 6.0 overall (minimum 5.5 in each skill)",
        "Foundation programs available",
        "Personal statement",
        "Reference",
        "Interview for some courses"
      ],
      master: [
        "Bachelor's degree (2:2 or above for most programs)",
        "IELTS: 6.5 overall",
        "Statement of purpose",
        "Two references",
        "CV",
        "Work experience valued"
      ],
      phd: [
        "Master's degree with Merit",
        "Research proposal",
        "IELTS: 6.5-7.0 overall",
        "Academic references",
        "Supervisor agreement",
        "Interview"
      ]
    },
    campusLife: "Coventry's modern city-center campus features state-of-the-art buildings, a new science and health building, and excellent sports facilities. The city is centrally located in England with easy access to London, Birmingham, and other major cities. Over 200 clubs and societies available.",
    scholarships: [
      "International Scholarship",
      "Future Global Leaders Award",
      "Sports Scholarship",
      "Alumni Scholarship",
      "Postgraduate scholarships"
    ]
  },
  {
    id: "7",
    name: "California State University",
    slug: "cal-state",
    country: "United States",
    countryCode: "US",
    city: "Multiple Campuses, California",
    description: "The California State University system is the largest four-year public university system in the United States with 23 campuses. CSU offers high-quality, affordable education with strong connections to California's diverse industries including tech, entertainment, and agriculture. Known for practical, career-focused programs.",
    logo: "🌴",
    ranking: 400,
    website: "https://www.calstate.edu",
    established: 1857,
    type: "Public",
    courses: [
      {
        id: "calstate-1",
        name: "Business Administration",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 19500,
        currency: "USD",
        intakeDates: ["Fall (August)", "Spring (January)"]
      },
      {
        id: "calstate-2",
        name: "Computer Science",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 21000,
        currency: "USD",
        intakeDates: ["Fall (August)", "Spring (January)"]
      },
      {
        id: "calstate-3",
        name: "Engineering",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 20500,
        currency: "USD",
        intakeDates: ["Fall (August)"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with minimum 2.5 GPA",
        "SAT or ACT scores (test-optional for many campuses)",
        "TOEFL: 61+ or IELTS: 6.0+",
        "A-G course requirements completion",
        "Personal statement",
        "Application through Cal State Apply"
      ],
      master: [
        "Bachelor's degree with minimum 2.5-3.0 GPA",
        "TOEFL: 80+ or IELTS: 6.5+",
        "GRE/GMAT (program dependent)",
        "Statement of purpose",
        "Two letters of recommendation",
        "Resume/CV"
      ],
      phd: [
        "Master's degree in related field",
        "Strong GPA (3.0+)",
        "TOEFL: 80+ or IELTS: 6.5+",
        "Research experience",
        "Statement of purpose",
        "Three letters of recommendation"
      ]
    },
    campusLife: "CSU campuses offer diverse environments from beach locations to urban centers. Students enjoy California's sunny climate, access to major tech companies, entertainment industry, and outdoor activities. Each campus has unique character with hundreds of student organizations and sports programs.",
    scholarships: [
      "CSU Trustees' Award for Outstanding Achievement",
      "Cal Grant",
      "International Student Scholarships",
      "Department-specific scholarships",
      "Work-study programs"
    ]
  },
  {
    id: "8",
    name: "University of Arizona",
    slug: "arizona",
    country: "United States",
    countryCode: "US",
    city: "Tucson, Arizona",
    description: "The University of Arizona is a top-ranked public research university known for excellence in space sciences, optics, and entrepreneurship. Located in sunny Tucson, UArizona offers world-class research opportunities, diverse programs, and a welcoming environment for international students with strong support services.",
    logo: "🌵",
    ranking: 98,
    website: "https://www.arizona.edu",
    established: 1885,
    type: "Public",
    courses: [
      {
        id: "arizona-1",
        name: "Computer Science",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 36386,
        currency: "USD",
        intakeDates: ["Fall (August)", "Spring (January)"]
      },
      {
        id: "arizona-2",
        name: "Business Administration (MBA)",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 32000,
        currency: "USD",
        intakeDates: ["Fall (August)"]
      },
      {
        id: "arizona-3",
        name: "Engineering",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 35000,
        currency: "USD",
        intakeDates: ["Fall (August)", "Spring (January)"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with minimum 3.0 GPA",
        "SAT: 1120+ or ACT: 22+ (test-flexible)",
        "TOEFL: 70+ or IELTS: 6.0+",
        "Core academic courses",
        "Personal statement",
        "Counselor recommendation"
      ],
      master: [
        "Bachelor's degree with minimum 3.0 GPA",
        "TOEFL: 79+ or IELTS: 7.0+",
        "GRE/GMAT (program dependent)",
        "Statement of purpose",
        "Three letters of recommendation",
        "Resume/CV"
      ],
      phd: [
        "Master's degree (or exceptional bachelor's)",
        "Strong academic record (3.2+ GPA)",
        "TOEFL: 79+ or IELTS: 7.0+",
        "GRE scores",
        "Research proposal",
        "Three letters of recommendation"
      ]
    },
    campusLife: "UArizona's beautiful desert campus offers 300+ days of sunshine, world-class facilities, and a vibrant student life with 600+ clubs and organizations. Tucson offers affordable living, rich culture, and outdoor adventures. Strong athletics program (PAC-12) and active Greek life.",
    scholarships: [
      "Wildcat Excellence Award",
      "International Tuition Award",
      "Global Wildcat Award",
      "Department scholarships",
      "Graduate assistantships"
    ]
  },
  {
    id: "9",
    name: "Texas State University",
    slug: "texas-state",
    country: "United States",
    countryCode: "US",
    city: "San Marcos, Texas",
    description: "Texas State University is a comprehensive public university known for its beautiful campus along the San Marcos River. With strong programs in business, education, health sciences, and creative arts, Texas State offers quality education at an affordable price. The university is one of the largest in Texas with a diverse student body.",
    logo: "⭐",
    ranking: 550,
    website: "https://www.txstate.edu",
    established: 1899,
    type: "Public",
    courses: [
      {
        id: "txstate-1",
        name: "Business Administration",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 24000,
        currency: "USD",
        intakeDates: ["Fall (August)", "Spring (January)"]
      },
      {
        id: "txstate-2",
        name: "Computer Science",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 22000,
        currency: "USD",
        intakeDates: ["Fall (August)", "Spring (January)"]
      },
      {
        id: "txstate-3",
        name: "Health Sciences",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 24000,
        currency: "USD",
        intakeDates: ["Fall (August)"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with minimum 2.5 GPA",
        "SAT or ACT scores (test-optional)",
        "TOEFL: 78+ or IELTS: 6.5+",
        "Core curriculum completion",
        "Application essay",
        "Official transcripts"
      ],
      master: [
        "Bachelor's degree from accredited institution",
        "Minimum 2.75 GPA (last 60 hours)",
        "TOEFL: 78+ or IELTS: 6.5+",
        "GRE/GMAT (program dependent)",
        "Statement of purpose",
        "Two letters of recommendation"
      ],
      phd: [
        "Master's degree in related field",
        "Strong academic record",
        "TOEFL: 78+ or IELTS: 6.5+",
        "GRE scores",
        "Research interests statement",
        "Three letters of recommendation"
      ]
    },
    campusLife: "Texas State's stunning campus features the beautiful San Marcos River, offering tubing, kayaking, and swimming. Located between Austin and San Antonio, students enjoy access to two major cities. Over 400 student organizations, Division I athletics, and vibrant campus events.",
    scholarships: [
      "Presidential Scholarship",
      "International Student Scholarship",
      "Departmental scholarships",
      "Transfer scholarships",
      "Graduate assistantships"
    ]
  },
  {
    id: "10",
    name: "Colorado State University",
    slug: "colorado-state",
    country: "United States",
    countryCode: "US",
    city: "Fort Collins, Colorado",
    description: "Colorado State University is a premier research university known for excellence in agriculture, engineering, veterinary medicine, and sustainability. Located in Fort Collins, consistently ranked among America's best places to live, CSU offers world-class education with outstanding research opportunities and beautiful mountain scenery.",
    logo: "🏔️",
    ranking: 442,
    website: "https://www.colostate.edu",
    established: 1870,
    type: "Public",
    courses: [
      {
        id: "csu-1",
        name: "Business Administration",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 32000,
        currency: "USD",
        intakeDates: ["Fall (August)", "Spring (January)"]
      },
      {
        id: "csu-2",
        name: "Computer Science",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 28000,
        currency: "USD",
        intakeDates: ["Fall (August)", "Spring (January)"]
      },
      {
        id: "csu-3",
        name: "Engineering",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 34000,
        currency: "USD",
        intakeDates: ["Fall (August)"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with minimum 3.0 GPA",
        "SAT: 1100+ or ACT: 22+ (test-optional)",
        "TOEFL: 71+ or IELTS: 6.5+",
        "Core academic requirements",
        "Personal statement",
        "Official transcripts"
      ],
      master: [
        "Bachelor's degree with minimum 3.0 GPA",
        "TOEFL: 80+ or IELTS: 6.5+",
        "GRE (program dependent)",
        "Statement of purpose",
        "Three letters of recommendation",
        "Resume/CV"
      ],
      phd: [
        "Master's degree or exceptional bachelor's",
        "Strong academic record (3.25+ GPA)",
        "TOEFL: 80+ or IELTS: 6.5+",
        "GRE scores",
        "Research statement",
        "Three letters of recommendation"
      ]
    },
    campusLife: "Fort Collins offers the perfect blend of college town charm and outdoor adventure. Students enjoy skiing, hiking, and biking in the Rocky Mountains. The campus features modern facilities, 500+ student organizations, Division I athletics, and a thriving craft beer scene downtown.",
    scholarships: [
      "Ram Welcome Grant",
      "International Student Scholarship",
      "President's Scholarship",
      "Department scholarships",
      "Graduate teaching assistantships"
    ]
  },
  {
    id: "11",
    name: "University of Melbourne",
    slug: "melbourne",
    country: "Australia",
    countryCode: "AU",
    city: "Melbourne, VIC",
    description: "The University of Melbourne is Australia's leading university and consistently ranks among the world's top 40 institutions. Known for research excellence, innovative teaching, and strong alumni network, Melbourne offers a comprehensive range of programs in one of the world's most liveable cities.",
    logo: "🦘",
    ranking: 33,
    website: "https://www.unimelb.edu.au",
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
        "IELTS: 6.5 overall (no band below 6.0)",
        "TOEFL: 79+ (writing 21, speaking 18, reading/listening 13)",
        "Subject prerequisites vary by program",
        "ATAR or equivalent score",
        "Personal statement for some programs"
      ],
      master: [
        "Bachelor's degree with strong GPA (varies by program)",
        "IELTS: 6.5-7.0 overall or TOEFL: 79-94+",
        "GRE/GMAT for some programs",
        "Work experience for MBA and some courses",
        "Statement of purpose",
        "Two references"
      ],
      phd: [
        "Master's degree or bachelor's with honours",
        "Research proposal (2,000-3,000 words)",
        "IELTS: 7.0 overall or TOEFL: 94+",
        "Academic references",
        "Supervisor agreement",
        "Publications preferred"
      ]
    },
    campusLife: "Melbourne's beautiful parkland campus is in the heart of one of the world's most liveable cities. Students enjoy world-class facilities, 200+ clubs and societies, excellent sports facilities, and Melbourne's famous coffee culture, arts scene, and diverse food options.",
    scholarships: [
      "Melbourne Graduate Scholarship",
      "Research Training Program",
      "Australia Awards Scholarship",
      "Melbourne International Undergraduate Scholarship",
      "Faculty-specific awards"
    ]
  },
  {
    id: "12",
    name: "University of Western Australia",
    slug: "uwa",
    country: "Australia",
    countryCode: "AU",
    city: "Perth, WA",
    description: "The University of Western Australia is one of Australia's leading research universities and a member of the prestigious Group of Eight. Located on a beautiful riverside campus in Perth, UWA offers world-class education with strong connections to Asia-Pacific and global industries, particularly in mining, energy, and marine sciences.",
    logo: "🌊",
    ranking: 72,
    website: "https://www.uwa.edu.au",
    established: 1911,
    type: "Public",
    courses: [
      {
        id: "uwa-1",
        name: "Data Science",
        degree: "Master",
        duration: "1.5-2 years",
        tuitionFee: 42100,
        currency: "AUD",
        intakeDates: ["February", "July"]
      },
      {
        id: "uwa-2",
        name: "Business Administration (MBA)",
        degree: "Master",
        duration: "1.5 years",
        tuitionFee: 45000,
        currency: "AUD",
        intakeDates: ["February", "July"]
      },
      {
        id: "uwa-3",
        name: "Engineering",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 44000,
        currency: "AUD",
        intakeDates: ["February", "July"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "Australian Year 12 or equivalent qualification",
        "IELTS: 6.5 overall (no band below 6.0)",
        "ATAR or equivalent score",
        "Subject prerequisites for specific programs",
        "English language proficiency",
        "Portfolio for some creative programs"
      ],
      master: [
        "Bachelor's degree from recognized institution",
        "IELTS: 6.5-7.0 overall",
        "GRE/GMAT for some programs",
        "Statement of purpose",
        "CV/Resume",
        "Two references"
      ],
      phd: [
        "Master's degree or Honours degree (First Class/2A)",
        "Research proposal",
        "IELTS: 7.0 overall",
        "Academic references",
        "Supervisor agreement",
        "Research experience preferred"
      ]
    },
    campusLife: "UWA's stunning riverfront campus is one of Australia's most beautiful. Perth offers an excellent lifestyle with beaches, sunshine, and outdoor activities. Students enjoy modern facilities, 150+ clubs, strong sports culture, and easy access to Asia-Pacific for travel and career opportunities.",
    scholarships: [
      "Global Excellence Scholarship",
      "International Student Award",
      "Research Training Program Scholarship",
      "Faculty scholarships",
      "Destination Australia Scholarship"
    ]
  },
  {
    id: "13",
    name: "University of Auckland",
    slug: "auckland",
    country: "New Zealand",
    countryCode: "NZ",
    city: "Auckland",
    description: "The University of Auckland is New Zealand's largest and highest-ranked university, consistently placing in the top 100 globally. Known for research excellence, innovative teaching, and strong industry connections, Auckland offers world-class education in a stunning natural environment with excellent quality of life.",
    logo: "🥝",
    ranking: 68,
    website: "https://www.auckland.ac.nz",
    established: 1883,
    type: "Public",
    courses: [
      {
        id: "auckland-1",
        name: "Engineering",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 45000,
        currency: "NZD",
        intakeDates: ["February", "July"]
      },
      {
        id: "auckland-2",
        name: "Business Analytics",
        degree: "Master",
        duration: "15 months",
        tuitionFee: 51450,
        currency: "NZD",
        intakeDates: ["February", "July"]
      },
      {
        id: "auckland-3",
        name: "Computer Science",
        degree: "Master",
        duration: "1-2 years",
        tuitionFee: 42046,
        currency: "NZD",
        intakeDates: ["February", "July"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "NCEA Level 3 or equivalent qualification",
        "IELTS: 6.0 overall (no band below 5.5)",
        "Subject prerequisites vary by program",
        "Good academic record",
        "Personal statement for some programs",
        "Portfolio for creative programs"
      ],
      master: [
        "Bachelor's degree with B average or higher",
        "IELTS: 6.5 overall (no band below 6.0)",
        "Statement of purpose",
        "Two references",
        "CV",
        "Work experience for some programs"
      ],
      phd: [
        "Master's degree or bachelor's with First Class Honours",
        "Research proposal",
        "IELTS: 6.5 overall",
        "Academic references",
        "Supervisor agreement",
        "Strong research background"
      ]
    },
    campusLife: "Auckland's campus is minutes from the city center and beautiful harbors. Students enjoy modern facilities, 200+ clubs, excellent sports facilities, and New Zealand's largest city. Auckland offers diverse culture, easy access to beaches, islands, and world-class outdoor adventures.",
    scholarships: [
      "University of Auckland International Student Excellence Scholarship",
      "Doctoral Scholarship",
      "Faculty-specific scholarships",
      "New Zealand Government Scholarship",
      "Research scholarships"
    ]
  },
  {
    id: "14",
    name: "University of Canterbury",
    slug: "canterbury",
    country: "New Zealand",
    countryCode: "NZ",
    city: "Christchurch",
    description: "The University of Canterbury is one of New Zealand's oldest and most prestigious universities, known for engineering, sciences, and research excellence. Located in Christchurch, the 'Garden City,' Canterbury offers a supportive environment with world-class facilities and strong connections to industry.",
    logo: "🏔️",
    ranking: 256,
    website: "https://www.canterbury.ac.nz",
    established: 1873,
    type: "Public",
    courses: [
      {
        id: "canterbury-1",
        name: "Engineering",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 42000,
        currency: "NZD",
        intakeDates: ["February", "July"]
      },
      {
        id: "canterbury-2",
        name: "Applied Data Science",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 38000,
        currency: "NZD",
        intakeDates: ["February", "July"]
      },
      {
        id: "canterbury-3",
        name: "Business",
        degree: "Bachelor",
        duration: "3 years",
        tuitionFee: 28000,
        currency: "NZD",
        intakeDates: ["February", "July"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "NCEA Level 3 or equivalent",
        "IELTS: 6.0 overall (no band below 5.5)",
        "University Entrance requirements",
        "Subject prerequisites for specific programs",
        "Personal statement",
        "Academic transcripts"
      ],
      master: [
        "Bachelor's degree with B average",
        "IELTS: 6.5 overall (no band below 6.0)",
        "Statement of purpose",
        "Two references",
        "CV/Resume",
        "Work experience for some programs"
      ],
      phd: [
        "Master's degree with strong grades",
        "Research proposal",
        "IELTS: 6.5 overall",
        "Academic references",
        "Supervisor agreement",
        "Research experience"
      ]
    },
    campusLife: "Canterbury's park-like campus offers modern facilities including new engineering and science buildings. Christchurch provides easy access to skiing, hiking, and outdoor adventures. Students enjoy a supportive community, 140+ clubs, excellent sports facilities, and affordable living costs.",
    scholarships: [
      "UC International First Year Scholarship",
      "Go Canterbury Scholarship",
      "Doctoral Scholarship",
      "Faculty scholarships",
      "New Zealand Excellence Awards"
    ]
  },
  {
    id: "15",
    name: "Dublin City University",
    slug: "dcu",
    country: "Ireland",
    countryCode: "IE",
    city: "Dublin",
    description: "Dublin City University is Ireland's University of Enterprise, known for innovation, industry partnerships, and graduate employability. Located in Dublin's northside, DCU offers cutting-edge programs with strong tech and business connections, reflecting Ireland's position as a European tech hub.",
    logo: "☘️",
    ranking: 436,
    website: "https://www.dcu.ie",
    established: 1980,
    type: "Public",
    courses: [
      {
        id: "dcu-1",
        name: "Computing",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 15920,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "dcu-2",
        name: "Data Analytics",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 17500,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "dcu-3",
        name: "Business Management",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 16500,
        currency: "EUR",
        intakeDates: ["September", "January"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "Leaving Certificate or equivalent (IB, A-Levels)",
        "IELTS: 6.0-6.5 overall",
        "Subject-specific requirements",
        "Personal statement",
        "Reference letter",
        "Application through CAO"
      ],
      master: [
        "Bachelor's degree with 2.1 (Second Class Honours, Upper Division)",
        "IELTS: 6.5 overall",
        "Statement of purpose",
        "Two references",
        "CV",
        "Work experience for some programs"
      ],
      phd: [
        "Master's degree or First Class Honours",
        "Research proposal",
        "IELTS: 6.5 overall",
        "Academic references",
        "Supervisor agreement",
        "Interview"
      ]
    },
    campusLife: "DCU's modern campus features state-of-the-art facilities, including a new student center and sports complex. Located near Dublin's tech hub, students have access to major employers like Google, Facebook, and LinkedIn. Over 120 clubs and societies, active student community.",
    scholarships: [
      "DCU International Scholarship",
      "Sports Scholarship",
      "Faculty scholarships",
      "Postgraduate research awards",
      "Government of Ireland scholarships"
    ]
  },
  {
    id: "16",
    name: "University of Europe for Applied Sciences",
    slug: "ue-germany",
    country: "Germany",
    countryCode: "DE",
    city: "Berlin, Hamburg, Iserlohn",
    description: "The University of Europe for Applied Sciences (UE) is a private, state-accredited university offering practice-oriented programs taught entirely in English. With campuses in Berlin, Hamburg, and Iserlohn, UE focuses on business, design, technology, and sports, preparing students for global careers.",
    logo: "🇪🇺",
    ranking: 0,
    website: "https://www.ue-germany.com",
    established: 2017,
    type: "Private",
    courses: [
      {
        id: "ue-1",
        name: "Business and Management Studies",
        degree: "Bachelor",
        duration: "3 years",
        tuitionFee: 9750,
        currency: "EUR",
        intakeDates: ["September", "March"]
      },
      {
        id: "ue-2",
        name: "Data Science",
        degree: "Master",
        duration: "1.5 years",
        tuitionFee: 10800,
        currency: "EUR",
        intakeDates: ["September", "March"]
      },
      {
        id: "ue-3",
        name: "Software Engineering",
        degree: "Bachelor",
        duration: "3 years",
        tuitionFee: 9750,
        currency: "EUR",
        intakeDates: ["September", "March"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma or equivalent",
        "English proficiency: IELTS 5.5+ or equivalent",
        "No German required (all programs in English)",
        "Motivation letter",
        "CV",
        "Interview may be required"
      ],
      master: [
        "Bachelor's degree in related field",
        "English proficiency: IELTS 6.0+ or equivalent",
        "Statement of purpose",
        "CV/Resume",
        "Work experience valued",
        "Interview"
      ],
      phd: [
        "Master's degree",
        "Research proposal",
        "English proficiency",
        "Academic references",
        "Interview",
        "Strong academic record"
      ]
    },
    campusLife: "UE campuses are in Germany's most vibrant cities. Berlin offers startup culture and nightlife, Hamburg has maritime charm, and Iserlohn provides a traditional setting. Small class sizes, international student body, practical projects, and strong industry connections define the experience.",
    scholarships: [
      "UE Excellence Scholarship (up to 50%)",
      "Early Bird Discount",
      "Sibling Discount",
      "Partner university scholarships",
      "Need-based financial aid"
    ]
  },
  {
    id: "17",
    name: "Sorbonne University",
    slug: "sorbonne",
    country: "France",
    countryCode: "FR",
    city: "Paris",
    description: "Sorbonne University is one of the world's most prestigious universities, formed by the merger of Paris-Sorbonne and Pierre and Marie Curie universities. Located in the heart of Paris, Sorbonne excels in arts, humanities, sciences, and medicine, offering world-class education in an iconic setting.",
    logo: "🗼",
    ranking: 59,
    website: "https://www.sorbonne-universite.fr",
    established: 1257,
    type: "Public",
    courses: [
      {
        id: "sorbonne-1",
        name: "Computer Science",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 3770,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "sorbonne-2",
        name: "Management",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 3770,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "sorbonne-3",
        name: "Literature and Humanities",
        degree: "Bachelor",
        duration: "3 years",
        tuitionFee: 2770,
        currency: "EUR",
        intakeDates: ["September"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "Baccalauréat or equivalent",
        "French proficiency: DELF B2/C1 or TCF",
        "Application through Parcoursup (French students) or direct application",
        "Academic transcripts",
        "Motivation letter",
        "CV"
      ],
      master: [
        "Bachelor's degree (Licence) with strong grades",
        "French or English proficiency depending on program",
        "IELTS 6.5+ for English-taught programs",
        "Statement of purpose",
        "Two references",
        "CV"
      ],
      phd: [
        "Master's degree with excellent grades",
        "Research proposal",
        "French or English proficiency",
        "Academic references",
        "Supervisor agreement",
        "Interview"
      ]
    },
    campusLife: "Sorbonne's historic campus in Paris's Latin Quarter offers unmatched cultural immersion. Students enjoy world-class museums, cafés, and Parisian lifestyle. The university provides modern facilities, extensive libraries, student associations, and access to Paris's vibrant academic and cultural life.",
    scholarships: [
      "Eiffel Excellence Scholarship",
      "Sorbonne University Scholarships",
      "French Government Scholarships",
      "Erasmus+ for European students",
      "Research funding opportunities"
    ]
  },
  {
    id: "18",
    name: "Sciences Po",
    slug: "sciences-po",
    country: "France",
    countryCode: "FR",
    city: "Paris",
    description: "Sciences Po is a world-leading university in the social sciences, renowned for its rigorous programs in political science, international relations, economics, and law. With seven campuses across France and a deeply international student body, it prepares graduates for careers in public policy, diplomacy, and business.",
    logo: "🏛️",
    ranking: 242,
    website: "https://www.sciencespo.fr",
    established: 1872,
    type: "Public",
    courses: [
      {
        id: "sciencespo-1",
        name: "International Relations",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 14700,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "sciencespo-2",
        name: "Economics and Public Policy",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 14700,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "sciencespo-3",
        name: "European Affairs",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 14700,
        currency: "EUR",
        intakeDates: ["September"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with strong academic record",
        "Written exam and interview",
        "English proficiency: IELTS 7.0+ or TOEFL 100+",
        "Motivation letter",
        "CV"
      ],
      master: [
        "Bachelor's degree with strong grades",
        "English or French proficiency depending on program",
        "IELTS 7.0+ or TOEFL 100+ for English-taught programs",
        "Statement of purpose",
        "Two references",
        "CV"
      ],
      phd: [
        "Master's degree with distinction",
        "Research proposal",
        "English or French proficiency",
        "Academic references",
        "Interview"
      ]
    },
    campusLife: "Sciences Po's main campus is located in the heart of Paris's Saint-Germain-des-Prés quarter. The university offers a cosmopolitan environment with students from over 150 countries. Facilities include modern libraries, student associations, career services, and access to Paris's diplomatic and policy community.",
    scholarships: [
      "Sciences Po Emile Boutmy Scholarship",
      "Eiffel Excellence Scholarship",
      "French Government Scholarships",
      "Need-based financial aid",
      "Erasmus+ for European students"
    ]
  },
  {
    id: "19",
    name: "ESSEC Business School",
    slug: "essec",
    country: "France",
    countryCode: "FR",
    city: "Cergy-Pontoise",
    description: "ESSEC Business School is one of France's top Grande École, holding triple accreditation (AACSB, EQUIS, AMBA). With campuses in France, Singapore, and Morocco, ESSEC is globally recognized for its MBA, finance, and management programs, producing leaders in business and entrepreneurship.",
    logo: "📊",
    ranking: 0,
    website: "https://www.essec.edu",
    established: 1907,
    type: "Private",
    courses: [
      {
        id: "essec-1",
        name: "Global BBA",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 16900,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "essec-2",
        name: "Master in Management",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 18500,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "essec-3",
        name: "Master in Finance",
        degree: "Master",
        duration: "1 year",
        tuitionFee: 29000,
        currency: "EUR",
        intakeDates: ["September"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with strong grades",
        "English proficiency: IELTS 6.5+ or TOEFL 90+",
        "Written tests and interview",
        "Motivation letter",
        "CV"
      ],
      master: [
        "Bachelor's degree with strong academic record",
        "GMAT 680+ or GRE equivalent",
        "IELTS 7.0+ or TOEFL 100+",
        "Professional experience preferred for MBA",
        "Statement of purpose",
        "Two references"
      ],
      phd: [
        "Master's degree with excellent grades",
        "Research proposal",
        "GMAT/GRE scores",
        "English proficiency",
        "Interview with faculty"
      ]
    },
    campusLife: "ESSEC's main campus in Cergy-Pontoise offers a modern, purpose-built environment with state-of-the-art facilities. The school provides a global experience through mandatory international exchanges, with 180+ partner institutions worldwide. Students benefit from strong corporate partnerships and career placement services.",
    scholarships: [
      "ESSEC Excellence Scholarship",
      "ESSEC Foundation Grants",
      "Eiffel Excellence Scholarship",
      "Corporate-sponsored scholarships",
      "Need-based financial aid"
    ]
  },
  {
    id: "20",
    name: "Université Grenoble Alpes",
    slug: "grenoble-alpes",
    country: "France",
    countryCode: "FR",
    city: "Grenoble",
    description: "Université Grenoble Alpes is a leading French research university nestled in the Alps, known for its strengths in engineering, computer science, physics, and environmental studies. Home to major research centers including CNRS and CEA, it offers an innovative academic environment surrounded by world-class outdoor recreation.",
    logo: "🏔️",
    ranking: 339,
    website: "https://www.univ-grenoble-alpes.fr",
    established: 1339,
    type: "Public",
    courses: [
      {
        id: "grenoble-1",
        name: "Computer Science",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 3770,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "grenoble-2",
        name: "Mechanical Engineering",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 3770,
        currency: "EUR",
        intakeDates: ["September"]
      },
      {
        id: "grenoble-3",
        name: "Environmental Sciences",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 3770,
        currency: "EUR",
        intakeDates: ["September"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "Baccalauréat or equivalent",
        "French proficiency: DELF B2 or TCF",
        "Academic transcripts",
        "Application through Campus France",
        "Motivation letter"
      ],
      master: [
        "Bachelor's degree with good grades",
        "English proficiency: IELTS 6.0+ for English-taught programs",
        "French proficiency for French-taught programs",
        "Statement of purpose",
        "Two references",
        "CV"
      ],
      phd: [
        "Master's degree with strong grades",
        "Research proposal",
        "French or English proficiency",
        "Supervisor agreement",
        "Academic references"
      ]
    },
    campusLife: "Grenoble is consistently ranked as one of France's best student cities. The campus is surrounded by the French Alps, offering unmatched outdoor activities — skiing, hiking, and cycling. The university provides modern facilities, affordable student housing, and a vibrant international student community with over 9,000 international students.",
    scholarships: [
      "Université Grenoble Alpes Excellence Scholarship",
      "Eiffel Excellence Scholarship",
      "French Government Scholarships",
      "Erasmus+ for European students",
      "Idex Scholarship for Master's students"
    ]
  },
  {
    id: "21",
    name: "University of Toronto",
    slug: "toronto",
    country: "Canada",
    countryCode: "CA",
    city: "Toronto",
    description: "The University of Toronto is Canada's top-ranked university and among the best globally, known for groundbreaking research and academic excellence. Located in the heart of Toronto, it offers over 700 undergraduate and 200 graduate programs across three campuses, attracting students from 160+ countries.",
    logo: "🍁",
    ranking: 21,
    website: "https://www.utoronto.ca",
    established: 1827,
    type: "Public",
    courses: [
      {
        id: "uoft-1",
        name: "Computer Science",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 52080,
        currency: "CAD",
        intakeDates: ["September", "January"]
      },
      {
        id: "uoft-2",
        name: "MBA (Rotman)",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 107580,
        currency: "CAD",
        intakeDates: ["September"]
      },
      {
        id: "uoft-3",
        name: "Engineering Science",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 62250,
        currency: "CAD",
        intakeDates: ["September"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with competitive grades (85%+ average)",
        "English proficiency: IELTS 6.5+ (no band below 6.0) or TOEFL 100+",
        "Supplementary application for some programs",
        "Academic transcripts",
        "Personal profile or essay"
      ],
      master: [
        "Bachelor's degree with B+ average or higher",
        "IELTS 7.0+ or TOEFL 93+",
        "GRE/GMAT for select programs",
        "Statement of purpose",
        "Two to three references",
        "CV"
      ],
      phd: [
        "Master's degree with strong academic record",
        "Research proposal",
        "English proficiency",
        "Academic references",
        "Supervisor match",
        "Interview"
      ]
    },
    campusLife: "The University of Toronto's St. George campus is located in downtown Toronto, offering access to one of the world's most diverse and vibrant cities. Students enjoy 1,000+ student clubs, world-class libraries, athletics facilities, and a thriving cultural scene. Toronto offers excellent internship and employment opportunities in finance, tech, and healthcare.",
    scholarships: [
      "Lester B. Pearson International Scholarship (full tuition + living)",
      "University of Toronto Scholars Program",
      "Faculty-specific entrance awards",
      "Ontario Graduate Scholarship (OGS)",
      "Connaught International Scholarship for PhD"
    ]
  },
  {
    id: "22",
    name: "University of British Columbia",
    slug: "ubc",
    country: "Canada",
    countryCode: "CA",
    city: "Vancouver",
    description: "The University of British Columbia (UBC) is a global research university consistently ranked among the top 40 worldwide. Set on a stunning coastal campus in Vancouver, UBC is renowned for its programs in science, engineering, forestry, and business, and attracts over 17,000 international students annually.",
    logo: "🌊",
    ranking: 34,
    website: "https://www.ubc.ca",
    established: 1908,
    type: "Public",
    courses: [
      {
        id: "ubc-1",
        name: "Data Science",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 48798,
        currency: "CAD",
        intakeDates: ["September"]
      },
      {
        id: "ubc-2",
        name: "Business Administration",
        degree: "Bachelor",
        duration: "4 years",
        tuitionFee: 55800,
        currency: "CAD",
        intakeDates: ["September"]
      },
      {
        id: "ubc-3",
        name: "Civil Engineering",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 9131,
        currency: "CAD",
        intakeDates: ["September", "January"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with strong academic record",
        "English proficiency: IELTS 6.5+ (no band below 6.0) or TOEFL 90+",
        "Personal profile submission",
        "Academic transcripts",
        "Supplementary essays for some programs"
      ],
      master: [
        "Bachelor's degree with B+ average (76%+)",
        "IELTS 6.5+ or TOEFL 90+",
        "GRE/GMAT for select programs",
        "Statement of intent",
        "Three academic references",
        "CV"
      ],
      phd: [
        "Master's degree with strong academic record",
        "Research proposal",
        "English proficiency",
        "Academic references",
        "Supervisor match recommended",
        "Interview"
      ]
    },
    campusLife: "UBC's Vancouver campus is one of the most beautiful in the world, bordering ocean, mountains, and old-growth forest. Students enjoy a vibrant campus life with 350+ clubs, varsity athletics, and the UBC Farm. Vancouver offers incredible outdoor recreation, a thriving tech industry, and multicultural dining and entertainment.",
    scholarships: [
      "International Major Entrance Scholarship (up to C$40,000)",
      "Outstanding International Student Award",
      "Faculty of Science International Scholarship",
      "Graduate Research Assistantships",
      "Four Year Doctoral Fellowship"
    ]
  },
  {
    id: "23",
    name: "McGill University",
    slug: "mcgill",
    country: "Canada",
    countryCode: "CA",
    city: "Montreal",
    description: "McGill University is one of Canada's oldest and most prestigious institutions, consistently ranked among the top universities globally. Located in bilingual Montreal, McGill is known for its rigorous academics in medicine, law, engineering, and the arts, and has produced 12 Nobel laureates among its alumni and faculty.",
    logo: "⚜️",
    ranking: 29,
    website: "https://www.mcgill.ca",
    established: 1821,
    type: "Public",
    courses: [
      {
        id: "mcgill-1",
        name: "Electrical Engineering",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 25546,
        currency: "CAD",
        intakeDates: ["September", "January"]
      },
      {
        id: "mcgill-2",
        name: "Medicine (MDCM)",
        degree: "PhD",
        duration: "4 years",
        tuitionFee: 45702,
        currency: "CAD",
        intakeDates: ["September"]
      },
      {
        id: "mcgill-3",
        name: "Finance",
        degree: "Master",
        duration: "16 months",
        tuitionFee: 55650,
        currency: "CAD",
        intakeDates: ["July"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with competitive grades",
        "English proficiency: IELTS 6.5+ or TOEFL 90+ (some faculties require higher)",
        "Academic transcripts",
        "Supplementary application for some programs",
        "Personal statement"
      ],
      master: [
        "Bachelor's degree with minimum CGPA of 3.0/4.0",
        "IELTS 6.5+ or TOEFL 86+",
        "GRE/GMAT for select programs",
        "Statement of purpose",
        "Two to three references",
        "CV"
      ],
      phd: [
        "Master's degree with strong academic record",
        "Research proposal",
        "English proficiency",
        "Academic references",
        "Interview"
      ]
    },
    campusLife: "McGill's downtown Montreal campus sits at the foot of Mount Royal, combining historic architecture with modern facilities. Montreal is consistently ranked as one of the world's best student cities — affordable, bilingual (French-English), and culturally rich. Students enjoy a vibrant nightlife, world-class dining, and four distinct seasons of outdoor activities.",
    scholarships: [
      "McGill Entrance Scholarships",
      "Schulich Leader Scholarship",
      "Faculty-specific awards and bursaries",
      "Graduate Excellence Fellowship",
      "Tomlinson Doctoral Fellowships"
    ]
  },
  {
    id: "24",
    name: "University of Waterloo",
    slug: "waterloo",
    country: "Canada",
    countryCode: "CA",
    city: "Waterloo",
    description: "The University of Waterloo is Canada's top innovation university, famous for its world-leading co-operative education program — the largest of its kind globally. Waterloo graduates are highly sought after by Silicon Valley and global tech companies, with particular strength in computer science, engineering, and mathematics.",
    logo: "💻",
    ranking: 112,
    website: "https://uwaterloo.ca",
    established: 1957,
    type: "Public",
    courses: [
      {
        id: "waterloo-1",
        name: "Computer Science (Co-op)",
        degree: "Bachelor",
        duration: "5 years",
        tuitionFee: 64800,
        currency: "CAD",
        intakeDates: ["September"]
      },
      {
        id: "waterloo-2",
        name: "Mechatronics Engineering",
        degree: "Bachelor",
        duration: "5 years",
        tuitionFee: 67400,
        currency: "CAD",
        intakeDates: ["September"]
      },
      {
        id: "waterloo-3",
        name: "Artificial Intelligence",
        degree: "Master",
        duration: "2 years",
        tuitionFee: 28800,
        currency: "CAD",
        intakeDates: ["September", "January", "May"]
      }
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with strong math and science grades (90%+ for competitive programs)",
        "English proficiency: IELTS 6.5+ (writing 6.5+) or TOEFL 90+",
        "Admission Information Form (AIF)",
        "Euclid/CSMC math contest scores (recommended)",
        "Video interview for some programs"
      ],
      master: [
        "Bachelor's degree with 75%+ average (B+)",
        "IELTS 6.5+ or TOEFL 90+",
        "GRE for select programs",
        "Statement of purpose",
        "Two to three references",
        "CV"
      ],
      phd: [
        "Master's degree with strong academic record",
        "Research proposal",
        "English proficiency",
        "Academic references",
        "Supervisor match required"
      ]
    },
    campusLife: "Waterloo's campus is located in the heart of Canada's Technology Triangle, with easy access to Toronto. The university's co-op program gives students 2 years of paid work experience at companies like Google, Apple, and Tesla before graduation. Campus features include modern engineering labs, a startup incubator (Velocity), and 200+ student clubs.",
    scholarships: [
      "International Master's Award of Excellence (C$2,500)",
      "President's Scholarship (C$10,000)",
      "Faculty-specific entrance awards",
      "International Experience Awards",
      "Graduate Research Studentships"
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
