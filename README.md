# Gordinho Lanches — Landing Page

Landing page premium para a hamburgueria **Gordinho Lanches** (Araras/SP).
Stack: Next.js 14 (App Router) · React · TypeScript · Tailwind CSS · Framer Motion · Lenis · Lucide Icons.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## ⚠️ Itens pendentes antes de publicar

Este projeto foi entregue com **placeholders claramente identificados** em todos os
pontos onde faltam ativos reais do cliente. Nada aqui usa banco de imagens genérico —
são gerados localmente e marcados visualmente como "substituir". Antes de publicar:

### 1. Logo
- Substituir `public/images/placeholder-logo.svg` pela logo oficial da Gordinho Lanches
  (usada no `Navbar`, `Hero` e `Footer`). Se a logo real tiver fundo transparente em
  PNG/SVG, apenas troque o arquivo mantendo o mesmo nome (ou atualize os componentes).

### 2. Fotografias
Todas em `public/images/`, todas com aviso "PLACEHOLDER" visível:
- `placeholder-og-cover.jpg` — imagem de compartilhamento (Open Graph/WhatsApp).
- `placeholder-about.jpg` — foto grande da seção "Sobre" (preparo/ambiente).
- `placeholder-burger-1.jpg` a `placeholder-burger-4.jpg` — fotos dos itens do cardápio.
- `placeholder-gallery-1.jpg` a `placeholder-gallery-6.jpg` — fotos da galeria (Instagram/Facebook).
- `placeholder-ingredient-*.png` — ícones/recortes dos ingredientes (pão, carne, queijo,
  bacon, alface, tomate). Idealmente usar fotos reais recortadas com fundo transparente.

Recomendação: usar as fotos das redes sociais reais da Gordinho Lanches (nunca banco de
imagens genérico), em alta resolução, com boa iluminação — o design foi construído para
valorizar closes dramáticos do lanche.

### 3. Informações de contato — `lib/data.ts`
- `whatsapp`: número real com DDI (ex: `5519999998888`).
- `phone`: telefone de exibição.
- `address`: endereço completo confirmado com o proprietário.
- `hours`: dias e horários de funcionamento reais.
- `social.instagram` / `social.facebook`: links reais dos perfis.
- `rating` / `reviewCount`: atualizar conforme avaliações reais (Google/Facebook).
- `testimonials`: substituir pelos depoimentos reais de clientes (com nome, se autorizado).
- `menuItems`: revisar nomes, descrições e preços com o cardápio oficial atualizado.

### 4. SEO — `app/layout.tsx`
- Atualizar `siteUrl` para o domínio real assim que definido.
- Ajustar `metadataBase`, Open Graph e o JSON-LD `Restaurant` (endereço completo,
  coordenadas, telefone) com os dados definitivos.

### 5. Mapa — `components/Footer.tsx`
- O embed do Google Maps usa uma busca genérica por "Araras, SP". Trocar pelo link de
  incorporação (embed) real do endereço exato do estabelecimento.

## Estrutura do projeto

```
app/
  layout.tsx        → SEO, fontes (Anton + Inter), Schema.org, Lenis
  page.tsx           → composição das seções
  globals.css        → estilos base, foco de teclado, redução de movimento
components/
  Navbar.tsx          Hero.tsx           ExplodedBurger.tsx
  About.tsx           Menu.tsx           Ingredients.tsx
  Testimonials.tsx    Gallery.tsx        CTA.tsx
  Footer.tsx          WhatsAppButton.tsx
lib/
  data.ts             → todos os textos/preços/links em um só lugar
  smooth-scroll.tsx    → provider do Lenis (respeita prefers-reduced-motion)
scripts/
  gen_placeholders.py → gera as imagens placeholder (não precisa rodar de novo)
```

## Decisões de design

- **Paleta**: preto carvão (`#0B0A08`), vermelho brasa (`#C41E1E`), dourado/mostarda
  (`#E8A93A`) e branco quente (`#F3ECD9`) — extraída da identidade vermelho/amarelo/preto
  da marca.
- **Tipografia**: Anton para títulos (impacto, estilo "fast-food premium"), Inter para
  textos (legibilidade e neutralidade).
- **Elemento assinatura**: o hambúrguer em *exploded view* na Hero, cujas camadas (SVGs
  vetoriais) se aproximam, giram e se montam conforme o scroll — construído com
  Framer Motion (`useScroll` + `useTransform`), sem bibliotecas pesadas de 3D.
- **Acessibilidade**: foco de teclado visível, `prefers-reduced-motion` respeitado tanto
  no Lenis quanto no CSS global, textos alternativos em todas as imagens.

## Performance

- `next/font` para carregamento otimizado das fontes (sem layout shift).
- `next/image` em todas as fotografias, com `sizes` configurado.
- Animações via `transform`/`opacity` (GPU-friendly), sem reflow.
- Sem dependências de UI genéricas (sem Bootstrap, sem component libraries prontas).
"# gordinholanches" 
