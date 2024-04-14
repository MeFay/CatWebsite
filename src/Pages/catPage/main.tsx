import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { RootState } from "../../store";
import { toggleFavorite } from "../../store/features/catList";

import {
  StyledWrapper,
  StyledName,
  StyledImage,
  StyledP,
  StyledTraits,
  StyledButton,
} from "./styled";
import { CartContext } from "../cartPage/CartContext";

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
      });
    }
  };

  return (
    <StyledWrapper>
      {cat && (
        <>
          <StyledName>{cat.name}</StyledName>{" "}
          <button onClick={() => dispatch(toggleFavorite(cat.id))}>
            {cat.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
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
      )}
    </StyledWrapper>
  );
};
