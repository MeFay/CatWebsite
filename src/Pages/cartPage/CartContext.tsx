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
  data: CartItem[]; // Add this line
  setData: React.Dispatch<React.SetStateAction<CartItem[]>>; // Add this line
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  data: [], // Add this line
  setData: () => {}, // Add this line
  addToCart: () => {},
  removeFromCart: () => {},
});