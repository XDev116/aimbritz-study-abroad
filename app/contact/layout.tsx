import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AimBritz for a free study-abroad consultation. Offices in London, Trivandrum and Kochi. We reply within 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
