"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { menuCategories, menuItems } from "@/lib/data";
import { useCart } from "@/context/CartContext";

function MenuCard({ item, index }: { item: (typeof menuItems)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { openModal } = useCart();

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 10 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.25s ease-out",
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-char-card"
    >
      {item.tag && (
        <span className="absolute left-5 top-5 z-10 rounded-full bg-gold
         px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-char">
          {item.tag}
        </span>
      )}

      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Placeholder — substituir pela foto real do lanche */}
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char-card
        via-char-card/10 to-transparent" />
      </div>

      <div className="relative p-6">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="font-display text-xl tracking-wide text-cream">
            {item.name}
          </h3>
          <span className="whitespace-nowrap font-display text-lg text-gold">
            {item.price}
          </span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-cream/60">
          {item.description}
        </p>
        <button
          type="button"
          onClick={() => openModal(item)}
          className="inline-flex items-center gap-2 rounded-full bg-ember 
          px-6 py-3 text-xs font-bold uppercase tracking-wider text-cream 
          transition-all hover:bg-ember-light hover:shadow-glow-red"
        >
          Pedir agora
        </button>
      </div>
    </motion.div>
  );
}

const ALL_ID = "todos";

export default function Menu() {

  const [active, setActive] = useState<string>(ALL_ID);

  const tabs = useMemo(
    () => [
      { id: ALL_ID, label: "Todos" },
      ...menuCategories,
    ],
    []
  )

  const filteredItems = useMemo(
    () => (active === ALL_ID ? menuItems : menuItems.filter((item) => item.category === active)),
    [active]
  )

  return (
    <section id="cardapio" className="relative overflow-hidden bg-[#0D0A08] pb-16 pt-28 lg:pt-32">

      {/* Vinheta */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-gold">
            Cardápio
          </p>
          <h2 className="font-display text-5xl text-cream sm:text-7xl mb-[-25px]">
            Escolha o seu <span className="text-ember">Gordinho</span>
          </h2>
          <p className="mt-6 text-sm font-semibold tracking-wide text-cream/70">
            Ingredientes selecionados, preparado artesanal e muito sabor em cada mordida.
          </p>
        </div>

        <div className="mb-12 -mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-3 sm:w-full sm:flex-wrap sm:justify-center">
            {tabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  aria-pressed={isActive}
                  className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold
                uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-char" : "border border-white/10 text-cream/70 hover:border-gold/40 hover:text-cream"
                    }`}>
                  {isActive && (
                    <motion.span
                      layoutId="menu-tab-active"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gold" />
                  )}
                  <span className="relative">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <p className="mt-10 text-center text-cream/50">
            Nenhum item encontrado nessa categoria.
          </p>
        )}
      </div>
    </section>
  );
}
