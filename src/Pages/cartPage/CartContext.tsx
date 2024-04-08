import React from "react";

export type CartItem = {
  id: string;
  price: number;
  name: string;
  image: string;
  isSold: boolean;
  race?: string;
  color?: string;
  location?: string;
  category?: string;
};

type CartContextType = {
  cart: CartItem[];
  catData: CartItem[];
  setCatData: React.Dispatch<React.SetStateAction<CartItem[]>>;
  itemData: CartItem[];
  setItemData: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  resetCart: () => void;
  completePurchase: () => void;
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  catData: [],
  setCatData: () => {},
  itemData: [],
  setItemData: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  resetCart: () => {},
  completePurchase: () => {},
});
