# 🎓 AimBritz - Study Abroad Consultancy Platform

A modern, SEO-optimized website for a study abroad consultancy agency built with Next.js 15, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🚀 **Next.js 16** with App Router
- 💎 **TypeScript** strict mode
- 🎨 **Tailwind CSS** for styling
- 🧩 **shadcn/ui** component library
- 📱 **Fully Responsive** design
- ⚡ **Server-Side Rendering** for SEO
- 🔍 **Search & Filter** functionality
- 📊 **Dynamic Routes** for countries, universities, and blog
- 🗂️ **Prisma ORM** ready for database integration
- 📝 **Comprehensive Content** - 7 countries, 8 universities, 5 blog posts

## 📸 Screenshots

> Add screenshots of your website here after deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd aimbritz-dev
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
aimbritz-dev/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Homepage
│   ├── about/                  # About page
│   ├── countries/              # Countries listing & details
│   ├── universities/           # Universities listing & details
│   ├── services/               # Services page
│   ├── blog/                   # Blog listing & posts
│   ├── contact/                # Contact page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # Reusable UI components
│   └── layout/                 # Header & Footer
├── lib/
│   ├── data/                   # Sample data
│   │   ├── countries.ts
│   │   ├── universities.ts
│   │   └── blog.ts
│   └── utils.ts                # Utility functions
├── prisma/
│   └── schema.prisma           # Database schema (all phases)
└── public/                     # Static assets
```

## 🎯 Available Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, stats, services |
| Countries | `/countries` | List of study destinations |
| Country Detail | `/countries/[slug]` | Individual country information |
| Universities | `/universities` | Searchable university listing |
| University Detail | `/universities/[slug]` | Individual university details |
| About | `/about` | Company information |
| Services | `/services` | Services offered |
| Blog | `/blog` | Blog listing with filters |
| Blog Post | `/blog/[slug]` | Individual blog posts |
| Contact | `/contact` | Contact form |

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 16.0.1
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 4.1
- **UI Components:** shadcn/ui (Radix UI + Tailwind)
- **Icons:** Lucide React

### Database (Ready, Not Connected)
- **ORM:** Prisma
- **Database:** PostgreSQL (via Supabase)

### Future Additions
- **AI Chatbot:** LangChain + OpenAI
- **Authentication:** Clerk or NextAuth.js
- **CMS:** Custom admin dashboard
- **Mobile:** React Native + Expo

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database (when connected)
npx prisma studio    # Open Prisma Studio
npx prisma migrate dev  # Run migrations
npx prisma generate  # Generate Prisma Client
```

## 🗄️ Data Structure

### Countries (7)
- USA, UK, Canada, Australia, Germany, Ireland, New Zealand
- Each with: description, benefits, visa info, cost of living, top courses

### Universities (8)
- MIT, Stanford, Oxford, Toronto, Melbourne, TU Munich, Trinity Dublin, Auckland
- Each with: courses, admission requirements, campus life, scholarships

### Blog Posts (5)
- University rankings
- Visa guides
- Application tips
- Scholarships
- Country comparisons

## 🎨 Design System

### Colors
- **Primary:** Blue (#2563EB) - Trust & professionalism
- **Accent:** Orange (#F97316) - Energy & action
- **Background:** White (#FFFFFF)
- **Text:** Dark gray (#1F2937)

### Typography
- **Font:** Inter (next/font optimized)
- **Headings:** Bold, 600-700 weight
- **Body:** Regular, 400 weight

### Components
All components follow shadcn/ui patterns and are fully customizable.

## 🚦 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy**
- Go to [vercel.com](https://vercel.com)
- Import your repository
- Configure build settings (auto-detected)
- Deploy

3. **Environment Variables**
Add these in Vercel dashboard (when implementing future phases):
- `DATABASE_URL` (Phase 2)
- `OPENAI_API_KEY` (Phase 3)
- Other keys as needed

### Other Platforms
- **Netlify:** Supported
- **Railway:** Supported
- **Self-hosted:** Supported with Node.js

## 🔐 Environment Variables

For local development, create `.env.local`:

```env
# Currently not needed for Phase 1
# Uncomment when implementing future phases

# DATABASE_URL="postgresql://..."
# OPENAI_API_KEY="sk-..."
# NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 📋 Roadmap

### Phase 1: Public Website ✅ COMPLETED
- [x] Homepage with all sections
- [x] Countries listing & detail pages
- [x] Universities listing & detail pages
- [x] About, Services, Blog, Contact pages
- [x] Responsive design
- [x] SEO optimization
- [x] Prisma schema ready

### Phase 2: Admin Dashboard (Planned)
- [ ] Database connection (Supabase)
- [ ] Authentication (Clerk/NextAuth)
- [ ] Admin panel for content management
- [ ] CRUD operations for universities, countries, blog
- [ ] Contact form submissions handling

### Phase 3: AI Chatbot (Planned)
- [ ] LangChain integration
- [ ] RAG implementation with pgvector
- [ ] Floating chat widget
- [ ] Streaming responses
- [ ] Context-aware conversations

### Phase 4: Mobile App (Planned)
- [ ] React Native + Expo setup
- [ ] Mobile UI/UX
- [ ] Shared API layer
- [ ] Push notifications

### Phase 5: CRM System (Planned)
- [ ] Student management
- [ ] Application tracking
- [ ] Document uploads
- [ ] Email notifications

### Phase 6: HRM System (Planned)
- [ ] Employee management
- [ ] Attendance tracking
- [ ] Leave management
- [ ] Payroll system

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Your Name** - Initial work

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide](https://lucide.dev/) - Icons
- [Prisma](https://www.prisma.io/) - Database ORM

## 📞 Support

For support or questions:
- Email: info@aimbritz.com
- Website: [aimbritz.com](https://aimbritz.com)

## 📊 Performance

- **Lighthouse Score:** 90+ (target)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **SEO Score:** 100

## 🔗 Links

- [Live Demo](#) - Add when deployed
- [Documentation](./CLAUDE.md) - Implementation guide
- [Report Bug](#) - GitHub issues
- [Request Feature](#) - GitHub issues

---

**Built with ❤️ using Next.js 16**

For detailed implementation guide and future phase instructions, see [CLAUDE.md](./CLAUDE.md)
