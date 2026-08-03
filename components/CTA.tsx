"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Zap, Sandwich, Bike, Star, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/data";
import { basePath } from "@/lib/basePath";

const features = [
  {
    icon: Zap,
    label: "Atendimento\nrápido",
  },
  {
    icon: Sandwich,
    label: "Ingredientes\nfrescos",
  },
  {
    icon: Bike,
    label: "Entrega rápida\nem Araras",
  },
];

// TODO: troque pelas fotos reais dos clientes (avatares de avaliações do Google)
const reviewerAvatars = [
  `${basePath}/images/avatars/avatar-1.png`,
  `${basePath}/images/avatars/avatar-2.png`,
  `${basePath}/images/avatars/avatar-3.png`,
  `${basePath}/images/avatars/avatar-4.png`,
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 lg:px-10 lg:py-40">
      {/* imagem de fundo: hambúrguer exploded view já com o selo "O Verdadeiro Sabor" embutido */}
      <Image
        src={`${basePath}/images/background-cta.png`}
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-contain object-right"
      />

      {/* degradê pra garantir legibilidade do texto sobre o fundo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_100%,rgba(0,0,0,0.5),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start text-left">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold"
        >
          <Star className="h-3.5 w-3.5 fill-gold" />O Melhor Lanche de Araras
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[16vw] leading-[0.95] text-cream sm:text-[10vw] md:leading-[0.85] lg:text-7xl xl:text-8xl"
        >
          ESTÁ COM
          <br />
          <span className="text-gold">FOME?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-md text-lg text-cream/85"
        >
          Seu Gordinho está a um clique de distância. 
          <br />
          Peça agora pelo WhatsApp e receba no conforto da sua casa.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          href={whatsappLink("Olá! Quero fazer um pedido no Gordinho Lanches.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full 
          bg-[#25D366] px-9 py-4 text-sm font-bold uppercase tracking-wider
          text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
        >
          <FaWhatsapp size={40} className="h-8 w-8 text-white" />
          Pedir pelo WhatsApp
          <ArrowRight className="h-4 w-4 text-[#0b9b40]" />
        </motion.a>

        {/* diferenciais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6"
        >
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="h-6 w-6 shrink-0 text-gold" />
              <span className="whitespace-pre-line text-left text-xs font-semibold uppercase tracking-wide text-cream/80">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* selo de avaliações */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex items-center gap-4 rounded-2xl border border-cream/15 bg-black/30 px-6 py-4"
        >
          <div className="flex -space-x-3">
            {reviewerAvatars.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt=""
                className="h-9 w-9 rounded-full border-2 border-black 
                object-cover"
                style={{ zIndex: reviewerAvatars.length - i }}
              />
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
              <span className="ml-1 text-sm font-bold text-cream">4,5</span>
            </div>
            <p className="text-xs text-cream/70">
              Mais de 300 avaliações no Google
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}