// ============================================================================
// DADOS CENTRAIS — Gordinho Lanches
// Substitua os campos `image` pelos caminhos reais das fotos do restaurante.
// Todos os placeholders estão marcados com o prefixo ${basePath}/images/placeholder-*
// Cardápio transcrito a partir do material real enviado pelo cliente.
// ============================================================================

import { basePath } from "@/lib/basePath";

export const restaurantInfo = {
  name: `Gordinho Lanches`,
  slogan: `Mais que um lanche. Uma experiência.`,
  city: `Araras`,
  state: `SP`,
  // TODO: confirmar endereço exato com o proprietário
  address: `Araras, São Paulo - SP`,
  phone: `+55 19 99935-0709`,
  whatsapp: `5519999350709`, // Disk Entrega — número real informado no cardápio
  hours: [
    { day: `Terça a Domingo`, time: `18h30 às 23h30` },
    { day: `Segunda-feira`, time: `Fechado` },
  ],
  social: {
    instagram: `https://instagram.com/gordinhodolanches`,
    facebook: `https://facebook.com/gordinholanchesararas`,
  },
  rating: 4.8,
  reviewCount: 320,
};

export const stats = [
  { value: "4,9", label: "Avaliação geral", stars: true },
  { value: "+2.300", label: "Pedidos realizados" },
  { value: "Entrega rápida", label: "Em até 45 min" },
  { value: "Ingredientes frescos", label: "E de qualidade" },
];

// ---- Categorias do cardápio (usadas no filtro da seção Cardápio) ----------

export type MenuCategory = {
  id: string;
  label: string;
};

export const menuCategories: MenuCategory[] = [
  { id: `famosinhos`, label: `Os Famosinhos` },
  { id: `carne`, label: `Especiais de Carne` },
  { id: `lanches-especiais`, label: `Lanches Especiais` },
  { id: `frango`, label: `Especiais de Frango` },
  { id: `cachorro-quente`, label: `Cachorro Quente Especial` },
  { id: `hamburguer`, label: `Especiais de Hambúrguer` },
  { id: `batatas`, label: `Batatas` },
  { id: `bebidas`, label: `Bebidas` },
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string; // deve corresponder a um id em `menuCategories`
  tag?: string;
};

