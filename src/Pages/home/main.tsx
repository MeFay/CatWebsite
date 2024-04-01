import { IntroMessage } from "../../components/IntroMessage/IntroMessage.tsx";
import { StyledWrapper, StyledLink, StyledImage } from "./styled.ts";

export const MainSection = () => {
  const titleLink = [
    {
      title: "Cat Lovers Shop",
      url: "/shop/1",
    },
  ];
  const titleElement = titleLink.map((item) => (
    <StyledLink to={item.url} key={item.title}>
      {item.title}
    </StyledLink>
  ));

  return (
    <>
      <h1>{titleElement}</h1>
      <StyledWrapper>
        <IntroMessage />
        <StyledImage src="/src/assets/Shop.png" alt="Our shop" />
      </StyledWrapper>
    </>
  );
};
