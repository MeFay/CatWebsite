import React from "react";

export type CartItem = {
  id: number;
  price: number;
  name: string;
  image: string;
  isSold: boolean;
  category?: string; // for items
  race?: string; // for cats
  color?: string; // for cats
  location?: string; // for cats
};


type CartContextType = {
  cart: CartItem[];
  data: CartItem[];
  setData: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  resetCart: () => void;
  completePurchase: () => void;
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  data: [],
  setData: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  resetCart: () => {},
  completePurchase: () => {},
});
