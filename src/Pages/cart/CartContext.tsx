import React, { createContext } from "react";
import { CartItem } from "../../types";

type CartContextType = {
  cart: CartItem[];
  itemData: CartItem[];
  setItemData: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  resetCart: () => void;
  completePurchase: (purchasedCatIds: string[]) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  itemData: [],
  setItemData: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  resetCart: () => {},
  completePurchase: () => {},
});
 