"use client";

import dynamic from "next/dynamic";

// Code-split ChatWidget to reduce initial bundle size by ~2 MB (Three.js)
const ChatWidget = dynamic(
  () => import("./chat-widget").then((mod) => ({ default: mod.ChatWidget })),
  { ssr: false }
);

export { ChatWidget };
