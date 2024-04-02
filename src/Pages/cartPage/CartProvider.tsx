import React, { useState, ReactNode, useEffect } from "react";
import { CartContext } from "./CartContext";

type CartItem = {
  id: string;
  price: number;
  name: string;
  image: string;
};

type CartProviderProps = {
  children: ReactNode;
};
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((cartItem) => cartItem.id === item.id);

      if (!isItemInCart) {
        return [...prevCart, item];
      }

      return prevCart;
    });
  };

  const removeFromCart = (item: CartItem) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
