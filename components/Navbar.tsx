"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { whatsappLink } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { basePath } from "@/lib/basePath";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Galeria", href: "#galeria" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-char/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#topo" className="flex items-center gap-3">
          {/* Substituir pela logo real fornecida pelo cliente */}
          <Image
            src={`${basePath}/images/logo.png`}
            alt="Gordinho Lanches"
            width={64}
            height={64}
            priority
          />
          <span className="font-display text-xl tracking-wide text-cream">
            GORDINHO LANCHES<span className="text-ember">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium uppercase tracking-wider text-cream/80 transition-colors hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openCart}
            aria-label="Abrir carrinho"
            className="relative p-2 text-cream/70 hover:text-cream transition-colors"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-ember text-[10px] font-bold text-cream tabular-nums">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>

          <a
            href={whatsappLink("Olá! Quero fazer um pedido no Gordinho Lanches.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ember px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-cream shadow-glow-red transition-transform hover:scale-105 hover:bg-ember-light active:scale-95"
          >
            Peça agora
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
