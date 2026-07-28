export type MenuCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCount: number;
};

export type Diet = "veg" | "vegan" | "gf" | "spicy";

export type Dish = {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceCents: number;
  images: string[];
  categorySlug: string;
  rating: number;
  reviewCount: number;
  tag: "popular" | "new" | "chef" | null;
  diet: Diet[];
};

const categories: MenuCategory[] = [
  {
    id: "c-starters",
    name: "Starters",
    slug: "starters",
    description: "Small plates to share while you settle in.",
    itemCount: 9,
  },
  {
    id: "c-pizza",
    name: "Wood-Fired Pizza",
    slug: "pizza",
    description: "72-hour dough, blistered in a 400°C oven.",
    itemCount: 8,
  },
  {
    id: "c-mains",
    name: "Mains",
    slug: "mains",
    description: "Hearty plates built around the grill.",
    itemCount: 12,
  },
  {
    id: "c-bowls",
    name: "Bowls & Salads",
    slug: "bowls",
    description: "Bright, seasonal and packed with greens.",
    itemCount: 7,
  },
  {
    id: "c-desserts",
    name: "Desserts",
    slug: "desserts",
    description: "The sweet reason to save room.",
    itemCount: 6,
  },
  {
    id: "c-drinks",
    name: "Drinks",
    slug: "drinks",
    description: "Cocktails, natural wine and house sodas.",
    itemCount: 15,
  },
];

const dishes: Dish[] = [
  {
    id: "d-arancini",
    name: "Truffle Arancini",
    slug: "truffle-arancini",
    description: "Crispy risotto balls, taleggio, black truffle aioli.",
    priceCents: 1200,
    images: [],
    categorySlug: "starters",
    rating: 4.8,
    reviewCount: 214,
    tag: "popular",
    diet: ["veg"],
  },
  {
    id: "d-padron",
    name: "Charred Padrón Peppers",
    slug: "charred-padron-peppers",
    description: "Blistered peppers, sea salt, lemon and olive oil.",
    priceCents: 900,
    images: [],
    categorySlug: "starters",
    rating: 4.6,
    reviewCount: 88,
    tag: null,
    diet: ["vegan", "gf"],
  },
  {
    id: "d-margherita",
    name: "Margherita di Bufala",
    slug: "margherita-di-bufala",
    description: "San Marzano, buffalo mozzarella, basil, olive oil.",
    priceCents: 1800,
    images: [],
    categorySlug: "pizza",
    rating: 4.9,
    reviewCount: 341,
    tag: "popular",
    diet: ["veg"],
  },
  {
    id: "d-nduja",
    name: "Spicy Nduja Pizza",
    slug: "spicy-nduja-pizza",
    description: "Calabrian sausage, honey, chilli, smoked scamorza.",
    priceCents: 2100,
    images: [],
    categorySlug: "pizza",
    rating: 4.7,
    reviewCount: 132,
    tag: null,
    diet: ["spicy"],
  },
  {
    id: "d-ribeye",
    name: "Wood-Fired Ribeye",
    slug: "wood-fired-ribeye",
    description: "45-day dry-aged ribeye, bone marrow butter, greens.",
    priceCents: 3400,
    images: [],
    categorySlug: "mains",
    rating: 4.9,
    reviewCount: 176,
    tag: "chef",
    diet: ["gf"],
  },
  {
    id: "d-salmon",
    name: "Pan-Seared Salmon",
    slug: "pan-seared-salmon",
    description: "Crisp-skin salmon, brown butter, capers, new potatoes.",
    priceCents: 2600,
    images: [],
    categorySlug: "mains",
    rating: 4.7,
    reviewCount: 121,
    tag: null,
    diet: ["gf"],
  },
  {
    id: "d-grainbowl",
    name: "Harvest Grain Bowl",
    slug: "harvest-grain-bowl",
    description: "Charred veg, farro, tahini, pomegranate, herbs.",
    priceCents: 1500,
    images: [],
    categorySlug: "bowls",
    rating: 4.6,
    reviewCount: 64,
    tag: "new",
    diet: ["vegan"],
  },
  {
    id: "d-tart",
    name: "Dark Chocolate Tart",
    slug: "dark-chocolate-tart",
    description: "70% ganache, sea salt, olive oil, crème fraîche.",
    priceCents: 1100,
    images: [],
    categorySlug: "desserts",
    rating: 4.9,
    reviewCount: 98,
    tag: "new",
    diet: ["veg"],
  },
];

export async function getMenuCategories(): Promise<MenuCategory[]> {
  return categories;
}

export async function getFeaturedDishes(): Promise<Dish[]> {
  return dishes;
}

export function categoryName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}
