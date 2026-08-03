"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Timer, HeartHandshake } from "lucide-react";
import { basePath } from "@/lib/basePath";
import { FaQuoteLeft } from "react-icons/fa";

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

    <section id="sobre" className="relative overflow-hidden bg-[#0D0A08] pb-16 pt-28 lg:pt-32">
      {/* Glow */}
      <div
        className="absolute right-[-150px] top-1/2 h-[750px] w-[750px] 
        -translate-y-1/2 rounded-full bg-[#ff5a1f]/15 blur-[170px]"/>

      {/* Vinheta */}
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* COLUNA ESQUERDA: vídeo + selo flutuante + card de citação */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border
          border-[#d9a44121] bg-[#17110d] shadow-[0_30px_90px_rgba(0,0,0,.45)]"
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={`${basePath}/videos/gordinho_fazendo_lanche.mp4`} type="video/mp4" />
          </video>

          {/* Selo flutuante */}
          <div className="absolute right-[-18px] top-10 z-20 animate-float">
            <Image
              src={`${basePath}/images/simbolo.png`}
              alt="Feito com dedicação"
              width={145}
              height={145}
              className="rotate-[-14deg] opacity-95 drop-shadow-[0_0_30px_rgba(255,196,72,.25)] transition-transform duration-500 hover:rotate-[-12deg] hover:scale-105"
            />
          </div>

          {/* Card de citação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute bottom-8 left-8 right-8 max-w-xs rounded-2xl 
            border border-[#d9a44121] bg-black/45 p-5 backdrop-blur-sm sm:right-auto"
          >
            <FaQuoteLeft className="text-2xl leading-none text-ember" aria-hidden="true" />
            <p className="mt-3 text-base italic leading-snug text-white/90">
              Nosso propósito é simples: fazer o melhor hambúrguer artesanal da
              cidade.
            </p>
            <span className="mt-4 block font-display text-sm tracking-wide text-gold">
              — Família Gordinho
            </span>
          </motion.div>

          {/* Vinheta + textura, por cima do vídeo */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
        </motion.div>

        {/* COLUNA DIREITA: texto + pilares */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
          >
            Nossa história
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
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
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-cream/70"
          >
            Nascemos em <span className="text-gold">Araras</span> com um propósito simples: fazer o melhor
            hambúrguer artesanal da cidade, <span className="text-gold-light">sem pressa e sem atalhos</span>. Cada
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
                className="group rounded-2xl border border-white/5 bg-char-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-char-card/80"
              >
                <pillar.icon
                  className="mb-4 h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.75}
                />
                <h3 className="mb-2 font-display text-lg tracking-wide text-cream">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/60">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}