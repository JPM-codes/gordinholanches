import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/smooth-scroll";
import { CartProvider } from "@/context/CartContext";
import OrderModal from "@/components/OrderModal";
import { restaurantInfo } from "@/lib/data";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.gordinholanches.com.br"; // TODO: domínio real

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gordinho Lanches | Hamburgueria Artesanal em Araras/SP",
    template: "%s | Gordinho Lanches",
  },
  description:
    "Gordinho Lanches — hamburgueria artesanal em Araras/SP. Blend selecionado, ingredientes frescos e sabor que vicia. Peça agora pelo WhatsApp.",
  keywords: [
    "hamburgueria Araras",
    "hambúrguer artesanal Araras",
    "Gordinho Lanches",
    "lanches Araras SP",
    "delivery hambúrguer Araras",
  ],
  authors: [{ name: "Gordinho Lanches" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Gordinho Lanches",
    title: "Gordinho Lanches | Hamburgueria Artesanal em Araras/SP",
    description:
      "Mais que um lanche. Uma experiência. Peça agora e experimente o hambúrguer mais desejado de Araras.",
    images: [
      {
        url: "/images/placeholder-og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Gordinho Lanches - Hamburgueria Artesanal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gordinho Lanches | Hamburgueria Artesanal em Araras/SP",
    description: "Mais que um lanche. Uma experiência.",
    images: ["/images/placeholder-og-cover.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurantInfo.name,
    image: `${siteUrl}/images/placeholder-og-cover.jpg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: restaurantInfo.phone,
    priceRange: "R$$",
    servesCuisine: "Hamburgueria",
    address: {
      "@type": "PostalAddress",
      addressLocality: restaurantInfo.city,
      addressRegion: restaurantInfo.state,
      addressCountry: "BR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: restaurantInfo.rating,
      reviewCount: restaurantInfo.reviewCount,
    },
    sameAs: [restaurantInfo.social.instagram, restaurantInfo.social.facebook],
  };

  return (
    <html lang="pt-BR" className={`${anton.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-char font-body text-cream antialiased selection:bg-ember selection:text-cream">
        <SmoothScrollProvider>
          <CartProvider>
            {children}
            <OrderModal />
          </CartProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}