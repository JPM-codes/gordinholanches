"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";

type StepItem = {
  id: number;
  title: string;
  text: string;
};

const steps: StepItem[] = [
  { id: 1, title: "Pão Brioche", text: "Macio, dourado e preparado diariamente." },
  { id: 2, title: "Blend Artesanal", text: "180g de carne selecionada." },
  { id: 3, title: "Cheddar Cremoso", text: "Derretido na temperatura perfeita." },
  { id: 4, title: "Bacon Crocante", text: "Defumado e grelhado até ficar crocante." },
  { id: 5, title: "Molho Especial", text: "Receita exclusiva da casa." },
];

const SCROLL_RANGES = [
  { start: 0.05, end: 0.22 },
  { start: 0.22, end: 0.40 },
  { start: 0.40, end: 0.60 },
  { start: 0.60, end: 0.82 },
  { start: 0.82, end: 1.0 },
];

export default function ExplodedHamburger() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const eased =
      value < 0.1
        ? (value / 0.1) * 0.04
        : value < 0.9
          ? 0.04 + ((value - 0.1) / 0.8) * 0.92
          : 0.96 + ((value - 0.9) / 0.1) * 0.04;

    video.currentTime = eased * video.duration;

    const idx = SCROLL_RANGES.findIndex((r) => value >= r.start && value < r.end);
    if (idx !== activeIndex) setActiveIndex(idx);
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const loaded = () => {
      video.currentTime = 0;
    };

    if (video.readyState >= 1) {
      loaded();
    } else {
      video.addEventListener("loadedmetadata", loaded);
      return () => video.removeEventListener("loadedmetadata", loaded);
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[500vh] bg-char">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-radial-ember opacity-40" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-16 px-10">
          <div className="max-w-md">
            <div className="mb-3 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="text-sm uppercase tracking-[0.3em] text-gold/80">
                Ingredientes
              </span>
            </div>

            <h2 className="mb-14 font-display text-5xl leading-tight text-cream">
              O sabor nasce<br />
              camada por camada.
            </h2>

            <div className="mb-12 flex gap-[3px]">
              {steps.map((_, i) => (
                <motion.div
                  key={i}
                  className="h-[3px] flex-1 rounded-full"
                  animate={{
                    backgroundColor:
                      i <= activeIndex ? "#E8A93A" : "rgba(243,236,217,0.15)",
                    scaleY: i === activeIndex ? 1.5 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            <div className="relative min-h-[180px]">
              <AnimatePresence mode="wait">
                {activeIndex >= 0 && (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute"
                  >
                    <span className="mb-3 block font-display text-7xl leading-none text-gold/10">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-3 text-3xl font-display text-cream">
                      {steps[activeIndex].title}
                    </h3>
                    <p className="text-lg leading-relaxed text-cream/60">
                      {steps[activeIndex].text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {activeIndex === -1 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-cream/40"
                >
                  Role para ver como montamos cada camada.
                </motion.p>
              )}
            </div>
          </div>

          <div className="w-[700px] shrink-0">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-gold/5 via-transparent to-transparent opacity-80 blur-2xl" />
              <div className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-t from-ember/10 via-transparent to-transparent opacity-60 blur-xl" />
              <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                className="relative w-full rounded-3xl shadow-glow"
              >
                <source src="/videos/hamburguer_exploded.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}