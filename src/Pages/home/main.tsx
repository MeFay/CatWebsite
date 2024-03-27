import { useLocation } from "react-router-dom";
import {
  StyledWrapper,
  StyledLink,
  StyledIntro,
  StyledImage,
} from "./styled.ts";

export const MainSection = () => {
  const location = useLocation();
  const titleLink = [
    {
      title: "Cat Lovers Shop",
      url: "/shop/1",
    },
  ];
  const titleElement = titleLink.map((item) => (
    <StyledLink
      to={item.url}
      className={location.pathname === item.url ? "active" : ""}
      key={item.title}
    >
      {item.title}
    </StyledLink>
  ));

  return (
    <>
      <h1>{titleElement}</h1>
      <StyledWrapper>
        <StyledIntro>
          Welcome to our cozy corner of the internet, a haven for cat lovers! We
          are home to a delightful variety of cute and adorable cats, each one
          waiting to bring joy into your life. Our cats are more than just pets,
          they're family. So why wait? Step into our shop and meet our charming
          feline friends. Who knows, you might just meet your new best friend
          today!
        </StyledIntro>
        <StyledImage src="/src/assets/Shop.png" alt="Our shop" />
      </StyledWrapper>
    </>
  );
};
