"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Wrench, Handshake } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Asset Management",
    description:
      "Active portfolio oversight that drives target returns while meeting ESG commitments. We manage assets with precision — monitoring performance, executing improvements, and delivering consistent results for investors.",
  },
  {
    icon: Wrench,
    title: "Development",
    description:
      "We convert underperforming buildings into high-quality, sustainable assets. From light industrial renovations to life science buildouts, our technical team delivers complex projects on time and on budget.",
  },
  {
    icon: Handshake,
    title: "Joint Ventures",
    description:
      "We structure and manage co-investment platforms with leading private equity firms. Our operational expertise and local market knowledge make us the preferred Dutch real estate partner for institutional investors.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 lg:py-36 px-6 bg-zinc-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-brand-blue font-medium mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-brand-ink max-w-xl leading-tight">
            Three ways we create value
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 lg:p-10 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-blue/10 mb-8">
                  <Icon size={20} className="text-brand-blue" />
                </div>
                <h3 className="font-serif text-2xl text-brand-ink mb-4">
                  {service.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
