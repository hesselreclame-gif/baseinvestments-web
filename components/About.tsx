"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-brand-blue font-medium mb-6">
              About Us
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-brand-ink leading-tight mb-8">
              A new kind of real estate firm
            </h2>
            <div className="space-y-5 text-zinc-600 leading-relaxed">
              <p>
                Founded in 2020, Base Investments is an independent Dutch real estate firm
                headquartered in Amsterdam. We invest with a creative and proactive mindset —
                combining rigorous financial discipline with a deep commitment to sustainability.
              </p>
              <p>
                We specialise in transforming underutilised buildings into high-performing, green
                assets. Our "brown to green" philosophy means every acquisition is an opportunity
                to deliver financial returns while reducing environmental impact.
              </p>
              <p>
                By partnering with best-in-class private equity firms, we build institutional
                platforms that are smarter, faster, and better than conventional approaches.
              </p>
            </div>

            <blockquote className="mt-10 pl-5 border-l-2 border-brand-green">
              <p className="text-brand-ink text-lg font-serif italic">
                "Smarter, faster and better solutions for real estate investment."
              </p>
            </blockquote>
          </motion.div>

          {/* Right: stat grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 rounded-lg overflow-hidden"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-zinc-50 p-8 lg:p-10 flex flex-col gap-2"
              >
                <span className="font-serif text-3xl lg:text-4xl text-brand-blue">
                  {stat.value}
                </span>
                <span className="text-xs tracking-widest uppercase text-zinc-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
