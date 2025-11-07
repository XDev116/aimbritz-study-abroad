# AimBritz Study Abroad Platform - Implementation Guide

## 📋 Project Overview

This is a multi-phase study abroad consultancy platform built with Next.js 15, TypeScript, and modern web technologies.

**Current Status:** ✅ **Phase 1 Complete** - Public-facing website with all core pages

### 🎉 Latest Updates (January 2025)

**Design System Overhaul:**
- ✅ Implemented modern black & white theme with glassmorphism
- ✅ Matches AimBritz logo (black & white)
- ✅ Mobile-first approach (70% traffic from mobile)
- ✅ Created comprehensive [DESIGN-GUIDE.md](./DESIGN-GUIDE.md)

**AI Chatbot Character "Aimi":**
- ✅ 3D glassmorphic orb design (futuristic AI companion)
- ✅ 10+ custom CSS animations
- ✅ Fully functional chat UI
- ✅ Mobile-optimized and responsive
- ✅ Integrated on all pages
- ✅ Complete documentation in [AIMI-CHARACTER-GUIDE.md](./AIMI-CHARACTER-GUIDE.md)
- ⏳ AI functionality (OpenAI integration) pending Phase 3

**Key Achievements:**
- Modern 2025 design trends (glassmorphism, minimalism)
- Production-ready public website
- SEO-optimized
- Type-safe TypeScript throughout
- Zero build errors
- Ready for deployment

---

## 🎯 Phase 1: Public Website (✅ COMPLETED)

### What's Built

1. **Homepage** ✅
   - Hero section with CTAs
   - Statistics display
   - Popular destinations cards
   - How it works timeline
   - Services overview
   - Student testimonials
   - Final CTA section

2. **Countries** ✅
   - Listing page with all countries
   - Individual country detail pages with:
     - Benefits
     - Popular courses
     - Visa information
     - Cost of living
     - Top universities
   - Dynamic routes: `/countries/[slug]`

3. **Universities** ✅
   - Searchable and filterable listing
   - Individual university pages with:
     - Programs offered
     - Admission requirements
     - Campus life
     - Scholarships
   - Dynamic routes: `/universities/[slug]`

4. **About Us** ✅
   - Company story
   - Mission & Vision
   - Core values
   - Team members
   - Why choose us

5. **Services** ✅
   - 8 comprehensive service cards
   - Process timeline
   - Service packages
   - Features and benefits

6. **Blog** ✅
   - Blog listing with category filter
   - Individual blog post pages
   - Related articles
   - Author information
   - Dynamic routes: `/blog/[slug]`

7. **Contact** ✅
   - Contact form
   - Office locations
   - Business hours
   - Map placeholder

8. **AI Chatbot "Aimi"** ✅ (Design Only)
   - 3D glassmorphic orb character
   - 10+ custom CSS animations
   - Rotating orbit ring with particles
   - Interactive chat interface
   - Mobile-optimized design
   - Ready for AI integration (Phase 3)

### Tech Stack (Phase 1)

- **Framework:** Next.js 16.0.1 (App Router with Turbopack)
- **Language:** TypeScript 5.9.3 (strict mode)
- **Styling:** Tailwind CSS 3.4.1 (stable version)
- **UI Components:** shadcn/ui (custom implementation)
- **Icons:** Lucide React
- **Database Schema:** Prisma (ready, not connected yet)
- **Design System:** Black & White theme with Glassmorphism

### File Structure

```
aimbritz-dev/
├── app/
│   ├── (pages)/
│   │   ├── page.tsx                 # Homepage
│   │   ├── about/page.tsx
│   │   ├── countries/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── universities/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── services/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── contact/page.tsx
│   ├── layout.tsx                   # Root layout with Header/Footer
│   └── globals.css
├── components/
│   ├── ui/                          # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── layout/
│   │   ├── header.tsx               # Navigation with mobile menu
│   │   └── footer.tsx
│   └── chatbot/
│       └── chat-widget.tsx          # Aimi AI chatbot character
├── lib/
│   ├── data/
│   │   ├── countries.ts             # 7 countries with full data
│   │   ├── universities.ts          # 8 universities with courses
│   │   └── blog.ts                  # 5 detailed blog posts
│   └── utils.ts
├── prisma/
│   └── schema.prisma                # Complete schema for all phases
├── public/
├── DESIGN-GUIDE.md                  # Complete design system documentation
├── AIMI-CHARACTER-GUIDE.md          # Aimi chatbot character guide
└── STATUS.md                        # Current project status
```

### Design System

