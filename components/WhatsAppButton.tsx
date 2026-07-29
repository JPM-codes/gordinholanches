"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink("Olá! Quero fazer um pedido no Gordinho Lanches.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: "backOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_30px_rgba(37,211,102,0.45)] lg:h-16 lg:w-16"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/40" />
      <FaWhatsapp className="relative h-8 w-8 text-white"/>
    </motion.a>
  );
}
