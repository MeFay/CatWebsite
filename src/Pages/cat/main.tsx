import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { RootState } from "../../store";
import { toggleFavorite } from "../../store/features/catList";
import isFavorite from "../../assets/isFavorite.png";
import isNotFavorite from "../../assets/isNotFavorite.png";
import { CartContext } from "../cart/CartContext";

import {
  StyledWrapper,
  StyledName,
  StyledImage,
  StyledP,
  StyledTraits,
  StyledFavorite,
  StyledButton,
} from "./styled";

export const MainSection = () => {
  const navigate = useNavigate();
  const { catId = "" } = useParams();
  const catData = useSelector((state: RootState) => state.catList.list);
  const numericCatId = Number(catId.replace("cat-", ""));
  const cat = catData.find((cat) => cat.id === `cat-${numericCatId}`);
  const { cart, addToCart } = useContext(CartContext);
  const isCatInCart = cart.some((item) => item.id === `cat-${numericCatId}`);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cat) {
      navigate("/error");
    }
  }, [cat, navigate]);

  const handleBuyClick = () => {
    if (cat && catId !== undefined) {
      addToCart({
        id: `cat-${catId}`,
        name: cat.name,
        image: cat.image,
        price: cat.price,
        isSold: cat.isSold,
        race: cat.race,
        color: cat.color,
        location: cat.location,
        quantity: cat.quantity,
        isFavorite: false,
      });
    }
  };

  const renderFavoriteIcon = () => {
    return cat?.isFavorite ? (
      <img src={isFavorite} alt="Favorite" />
    ) : (
      <img src={isNotFavorite} alt="Not Favorite" />
    );
  };

  return (
    <StyledWrapper>
      {cat ? (
        <>
          <StyledName>{cat.name}</StyledName>
          <StyledFavorite onClick={() => dispatch(toggleFavorite(cat.id))}>
            {renderFavoriteIcon()}
          </StyledFavorite>
          <StyledImage src={cat.image} alt={cat.name} />
          <StyledTraits>
            <StyledP>Race: {cat.race}</StyledP>
            <StyledP>Color: {cat.color}</StyledP>
            <StyledP>Age: {cat.age}yo</StyledP>
            <StyledP>Weight: {cat.weight}kg</StyledP>
            <StyledP>Location: {cat.location}</StyledP>
            <StyledP>Price: {cat.price}€</StyledP>
          </StyledTraits>
          <StyledButton onClick={handleBuyClick} disabled={isCatInCart}>
            {isCatInCart ? "In Cart" : "Buy"}
          </StyledButton>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </StyledWrapper>
  );
};
