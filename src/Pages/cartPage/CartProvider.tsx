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

const useCatData = () => {
  const [catData, setCatData] = useState<Array<CartItem>>([]);

  useEffect(() => {
    setCatData(
      Object.entries(catJsonData).map(([catId, cat]) => ({
        ...cat,
        id: `cat-${catId}`,
        isSold: false,
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
        ...item,
        id: `item-${itemId}`,
        isSold: false,
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

  const updateItemStatus = (item: CartItem, isSold: boolean) => {
    const itemId = item.id.split("-")[1];
    if (item.id.startsWith("cat-")) {
      const catIndex = catData.findIndex(
        (cat) => cat.id.split("-")[1] === itemId
      );
      if (catIndex !== -1) {
        const updatedData = [...catData];
        updatedData[catIndex].isSold = isSold;
        setCatData(updatedData);
      }
    } else if (item.id.startsWith("item-")) {
      const itemIndex = itemData.findIndex(
        (item) => item.id.split("-")[1] === itemId
      );
      if (itemIndex !== -1) {
        const updatedData = [...itemData];
        updatedData[itemIndex].isSold = isSold;
        setItemData(updatedData);
      }
    }
  };

  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_TO_CART", item });
    updateItemStatus(item, true);
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
      const itemIndex = itemData.findIndex((item) => item.id === item.id);
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
