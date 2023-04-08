import { ReactNode, createContext, useContext, useState } from "react";

export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: string;
  price: string;
};

type CartMap = {
  [productId: number]: {
    product: Product;
    quantity: number;
  };
};
type cartContextType = {
  cart: CartMap;
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
  const [cart, setCart] = useState<CartMap>([]);

  function addToCart(product: Product) {
    const productId = product.id;
    const updateCart = { ...cart };
    if (productId in updateCart) {
      updateCart[productId].quantity++;
    } else {
      updateCart[productId] = { product, quantity: 1 };
    }

    setCart(updateCart);
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