export const menuItems: MenuItem[] = [
  // ---- OS FAMOSINHOS -------------------------------------------------------
  {
    id: `irmaos-bolacha`,
    name: `Irmãos Bolacha`,
    description:
      `Muita carne bovina, cebola, bastante mussarela, bastante catupiry Scala, bacon Aurora e folheado com uma capa de queijo.`,
    price: `R$ 60,00`,
    image: `${basePath}/images/produtos/famosinhos/irmao.jpg`,
    category: `famosinhos`,
    tag: `Mais pedido`,
  },
  {
    id: `x-roscao`,
    name: `X-Roscão`,
    description:
      `Muita carne bovina, muita mussarela, presunto, ovo, bacon Aurora, bastante catupiry Scala, alface, tomate, cebola, milho, batata palha e folheado com uma capa de queijo com bacon.`,
    price: `R$ 85,00`,
    image: `${basePath}/images/produtos/famosinhos/xroscao.jpg`,
    category: `famosinhos`,
    tag: `Mais pedido`,
  },
  {
    id: `x-patola-pao-frances`,
    name: `X-Patola (Pão Francês)`,
    description:
      `02 hambúrgueres de 120 gramas bovino, bastante mussarela, presunto, bacon Aurora, catupiry Scala, alface, milho e batata palha.`,
    price: `R$ 55,00`,
    image: `${basePath}/images/produtos/famosinhos/xpatola_frances.jpg`,
    category: `famosinhos`,
  },
  {
    id: `x-patola-pao-hamburguer`,
    name: `X-Patola (Pão de Hambúrguer)`,
    description:
      `02 hambúrgueres de 120 gramas bovino, bastante mussarela, presunto, bacon Aurora, catupiry Scala, alface, milho e batata palha.`,
    price: `R$ 45,00`,
    image: `${basePath}/images/produtos/famosinhos/xpatola_hamburguer.jpg`,
    category: `famosinhos`,
  },
  {
    id: `x-bencao`,
    name: `X-Benção`,
    description:
      `3 hambúrgueres de 120 gramas bovino, bastante mussarela, presunto, ovos, 3 salsichas, bacon Aurora, catupiry Scala, alface, tomate, milho e batata palha.`,
    price: `R$ 75,00`,
    image: `${basePath}/images/produtos/famosinhos/xbencao.jpg`,
    category: `famosinhos`,
  },
  {
    id: `tim-capoeira`,
    name: `Tim Capoeira`,
    description: `Muita carne bovina, bastante mussarela, bacon e batata palha.`,
    price: `R$ 54,00`,
    image: `${basePath}/images/produtos/famosinhos/timcapoeira.jpg`,
    category: `famosinhos`,
  },
  {
    id: `super-dogao`,
    name: `Super Dogão`,
    description:
      `Bastante salsichas, bastante mussarela, bacon Aurora, catupiry Scala, alface, milho, batata palha e folheado com uma capa de queijo.`,
    price: `R$ 50,00`,
    image: `${basePath}/images/produtos/famosinhos/superdogao.jpeg`,
    category: `famosinhos`,
  },
  {
    id: `x-gordinho-1`,
    name: `X-Gordinho 1`,
    description:
      `Muita carne bovina, frango, 1 carne de hambúrguer bovino de 120g, bastante mussarela, presunto, ovos, bacon Aurora, catupiry Scala, alface, tomate, milho e batata palha.`,
    price: `R$ 125,00`,
    image: `${basePath}/images/produtos/famosinhos/xgordinho1.jpg`,
    category: `famosinhos`,
  },
  {
    id: `x-tudo-hamburguer-pao-frances`,
    name: `X-Tudo de Hambúrguer (Pão Francês)`,
    description:
      `2 hambúrgueres de 120 gramas bovinos, bastante mussarela, presunto, ovo, bacon Aurora, catupiry Scala, alface e milho.`,
    price: `R$ 55,00`,
    image: `${basePath}/images/produtos/famosinhos/xtudo.jpg`,
    category: `famosinhos`,
  },
  {
    id: `x-gordinho-2`,
    name: `X-Gordinho 2`,
    description:
      `800 gramas de muita carne bovina, 800 gramas de frango, muita mussarela, presunto, ovos, bacon Aurora, catupiry Scala, alface, tomate, milho e batata palha.`,
    price: `R$ 245,00`,
    image: `${basePath}/images/produtos/famosinhos/xgordinho2.jpg`,
    category: `famosinhos`,
  },

  // ---- ESPECIAIS DE CARNE (no pão francês) --------------------------------
  {
    id: `churrasco`,
    name: `Churrasco`,
    description: `Muita carne bovina e bastante mussarela.`,
    price: `R$ 48,00`,
    image: `${basePath}/images/produtos/especiais_carne/churrasco.avif`,
    category: `carne`,
  },
  {
    id: `americano-de-carne`,
    name: `Americano de Carne`,
    description: `Muita carne bovina, bastante mussarela, ovos, alface e tomate.`,
    price: `R$ 53,00`,
    image: `${basePath}/images/produtos/especiais_carne/americano.jpg`,
    category: `carne`,
  },
  {
    id: `x-tudo-de-carne`,
    name: `X-Tudo de Carne`,
    description:
      `Muita carne bovina, bastante mussarela, presunto, ovo, bacon Aurora, alface, tomate e milho.`,
    price: `R$ 55,00`,
    image: `${basePath}/images/produtos/especiais_carne/xtudo.jpg`,
    category: `carne`,
  },

  // ---- LANCHES ESPECIAIS (no pão francês) ---------------------------------
  {
    id: `hamburguer-duplo-frances`,
    name: `Hambúrguer Duplo`,
    description:
      `2 carnes de hambúrgueres de 120 gramas bovino, bastante mussarela, bacon, alface, milho e batata.`,
    price: `R$ 34,00`,
    image: `${basePath}/images/produtos/lanches_especiais/duplo.png`,
    category: `lanches-especiais`,
  },
  {
    id: `misto-quente`,
    name: `Misto Quente`,
    description: `Bastante mussarela e bastante presunto.`,
    price: `R$ 28,00`,
    image: `${basePath}/images/produtos/lanches_especiais/misto_quente.jpg`,
    category: `lanches-especiais`,
  },
  {
    id: `vegetariano`,
    name: `Vegetariano`,
    description: `Bastante ovos, bastante mussarela, alface, tomate e milho.`,
    price: `R$ 35,00`,
    image: `${basePath}/images/produtos/lanches_especiais/vegetariano.jpg`,
    category: `lanches-especiais`,
  },

  // ---- ESPECIAIS DE FRANGO (no pão francês) -------------------------------
  {
    id: `galinhao`,
    name: `Galinhão`,
    description: `Frango, bastante mussarela, alface e milho.`,
    price: `R$ 48,00`,
    image: `${basePath}/images/produtos/especiais_frango/galinhao.jpg`,
    category: `frango`,
  },
  {
    id: `x-tudo-de-frango`,
    name: `X-Tudo de Frango`,
    description:
      `Frango, bastante mussarela, presunto, ovo, bacon Aurora, alface, tomate e milho.`,
    price: `R$ 55,00`,
    image: `${basePath}/images/produtos/especiais_frango/xtudo.jpg`,
    category: `frango`,
  },

  // ---- CACHORRO QUENTE ESPECIAL (pão de cachorro quente) ------------------
  {
    id: `cachorro-quente-duplo`,
    name: `Cachorro Quente Duplo`,
    description: `2 salsichas Perdigão, alface, milho, batata palha e ketchup.`,
    price: `R$ 15,00`,
    image: `${basePath}/images/produtos/hotdog_especial/hotdog_duplo.jpg`,
    category: `cachorro-quente`,
  },
  {
    id: `cachorro-especial`,
    name: `Cachorro Especial`,
    description: `2 salsichas Perdigão, bacon, alface, milho, batata palha e ketchup.`,
    price: `R$ 20,00`,
    image: `${basePath}/images/produtos/hotdog_especial/hotdog_duplo_especial.jpg`,
    category: `cachorro-quente`,
  },

  // ---- ESPECIAIS DE HAMBÚRGUER (no pão de hambúrguer) ---------------------
  {
    id: `hamburguer-simples`,
    name: `Hambúrguer`,
    description: `1 carne de hambúrguer de 120 gramas bovino, bastante mussarela, bacon Aurora, alface, milho e batata palha.`,
    price: `R$ 23,00`,
    image: `${basePath}/images/produtos/especiais_hamburguer/hamburguer.avif`,
    category: `hamburguer`,
  },
  {
    id: `hamburguer-duplo`,
    name: `Hambúrguer Duplo`,
    description:
      `2 carnes de hambúrgueres de 120 gramas bovino, bacon Aurora, alface, milho e batata palha.`,
    price: `R$ 27,00`,
    image: `${basePath}/images/produtos/especiais_hamburguer/hamburguer_duplo.png`,
    category: `hamburguer`,
  },
  {
    id: `x-tudo-de-hamburguer`,
    name: `X-Tudo de Hambúrguer`,
    description:
      `1 carne de hambúrguer de 120 gramas bovino, bastante mussarela, presunto, bacon Aurora, ovo, alface, tomate e milho.`,
    price: `R$ 35,00`,
    image: `${basePath}/images/produtos/especiais_hamburguer/xtudo.avif`,
    category: `hamburguer`,
  },
  {
    id: `x-salada`,
    name: `X-Salada`,
    description: `1 carne de hambúrguer de 120 gramas bovino, bastante mussarela, alface e tomate.`,
    price: `R$ 28,00`,
    image: `${basePath}/images/produtos/especiais_hamburguer/xsalada.avif`,
    category: `hamburguer`,
  },
  {
    id: `x-bacon`,
    name: `X-Bacon`,
    description:
      `1 carne de hambúrguer de 120 gramas bovino, alface, bastante mussarela, presunto e muito bacon Aurora.`,
    price: `R$ 32,00`,
    image: `${basePath}/images/produtos/especiais_hamburguer/xbacon.jpg`,
    category: `hamburguer`,
  },
  {
    id: `x-egg`,
    name: `X-Egg`,
    description: `2 carnes de hambúrgueres de 120 gramas bovino, bastante mussarela e ovos.`,
    price: `R$ 30,00`,
    image: `${basePath}/images/produtos/especiais_hamburguer/xegg.webp`,
    category: `hamburguer`,
  },

  // ---- BATATAS -------------------------------------------------------------
  {
    id: `batata-tradicional`,
    name: `Batata Tradicional`,
    description: `Porção de batata frita tradicional, sequinha e crocante.`,
    price: `R$ 15,00`,
    image: `${basePath}/images/produtos/batatas/batata_frita_tradicional.jpg`,
    category: `batatas`,
  },
  {
    id: `batata-cheddar-bacon`,
    name: `Batata com Cheddar Scala e Bacon Aurora`,
    description: `Porção de batata frita coberta com cheddar Scala e bacon Aurora.`,
    price: `R$ 20,00`,
    image: `${basePath}/images/produtos/batatas/batata_bacon_cheddar.jpg`,
    category: `batatas`,
  },

  // ---- BEBIDAS ---------------------------------------------------------------
  {
    id: `coca-cola-2l`,
    name: `Coca-Cola 2L`,
    description: `Garrafa de 2 litros, gelada.`,
    price: `R$ 16,00`,
    image: `${basePath}/images/produtos/bebidas/coca_cola_2l.webp`,
    category: `bebidas`,
  },
  {
    id: `guarana-2l`,
    name: `Guaraná Antarctica 2L`,
    description: `Garrafa de 2 litros, gelada.`,
    price: `R$ 15,00`,
    image: `${basePath}/images/produtos/bebidas/guarana_antarctica_2l.webp`,
    category: `bebidas`,
  },
  {
    id: `coca-cola-350`,
    name: `Coca-Cola 350ml`,
    description: `Lata gelada.`,
    price: `R$ 8,00`,
    image: `${basePath}/images/produtos/bebidas/coca_cola_350.webp`,
    category: `bebidas`,
  },
  {
    id: `coca-cola-zero-350`,
    name: `Coca-Cola Zero 350ml`,
    description: `Lata gelada.`,
    price: `R$ 8,00`,
    image: `${basePath}/images/produtos/bebidas/coca_cola_350_zero.webp`,
    category: `bebidas`,
  },
  {
    id: `guarana-350`,
    name: `Guaraná Antarctica 350ml`,
    description: `Lata gelada.`,
    price: `R$ 8,00`,
    image: `${basePath}/images/produtos/bebidas/guarana_antarctica_350.webp`,
    category: `bebidas`,
  },
  {
    id: `fanta-laranja-350`,
    name: `Fanta Laranja 350ml`,
    description: `Lata gelada.`,
    price: `R$ 8,00`,
    image: `${basePath}/images/produtos/bebidas/fanta_laranja_350.png`,
    category: `bebidas`,
  },
  {
    id: `fanta-uva-350`,
    name: `Fanta Uva 350ml`,
    description: `Lata gelada.`,
    price: `R$ 8,00`,
    image: `${basePath}/images/produtos/bebidas/fanta_uva_350.png`,
    category: `bebidas`,
  },
  {
    id: `agua-com-gas`,
    name: `Água com Gás`,
    description: `Garrafa gelada.`,
    price: `R$ 6,00`,
    image: `${basePath}/images/produtos/bebidas/agua_gas.webp`,
    category: `bebidas`,
  },
  {
    id: `agua-sem-gas`,
    name: `Água sem Gás`,
    description: `Garrafa gelada.`,
    price: `R$ 6,00`,
    image: `${basePath}/images/produtos/bebidas/agua_sem_gas.webp`,
    category: `bebidas`,
  },
];

