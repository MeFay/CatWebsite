import React, { useReducer, useEffect, ReactNode } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "./CartContext";

type CartProviderProps = {
  children: ReactNode;
};

type CartState = {
  cart: CartItem[];
};

type CartAction =
  | { type: "ADD_TO_CART"; item: CartItem }
  | { type: "REMOVE_FROM_CART"; item: CartItem };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.cart.some((item) => item.id === action.item.id)) {
        return { cart: [...state.cart, action.item] };
      }
      return state;
    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter((item) => item.id !== action.item.id),
      };
    default:
      return state;
  }
};
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_TO_CART", item });
  };

  const removeFromCart = (item: CartItem) => {
    dispatch({ type: "REMOVE_FROM_CART", item });
  };

  return (
    <CartContext.Provider
      value={{ cart: state.cart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
