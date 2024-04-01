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
      to: "/home",
      url: "/home",
    },
    {
      title: "Shop",
      to: "/shop/1",
      url: "/shop",
    },
    {
      title: "Cart",
      to: "/cart/",
      url: "/cart/",
      icon: "/src/assets/cart.png",
    },
  ];

  const location = useLocation();
  const message = "Cat Lovers";

  const menuElements = NavBarLinks.map((item) => (
    <StyledLink
      to={item.to}
      isActive={location.pathname.startsWith(item.url)}
      key={item.title}
    >
      {item.title}
      {item.icon && <StyledIcon src={item.icon} alt={item.title} />}
      {/* #short-circuit evaluation */}
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
{
  /* #if the operand on the left side is true, it returns the operand on the right side.
If the operand on the left side is false, it returns the left operand */
}
