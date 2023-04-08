// Importe os tipos necessários do NextJS
import { NextApiRequest, NextApiResponse } from "next";

// Defina o tipo de dados para o produto
type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: string;
  price: string;
};

// Defina uma lista de produtos
const products: Product[] = [
  {
    id: 1,
    image: "/mushroom-pizza.png",
    name: "Mushroom Pizza",
    rating: "⭐⭐⭐⭐⭐",
    price: "7.49",
    category: "Pizza",
  },
  {
    id: 2,
    image: "/italian-pizza.webp",
    name: "Italian Pizza",
    rating: "⭐⭐⭐⭐",
    price: "6.59",
    category: "Pizza",
  },
  {
    id: 3,
    image: "/sausage-pizza.png",
    name: "Sausage Pizza",
    rating: "⭐⭐⭐⭐⭐",
    price: "5.49",
    category: "Pizza",
  },
  {
    id: 4,
    image: "/tofu-burger.png",
    name: "Tofu Burger",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Burger",
  },
  {
    id: 5,
    image: "/beef-taco.png",
    name: "Beef-Taco",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Tacos",
  },
  {
    id: 6,
    image: "/chicken-taco.png",
    name: "Chicken Taco",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Tacos",
  },
  {
    id: 7,
    image: "/taco-shrimp.png",
    name: "Shrimp Taco",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Tacos",
  },
  {
    id: 8,
    image: "/double-burger.png",
    name: "Double Burger",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Burger",
  },
  {
    id: 9,
    image: "/chicken-burger.png",
    name: "Chicken Burger",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Burger",
  },
  {
    id: 10,
    image: "/subway-chicken.png",
    name: "Chicken",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Subway",
  },
  {
    id: 11,
    image: "/subway-ham.png",
    name: "Ham",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Subway",
  },
  {
    id: 12,
    image: "/subway-steak.png",
    name: "Steak",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Subway",
  },
  {
    id: 12,
    image: "/onion-ring.png",
    name: "Onion Ring",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Snack",
  },
  {
    id: 13,
    image: "/french-fries.png",
    name: "French Fries",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Snack",
  },
  {
    id: 14,
    image: "/icecream.png",
    name: "IceCream",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Snack",
  },
  {
    id: 15,
    image: "/coca-drink.png",
    name: "Coca-Cola",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Drink",
  },
  {
    id: 16,
    image: "/wine-drink.png",
    name: "Glass of Wine",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Drink",
  },
  {
    id: 17,
    image: "/cocktail-drink.png",
    name: "Cocktail",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Drink",
  },
];

// Exporte a função que retorna a lista de produtos em formato JSON
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products);
}
