import { useContext } from "react";
import { CartContext } from "./CartContext";


export const MainSection = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};
