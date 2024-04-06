import React, { useReducer, useEffect, ReactNode, useState } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "./CartContext";
import catJsonData from "../../assets/cats.json";

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

const useData = () => {
  const [data, setData] = useState<Array<CartItem>>([]);

  useEffect(() => {
    setData(
      Object.entries(catJsonData).map(([catId, cat]) => ({
        id: Number(catId),
        ...cat,
        isSold: false,
      }))
    );
  }, []);

  return { data, setData };
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  const { data, setData } = useData();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_TO_CART", item });
    const catIndex = data.findIndex((cat) => cat.id === item.id);
    if (catIndex !== -1) {
      const updatedData = [...data];
      updatedData[catIndex].isSold = true;
      setData(updatedData);
    }
  };

  const removeFromCart = (item: CartItem) => {
    dispatch({ type: "REMOVE_FROM_CART", item });
  };

  return (
    <CartContext.Provider
      value={{ cart: state.cart, data, setData, addToCart, removeFromCart }} // Add data and setData here
    >
      {children}
    </CartContext.Provider>
  );
};
