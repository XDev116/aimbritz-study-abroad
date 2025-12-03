import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/chatbot/chat-widget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "AimBritz - Your Gateway to Global Education",
    template: "%s | AimBritz"
  },
  description: "Expert study abroad consultancy helping students achieve their dreams of international education. Discover top universities across 50+ countries.",
  keywords: ["study abroad", "international education", "university admission", "student visa", "overseas education"],
  authors: [{ name: "AimBritz" }],
  creator: "AimBritz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aimbritz.com",
    title: "AimBritz - Your Gateway to Global Education",
    description: "Expert study abroad consultancy helping students achieve their dreams of international education.",
    siteName: "AimBritz",
  },
  twitter: {
    card: "summary_large_image",
    title: "AimBritz - Your Gateway to Global Education",
    description: "Expert study abroad consultancy helping students achieve their dreams of international education.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/images/students/student1.png" />
        <link rel="preload" as="image" href="/images/students/student2.png" />
        <link rel="preload" as="image" href="/images/students/student3.png" />
        <link rel="preload" as="video" href="/videos/University_Choice_Background_Video.mp4" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
        <link rel="preconnect" href="https://upload.wikimedia.org" crossOrigin="anonymous" />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
