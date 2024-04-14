import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/themes";
import { device } from "../../styles/device";

export const StyledNavbar = styled.nav`
  background-color: ${theme.Color6};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  column-gap: 2rem;
  box-sizing: border-box;
  font-size: 2.5rem;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media ${device.mobile} {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  .cart-small {
    display: none;

    @media ${device.tablet} {
      display: flex;
    }
  }

  .cart-large {
    display: flex;

    @media ${device.tablet} {
      display: none;
    }
  }
`;

export const StyledNavbarLeft = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const StyledNavbarRight = styled.div`
  color: ${theme.Color1};
  display: none;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1rem;
  padding-right: 1rem;
  margin-left: auto;

  @media (min-width: 769px) {
    display: flex;
  }
`;

export const StyledLink = styled(Link)<{ $isActive: boolean }>`
 display: flex;
 flex-direction: row;
 align-items: center;
 color: ${(props) => (props.$isActive ? theme.Color4 : theme.Color1)};
 text-decoration: none;
 padding: 1rem;

 @media ${device.tablet} {
    padding: 0.5rem;
 }

 @media ${device.mobile} {
    padding: 0.25rem;
 }

 &:hover {
    color: ${theme.Color4};
 }
`;


export const StyledLogo = styled.img`
  width: 2em;
`;

export const StyledIcon = styled.img`
  width: 1em;
  padding: 0.8em;
  cursor: pointer;

  &#hamburger {
    @media (min-width: 769px) {
      display: none;
    }
  }

  &#cart {
    display: flex;
  }
`;
