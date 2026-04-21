"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * rotateX route transition — outgoing page tilts slightly up and fades,
 * incoming page enters from a shallow -rotateX. Mirrors the Aquamare
 * Webflow behavior without shipping a 3D perspective.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20, rotateX: -4 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, y: -30, rotateX: 2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1600 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
