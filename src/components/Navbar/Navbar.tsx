import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import hamburguer from "../../assets/navbarHamburguer.png";

import {
  StyledNavbar,
  StyledNavbarLeft,
  StyledNavbarRight,
  StyledLink,
  StyledIcon,
  StyledLogo,
} from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const NavbarLayout = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  const [isOpen, setIsOpen] = useState(false);

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
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    setTotalQuantity(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  const menuElements = NavBarLinks.map((item) => (
    <StyledLink
      to={item.to}
      $isActive={location.pathname.startsWith(item.url)}
      key={item.title}
    >
      {item.title}
    </StyledLink>
  ));

  const CartElementSmall = (
    <StyledLink
      to={cartLink.to}
      $isActive={location.pathname.startsWith(cartLink.url)}
      key={cartLink.title}
      className="cart-small"
    >
      {`${cartLink.title} (${totalQuantity})`}
      {cartLink.icon && (
        <StyledIcon id="cart" src={cartLink.icon} alt={cartLink.title} />
      )}
    </StyledLink>
  );

  const CartElementLarge = (
    <StyledLink
      to={cartLink.to}
      $isActive={location.pathname.startsWith(cartLink.url)}
      key={cartLink.title}
      className="cart-large"
    >
      {`${cartLink.title} (${totalQuantity})`}
      {cartLink.icon && (
        <StyledIcon id="cart" src={cartLink.icon} alt={cartLink.title} />
      )}
    </StyledLink>
  );

  return (
    <StyledNavbar>
      <StyledLogo src="/src/assets/logo.png" />
      <StyledIcon
        id="hamburger"
        src={hamburguer}
        alt="Menu"
        onClick={() => setIsOpen(!isOpen)}
      />

      <StyledNavbarLeft $isOpen={isOpen}>
        {menuElements}
        {CartElementSmall}
      </StyledNavbarLeft>

      <StyledNavbarRight>{CartElementLarge}</StyledNavbarRight>
    </StyledNavbar>
  );

  /* #how it works:
  If the operand on the left side is true, it returns the operand on the right side.
  If the operand on the left side is false, it returns the left operand */
};
