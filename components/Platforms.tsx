"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { platforms } from "@/lib/data";
import { asset } from "@/lib/site";

export default function Platforms() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platforms" className="py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-brand-blue font-medium mb-4">
            Our Platforms
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-brand-ink max-w-xl leading-tight">
            Joint ventures built to last
          </h2>
          <p className="mt-5 text-zinc-600 max-w-lg leading-relaxed">
            We partner with world-class private equity firms to build specialist real estate
            platforms across Europe.
          </p>
        </motion.div>

        <div className="space-y-8">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="grid lg:grid-cols-2 rounded-2xl border border-zinc-200 shadow-sm overflow-hidden bg-white"
            >
              {/* Content side */}
              <div className="p-8 lg:p-12 order-2 lg:order-none">
                <span className="text-xs tracking-[0.2em] uppercase text-zinc-500">
                  {platform.category}
                </span>
                <h3 className="font-serif text-3xl lg:text-4xl text-brand-ink mt-1">
                  {platform.name}
                </h3>
                <p
                  className="text-sm font-medium mt-1"
                  style={{ color: platform.accentColor }}
                >
                  Joint venture with {platform.partner}
                </p>

                <p className="text-zinc-600 leading-relaxed my-8 text-sm">
                  {platform.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {platform.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-zinc-700">
                      <CheckCircle2
                        size={15}
                        className="shrink-0"
                        style={{ color: platform.accentColor }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-brand-ink border border-zinc-300 hover:border-brand-blue hover:text-brand-blue rounded-md px-6 py-3 transition-colors duration-200"
                >
                  Learn more
                  <ExternalLink
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              {/* Visual side */}
              <div className="min-h-[260px] lg:min-h-0 flex items-center justify-center relative overflow-hidden bg-zinc-50 order-1 lg:order-none border-b lg:border-b-0 lg:border-l border-zinc-200">
                <div
                  className="absolute top-0 left-0 w-full h-1 lg:w-1 lg:h-full"
                  style={{ backgroundColor: platform.accentColor }}
                />
                <Image
                  src={asset(platform.logo)}
                  alt={`${platform.name} logo`}
                  width={320}
                  height={120}
                  className="relative z-10 w-48 lg:w-64 h-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
