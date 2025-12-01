// Simple keyword-based chatbot for university queries (MVP - no OpenAI required)

import topUniversities from "@/lib/data/top-universities.json";

export interface UniversityData {
  rank: number;
  name: string;
  country: string;
  city: string;
  founded: number;
  tuitionUG: string;
  tuitionPG: string;
  currency: string;
  popularCourses: string[];
  ielts: number;
  toefl: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Get all universities
export function getAllUniversities(): UniversityData[] {
  return topUniversities.universities as UniversityData[];
}

// Search universities by country
export function searchByCountry(country: string): UniversityData[] {
  const normalizedCountry = country.toLowerCase().trim();
  return getAllUniversities().filter(
    (uni) => uni.country.toLowerCase().includes(normalizedCountry)
  );
}

// Search universities by name
export function searchByName(name: string): UniversityData[] {
  const normalizedName = name.toLowerCase().trim();
  return getAllUniversities().filter(
    (uni) => uni.name.toLowerCase().includes(normalizedName)
  );
}

// Search universities by course
export function searchByCourse(course: string): UniversityData[] {
  const normalizedCourse = course.toLowerCase().trim();
  return getAllUniversities().filter((uni) =>
    uni.popularCourses.some((c) => c.toLowerCase().includes(normalizedCourse))
  );
}

// Search universities by city
export function searchByCity(city: string): UniversityData[] {
  const normalizedCity = city.toLowerCase().trim();
  return getAllUniversities().filter(
    (uni) => uni.city.toLowerCase().includes(normalizedCity)
  );
}

// Get universities by tuition range (in local currency)
export function searchByTuition(maxBudget: number, currency: string = "GBP"): UniversityData[] {
  return getAllUniversities().filter((uni) => {
    if (uni.currency !== currency) return false;

    // Parse tuition range (e.g., "9250-35000" -> [9250, 35000])
    const tuitionRange = uni.tuitionUG.split("-").map(Number);
    const minTuition = tuitionRange[0];

    return minTuition <= maxBudget;
  });
}

// Get university details by exact name
export function getUniversityDetails(name: string): UniversityData | null {
  const found = getAllUniversities().find(
    (uni) => uni.name.toLowerCase() === name.toLowerCase()
  );
  return found || null;
}

// Format university info as readable text
export function formatUniversityInfo(uni: UniversityData, includeRank: boolean = true): string {
  const rankText = includeRank ? `Rank #${uni.rank} - ` : "";
  return `${rankText}**${uni.name}**
📍 Location: ${uni.city}, ${uni.country}
💰 Tuition (UG): ${uni.tuitionUG} ${uni.currency}
💰 Tuition (PG): ${uni.tuitionPG} ${uni.currency}
📚 Popular Courses: ${uni.popularCourses.join(", ")}
📝 IELTS: ${uni.ielts} | TOEFL: ${uni.toefl}
📅 Founded: ${uni.founded}`;
}

// Main chatbot response generator
export function generateResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim();

