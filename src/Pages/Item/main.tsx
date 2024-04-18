import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../store";
import { toggleFavorite } from "../../store/features/itemList";
import isFavorite from "../../assets/isFavorite.png";
import isNotFavorite from "../../assets/isNotFavorite.png";
import {
  StyledWrapper,
  StyledName,
  StyledImage,
  StyledP,
  StyledTraits,
  StyledFavorite,
  StyledButton,
} from "./styled";
import { addToCart } from "../../store/features/cartList";

export const MainSection = () => {
  const navigate = useNavigate();
  const { itemId = "" } = useParams();
  const itemData = useSelector((state: RootState) => state.itemList.list);
  const numericItemId = Number(itemId.replace("item-", ""));
  const item = itemData.find(
    (item) => item.id === `item-item-${numericItemId}`
  );
  const cart = useSelector((state: RootState) => state.cart.cart);
  const isItemInCart = cart.some((item) => item.id === `item-${numericItemId}`);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!item) {
      navigate("/error");
    }
  }, [item, navigate]);


  const handleBuyClick = () => {
    if (item && itemId !== undefined) {
      dispatch(
        addToCart({
          ...item,
          id: `item-${itemId}`,
          quantity: 1,
        })
      );
    }
  };

  const renderFavoriteIcon = () => {
    return item?.isFavorite ? (
      <img src={isFavorite} alt="Favorite" />
    ) : (
      <img src={isNotFavorite} alt="Not Favorite" />
    );
  };

  return (
    <StyledWrapper>
      {item && (
        <>
          <StyledName>{item.name}</StyledName>
          <StyledFavorite onClick={() => dispatch(toggleFavorite(item.id))}>
            {renderFavoriteIcon()}
          </StyledFavorite>

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
