import React from "react";

export type CartItem = {
  id: number;
  price: number;
  name: string;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});