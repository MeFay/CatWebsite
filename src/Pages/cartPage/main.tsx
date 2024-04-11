import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import {
  StyledWrapper,
  StyledTitle,
  StyledTraits,
  StyledP,
  StyledImg,
  StyledButton,
  StyledPrice,
} from "./styled";

export const MainSection = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveClick = (id: string) => {
    const itemToRemove = cart.find((item) => item.id === id);
    if (itemToRemove) {
      removeFromCart(itemToRemove);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const isCartEmpty = cart.length === 0;

  return (
    <StyledWrapper>
      <StyledTitle>Your receipt</StyledTitle>
      {cart.map((item) => (
        <StyledTraits key={item.id}>
          <StyledP>It's {item.name}</StyledP>
          <StyledImg src={item.image} alt={item.name} />
          <StyledP>Price: {item.price}$</StyledP>
          <StyledP>Quantity: {item.quantity}</StyledP>
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
