import React from "react";

export type CartItem = {
  id: number;
  price: number;
  name: string;
  image: string;
  isSold: boolean;
  race: string; // Add this line
  color: string; // Add this line
  location: string; // Add this line
};
type CartContextType = {
  cart: CartItem[];
  data: CartItem[];
  setData: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  resetCart: () => void;
  completePurchase: () => void; // Add this line
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  data: [],
  setData: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  resetCart: () => {},
  completePurchase: () => {}, // Add this line
});
