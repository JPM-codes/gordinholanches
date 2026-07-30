# Gordinho Lanches — Landing Page

Landing page premium para a hamburgueria **Gordinho Lanches** (Araras/SP).
Stack: Next.js 14 (App Router) · React · TypeScript · Tailwind CSS · Framer Motion · Lenis · Lucide Icons.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.
Para visualizar uma prévia, clique <a href="https://jpm-codes.github.io/gordinholanches/">AQUI</a>!


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
