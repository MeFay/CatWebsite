import React from "react";
import { CartItem } from "../../types";

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
