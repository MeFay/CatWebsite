import { useParams } from "react-router-dom";
import catJsonData from "../../assets/cats.json";
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

type Cat = {
  id: string;
  race: string;
  name: string;
  color: string;
  weight: number;
  age: number;
  location: string;
  image: string;
  price: number;
};

type CatData = {
  [key: string]: Cat;
};

const catData = catJsonData as unknown as CatData;
export const MainSection = () => {
  const { catId } = useParams();
  const cat = catId ? catData[catId] : undefined;
  const { addToCart } = useContext(CartContext);
  const handleBuyClick = () => {
    if (cat && catId !== undefined) {
      addToCart({
        id: catId,
        name: cat.name,
        image: cat.image,
        price: cat.price,
      });
    }
  };
  return (
    <>
      {cat ? (
        <StyledWrapper>
          <StyledName>{cat.name}</StyledName>
          <StyledImage src={cat.image} alt={cat.name} />
          <StyledTraits>
            <StyledP>Race: {cat.race}</StyledP>
            <StyledP>Color: {cat.color}</StyledP>
            <StyledP>Age: {cat.age}yo</StyledP>
            <StyledP>Weight: {cat.weight}kg</StyledP>
            <StyledP>Location: {cat.location}</StyledP>
            <StyledP>Price: {cat.price}$</StyledP>
          </StyledTraits>
          <StyledButton onClick={handleBuyClick}>Buy</StyledButton>
        </StyledWrapper>
      ) : (
        <StyledP>Cat not found 404</StyledP>
      )}
    </>
  );
};