**Theme:** Modern Black & White with Glassmorphism
- **Color Palette:** Pure black (#000000), pure white (#FFFFFF), and gray gradients
- **Effects:** Glassmorphism, backdrop blur, subtle shadows
- **Typography:** Inter font family (system fallback)
- **Mobile-First:** Optimized for 70% mobile traffic
- **Documentation:** See [DESIGN-GUIDE.md](./DESIGN-GUIDE.md)

**Key Design Features:**
- Glass card effects with `backdrop-filter: blur(12px)`
- Black gradient text for headings
- Minimal borders with `rgba(0, 0, 0, 0.05)`
- Smooth transitions and micro-animations
- High contrast for accessibility
- Touch-friendly (48px minimum targets)

### AI Chatbot Character: "Aimi"

**Character Name:** Aimi (derived from "Aim" + "AI")
**Personality:** Smart, friendly, patient, trustworthy AI study companion
**Visual Design:** 3D glassmorphic orb with futuristic animations

**Features Implemented:**
- ✅ Floating character button (bottom-right)
- ✅ 3D glass orb with depth layers
- ✅ Rotating orbit ring (20s animation)
- ✅ Pulsing ring effects
- ✅ AI brain icon with floating animation
- ✅ Twinkling sparkle accent
- ✅ Green online status indicator
- ✅ Floating particle effects
- ✅ Hover speech bubble: "Hi! I'm Aimi 👋"
- ✅ Full chat interface UI
- ✅ Message bubbles (user/bot)
- ✅ Typing indicator (3 bouncing dots)
- ✅ Quick action buttons
- ✅ Mobile responsive (64px mobile, 80px desktop)
- ✅ 10+ custom CSS animations
- ⏳ AI functionality (Phase 3)

**Documentation:** See [AIMI-CHARACTER-GUIDE.md](./AIMI-CHARACTER-GUIDE.md)

**Animations:**
- `spin-slow` - Orbit ring rotation (20s)
- `pulse-ring` - Middle ring pulse (2s)
- `glow` - Orb glow effect (3s)
- `float` - Vertical float (3s)
- `twinkle` - Sparkle animation (2s)
- `pulse-slow` - Status indicator (2s)
- `bounce-slow` - Speech bubble (2s)
- `float-particle-1/2/3` - Particle effects (4-5s)
- `slide-in` - Message entrance (0.3s)

---

## 🚀 Phase 2: Admin Dashboard & CMS (NOT YET IMPLEMENTED)

### What Needs to be Built

#### 1. Database Connection
- [ ] Set up Supabase PostgreSQL database
- [ ] Add `DATABASE_URL` to `.env`
- [ ] Run `npx prisma migrate dev`
- [ ] Seed database with sample data from `lib/data/`

```bash
# Commands to run
npx prisma migrate dev --name init
npx prisma generate
npx prisma studio  # To view database
```

#### 2. Authentication System
Choose one:

**Option A: Clerk (Recommended)**
```bash
npm install @clerk/nextjs
```
- Add `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
- Wrap app in `<ClerkProvider>`
- Create `/app/(admin)` route group

**Option B: NextAuth.js**
```bash
npm install next-auth @auth/prisma-adapter
```
- Configure OAuth providers
- Set up session management

#### 3. Admin Routes Structure

Create these routes:
```
app/
├── (admin)/
│   ├── layout.tsx              # Admin layout with sidebar
│   ├── dashboard/page.tsx      # Analytics dashboard
│   ├── universities/
│   │   ├── page.tsx            # List all universities
│   │   ├── [id]/edit/page.tsx  # Edit university
│   │   └── new/page.tsx        # Create university
│   ├── countries/
│   │   ├── page.tsx
│   │   ├── [id]/edit/page.tsx
│   │   └── new/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── [id]/edit/page.tsx
│   │   └── new/page.tsx
│   ├── contacts/page.tsx       # View contact form submissions
│   └── settings/page.tsx
```

#### 4. API Routes

Create tRPC or REST API:
```
app/api/
├── universities/
│   ├── route.ts                # GET, POST
│   └── [id]/route.ts           # GET, PUT, DELETE
├── countries/
│   └── route.ts
├── blog/
│   └── route.ts
└── contact/
    └── route.ts
```

#### 5. Admin Components to Build

- **Data Tables:** Use `@tanstack/react-table`
- **Forms:** Use `react-hook-form` + `zod` validation
- **Rich Text Editor:** Use `@tiptap/react` for blog posts
- **Image Upload:** Integrate with Cloudinary or S3
- **Charts:** Use `recharts` for analytics

```bash
npm install @tanstack/react-table react-hook-form zod @hookform/resolvers
npm install @tiptap/react @tiptap/starter-kit
npm install recharts
```

#### 6. Database Migration from Static to Dynamic

Replace static imports with database queries:
```typescript
// Before (Phase 1)
import { universities } from "@/lib/data/universities";

// After (Phase 2)
import { prisma } from "@/lib/db";
const universities = await prisma.university.findMany();
```

---

## 🤖 Phase 3: AI Chatbot (UI ✅ COMPLETE | AI ⏳ PENDING)

### Current Status

**✅ Completed:**
- Character design ("Aimi" - 3D glassmorphic orb)
- Chat widget UI component ([components/chatbot/chat-widget.tsx](components/chatbot/chat-widget.tsx))
- All animations and interactions
- Mobile-responsive design
- Integrated into all pages via layout
- Demo conversation flow

**⏳ Pending:**
- OpenAI API integration
- RAG (Retrieval Augmented Generation) system
- Vector database setup
- Real-time streaming responses
- Context-aware conversations

### Architecture

```
User → Aimi Widget (✅) → API Route (⏳) → LangChain (⏳) → RAG System (⏳) → GPT-4 (⏳) → Response
                                              ↓
                                         Vector Database (⏳)
                                         (pgvector)
```

### Implementation Steps (for Phase 3)

#### 1. Install Dependencies

```bash
npm install langchain @langchain/openai @langchain/community
npm install ai openai
npm install pgvector  # PostgreSQL extension
```

#### 2. Enable pgvector in Supabase

```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

#### 3. Create Embedding Pipeline

```typescript
// lib/ai/embeddings.ts
import { OpenAIEmbeddings } from "@langchain/openai";
import { PrismaVectorStore } from "@langchain/community/vectorstores/prisma";

export async function createEmbeddings(documents: string[]) {
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  // Store in DocumentEmbedding model
  // ...implementation
}
```

#### 4. Build RAG Chain

```typescript
// lib/ai/rag.ts
import { ChatOpenAI } from "@langchain/openai";
import { RetrievalQAChain } from "langchain/chains";

export async function createRAGChain() {
  const model = new ChatOpenAI({
    modelName: "gpt-4-turbo",
    temperature: 0.7,
  });

  // Vector store retriever
  // Prompt template
  // Chain assembly
  // ...implementation
}
```

#### 5. API Route for Chat

```typescript
// app/api/chat/route.ts
import { StreamingTextResponse } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Get RAG chain
  // Stream response
  // return new StreamingTextResponse(stream);
}
```

#### 6. Update Chat Widget Component

**Current Implementation:** [components/chatbot/chat-widget.tsx](components/chatbot/chat-widget.tsx)

The widget UI is already complete. To add AI functionality:

```typescript
// Modify components/chatbot/chat-widget.tsx
"use client";

import { useChat } from "ai/react";

export function ChatWidget() {
  // Replace demo handleSendMessage with:
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [{
      id: "1",
      role: "assistant",
      content: "Hi! I'm Aimi, your AI study abroad companion..."
    }]
  });

  // Keep existing UI/animations
  // Replace message state management with useChat hook
}
```

#### 7. Layout Integration

**✅ Already Implemented** in [app/layout.tsx](app/layout.tsx):

```typescript
import { ChatWidget } from "@/components/chatbot/chat-widget";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget /> {/* ✅ Already added */}
      </body>
    </html>
  );
}
```

#### 8. System Prompt Template

```typescript
const SYSTEM_PROMPT = `
You are an AI study abroad counselor for AimBritz.
Your role is to help students find the right university and country.

Guidelines:
- Be friendly, professional, and encouraging
- Provide accurate information about universities, fees, requirements
- If you don't know something, offer to connect them with a human counselor
- Keep responses concise (2-3 paragraphs max)

Context from our database:
{context}

Student question: {question}
`;
```

---

## 📱 Phase 4: Mobile App (NOT YET IMPLEMENTED)

### Tech Stack
- **Framework:** React Native + Expo
- **Navigation:** Expo Router
- **State:** Zustand or React Query
- **API:** Same tRPC/REST APIs from Phase 2

### Setup

```bash
npx create-expo-app aimbritz-mobile
cd aimbritz-mobile
npx expo install expo-router react-native-safe-area-context
```

### Screens to Build
1. Home
2. Countries listing & detail
3. Universities listing & detail
4. Services
5. Blog
6. Contact
7. Student Dashboard (with login)
8. Application tracking

---

## 👥 Phase 5: CRM & Student Application System (NOT YET IMPLEMENTED)

### Features to Implement

#### 1. Student Portal

```
app/(student)/
├── dashboard/page.tsx          # Overview
├── applications/page.tsx       # Track applications
├── documents/page.tsx          # Upload documents
├── timeline/page.tsx           # Application timeline
└── profile/page.tsx            # Edit profile
```

#### 2. Counselor Dashboard

```
app/(admin)/crm/
├── students/
│   ├── page.tsx                # All students
│   ├── [id]/page.tsx           # Student detail
│   └── [id]/applications/      # Student applications
├── leads/page.tsx              # New inquiries
├── tasks/page.tsx              # Follow-ups
└── reports/page.tsx            # Analytics
```

#### 3. Email Notifications

```bash
npm install @react-email/components resend
```

Create email templates for:
- Application submitted
- Offer received
- Document required
- Appointment reminder

#### 4. Document Management

Integrate with AWS S3 or Cloudinary:
```typescript
// lib/storage/s3.ts
import { S3Client } from "@aws-sdk/client-s3";

export async function uploadDocument(file: File, studentId: string) {
  // Upload to S3
  // Save metadata to database
  // Return secure URL
}
```

---

## 💼 Phase 6: HRM System (NOT YET IMPLEMENTED)

### Features

#### 1. Employee Management

```
app/(admin)/hrm/
├── employees/
│   ├── page.tsx                # Employee list
│   ├── [id]/page.tsx           # Employee profile
│   └── new/page.tsx            # Add employee
├── attendance/page.tsx         # Mark attendance
├── leaves/
│   ├── page.tsx                # Leave requests
│   └── apply/page.tsx          # Apply for leave
├── payroll/page.tsx            # Salary management
└── reports/page.tsx            # HR analytics
```

#### 2. Components to Build
- Employee card
- Attendance calendar
- Leave request form
- Payroll calculator
- Department-wise reports

---

## 🔧 Environment Variables Setup

Create `.env.local` file:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database"

# OpenAI (for chatbot)
OPENAI_API_KEY="sk-..."

# Supabase (if using)
NEXT_PUBLIC_SUPABASE_URL="https://..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
SUPABASE_SERVICE_ROLE_KEY="..."

# Authentication (choose one)
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="..."
CLERK_SECRET_KEY="..."

# OR NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="..."

# File Upload (choose one)
# AWS S3
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_REGION="..."
AWS_BUCKET_NAME="..."

# OR Cloudinary
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."

# Email (for notifications)
RESEND_API_KEY="..."
FROM_EMAIL="noreply@aimbritz.com"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

---

## 📦 Additional npm Packages Needed for Future Phases

### Phase 2 (Admin Dashboard)
```bash
npm install @tanstack/react-table @tanstack/react-query
npm install react-hook-form zod @hookform/resolvers
npm install @tiptap/react @tiptap/starter-kit
npm install recharts date-fns
npm install @radix-ui/react-select @radix-ui/react-tabs
npm install @radix-ui/react-toast @radix-ui/react-alert-dialog
```

### Phase 3 (AI Chatbot)
```bash
npm install langchain @langchain/openai @langchain/community
npm install ai openai
npm install pgvector
npm install @vercel/ai-sdk
```

### Phase 4 (Mobile App)
```bash
# In mobile app directory
npx expo install expo-router expo-secure-store
npm install @tanstack/react-query axios
npm install zustand
```

### Phase 5 (CRM)
```bash
npm install @react-email/components resend
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
npm install react-big-calendar
npm install react-phone-number-input
```

---

## 🎨 Design System Expansion

### Colors Used (defined in globals.css)
- **Primary:** Pure Black (#000000) - Professional, modern
- **Background:** Pure White (#FFFFFF) - Clean, minimal
- **Grays:** Gray-50 to Gray-900 - Depth and hierarchy
- **Accent:** Green for status (#22C55E) - Online/active indicators
- **Glass Effects:** Semi-transparent white with backdrop blur

**Design Philosophy:** Black & white monochrome theme with glassmorphism to match the AimBritz logo. Creates a sophisticated, modern 2025 aesthetic without being boring. See [DESIGN-GUIDE.md](./DESIGN-GUIDE.md) for complete guidelines.

### Components to Add
- [ ] Modal/Dialog
- [ ] Toast notifications
- [ ] Tabs
- [ ] Dropdown select
- [ ] Date picker
- [ ] File upload
- [ ] Progress bar
- [ ] Badge
- [ ] Avatar
- [ ] Skeleton loader

---

## 🔒 Security Considerations

### Implement in Phase 2+

1. **Authentication & Authorization**
   - Role-based access control (RBAC)
   - JWT tokens with expiration
   - Secure password hashing (bcrypt)

2. **API Security**
   - Rate limiting
   - CORS configuration
   - Input validation (zod)
   - SQL injection prevention (Prisma handles this)

3. **Data Protection**
   - Encrypt sensitive student data
   - GDPR compliance for EU students
   - Secure file uploads
   - Environment variable protection

4. **Frontend Security**
   - XSS prevention
   - CSRF tokens
   - Secure cookies
   - Content Security Policy

---

## 📈 Performance Optimization

### Already Implemented
✅ Next.js Image optimization
✅ Font optimization (next/font)
✅ Static generation for countries/universities
✅ Dynamic imports where needed

### To Implement
- [ ] Redis caching for API responses
- [ ] CDN for images (Cloudinary/Vercel)
- [ ] Database query optimization
- [ ] React Query for data caching
- [ ] Lazy loading for images
- [ ] Service Worker for PWA

---

## 🧪 Testing (Not Implemented)

### Testing Stack to Add

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm install -D @playwright/test  # E2E testing
```

### Tests to Write
1. **Unit Tests:**
   - Utility functions
   - Data transformations
   - Form validations

2. **Component Tests:**
   - Button variants
   - Form inputs
   - Card layouts

3. **Integration Tests:**
   - Page rendering
   - API routes
   - Database operations

4. **E2E Tests:**
   - User flows (contact form submission)
   - University search
   - Navigation

---

## 📊 Analytics & Monitoring (Not Implemented)

### Tools to Integrate

1. **Google Analytics 4**
```typescript
// lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
```

2. **Vercel Analytics**
```bash
npm install @vercel/analytics
```

3. **Error Tracking**
```bash
npm install @sentry/nextjs
```

4. **Application Monitoring**
- Vercel Speed Insights
- Uptime monitoring
- Database performance monitoring

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Environment variables set on Vercel
- [ ] Database migrations run on production
- [ ] Seed production database
- [ ] Domain configured
- [ ] SSL certificate (automatic with Vercel)
- [ ] Error tracking configured
- [ ] Analytics set up

### Deployment Steps
```bash
# Build and check for errors
npm run build

# Deploy to Vercel
vercel --prod

# Run database migrations
npx prisma migrate deploy
```

### Post-Deployment
- [ ] Test all pages
- [ ] Verify forms work
- [ ] Check mobile responsiveness
- [ ] Test SEO metadata
- [ ] Verify analytics
- [ ] Monitor error logs

---

## 📚 Useful Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [LangChain JS](https://js.langchain.com/docs)

### Learning Resources
- Next.js App Router patterns
- tRPC setup guide
- RAG implementation tutorial
- React Native with Expo

---

## 🐛 Known Issues & TODOs

### Current Issues
- [ ] No actual form submission (contact form logs to console)
- [ ] Blog post content is plain text (needs markdown rendering)
- [ ] No image uploads (using emoji placeholders)
- [ ] No search functionality beyond client-side filtering
- [ ] No pagination (all results shown at once)

### Future Enhancements
- [ ] Add markdown support for blog posts
- [ ] Implement server-side search
- [ ] Add pagination to listings
- [ ] Implement real-time chat
- [ ] Add video testimonials
- [ ] Create comparison tool for universities
- [ ] Add scholarship calculator
- [ ] Build mobile app
- [ ] Add multilingual support
- [ ] Implement push notifications

---

## 💡 Tips for Next Developer

1. **Start with Phase 2:**
   - Set up Supabase first
   - Connect Prisma
   - Build admin auth
   - Create basic CRUD for universities

2. **Don't Rush the Chatbot:**
   - Phase 3 (chatbot) requires good data first
   - Make sure Phase 2 admin can properly manage content
   - Test RAG thoroughly before production

3. **Mobile App Can Wait:**
   - Focus on web functionality first
   - Mobile app shares same APIs
   - Can be developed in parallel by separate developer

4. **Keep It Simple:**
   - Don't over-engineer
   - Use existing libraries
   - Follow Next.js patterns
   - Write clean, readable code

---

## 📞 Support

For questions about this implementation:
1. Check Next.js documentation
2. Review Prisma schema comments
3. Check component prop types
4. Refer to this CLAUDE.md file

---

**Last Updated:** January 2025
**Status:**
- ✅ Phase 1 Complete (Public website with 10 pages)
- ✅ Design System Complete (Black & white with glassmorphism)
- ✅ Aimi Chatbot UI Complete (AI functionality pending)
- ⏳ Next Priority: Phase 2 - Admin Dashboard & Database Integration
