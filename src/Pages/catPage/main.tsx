import { useParams } from "react-router-dom";
import catJsonData from "../../assets/cats.json";
import {
  StyledWrapper,
  StyledName,
  StyledImage,
  StyledP,
  StyledTraits,
} from "./styled";

type Cat = {
  id: number;
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

  return (
    <>
      {cat ? (
        <StyledWrapper>
          <StyledName>{cat.name}</StyledName>
          <StyledImage src={cat.image} alt={cat.name} />
          <StyledTraits>
            <StyledP>Race: {cat.race}</StyledP>
            <StyledP>Color: {cat.color}</StyledP>
            <StyledP>Age: {cat.age}</StyledP>
            <StyledP>Weight: {cat.weight}</StyledP>
            <StyledP>Location: {cat.location}</StyledP>
            <StyledP>Price: {cat.price} $</StyledP>
          </StyledTraits>
        </StyledWrapper>
      ) : (
        <StyledP>Cat not found 404</StyledP>
      )}
    </>
  );
};
