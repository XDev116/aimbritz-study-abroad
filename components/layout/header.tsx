"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo, LogoIcon } from "./logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Countries", href: "/countries" },
  { name: "Universities", href: "/universities" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-black/10 glass-card backdrop-blur-xl">
        <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          {/* Desktop Logo */}
          <div className="flex lg:flex-1">
            <div className="hidden sm:block">
              <Logo />
            </div>
            {/* Mobile Logo Icon */}
            <div className="block sm:hidden">
              <LogoIcon />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 hover:bg-black/5 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-700 hover:text-black transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white rounded-xl transition-colors"
              asChild
            >
              <a href="tel:+1234567890" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Talk to Expert
              </a>
            </Button>
            <Button className="bg-black hover:bg-gray-900 text-white shadow-lg rounded-xl" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu - NOW OUTSIDE HEADER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 z-[101] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl border-l-2 border-black/10 animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <Logo />
              <button
                type="button"
                className="-m-2.5 rounded-xl p-2.5 hover:bg-black/5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="flow-root">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-xl px-4 py-3.5 text-base font-semibold hover:bg-black/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white rounded-xl py-6"
                  asChild
                >
                  <a href="tel:+1234567890" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Talk to Expert
                  </a>
                </Button>
                <Button asChild className="w-full bg-black hover:bg-gray-900 text-white shadow-lg rounded-xl py-6">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
