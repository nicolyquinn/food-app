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
  addMoreProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
};

const cartContextDefaultValues: cartContextType = {
  cart: { total: 0 },
  addToCart: () => {},
  addMoreProduct: () => {},
  removeProduct: () => {},
  deleteProduct: () => {},
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
      console.log("productTotal", productTotal);
      total += productTotal;
    }

    cart.total = typeof total === "number" ? Number(total.toFixed(2)) : 0;
    console.log("cardTotal", cart.total);
    return cart.total;
  }

  function addMoreProduct(product: Product) {
    const productId = product.id;
    const productToUpdate = cart[productId];

    if (productToUpdate) {
      productToUpdate.quantity++;
    }

    const updatedCart = { ...cart };
    updatedCart.total = calculateCartTotal(updatedCart);
    setCart(updatedCart);
  }

  function removeProduct(product: Product) {
    const productId = product.id;
    const productToUpdate = cart[productId];
    const updatedCart = { ...cart };

    if (productToUpdate) {
      productToUpdate.quantity--;

      if (productToUpdate.quantity === 0) {
        delete updatedCart[productId];
      }
    }

    updatedCart.total = calculateCartTotal(updatedCart);
    setCart(updatedCart);
  }

  function deleteProduct(product: Product) {
    const productId = product.id;
    const productToUpdate = cart[productId];
    const updatedCart = { ...cart };

    if (productToUpdate) {
      delete updatedCart[productId];
    }

    updatedCart.total = calculateCartTotal(updatedCart);
    setCart(updatedCart);
  }

  const value = {
    cart,
    addToCart,
    addMoreProduct,
    removeProduct,
    deleteProduct,
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
}
