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
    image: "/sausage-pizza.png",
    name: "Hamburguer de Frango",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Burguer",
  },
  {
    id: 5,
    image: "/sausage-pizza.png",
    name: "Taco de Carne",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Tacos",
  },
  {
    id: 6,
    image: "/sausage-pizza.png",
    name: "Hamburguer de Carne",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Burguer",
  },
  {
    id: 7,
    image: "/sausage-pizza.png",
    name: "Taco de Frango",
    rating: "⭐⭐⭐",
    price: "5.49",
    category: "Tacos",
  },
];

// Exporte a função que retorna a lista de produtos em formato JSON
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products);
}
