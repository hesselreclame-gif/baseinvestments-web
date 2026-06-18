"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { newsItems } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function News() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="py-28 lg:py-36 px-6 bg-zinc-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-brand-blue font-medium mb-4">
            News & Press
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-brand-ink max-w-xl leading-tight">
            Latest from Base Investments
          </h2>
        </motion.div>

        <div className="space-y-4">
          {newsItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all duration-300 p-8 lg:p-10 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12"
            >
              {/* Date + source */}
              <div className="lg:w-40 shrink-0">
                <span className="text-xs tracking-widest uppercase text-zinc-400 block">
                  {item.date}
                </span>
                <span className="text-xs text-brand-blue mt-1 block font-medium">
                  {item.source}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-brand-ink font-medium leading-snug transition-colors mb-3 pr-8 relative">
                  {item.headline}
                  <ArrowUpRight
                    size={16}
                    className="absolute top-0 right-0 text-zinc-400 group-hover:text-brand-blue transition-colors"
                  />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.excerpt}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
