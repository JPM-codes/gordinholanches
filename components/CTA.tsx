"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ember px-6 py-32 text-center lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.35),transparent_60%)]" />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-[16vw] leading-[0.95] md:leading-[0.85] text-cream sm:text-[10vw] lg:text-8xl"
      >
        Está com fome?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mx-auto mt-6 max-w-md text-lg text-cream/85"
      >
        Seu Gordinho está a um clique de distância. Peça agora pelo WhatsApp.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        href={whatsappLink("Olá! Quero fazer um pedido no Gordinho Lanches.")}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-char px-9 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-xl transition-transform hover:scale-105 active:scale-95"
      >
        <FaWhatsapp className="h-7 w-7 text-[#25D366]" />
        Pedir pelo WhatsApp
      </motion.a>
    </section>
  );
}
