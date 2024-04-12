import React, { useReducer, useEffect, ReactNode, useState } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "../../types";
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
  | { type: "UPDATE_CART"; cart: CartItem[] }
  | { type: "COMPLETE_PURCHASE" };

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
    case "COMPLETE_PURCHASE":
      return {
        cart: state.cart.map((item) => ({ ...item, isSold: true })),
      };
    default:
      return state;
  }
};

const useCatData = () => {
  const [catData, setCatData] = useState<Array<CartItem>>([]);

  useEffect(() => {
    const transformedData = Object.entries(catJsonData).map(([catId, cat]) => ({
      id: `cat-${catId}`,
      ...cat,
      isSold: false,
      quantity: 0,
    }));
    setCatData(transformedData);
  }, []);

  return { catData, setCatData };
};

const useItemData = () => {
  const [itemData, setItemData] = useState<Array<CartItem>>([]);

  useEffect(() => {
    const transformedData = Object.entries(itemJsonData).map(
      ([itemId, item]) => ({
        id: `item-${itemId}`,
        ...item,
        isSold: false,
        quantity: 0,
      })
    );

    console.log("Transformed item data:", transformedData);

    setItemData(transformedData);
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
      const newCart = [...state.cart];
      newCart[existingItemIndex] = {
        ...newCart[existingItemIndex],
        quantity: newCart[existingItemIndex].quantity + 1,
      };
      dispatch({ type: "UPDATE_CART", cart: newCart });
    } else {
      dispatch({ type: "ADD_TO_CART", item: { ...item, quantity: 1 } });
    }
    if (item.id.startsWith("cat-")) {
      const catIndex = catData.findIndex((cat) => cat.id === item.id);
      if (catIndex !== -1) {
        const updatedData = [...catData];
        updatedData[catIndex].isSold = true;
        setCatData(updatedData);
      }
    }
  };

  const resetCart = () => {
    dispatch({ type: "RESET_CART" });
    setCatData(catData.map((cat) => ({ ...cat, isSold: false })));
    setItemData(itemData.map((item) => ({ ...item, isSold: false })));
  };

  const completePurchase = () => {
    const purchasedCatIds = state.cart.map((item) => item.id);
    console.log('Purchased cat IDs:', purchasedCatIds); 
  
    setCatData((currentCatData) => {
      const updatedCatData = currentCatData.map((cat) =>
        purchasedCatIds.includes(cat.id) ? { ...cat, isSold: true } : cat
      );
      console.log('Updated cat data:', updatedCatData);
      return updatedCatData;
    });
    dispatch({ type: "COMPLETE_PURCHASE" });
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
