"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { teamMembers } from "@/lib/data";
import { asset } from "@/lib/site";

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-28 lg:py-36 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-brand-blue font-medium mb-4">
            Our People
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-brand-ink max-w-xl leading-tight">
            The team behind the returns
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-xl overflow-hidden bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Photo */}
              <div className="aspect-[4/5] relative overflow-hidden bg-zinc-100">
                <Image
                  src={asset(member.image)}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-brand-blue transition-all duration-500" />
              </div>
              {/* Info */}
              <div className="p-5">
                <p className="text-brand-ink font-semibold text-sm leading-snug">
                  {member.name}
                </p>
                <p className="text-zinc-500 text-xs mt-1">{member.title}</p>
              </div>
            </motion.div>
          ))}

          {/* Office card for symmetry */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: teamMembers.length * 0.07 }}
            className="hidden lg:flex rounded-xl bg-brand-blue text-white items-center justify-center p-8 text-center"
          >
            <div>
              <p className="text-xs tracking-widest uppercase text-sky-200 mb-2">
                Amsterdam
              </p>
              <p className="text-sm text-white/90 leading-relaxed">
                Kuiperbergweg 50
                <br />
                1101AG Amsterdam
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
