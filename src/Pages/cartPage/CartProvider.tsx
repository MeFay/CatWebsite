import React, { useState, ReactNode } from "react";
import { CartContext } from "./CartContext";

type CartItem = {
  id: number;
  name: string;
  image: string;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
