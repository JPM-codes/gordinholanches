"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials, restaurantInfo } from "@/lib/data";

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="mx-4 flex w-[320px] shrink-0 flex-col rounded-2xl border border-white/5 bg-char-card p-6">
      <div className="mb-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < t.stars ? "fill-gold text-gold" : "text-cream/20"
              }`}
          />
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-cream/70">
        &ldquo;{t.text}&rdquo;
      </p>
      <span className="text-xs font-semibold uppercase tracking-wider text-cream/50">
        {t.name}
      </span>
    </div>
  );
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="avaliacoes" className="relative overflow-hidden bg-[#0D0A08] pb-16 pt-28 lg:pt-32">

      {/* Vinheta */}
      <div className="mx-auto mb-14 max-w-7xl px-6 text-center lg:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-gold">
          Avaliações
        </p>
        <h2 className="font-display text-5xl text-cream sm:text-6xl">
          Quem prova, <span className="text-ember">volta</span>
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5 flex items-center justify-center gap-2 text-cream/70"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-sm">
            {restaurantInfo.rating} · {restaurantInfo.reviewCount}+ avaliações
          </span>
        </motion.div>
      </div>

      <div className="relative mask-fade-b overflow-hidden">
        <motion.div
          className="flex w-max gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 200,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {loop
            .filter((t) => t.stars >= 4 && t.text !== null)
            .map((t, i) => (
              <TestimonialCard
                key={`${t.reviewUrl}-${i}`}
                t={t}
              />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
