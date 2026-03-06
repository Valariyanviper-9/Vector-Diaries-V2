export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Emerald Horizon Elegance",
    price: 15,
    category: "Noir Art",
    description: "A stylized portrait of a woman with flowing brown hair against a muted green city skyline. She wears a sleek black turtleneck and a classic silver watch, exuding modern sophistication.",
    image: "/Graphic Novel_1.png"
  },
  {
    id: "2",
    title: "Obsidian Skyline Gaze",
    price: 15,
    category: "Noir Art",
    description: "A moody, atmospheric portrait of a woman with dark wavy hair and wire-rimmed glasses. Set against a dark cityscape, her black cable-knit sweater and layered gold necklaces add a touch of cozy elegance.",
    image: "/Graphic Novel_2.png"
  },
  {
    id: "3",
    title: "Scarlet Manuscript",
    price: 15,
    category: "Crimson Etching",
    description: "Dense crosshatching and stippling with a raw red brushstroke splash. Vintage editorial illustration dipped in drama. Limited print.",
    image: "/Crimson Etching_1.jpeg"
  },
  {
    id: "4",
    title: "The Red Theorem",
    price: 15,
    category: "Crimson Etching",
    description: "Ink-heavy linework with expressive crimson washes evoking tension and intensity. Archival quality print.",
    image: "/Crimson Etching_2.jpeg"
  },
  {
    id: "5",
    title: "Drafting Reverie",
    price: 15,
    category: "Blueprint Dreams",
    description: "Pencil sketch meets watercolor blooms over architectural grid lines. Structured yet whimsical, like creativity drawn on graph paper.",
    image: "/Blueprint Dreams_1.jpeg"
  },
  {
    id: "6",
    title: "Soft Geometry",
    price: 15,
    category: "Blueprint Dreams",
    description: "Delicate graph-paper gridlines beneath loose watercolor washes and flowing pencil curves. Calm and contemplative.",
    image: "/Blueprint Dreams_2.png"
  }
];
