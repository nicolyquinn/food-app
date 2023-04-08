import { ReactNode, createContext, useContext, useState } from "react";

export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: string;
  price: string;
};

type cartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const cartContextDefaultValues: cartContextType = {
  cart: [],
  addToCart: () => {},
};

const CartContext = createContext<cartContextType>(cartContextDefaultValues);

export function useCart() {
  return useContext(CartContext);
}

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCart([...cart, product]);
  }

  const value = {
    cart,
    addToCart,
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
}
