import { useLocation } from "react-router-dom";
import {
  StyledNavbar,
  StyledNavbarLeft,
  StyledNavbarRight,
  StyledLink,
  StyledIcon,
  StyledLogo,
} from "./styled";

export const NavbarLayout = () => {
  const NavBarLinks = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "Shop",
      url: "/shop/:pageId",
    },
    {
      title: "Cart",
      url: "/cart/",
      icon: "/src/assets/cart.png",
    },
  ];

  const location = useLocation();
  const message = "Cat Lovers";

  const menuElements = NavBarLinks.map((item) => (
    <StyledLink
      to={item.url}
      isActive={location.pathname === item.url}
      key={item.title}
    >
      {item.title}
      {item.icon && <StyledIcon src={item.icon} alt={item.title} />}
    </StyledLink>
  ));

  return (
    <StyledNavbar>
      <StyledLogo src="/src/assets/logo.png" />
      <StyledNavbarLeft>{menuElements}</StyledNavbarLeft>
      <StyledNavbarRight>{message}</StyledNavbarRight>
    </StyledNavbar>
  );
};
