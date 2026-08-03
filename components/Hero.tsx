"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ShoppingBag, Zap, Heart, Flame, List } from "lucide-react";
import { whatsappLink, stats } from "@/lib/data";
import { basePath } from "@/lib/basePath";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const statIcons = [Star, ShoppingBag, Zap, Heart];

/**
 * Hero fiel à referência: duas colunas (texto + produto), badge "Feito na
 * chapa" sobre a imagem, dois CTAs e barra de estatísticas — mas com fundo
 * mais limpo/sóbrio (vinheta + um único glow), sem campo de embers/fumaça.
 */
export default function HeroClean() {
  return (
    <section
      className="relative overflow-hidden bg-[#0D0A08] pb-16 pt-28 lg:pt-32">

      {/* Glow */}
      <div
        className="absolute right-[-150px] top-1/2 h-[750px] w-[750px] 
        -translate-y-1/2 rounded-full bg-[#ff5a1f]/15 blur-[170px]"/>

      {/* Vinheta */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,90,31,.08),transparent_35%)
        ,linear-gradient(180deg,#120d0a_0%,#090807_100%)]"/>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-14 px-6 lg:flex-row lg:gap-8">
        {/* COLUNA ESQUERDA: texto e CTAs */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left"
        >
          <motion.p
            variants={item}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
          >
            Hamburgueria artesanal · Araras/SP
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[14vw] leading-[0.85] text-cream sm:text-[9vw] lg:text-[6.5rem] xl:text-[7.5rem]"
          >
            GORDINHO
            <br />
            <span className="mt-1.5 block text-[14vw] text-ember sm:text-[9vw] lg:text-[6.5rem] xl:text-[7.5rem]">LANCHES</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-balance text-base text-cream/70 sm:text-lg"
          >
            Mais que um lanche. <span className="text-cream">Uma experiência.</span>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <a
              href={whatsappLink("Olá! Quero fazer um pedido no Gordinho Lanches.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-ember px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-glow-red transition-all hover:scale-105 hover:bg-ember-light active:scale-95"
            >
              <ShoppingBag size={18} />
              Peça agora
            </a>

            <a
              href="#cardapio"
              className="flex items-center justify-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream/90 transition-all hover:border-gold hover:text-gold"
            >
              <List size={18} />
              Ver cardápio
            </a>
          </motion.div>
        </motion.div>

        {/* COLUNA DIREITA: produto + badge "Feito na chapa" */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex w-full items-center justify-center lg:w-1/2 lg:justify-end"
        >
          <div className="relative h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] xl:h-[520px] xl:w-[520px]">
            <Image
              src={`${basePath}/images/hamburguer.png`}
              alt="Hambúrguer Artesanal Gordinho Lanches"
              fill
              sizes="(max-width: 768px) 70vw, 4000px"
              className="rounded-[2rem] object-contain scale-150 drop-shadow-3xl"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Barra de estatísticas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="
        relative z-10
        mx-auto
        mt-2
        w-full
        max-w-7xl

        grid
        grid-cols-1
        gap-6

        rounded-2xl
        border border-gold/10
        bg-[#d6a2410c]
        px-8 py-7
        backdrop-blur-md

        sm:grid-cols-2
        lg:flex
        lg:items-center
        lg:justify-between">
        {stats.map((stat, i) => {
          const Icon = statIcons[i];
          return (
            <div
              key={stat.label}
              className={`
              flex
              items-center
              gap-4

              ${i !== 0 ? "lg:border-l lg:border-cream/10 lg:pl-8" : ""}
              `}>
              <Icon
                size={28}
                className="shrink-0 text-gold"
                fill={stat.stars ? "#d9a441" : "none"}
                strokeWidth={stat.stars ? 0 : 2}
              />
              <div className="flex flex-col items-start">
                <span className="font-display text-base text-cream">
                  {stat.value}
                </span>
                <span className="font-body text-xs uppercase tracking-wide text-cream/60">
                  {stat.label}
                </span>
                {stat.stars && (
                  <div className="mt-0.5 flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={10} fill="#D9A441" strokeWidth={0} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}