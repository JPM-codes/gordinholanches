"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { whatsappLink } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section id="topo" className="relative">
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center"
        >
          <motion.div variants={item} className="mb-6">
            <Image
              src="/images/logo.png"
              alt="Logo Gordinho Lanches"
              width={124}
              height={124}
              priority
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold"
          >
            Hamburgueria artesanal · Araras/SP
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[15vw] leading-[0.85] text-cream sm:text-[9vw] lg:text-[7.5rem]"
          >
            GORDINHO
            <br />
            <span className="text-outline">LANCHES</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-md text-balance text-lg text-cream/70"
          >
            Mais que um lanche.{" "}
            <span className="text-cream">Uma experiência.</span>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={whatsappLink("Olá! Quero fazer um pedido no Gordinho Lanches.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ember px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-glow-red transition-all hover:scale-105 hover:bg-ember-light active:scale-95"
            >
              Peça agora
            </a>
            <a
              href="#cardapio"
              className="rounded-full border border-cream/25 px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream/90 transition-all hover:border-gold hover:text-gold"
            >
              Ver cardápio
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
