import { ReactNode, createContext, useContext, useState } from "react";

export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: string;
  price: number;
};

type FavoritesMap = {
  [productId: number]: {
    product: Product;
    quantity: number;
  };
};

type favoritesContextType = {
  favorites: FavoritesMap;
  addToFavorites: (product: Product) => void;
  deleteFavorites: (product: Product) => void;
};

const favoritesContextDefaultValues: favoritesContextType = {
  favorites: [],
  addToFavorites: () => {},
  deleteFavorites: () => {},
};

const FavoritesContext = createContext<favoritesContextType>(
  favoritesContextDefaultValues
);

export function useFavorites() {
  return useContext(FavoritesContext);
}

type Props = {
  children: ReactNode;
};

export function FavoritesProvider({ children }: Props) {
  const [favorites, setFavorites] = useState<FavoritesMap>({});

  function addToFavorites(product: Product) {
    const productId = product.id;
    const productToUpdate = favorites[productId];

    if (productToUpdate) {
      productToUpdate.quantity++;
    } else {
      favorites[productId] = { product, quantity: 1 };
    }

    const updatedFavorites = { ...favorites };
    setFavorites(updatedFavorites);
    console.log("add to favorite", favorites);
  }

  function deleteFavorites(product: Product) {
    const productId = product.id;
    const updatedFavorites = { ...favorites };
    delete updatedFavorites[productId];
    debugger;
    setFavorites(updatedFavorites);
  }

  const value = {
    favorites,
    addToFavorites,
    deleteFavorites,
  };

  return (
    <>
      <FavoritesContext.Provider value={value}>
        {children}
      </FavoritesContext.Provider>
    </>
  );
}
