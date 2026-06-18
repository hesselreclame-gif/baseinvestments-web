"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, ArrowDownToLine } from "lucide-react";

function useCounter(target: number, active: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

export default function ESGImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCounter(100000000, inView, 2500);

  const formatted = count.toLocaleString("en-NL");

  return (
    <section
      ref={ref}
      className="py-28 lg:py-36 px-6 bg-brand-green-dark relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/40 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-emerald-200 mb-6 flex items-center gap-2">
              <Leaf size={12} />
              ESG Impact
            </p>
            <div className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-3">
              {formatted}
              <span className="text-emerald-300"> kg</span>
            </div>
            <p className="text-emerald-100/90 text-lg mt-4">
              CO₂ reduction target by 2030 — equal to 100,000 cars off the road
            </p>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6 leading-tight">
              From brown to green — our commitment to a sustainable built environment
            </h2>
            <div className="space-y-4 text-emerald-50/80 leading-relaxed text-sm">
              <p>
                Every building we acquire is an opportunity to reduce carbon emissions while
                delivering financial returns. By converting underutilised, energy-intensive
                properties into certified green assets, we simultaneously improve asset values
                and environmental performance.
              </p>
              <p>
                Our ESG strategy is embedded in every investment decision — from acquisition
                underwriting to exit planning. This alignment with investor objectives means
                sustainability is never a trade-off, it's a value driver.
              </p>
            </div>

            <a
              href="https://www.baseinvestments.nl/wp-content/uploads/2026/05/Base_Investments_ESG_Report_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-green-dark bg-white hover:bg-emerald-50 rounded-md px-6 py-3 transition-colors duration-200 group"
            >
              <ArrowDownToLine size={15} />
              Download 2025 ESG Report
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
