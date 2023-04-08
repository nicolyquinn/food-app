import { ReactNode, createContext, useContext, useState } from "react";

export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: string;
  price: number;
};

type CartMap = {
  [productId: number]: {
    product: Product;
    quantity: number;
  };
};

interface ExtendedCartMap extends CartMap {
  total: number;
}

type cartContextType = {
  cart: ExtendedCartMap;
  addToCart: (product: Product) => void;
};

const cartContextDefaultValues: cartContextType = {
  cart: { total: 0 },
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
  const [cart, setCart] = useState<ExtendedCartMap>({
    total: 0,
  });

  function addToCart(product: Product) {
    const productId = product.id;
    const productToUpdate = cart[productId];

    if (productToUpdate) {
      productToUpdate.quantity++;
    } else {
      cart[productId] = { product, quantity: 1 };
    }

    const updatedCart = { ...cart };
    updatedCart.total = calculateCartTotal(updatedCart);
    setCart(updatedCart);
  }

  function calculateCartTotal(cart: ExtendedCartMap): number {
    let total = 0;

    for (const productId in cart) {
      if (productId === "total") {
        continue;
      }

      const { product, quantity } = cart[productId];
      const productTotal = product?.price * quantity;
      total += productTotal;
    }

    cart.total = typeof total === "number" ? Number(total.toFixed(2)) : 0;

    return cart.total;
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
