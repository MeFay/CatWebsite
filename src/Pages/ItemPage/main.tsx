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
  const { itemId = "" } = useParams();
  console.log("itemId:", itemId);
  const itemData = useSelector((state: RootState) => state.itemList.list);
  console.log(
    "itemData:",
    itemData,
    "Type of first item id:",
    typeof itemData[0].id
  );
  const numericItemId = Number(itemId.replace("item-", ""));
  const item = itemData.find((item) => item.id === `item-item-${numericItemId}`);
  if (!item) {
    console.log("Undefined item for itemId:", itemId);
    console.log("ittemData:", itemData);
  }

  const { cart, addToCart } = useContext(CartContext);
  const isItemInCart = cart.some((item) => item.id === `item-${numericItemId}`);

  useEffect(() => {
    if (!item) {
      navigate("/error");
    }
  }, [item, navigate]);


  const handleBuyClick = () => {
    if (item && itemId !== undefined) {
      addToCart({
        id: `item-${itemId}`,
        name: item.name,
        image: item.image,
        price: item.price,
        isSold: item.isSold,
        category: item.category,
        quantity: item.quantity,
      });
    }
  };

  return (
    <StyledWrapper>
      {item && (
        <>
          <StyledName>{item.name}</StyledName>
          <StyledImage src={item.image} alt={item.name} />
          <StyledTraits>
            <StyledP>Category: {item.category}</StyledP>
            <StyledP>Price: {item.price}$</StyledP>
          </StyledTraits>
          <StyledButton onClick={handleBuyClick} disabled={isItemInCart}>
            {isItemInCart ? "In Cart" : "Buy"}
          </StyledButton>
        </>
      )}
    </StyledWrapper>
  );
};
