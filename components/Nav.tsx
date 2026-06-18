"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { asset } from "@/lib/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Platforms", href: "#platforms" },
  { label: "Team", href: "#team" },
  { label: "News", href: "#news" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center group" aria-label="Base Investments — home">
          <Image
            src={asset("/images/logo.png")}
            alt="Base Investments"
            width={150}
            height={48}
            priority
            className="h-7 lg:h-8 w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-brand-blue transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-medium rounded-md transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-zinc-700 hover:text-brand-blue"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-zinc-200 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-zinc-700 hover:text-brand-blue text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-medium text-center rounded-md transition-colors"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
