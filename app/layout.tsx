import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { ChatWidget } from "@/components/chatbot/chat-widget-loader";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { PageFrame } from "@/components/layout/page-frame";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["500"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-signature",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "AimBritz - Your Gateway to Global Education",
    template: "%s | AimBritz",
  },
  description:
    "Expert study abroad consultancy helping students achieve their dreams of international education. Discover top universities across 50+ countries.",
  keywords: [
    "study abroad",
    "international education",
    "university admission",
    "student visa",
    "overseas education",
  ],
  authors: [{ name: "AimBritz" }],
  creator: "AimBritz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aimbritz.com",
    title: "AimBritz - Your Gateway to Global Education",
    description:
      "Expert study abroad consultancy helping students achieve their dreams of international education.",
    siteName: "AimBritz",
  },
  twitter: {
    card: "summary_large_image",
    title: "AimBritz - Your Gateway to Global Education",
    description:
      "Expert study abroad consultancy helping students achieve their dreams of international education.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable} ${greatVibes.variable}`}
    >
      <body className="bg-paper text-ink antialiased flex flex-col min-h-screen font-sans">
        <SmoothScrollProvider>
          <PageFrame>
            <Header />
            <main className="flex-1 relative">{children}</main>
          </PageFrame>
          <ChatWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
