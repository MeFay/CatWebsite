import { useParams } from "react-router-dom";
import { CartContext } from "../cartPage/CartContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { RootState } from "../../store";

import {
  StyledWrapper,
  StyledName,
  StyledImage,
  StyledP,
  StyledTraits,
  StyledButton,
} from "./styled";

export const MainSection = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const itemData = useSelector((state: RootState) => state.itemList.list);
  const item = itemData.find((item) => item.id === `item-${itemId}`);
  const { cart, addToCart } = useContext(CartContext);
  const cartItem = cart.find((cartItem) => cartItem.id === `item-${itemId}`);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  useEffect(() => {
    if (!item) {
      navigate("/error");
    }
  }, [item, navigate]);

  const handleBuyClick = () => {
    if (item && itemId !== undefined) {
      const existingCartItem = cart.find(
        (cartItem) => cartItem.id === `item-${itemId}`
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        addToCart(existingCartItem);
      } else {
        addToCart({
          id: `item-${itemId}`,
          name: item.name,
          image: item.image,
          price: item.price,
          isSold: item.isSold,
          category: item.category,
          quantity: 1,
        });
      }
    }
  };

  return (
    <>
      {item ? (
        <StyledWrapper>
          <StyledName>{item.name}</StyledName>
          <StyledImage src={item.image} alt={item.name} />
          <StyledTraits>
            <StyledP>Category: {item.category}</StyledP>
            <StyledP>Price: {item.price}$</StyledP>
          </StyledTraits>
          <StyledButton onClick={handleBuyClick}>Buy</StyledButton>
          <p>Quantity in cart: {quantityInCart}</p>
        </StyledWrapper>
      ) : (
        <StyledP>Item not found 404</StyledP>
      )}
    </>
  );
};
