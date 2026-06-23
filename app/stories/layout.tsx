import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real AimBritz students, real journeys. See graduates we've placed at universities across the UK, Canada, Australia and beyond — and how we got them there.",
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}