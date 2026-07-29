"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/lib/data";

// Define alturas variadas para criar o grid irregular / editorial
const spanClasses = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
];

export default function Gallery() {
  return (
    <section id="galeria" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-gold">
            Galeria
          </p>
          <h2 className="font-display text-5xl text-cream sm:text-6xl">
            O universo Gordinho
          </h2>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${spanClasses[i % spanClasses.length]}`}
            >
              {/* Placeholder — substituir pelas fotos reais do Instagram/Facebook */}
              <Image
                src={img.image}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:saturate-[1.15]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-char/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
