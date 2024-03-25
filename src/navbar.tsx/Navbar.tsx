import { useLocation } from "react-router-dom";
import { Logo, Navbar, NavbarLeft, NavbarRight, StyledLink } from "./styled";

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
  ];

  const location = useLocation();
  const message = "Cat's Lovers";
  const menuElements = NavBarLinks.map((item) => (
    <StyledLink
      to={item.url}
      isActive={location.pathname === item.url}
      key={item.title}
    >
      {item.title}
    </StyledLink>
  ));

  return (
    <Navbar>
      <Logo src="/src/assets/catLogo.png" />
      <NavbarLeft>{menuElements}</NavbarLeft>
      <NavbarRight>{message}</NavbarRight>
    </Navbar>
  );
};
