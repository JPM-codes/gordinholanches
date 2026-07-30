import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import { restaurantInfo } from "@/lib/data";
import { FaFacebook, FaInstagram, FaMapPin, FaPhone } from "react-icons/fa";
import { basePath } from "@/lib/basePath";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src={`${basePath}/images/logo.png`}
              alt="Gordinho Lanches"
              width={64}
              height={64}
            />
            <span className="font-display text-lg text-cream">GORDINHO LANCHES</span>
          </div>
          <p className="max-w-xs text-sm text-cream/50">
            {restaurantInfo.slogan}
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={restaurantInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Gordinho Lanches"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href={restaurantInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Gordinho Lanches"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-cream/40">
            Contato
          </h3>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2">
              <FaMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {restaurantInfo.address}
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="h-4 w-4 shrink-0 text-gold" />
              {restaurantInfo.phone}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-cream/40">
            Horários
          </h3>
          <ul className="space-y-3 text-sm text-cream/70">
            {restaurantInfo.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {h.day}
                  <br />
                  <span className="text-cream/50">{h.time}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          {/* TODO: substituir pelo embed real do Google Maps com o endereço definitivo */}
          <iframe
            title="Localização Gordinho Lanches"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8753.905919856865!2d-47.393202499999994!3d-22.3573641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8777677243467%3A0x14955253251e55c9!2sGordinho%20Lanches!5e1!3m2!1sen!2sbr!4v1785300259790!5m2!1sen!2sbr"
            width="100%"
            height="220"
            style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/5 pt-6 text-center text-xs text-cream/30">
        © {new Date().getFullYear()} Gordinho Lanches. Todos os direitos reservados.
      </div>
    </footer>
  );
}
