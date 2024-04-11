import { useParams } from "react-router-dom";
import itemJsonData from "../../assets/items.json";
import { CartContext } from "../cartPage/CartContext";
import {
  StyledWrapper,
  StyledName,
  StyledImage,
  StyledP,
  StyledTraits,
  StyledButton,
} from "./styled";
import { useContext } from "react";

type Item = {
  quantity: number;
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  isSold: boolean;
};

type ItemData = {
  [key: string]: Item;
};

const itemData = itemJsonData as unknown as ItemData;

export const MainSection = () => {
  const { itemId } = useParams();
  const item = itemId ? itemData[itemId] : undefined;
  const { cart, addToCart } = useContext(CartContext);

  const cartItem = cart.find((cartItem) => cartItem.id === `item-${itemId}`);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

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
