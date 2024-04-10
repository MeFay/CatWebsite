import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Pages/cartPage/CartContext";

import {
  StyledNavbar,
  StyledNavbarLeft,
  StyledNavbarRight,
  StyledLink,
  StyledIcon,
  StyledLogo,
} from "./styled";

export const NavbarLayout = () => {
  const { cart } = useContext(CartContext);

  const NavBarLinks = [
    {
      title: "Home",
      to: "/home",
      url: "/home",
    },
    {
      title: "Cats",
      to: "/catShop/1",
      url: "/catShop",
    },
    {
      title: "Items",
      to: "/itemShop/1",
      url: "/itemShop",
    },
  ];

  const cartLink = {
    title: "Cart",
    to: "/cart/",
    url: "/cart/",
    icon: "/src/assets/cart.png",
  };

  const location = useLocation();

  const menuElements = NavBarLinks.map((item) => (
    <StyledLink
      to={item.to}
      isActive={location.pathname.startsWith(item.url)}
      key={item.title}
    >
      {item.title}
    </StyledLink>
  ));

  const cartElement = (
    <StyledLink
      to={cartLink.to}
      isActive={location.pathname.startsWith(cartLink.url)}
      key={cartLink.title}
    >
      {`${cartLink.title} (${cart.length})`}
      {cartLink.icon && <StyledIcon src={cartLink.icon} alt={cartLink.title} />}
    </StyledLink>
  );

  return (
    <StyledNavbar>
      <StyledLogo src="/src/assets/logo.png" />
      <StyledNavbarLeft>{menuElements}</StyledNavbarLeft>
      <StyledNavbarRight>{cartElement}</StyledNavbarRight>
    </StyledNavbar>
  );
};

{
  /* #how it works:
  If the operand on the left side is true, it returns the operand on the right side.
  If the operand on the left side is false, it returns the left operand */
}
