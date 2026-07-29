"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Timer, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Ingredientes selecionados",
    text: "Carnes, queijos e pães escolhidos a dedo, sempre frescos.",
  },
  {
    icon: Timer,
    title: "Rapidez",
    text: "Do pedido à entrega, sem abrir mão do capricho.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento",
    text: "Cada cliente tratado como parte da família Gordinho.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
        >
          <video
            className="h-full w-full rounded-3xl object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/gordinho_fazendo_lanche.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-char via-transparent to-transparent" />
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl leading-[0.95] text-cream sm:text-6xl"
          >
            Mais que um lanche.
            <br />
            <span className="text-ember">Uma experiência.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-lg text-lg text-cream/70"
          >
            Nascemos em Araras com um propósito simples: fazer o melhor
            hambúrguer artesanal da cidade, sem pressa e sem atalhos. Cada
            camada é pensada para surpreender a cada mordida.
          </motion.p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group rounded-2xl border border-white/5 bg-char-card/60 p-6 backdrop-blur-sm transition-colors hover:border-gold/30"
              >
                <pillar.icon className="mb-4 h-7 w-7 text-gold transition-transform group-hover:scale-110" />
                <h3 className="mb-2 font-display text-lg tracking-wide text-cream">
                  {pillar.title}
                </h3>
                <p className="text-sm text-cream/60">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