export type Ingredient = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const ingredients: Ingredient[] = [
  {
    id: `pao`,
    name: `Pão Brioche`,
    description: `Fermentação lenta, macio por fora e por dentro.`,
    image: `${basePath}/images/real/real-bun-top.png`,
  },
  {
    id: `carne`,
    name: `Blend Artesanal`,
    description: `Corte selecionado, moído diariamente na casa.`,
    image: `${basePath}/images/real/real-patty.png`,
  },
  {
    id: `queijo`,
    name: `Cheddar Cremoso`,
    description: `Derretido no ponto certo, sem exagero.`,
    image: `${basePath}/images/real/real-cheese.png`,
  },
  {
    id: `bacon`,
    name: `Bacon Crocante`,
    description: `Defumado e grelhado até o ponto perfeito.`,
    // TODO: sem foto real enviada ainda — trocar quando o cliente enviar.
    image: `${basePath}/images/placeholder-ingredient-bacon.png`,
  },
  {
    id: `cebola`,
    name: `Cebola`,
    description: `Fatiada na hora para dar equilíbrio ao sabor.`,
    image: `${basePath}/images/real/real-onion.png`,
  },
  {
    id: `alface`,
    name: `Alface Fresca`,
    description: `Selecionada e lavada na hora do preparo.`,
    image: `${basePath}/images/real/real-lettuce.png`,
  },
  {
    id: `tomate`,
    name: `Tomate Maduro`,
    description: `Fatiado na hora, sempre no ponto.`,
    image: `${basePath}/images/real/real-tomato.png`,
  },
];

