"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Light background with subtle brand wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/40 to-emerald-50/40" />

      {/* Architectural grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(31,41,51,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(31,41,51,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs tracking-[0.25em] uppercase text-brand-blue font-medium mb-8"
        >
          Independent Real Estate Investor — Amsterdam
        </motion.p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.05] mb-8 text-brand-ink">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="block"
          >
            From <span className="text-amber-700/80">brown</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.25, 0.4, 0.25, 1] }}
            className="block"
          >
            to <span className="text-brand-green">green</span>
          </motion.span>
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          An independent Dutch real estate investor and asset manager.
          <br className="hidden sm:block" /> We transform underused buildings into
          high-performing, sustainable assets.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#platforms"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium rounded-md transition-colors duration-200"
          >
            Our Platforms
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-zinc-300 hover:border-brand-blue text-zinc-700 hover:text-brand-blue font-medium rounded-md transition-colors duration-200"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 hover:text-brand-blue transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
