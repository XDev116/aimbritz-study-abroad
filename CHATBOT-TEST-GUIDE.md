# Chatbot Testing Guide - MVP Version

## ✅ What's Implemented

### University Database
- **100 top universities** from around the world
- **30 UK universities** (ranks 1-30)
- **70 international universities** from US, Canada, Australia, Switzerland, Germany, Netherlands, and more
- Complete data: tuition fees, popular courses, IELTS/TOEFL requirements, city, founding year

### Chatbot Features
- **Keyword-based matching** (no OpenAI API required - FREE!)
- **Country search**: Find universities by country
- **University search**: Get details about specific universities
- **Course search**: Find universities offering specific programs
- **City search**: Find universities in specific cities
- **Budget search**: Find affordable universities
- **Quick action buttons**: Pre-configured queries

---

## 🧪 Test Queries

### Greetings
Try these to see the welcome message:
- "Hello"
- "Hi"
- "Hey"
- "Good morning"

**Expected Response**: Welcome message with suggestions

---

### Country Searches
Try these queries:
- "Show me UK universities"
- "Universities in USA"
- "Tell me about universities in Canada"
- "Australian universities"
- "Germany universities"
- "Universities in Switzerland"

**Expected Response**: List of top 5 universities from that country with full details

---

### Specific University Searches
Try these:
- "Tell me about Oxford"
- "Oxford University"
- "What about Cambridge"
- "MIT"
- "Stanford University"
- "Harvard"
- "University of Toronto"

**Expected Response**: Detailed information about that specific university including rank, tuition, courses, requirements

---

### Course Searches
Try these:
- "Computer Science universities"
- "Universities for Medicine"
- "Engineering programs"
- "Business schools"
- "Law universities"
- "Architecture programs"

**Expected Response**: Top 5 universities offering that course with details

---

### City Searches
Try these:
- "Universities in London"
- "Boston universities"
- "Universities in Cambridge"
- "Toronto universities"
- "Sydney universities"

**Expected Response**: All universities in that city

---

### Budget/Affordable Searches
Try these:
- "Cheap universities"
- "Affordable universities"
- "Low cost universities"
- "Budget universities"

**Expected Response**: List of most affordable universities (especially European ones with low/no tuition)

---

### Rankings
Try these:
- "Top universities"
- "Best universities"
- "Top 10"

**Expected Response**: Top 10 universities worldwide with basic info

---

### Requirements
Try these:
- "IELTS requirements"
- "TOEFL requirements"
- "English requirements"

**Expected Response**: General IELTS/TOEFL requirements overview

---

### Tuition/Fees
Try these:
- "Tuition fees"
- "How much does it cost"
- "Fees"
- "Expensive universities"

**Expected Response**: Overview of tuition fees by country

---

### Application Help
Try these:
- "How do I apply"
- "Contact counselor"
- "Need help"

**Expected Response**: Contact information and offer for counselor assistance

---

### Help
Try these:
- "Help"
- "What can you do"

**Expected Response**: List of all capabilities

---

## 🎯 Quick Action Buttons

The chatbot includes 4 quick action buttons:

1. **🇬🇧 UK Universities** - Auto-sends "Show me UK universities"
2. **💻 Computer Science** - Auto-sends "Universities for Computer Science"
3. **💰 Budget Options** - Auto-sends "Affordable universities"
4. **📞 Contact Us** - Redirects to contact page

---

## 📊 Database Coverage

### Countries Included (100 universities):
- **United Kingdom** (31 universities)
- **United States** (40+ universities)
- **Canada** (5 universities)
- **Australia** (7 universities)
- **Switzerland** (4 universities)
- **Germany** (3 universities)
- **Netherlands** (4 universities)
- **France, Ireland, Singapore, Hong Kong, New Zealand, Sweden, Finland, Norway, Belgium, Denmark, South Korea** (1-2 each)

### Top Courses Covered:
Computer Science, Engineering, Medicine, Business, Law, Architecture, Psychology, Economics, Physics, Chemistry, Biology, Mathematics, Finance, Management, Dentistry, Pharmacy, Journalism, Film, Drama, Arts, and more

---

## 🚀 How It Works (Technical)

1. **User types query** → Sent to `simple-bot.ts`
2. **Keyword matching** → Detects patterns (country names, university names, courses, etc.)
3. **Search functions** → Query JSON database of 100 universities
4. **Format response** → Generate readable response with markdown
5. **Display to user** → Rendered in chat widget with proper formatting

**No OpenAI API** = **No costs** = **Perfect for MVP**

---

## 🎨 UI Features

- **Professional business character** - SVG character with professional appearance
- **Walk-in animation** - Character walks onto screen on page load
- **Greeting bubble** - "How can I help you?" speech bubble appears after walk-in
- **Typing indicator** - Three bouncing dots while bot thinks
- **Timestamp** - Shows time for each message
- **Quick actions** - One-click common queries
- **Scrollable messages** - Handles long conversations
- **Responsive design** - Works on mobile and desktop

---

## 🐛 Known Limitations (MVP)

1. **No context memory** - Each query is independent
2. **Keyword-based only** - Can't understand complex natural language
3. **No typo tolerance** - Must spell countries/universities correctly
4. **No follow-up questions** - Can't continue a conversation thread
5. **No real-time data** - Static database of 100 universities

---

## 🔮 Future Enhancements (Phase 3)

When ready to add AI (OpenAI integration):
1. Context-aware conversations
2. Natural language understanding
3. Follow-up questions
4. Typo correction
5. More intelligent responses
6. RAG (Retrieval Augmented Generation) for accuracy
7. Real-time university data
8. Personalized recommendations

---

## 📝 Testing Checklist

- [ ] Test greeting responses
- [ ] Test UK universities search
- [ ] Test USA universities search
- [ ] Test specific university queries (Oxford, MIT, Stanford)
- [ ] Test course searches (Computer Science, Medicine, Engineering)
- [ ] Test city searches (London, Boston, Cambridge)
- [ ] Test budget/affordable queries
- [ ] Test ranking queries
- [ ] Test IELTS/TOEFL requirements
- [ ] Test tuition fees queries
- [ ] Test help command
- [ ] Test quick action buttons
- [ ] Test character walk-in animation
- [ ] Test greeting speech bubble
- [ ] Test typing indicator
- [ ] Test message scrolling
- [ ] Test on mobile device
- [ ] Test on desktop

---

## 🎉 Success Criteria

✅ Chatbot responds to country queries
✅ Chatbot provides university details
✅ Chatbot searches by course
✅ Chatbot searches by city
✅ Chatbot shows affordable options
✅ Character animates properly
✅ Messages display correctly
✅ Quick actions work
✅ No console errors
✅ Mobile responsive

---

**Last Updated**: November 2025
**Status**: MVP Complete - Ready for Testing
**Next Step**: Test thoroughly, then decide if OpenAI integration is needed