export type Testimonial = {
  title: string;
  url: string;
  reviewUrl: string;
  name: string;
  text: string | null;
  stars: number;
};

export const testimonials: Testimonial[] = [{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Aurita Moscardi Aurita`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT210eFdFSjNNVmxMTFRSdlZtODVURGQyUjNodU9GRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOmtxWEJ3MVlLLTRvVm85TDd2R3huOFE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `ELIEL LIMA`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tzM1UwMXJZamMwWjFSWFlsUjROMUYwV1d0RlRtYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOks3U01rYjc0Z1RXYlR4N1F0WWtFTmc%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Wellington Costa`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25NMlIxWlRNWFo1WkhCM1owVTNjM3BvYlcxRWNuYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOnM2R1ZTMXZ5ZHB3Z0U3c3pobW1Ecnc%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Rebeca Tessari`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pORmNsaGFSRjk2VG5wTVJWOTBVR3hNWW10Rk5uYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOjNFclhaRF96TnpMRV90UGxMYmtFNnc%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Diniz Pereira de Oliveira`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21wMlExVXlTbE5QVlVkdlJIQXRYM1ZsTmxoVldIYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOmp2Q1UySlNPVUdvRHAtX3VlNlhVWHc%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `ppastorello1`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pGSlZtOUlRakZtVTBRME5rZHZVMjFFYURKTGFVRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOjFJVm9IQjFmU0Q0NkdvU21EaDJLaUE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Maiara Fernandes`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tjeWRqVkdjemxsZWtOQ2NuQTJOSFZwTUdaVlIyYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOkcydjVGczllekNCcnA2NHVpMGZVR2c%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 3,
  "name": `Kevin Pesce`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pka1NGQk9jbEF5ZDFWdE0wVlFTVGhFVXpkb1pHYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOjdkSFBOclAyd1VtM0VQSThEUzdoZGc%7C%7C?hl=pt-BR`,
  "text": `Os lanches são gostosos, ambiente na beira da avenida, possui muito lixo de lanche jogado próximo ao carrinho e aos clientes.\nGramado alto precisava dar uma aparada pra melhorar o ambiente.\nTem bastante vagas para estacionar na rua.\nLanche fica pronto bem rápido.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Ildemara Sousa`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21GYVdraEtaVVJQWkZCNloxVlBOR3htYm5sVlUwRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOmFaWkhKZURPZFB6Z1VPNGxmbnlVU0E%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Tamires Lopes`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21kcE9WWkZPRVZUZVRCUk9UWkJlVmd6ZGxGMFIwRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOmdpOVZFOEVTeTBROTZBeVgzdlF0R0E%7C%7C?hl=pt-BR`,
  "text": `O lanche é super saboroso, caprichado e muito grande. Chegou super rápido.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Bárbara Farinha`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tOcmRIaEpiR1ZEUm5ZeVdGVktZVVZwVEhGTWJrRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOkNrdHhJbGVDRnYyWFVKYUVpTHFMbkE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Antônio Carlos Cavalheiro`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tKVFYxZEVOekJ6UkVKaGNESlZhVXgwVWxRNWVYYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOkJTV1dENzBzREJhcDJVaUx0UlQ5eXc%7C%7C?hl=pt-BR`,
  "text": `Eu e minha esposa fomos muito bem atendidos, pena que só dá pra marcar 5 estrelas,vcs merecem uma constelação, já comi no local,e agora estou pedindo delivery,e tem mais... Ambiente familiar e são super educados, valeu a pena`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `LUIS ARMANDO`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xodldrdE5aMGMwV0RjMVRHTlNVVkp6VTFOT2VFRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOlhvWktNZ0c0WDc1TGNSUVJzU1NOeEE%7C%7C?hl=pt-BR`,
  "text": `Os produtos são um destaque à parte: muito bem preparados, de ótima qualidade e extremamente bem recheados. Dá para perceber o capricho no preparo e a preocupação em servir lanches e porções generosas. O sabor realmente vale a visita e ser cliente.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Aryadne Barboza`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tWc2IySlhaalY0VldwVVR6VTRSbWs1UkVGeVJHYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOkVsb2JXZjV4VWpUTzU4Rmk5REFyRGc%7C%7C?hl=pt-BR`,
  "text": `Melhor lanche do mundo. Super educados pra atender, pontuais no tempo de entrega.\nIngredientes de primeira. Parabens`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Juliana Spatti`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2w5TU9XdGtiM1pzTFZwTlp6ZFdMVUpZU2xnek5WRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOl9MOWtkb3ZsLVpNZzdWLUJYSlgzNVE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Jefferson Paixao`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pkTVVWTjRUekZSZVZWdk9WcEhPVVpIVkV0QmRWRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOjdMUVN4TzFReVVvOVpHOUZHVEtBdVE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Edvânia Neves`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2s5S1JXVndTbUpOVjJ4R09XMWFkMk0zYURsSWFrRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOk9KRWVwSmJNV2xGOW1ad2M3aDlIakE%7C%7C?hl=pt-BR`,
  "text": `Lanche perfeito, bem recheado.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Eduardo Sousa`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21kbWRrSkVTbkZZWlhveFEweFNkRTVhYkVOcVdsRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOmdmdkJESnFYZXoxQ0xSdE5abENqWlE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Luis Henrique Oliveira`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT205a2VIRm5WbkYwVDFCVWJrTjVlbVpmWjFwc2VXYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOm9keHFnVnF0T1BUbkN5emZfZ1pseWc%7C%7C?hl=pt-BR`,
  "text": `Muito gostoso, de baixo de uma árvore, bem gostoso a pracinha.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Flávio Cerqueira dos Santos`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tWa2VtOUZZVUZoUkZOUWNGSm5kbGRhYzI1eVZGRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOkVkem9FYUFhRFNQcFJndldac25yVFE%7C%7C?hl=pt-BR`,
  "text": `IRMÃOS BOLACHA (DE FRANGO)\nO MELHOR 🤯🤤`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Reginaldo Progette`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2sxQ1lVTlVaalprUVRGbFJIZFRSMngzTjB0aVVYYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOk1CYUNUZjZkQTFlRHdTR2x3N0tiUXc%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Renata Vieira Franquini`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2w4NU9EbENVWE40ZGtWM2FHMVFTRTVMVUVSYVJXYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOl85ODlCUXN4dkV3aG1QSE5LUERaRWc%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Agnes Costa`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xCWmFsazVaa3d6Ym5Vd1VFSnZVelZ1UTBGWWQzYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOlBZalk5ZkwzbnUwUEJvUzVuQ0FYd3c%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 1,
  "name": `Nicolly Monteiro`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2w5TFFrdHZUVlpaWkhOWVRGRkdWVmN5WkhrMk0yYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOl9LQktvTVZZZHNYTFFGVVcyZHk2M2c%7C%7C?hl=pt-BR`,
  "text": `2 horas de espera pra comer o lanche! O lanche é bom, mas A demora é tanta que eu tô tendo tempo até de vim avaliar, comi um amendoim de tanta espera!!! Atendimento é pessimo!!!!! Nunca mais, não indico.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Bernardo Rodrigo`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT205TFMwVkhNVWN3Wm5KUVkwOWlkbGR2VDNCWVNuYxAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOm9LS0VHMUcwZnJQY09idldvT3BYSnc%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Paulo Chagas`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pGeE5Ga3lhbkZrUW0xNGNHcEhjRWhOVlVoMGQxRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOjFxNFkyanFkQm14cGpHcEhNVUh0d1E%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Paulinho Kuliki`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2poQ1ZYSklaVFJMYVU1a09WcHRaRlZtUm5Ga2FWRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOjhCVXJIZTRLaU5kOVptZFVmRnFkaVE%7C%7C?hl=pt-BR`,
  "text": `Lanche ótimo\nUm capricho\nTudo de primeira qualidade\nSem contar com a higiene e organização\nEstão de parabéns`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 1,
  "name": `W. Bueno`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21KMGNrbFZkMjVuWW5BMU5uZDNZVFp1VFhOUFJGRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOmJ0cklVd25nYnA1Nnd3YTZuTXNPRFE%7C%7C?hl=pt-BR`,
  "text": `Péssima tudo oque pedíamos não tinha. Lanche muito ruim.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Willian Jose`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2w5NWQxSklPREp2UmpSaFJHZGFZMVpXUjAxalNFRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CAIQACodChtycF9oOl95d1JIODJvRjRhRGdaY1ZWR01jSEE%7C%7C?hl=pt-BR`,
  "text": `Melhor lanche de araras, muito toppp recomendo, a preço bem acessível`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Miguel Vicentim`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURvOEx5aTlBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgMDo8Lyi9AE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Glauber Louza`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNJb3VTcEFREAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgMCIouSpAQ%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Tukinha OLIVEIRA`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUR3X0xtRTNBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgMDw_LmE3AE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 4,
  "name": `Jonas Eduardo Bini`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURRcE5MUHp3RRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgMDQpNLPzwE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Marcelo Aparecido`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNRdnFMaDZBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgMCQvqLh6AE%7C%7C?hl=pt-BR`,
  "text": `lanches muito bom, uma delicia, ótimo atendimento, o filho do gordinho tem o atendimento melhor que muitas lanchonetes, demora bastante principalmente sexta, mas o lanche e maravilhoso`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Jaqueline Lima`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNReHNIRDJnRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgMCQxsHD2gE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Renata Santos Guedes`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNxczZ5UTd3RRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICqs6yQ7wE%7C%7C?hl=pt-BR`,
  "text": `Pedi um lanche de churrasco, com valor de 55 reais, o mesmo veio com Menas quantidade de carne, e o pão veio seco, faltando ingredientes`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Fábio Jesus`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNfbGRydGZ3EAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIC_ldrtfw%7C%7C?hl=pt-BR`,
  "text": `Melhor lanchonete de Araras, super recomendo! 😍`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 1,
  "name": `Lucas_P`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURmNHRDNVpnEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDf4tC5Zg%7C%7C?hl=pt-BR`,
  "text": `O sabor dos lanches é muito bom, mas o atendimento deixa a desejar, pessoal atrapalhado e mal educado, o pior é a demora, 3x que fui levou mais 2 horas e meia pra ficar pronto, depois da última vez , desisto passou vários na frente...`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Daniele Pereira`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNuNExld1VREAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICn4LewUQ%7C%7C?hl=pt-BR`,
  "text": `Lanche maravilhoso e bem recheado, sem falar no sabor e ingredientes de qualidade!`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Dayse Fernandes`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURINDh1VDZnRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDH48uT6gE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 4,
  "name": `Maria Eduarda Batista`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNIekpmZzJBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICHzJfg2AE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Douglas lucca`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUQ3MjktYWN3EAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgID729-acw%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Rafaella Germano`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUQ3NXBiZ213RRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgID75pbgmwE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 1,
  "name": `Fernando Brito de Sousa Júnior`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNiMmRMWkpnEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICb2dLZJg%7C%7C?hl=pt-BR`,
  "text": `Lanche muito gostoso, porém tem que estar com muita paciência, o WhatsApp demora 30 min pra responder, quando vai buscar por mais que você chegue atrasado eles vão estar mais atrasado ainda, então não se preocupe, e caso peça pra entregar, ai sim você tem que ser rápido, pois eles contrataram o papa-léguas para fazer entrega, e não é porque ele entrega rápido e sim porque se você não for atender rápido ele vai te dar um sermão de 5 minutos pra mais.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `DANICARDOZOSANTOS`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNiOE56YWR3EAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICb8Nzadw%7C%7C?hl=pt-BR`,
  "text": `Produtos de qualidade`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Márcio Pereira`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURyeE5iTHVBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDrxNbLuAE%7C%7C?hl=pt-BR`,
  "text": `Sensacional!!!!`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 1,
  "name": `sheila silva`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNyd2E2Ym53RRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICrwa6bnwE%7C%7C?hl=pt-BR`,
  "text": `Péssimo atendimento, funcionário extremamente sem educação e sem nenhuma  capacidade pra trabalho com atendimento ao público, o dono nem um pouco simpático ou atencioso com os clientes, o lanche em si dá pra comer,sai da minha cidade pra viver essa experiência péssima,não indico!!!`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 1,
  "name": `Ana julia Silva`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNybnMyYy1BRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICrns2c-AE%7C%7C?hl=pt-BR`,
  "text": `Atendimento ruim, má organização, e parece que estão nos atendendo na força do ódio.\nDesanimador!  Não volto mais.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Gabriel Goes`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNyaklqdGJREAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICrjIjtbQ%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 1,
  "name": `Davi Francelino`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURUbWEtTXdnRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDTma-MwgE%7C%7C?hl=pt-BR`,
  "text": `Lanche ruim, e menospreza as pessoas e ainda se negou dar comida para um morador de rua e se diz evangelico`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Ana paula Milezi`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURqdF9YR1pnEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDjt_XGZg%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Lucas Cassiano`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURqX3R2RnFRRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDj_tvFqQE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Rodrigo Teixeira dos Santos`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNqOXVlTkdBEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICj9ueNGA%7C%7C?hl=pt-BR`,
  "text": `Lanches acima da média em relação a sabor e qualidade.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 4,
  "name": `Maria Cristina Fernandes Perillo`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUQ5dTdhaDN3RRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgID9u7ah3wE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Fellipe Augusto`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUQ5aGNqSUR3EAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgID9hcjIDw%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 4,
  "name": `Bete Belletti`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUR0bl82ZXpBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDtn_6ezAE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Marcelo David Giménez Cárdenas`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUROcDZUQ2hnRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDNp6TChgE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Eliana Reis`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNOMDVIRkl3EAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICN05HFIw%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Mayara Santos`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNOcHRqN3pRRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICNptj7zQE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Jéssica Cristina`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMxdlozT3B3RRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIC1vZ3OpwE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Jose Eduardo Francelino`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMxc0xTUnZBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIC1sLSRvAE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 1,
  "name": `Eduardo BarbozacomZ`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURWaklfbWdnRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDVjI_mggE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Eduardo José Bertin`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURlalpMWnBnRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDejZLZpgE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Ivan Bataglini`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURsNmJxU0tREAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDl6bqSKQ%7C%7C?hl=pt-BR`,
  "text": `A melhor panqueca da baixada santista a única de sabores diversos`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Ryan Eduardo Rocha`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURseWQtS0xREAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDlyd-KLQ%7C%7C?hl=pt-BR`,
  "text": `Muito bomm`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Irlane Silva`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNsaV9QbjhBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICli_Pn8AE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Aguinaldo Lima`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURGNXB1X01BEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDF5pu_MA%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Eder Moreira Simões`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURaak82aDNBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDZjO6h3AE%7C%7C?hl=pt-BR`,
  "text": `Lugar muito bom lanche saboroso sem gordureira e muito caprichado!`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Tiago Maiochi (Ha pi)`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURaa1BQV1VREAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDZkPPWUQ%7C%7C?hl=pt-BR`,
  "text": `Lanche sempre muito bom com bons ingredientes.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Bruna Letícia`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURwNV9YakhnEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDp5_XjHg%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 4,
  "name": `Reginaldo Joaquín dos santos Santos`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURwaWF5c1VREAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDpiaysUQ%7C%7C?hl=pt-BR`,
  "text": `Local e bom uma pena não ter sanitário comida mais ou menos preço salgado`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Hugo B. Mariano`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURKMjRqS1RREAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDJ24jKTQ%7C%7C?hl=pt-BR`,
  "text": `Comida muito boa, lugar e atendimento excelentes!!`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 3,
  "name": `Danilo Cardoso`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURKODdYY3N3RRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDJ87XcswE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Karen Garcia`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURKa3FlaDJRRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDJkqeh2QE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Durval Neves Ana Maria`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURKNFBuekVnEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDJ4PnzEg%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Valdir Bueno`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNKc0w2emVBEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICJsL6zeA%7C%7C?hl=pt-BR`,
  "text": `Muito bom mesmo 😃`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Daniel Corrente Franzini`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUR4eDRXR01REAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDxx4WGMQ%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Daiane Rodrigues`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUR4NWZuVGR3EAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDx5fnTdw%7C%7C?hl=pt-BR`,
  "text": `Irmãos bolacha é o melhor lanche! Experimente!`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Denise Brito`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUR4aGF5a2dnRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDxhaykggE%7C%7C?hl=pt-BR`,
  "text": `Muito bom!!!`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Silvia Carreiro`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUR4M1A3LXNBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDx3P7-sAE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Roberto Mascarenhas`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURSalo2aHJnRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDRjZ6hrgE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 3,
  "name": `Lamartine Batistela Filho`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNSdnZfNFBnEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICRvv_4Pg%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 4,
  "name": `Lucas Ferreira (Lucas)`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURoMS15eU13EAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDh1-yyMw%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Tarsila Nascimento`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURobzRYbHBRRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDho4XlpQE%7C%7C?hl=pt-BR`,
  "text": `Já virou atração turistica pra mim, toda vez que trago um amigo de fora, ele precisa provar o 'irmaos bolacha'. Pelo amor de deus, que lanche BOM. Tem que comer na hora, porque a crostinha de parmesão deixa de ficar crocante se você embalar o lanche quente...`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Arnaldo Gomes Da Silva`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURod3BpUlZREAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDhwpiRVQ%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 4,
  "name": `Luiz Cesar Bueno`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNoajhqZ3dBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIChj8jgwAE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Matteus Pavin`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNocDhQX3RRRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIChp8P_tQE%7C%7C?hl=pt-BR`,
  "text": `O melhor lanche que já comi`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 4,
  "name": `Marcos Edvaldo Consani`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNobThUTWxBRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIChm8TMlAE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Marco Medeiros`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNob3MtQ2Z3EAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIChos-Cfw%7C%7C?hl=pt-BR`,
  "text": `O lanche é muito bem feito, dá tranquilamente para duas pessoas. Os atendentes são simpáticos e atenciosos. Como é uma barraca, as mesinhas são dispostas na calçada, e a inclinação incomoda um pouco quem está sentado. Tirando isso, preço justo, e o cardápio é bem variado. Gostei bastante.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Guilherme Villas Boas`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNodUxIdXpRRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIChuLHuzQE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Felipe Zago`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNocU1TQ1pREAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIChqMSCZQ%7C%7C?hl=pt-BR`,
  "text": `O brabo!!! X Roscãooooo`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Leticia Silva`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURCcmI2MWJBEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDBrb61bA%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Rhayanne Scatolin`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURCb3RqeEhnEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIDBotjxHg%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 1,
  "name": `Liniker Rotta`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNCcHQySUtnEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgICBpt2IKg%7C%7C?hl=pt-BR`,
  "text": `Péssimo atendimento, estava movimentado sim, mas o lanche segundo a atendente demoraria meia hora, esperamos duas horas e a atendente nos enrolando. Descaso com cliente.`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 3,
  "name": `Sérgio Júnior`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUQtdlpXTGRBEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgID-vZWLdA%7C%7C?hl=pt-BR`,
  "text": `O lanche e bom, faltou uma área coberta e um pouco de agilidade.\nEsperei por dois lanches na faixa de 2 horas e ainda não veio o que tinha pedido. Porém a qualidade e ótima`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Cinthia Monteiro de Barros`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMtdjR1WEhnEAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIC-v4uXHg%7C%7C?hl=pt-BR`,
  "text": `Lanche enorme, saboroso e muito bem feito!!! Amei!`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 4,
  "name": `Los treze garage`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMtaDl2QWlnRRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIC-h9vAigE%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 4,
  "name": `Israel Jacyntho`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMteHF1ek5REAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIC-xquzNQ%7C%7C?hl=pt-BR`,
  "text": null
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Raphael Fernando Mendes`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMtdXNucEVREAE!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIC-usnpEQ%7C%7C?hl=pt-BR`,
  "text": `Um dos melhores lugares pra se comer um bom lanche na cidade de araras`
},
{
  "title": `Gordinho Lanches`,
  "url": `https://www.google.com/maps/search/?api=1&query=Gordinho%20Lanches&query_place_id=ChIJZzQkd3Z3yJQRyVUeJVNSlRQ`,
  "stars": 5,
  "name": `Adamilton Ricci`,
  "reviewUrl": `https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMtZ096cmd3RRAB!2m1!1s0x0:0x14955253251e55c9!3m1!1s2@1:CIHM0ogKEICAgIC-gOzrgwE%7C%7C?hl=pt-BR`,
  "text": `Ótimo atendimento e um ótimo ambiente. Os lanches são uma delícia. Super recomendo.`
}];

// Galeria — grid irregular. Substituir pelas fotos reais do Instagram/Facebook.
export const galleryImages = [
  { id: `g1`, image: `${basePath}/images/gallery/lanche.jpg`, alt: `Hambúrguer artesanal Gordinho Lanches` },
  { id: `g2`, image: `${basePath}/images/gallery/lanche2.jpg`, alt: `Ambiente da hamburgueria` },
  { id: `g3`, image: `${basePath}/images/gallery/lanche3.jpg`, alt: `Preparo na chapa` },
];

export const galleryVideos = [
  { id: `g1`, video: `${basePath}/videos/lanche.mp4`, alt: `Video de um lanche` },
  { id: `g2`, video: `${basePath}/videos/lanche2.mp4`, alt: `Video de um lanche` },
  { id: `g3`, video: `${basePath}/videos/lanche3.mp4`, alt: `Video de um lanche` }
]

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${restaurantInfo.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}