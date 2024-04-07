import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import {
  StyledWrapper,
  StyledTitle,
  StyledTraits,
  StyledP,
  StyledButton,
  StyledPrice,
} from "./styled";

export const MainSection = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveClick = (id: number) => {
    const itemToRemove = cart.find((item) => item.id === id);
    if (itemToRemove) {
      removeFromCart(itemToRemove);
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const isCartEmpty = cart.length === 0;

  return (
    <StyledWrapper>
      <StyledTitle>Your receipt</StyledTitle>
      {cart.map((item) => (
        <StyledTraits key={item.id}>
          <StyledP>It's {item.name}</StyledP>
          <img src={item.image} alt={item.name} />
          <StyledP>{item.price}$</StyledP>
          <StyledButton onClick={() => handleRemoveClick(item.id)}>
            Remove
          </StyledButton>
        </StyledTraits>
      ))}
      <StyledPrice>Total: {totalPrice}$</StyledPrice>
      <StyledButton onClick={() => navigate("/payment")} disabled={isCartEmpty}>
        {isCartEmpty ? "Cart is empty" : "Pay"}
      </StyledButton>
    </StyledWrapper>
  );
};