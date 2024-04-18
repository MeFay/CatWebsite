import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeFromCart } from "../../store/features/cartList";

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
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  const handleRemoveClick = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const isCartEmpty = cart.length === 0;
  console.log("Total quantity: ", totalPrice);

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
