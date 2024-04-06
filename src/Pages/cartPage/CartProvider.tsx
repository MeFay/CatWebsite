import React, { useReducer, useEffect, ReactNode, useState } from "react";
import { CartContext, CartItem } from "./CartContext";
import catJsonData from "../../assets/cats.json";

type CartProviderProps = {
  children: ReactNode;
};

type CartState = {
  cart: CartItem[];
};

type CartAction =
  | { type: "ADD_TO_CART"; item: CartItem }
  | { type: "REMOVE_FROM_CART"; item: CartItem }
  | { type: "RESET_CART" };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.cart.some((item) => item.id === action.item.id)
        ? state
        : { cart: [...state.cart, action.item] };
    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter((item) => item.id !== action.item.id),
      };
    case "RESET_CART":
      return { cart: [] };
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

  const updateItemStatus = (item: CartItem, isSold: boolean) => {
    const catIndex = data.findIndex((cat) => cat.id === item.id);
    if (catIndex !== -1) {
      const updatedData = [...data];
      updatedData[catIndex].isSold = isSold;
      setData(updatedData);
    }
  };

  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_TO_CART", item });
    updateItemStatus(item, true);
  };

  const removeFromCart = (item: CartItem) => {
    dispatch({ type: "REMOVE_FROM_CART", item });
    updateItemStatus(item, false);
  };

  const resetCart = () => {
    dispatch({ type: "RESET_CART" });
    setData(data.map((cat) => ({ ...cat, isSold: false })));
  };

  const completePurchase = () => {
    setData(
      data.map((cat) => {
        if (state.cart.some((item) => item.id === cat.id)) {
          return { ...cat, isSold: true };
        }
        return cat;
      })
    );
    dispatch({ type: "RESET_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        data,
        setData,
        addToCart,
        removeFromCart,
        resetCart,
        completePurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
