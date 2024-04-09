import React, { useReducer, useEffect, ReactNode, useState } from "react";
import { CartContext, CartItem } from "./CartContext";
import catJsonData from "../../assets/cats.json";
import itemJsonData from "../../assets/items.json";

type CartProviderProps = {
  children: ReactNode;
};

type CartState = {
  cart: CartItem[];
};

type CartAction =
  | { type: "ADD_TO_CART"; item: CartItem }
  | { type: "REMOVE_FROM_CART"; item: CartItem }
  | { type: "RESET_CART" }
  | { type: "UPDATE_CART"; cart: CartItem[] };

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
    case "UPDATE_CART":
      return { cart: action.cart };
    default:
      return state;
  }
};

const useCatData = () => {
  const [catData, setCatData] = useState<Array<CartItem>>([]);

  useEffect(() => {
    setCatData(
      Object.entries(catJsonData).map(([catId, cat]) => ({
        id: `cat-${catId}`,
        ...cat,
        isSold: false,
        quantity: 0,
      }))
    );
  }, []);

  return { catData, setCatData };
};

const useItemData = () => {
  const [itemData, setItemData] = useState<Array<CartItem>>([]);

  useEffect(() => {
    setItemData(
      Object.entries(itemJsonData).map(([itemId, item]) => ({
        id: `item-${itemId}`,
        ...item,
        isSold: false,
        quantity: 0,
      }))
    );
  }, []);

  return { itemData, setItemData };
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  const { catData, setCatData } = useCatData();
  const { itemData, setItemData } = useItemData();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (item: CartItem) => {
    const existingItemIndex = state.cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...state.cart];
      updatedCart[existingItemIndex].quantity += 1;
      dispatch({ type: "UPDATE_CART", cart: updatedCart });
    } else {
      dispatch({ type: "ADD_TO_CART", item: { ...item, quantity: 1 } });
    }
  };

  const resetCart = () => {
    dispatch({ type: "RESET_CART" });
    setCatData(catData.map((cat) => ({ ...cat, isSold: false })));
    setItemData(itemData.map((item) => ({ ...item, isSold: false })));
  };

  const completePurchase = () => {
    setCatData(
      catData.map((cat) => {
        if (state.cart.some((item) => item.id === cat.id)) {
          return { ...cat, isSold: true };
        }
        return cat;
      })
    );
    setItemData(
      itemData.map((item) => {
        if (state.cart.some((cartItem) => cartItem.id === item.id)) {
          return { ...item, isSold: true };
        }
        return item;
      })
    );
    dispatch({ type: "RESET_CART" });
  };

  const removeFromCart = (item: CartItem) => {
    dispatch({ type: "REMOVE_FROM_CART", item });
    if (item.id.startsWith("cat-")) {
      const catIndex = catData.findIndex((cat) => cat.id === item.id);
      if (catIndex !== -1) {
        const updatedData = [...catData];
        updatedData[catIndex].isSold = false;
        setCatData(updatedData);
      }
    } else if (item.id.startsWith("item-")) {
      const itemIndex = itemData.findIndex(
        (dataItem) => dataItem.id === item.id
      );
      if (itemIndex !== -1) {
        const updatedData = [...itemData];
        updatedData[itemIndex].isSold = false;
        setItemData(updatedData);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        catData,
        setCatData,
        itemData,
        setItemData,
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
