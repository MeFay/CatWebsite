import React from "react";

type CartItem = {
  id: number;
  name: string;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
});