  // Greeting patterns
  if (
    message.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/)
  ) {
    return `Hello! 👋 I'm your AimBritz study abroad assistant. I can help you find information about top universities worldwide.

Try asking me:
• "Show me UK universities"
• "Tell me about Oxford University"
• "Universities for Computer Science"
• "Universities in London"
• "Cheapest universities"

How can I help you today?`;
  }

  // Help patterns
  if (message.includes("help") || message.includes("what can you do")) {
    return `I can help you with:

🌍 **Search by Country:** "UK universities", "universities in Canada"
🏛️ **Search by Name:** "Tell me about Harvard", "Oxford fees"
📚 **Search by Course:** "Computer Science universities", "Medicine programs"
🏙️ **Search by City:** "Universities in London", "Boston universities"
💰 **Budget Search:** "Universities under 30000"

Just ask me anything about studying abroad!`;
  }

  // Country search patterns
  const countryPatterns = [
    { regex: /uk|united kingdom|britain|england/i, country: "United Kingdom" },
    { regex: /usa|united states|america|us\b/i, country: "United States" },
    { regex: /canada|canadian/i, country: "Canada" },
    { regex: /australia|australian|aussie/i, country: "Australia" },
    { regex: /germany|german/i, country: "Germany" },
    { regex: /switzerland|swiss/i, country: "Switzerland" },
    { regex: /netherlands|dutch/i, country: "Netherlands" },
    { regex: /ireland|irish/i, country: "Ireland" },
    { regex: /france|french/i, country: "France" },
    { regex: /singapore/i, country: "Singapore" },
    { regex: /hong kong/i, country: "Hong Kong" },
    { regex: /new zealand/i, country: "New Zealand" },
  ];

  for (const pattern of countryPatterns) {
    if (message.match(pattern.regex)) {
      const results = searchByCountry(pattern.country);
      if (results.length > 0) {
        const top5 = results.slice(0, 5);
        let response = `I found ${results.length} universities in **${pattern.country}**. Here are the top ${top5.length}:\n\n`;
        top5.forEach((uni) => {
          response += formatUniversityInfo(uni) + "\n\n";
        });
        if (results.length > 5) {
          response += `...and ${results.length - 5} more. Ask me about a specific university for more details!`;
        }
        return response;
      }
      return `I couldn't find universities from ${pattern.country} in my database.`;
    }
  }

  // Specific university name search
  const universityNames = [
    "oxford", "cambridge", "imperial", "ucl", "lse", "edinburgh",
    "mit", "stanford", "harvard", "yale", "princeton",
    "toronto", "mcgill", "melbourne", "sydney"
  ];

  for (const uniName of universityNames) {
    if (message.includes(uniName)) {
      const results = searchByName(uniName);
      if (results.length > 0) {
        const uni = results[0];
        return `Here's information about **${uni.name}**:\n\n${formatUniversityInfo(uni, true)}\n\nWould you like to know more about application requirements or other universities?`;
      }
    }
  }

  // Course search patterns
  const coursePatterns = [
    "computer science", "engineering", "medicine", "business", "law",
    "architecture", "psychology", "economics", "physics", "chemistry",
    "biology", "mathematics", "finance", "management", "dentistry",
    "pharmacy", "journalism", "film", "drama", "arts"
  ];

  for (const course of coursePatterns) {
    if (message.includes(course)) {
      const results = searchByCourse(course);
      if (results.length > 0) {
        const top5 = results.slice(0, 5);
        let response = `I found ${results.length} universities offering **${course}**. Here are the top ${top5.length}:\n\n`;
        top5.forEach((uni) => {
          response += formatUniversityInfo(uni) + "\n\n";
        });
        if (results.length > 5) {
          response += `...and ${results.length - 5} more. Want to narrow down by country or budget?`;
        }
        return response;
      }
      return `I couldn't find universities offering ${course} in my database. Try another course or ask for help!`;
    }
  }

  // City search patterns
  const cityPatterns = [
    "london", "cambridge", "oxford", "edinburgh", "manchester",
    "boston", "new york", "los angeles", "toronto", "sydney",
    "melbourne", "paris", "berlin", "zurich", "singapore"
  ];

  for (const city of cityPatterns) {
    if (message.includes(city)) {
      const results = searchByCity(city);
      if (results.length > 0) {
        let response = `I found ${results.length} universities in **${city}**:\n\n`;
        results.forEach((uni) => {
          response += formatUniversityInfo(uni) + "\n\n";
        });
        return response;
      }
      return `I couldn't find universities in ${city} in my database.`;
    }
  }

  // Budget/cheap university search
  if (
    message.includes("cheap") ||
    message.includes("affordable") ||
    message.includes("low cost") ||
    message.includes("budget")
  ) {
    const affordableUnis = getAllUniversities()
      .filter((uni) => {
        const tuitionMin = parseInt(uni.tuitionUG.split("-")[0]);
        return (
          (uni.currency === "EUR" && tuitionMin <= 5000) ||
          (uni.currency === "GBP" && tuitionMin <= 10000) ||
          (uni.currency === "CHF" && tuitionMin <= 1500)
        );
      })
      .slice(0, 5);

    if (affordableUnis.length > 0) {
      let response = `Here are some of the most affordable top universities:\n\n`;
      affordableUnis.forEach((uni) => {
        response += formatUniversityInfo(uni) + "\n\n";
      });
      response += `Note: Tuition varies by program. Many European universities offer very low tuition for international students!`;
      return response;
    }
  }

  // Ranking/top universities
  if (message.includes("top") || message.includes("best") || message.includes("ranking")) {
    const top10 = getAllUniversities().slice(0, 10);
    let response = `Here are the **Top 10 Universities** in the world:\n\n`;
    top10.forEach((uni) => {
      response += `${uni.rank}. **${uni.name}** - ${uni.city}, ${uni.country}\n`;
    });
    response += `\nWant to know more about any of these universities? Just ask!`;
    return response;
  }

  // IELTS/TOEFL requirements
  if (message.includes("ielts") || message.includes("toefl") || message.includes("english requirement")) {
    return `Most top universities require:

**IELTS:** 6.0 - 7.5 (with 6.5-7.0 being most common)
**TOEFL:** 79 - 100+ (with 90-92 being most common)

Top universities like Oxford, Cambridge, and Ivy League schools typically require:
• IELTS: 7.0+
• TOEFL: 100+

Ask me about a specific university to see their exact requirements!`;
  }

  // Tuition/fees
  if (
    message.includes("tuition") ||
    message.includes("fees") ||
    message.includes("cost") ||
    message.includes("expensive")
  ) {
    return `Tuition fees vary widely by country:

🇬🇧 **UK:** £9,250-£40,000/year
🇺🇸 **USA:** $30,000-$65,000/year
🇨🇦 **Canada:** CAD 20,000-55,000/year
🇦🇺 **Australia:** AUD 30,000-48,000/year
🇨🇭 **Switzerland:** CHF 500-2,000/year (very low!)
🇩🇪 **Germany:** €0-1,500/year (mostly free!)
🇫🇷 **France:** €170-600/year (public universities)

Want to search by budget or country? Just let me know!`;
  }

  // Contact/apply
  if (message.includes("apply") || message.includes("contact") || message.includes("counselor")) {
    return `Ready to apply? 🎓

Our counselors at AimBritz can help you with:
• University selection
• Application preparation
• Visa guidance
• Scholarship opportunities

📞 Contact us to schedule a free consultation!
Visit our Contact page or ask me about specific universities to get started.`;
  }

  // Default fallback
  return `I'm not sure about that. I can help you find universities by:

• **Country:** "UK universities", "universities in USA"
• **University Name:** "Tell me about Oxford"
• **Course:** "Computer Science universities"
• **City:** "Universities in London"
• **Budget:** "Affordable universities"

Or ask "help" to see all options. What would you like to know?`;
}

// Generate a unique message ID
export function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
