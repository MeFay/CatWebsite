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
  const item = itemId ? itemData[`item-${itemId}`] : undefined;
  const { cart, addToCart } = useContext(CartContext);

  const isItemInCart = cart.some((item) => item.id === `item-${itemId}`);

  const handleBuyClick = () => {
    if (item && itemId !== undefined) {
      addToCart({
        id: `item-${itemId}`,
        name: item.name,
        image: item.image,
        price: item.price,
        isSold: item.isSold,
        category: item.category,
      });
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
          <StyledButton onClick={handleBuyClick} disabled={isItemInCart}>
            {isItemInCart ? "In Cart" : "Buy"}
          </StyledButton>
        </StyledWrapper>
      ) : (
        <StyledP>Item not found 404</StyledP>
      )}
    </>
  );
};
