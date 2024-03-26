import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  color: #ffeecc;
  text-decoration: none;
  font-size: 2rem;
  padding: 1rem;
  &:hover {
    color: #46425e;
  }
`;

export const Navbar = styled.nav`
  background-color: #00b9be;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  column-gap: 2rem;
  box-sizing: border-box;
`;

export const NavbarLeft = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const NavbarRight = styled.div`
  color: #ffeecc;
  width: 100%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1rem;
  padding-right: 1rem;
`;

export const Logo = styled.img`
  max-width: 6rem;
`;
