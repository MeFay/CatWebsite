import { useContext } from "react";
import { CartContext } from "./CartContext";
import {
  StyledWrapper,
  StyledTitle,
  StyledTraits,
  StyledP,
  StyledButton,
} from "./styled";

export const MainSection = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveClick = (id: number) => {
    const itemToRemove = cart.find((item) => item.id === id);
    if (itemToRemove) {
      removeFromCart(itemToRemove);
    }
  };

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
    </StyledWrapper>
  );
};
