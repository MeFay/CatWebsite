import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/themes";

export const StyledLink = styled(Link)<{ isActive: boolean }>`
  display: flex;
  flex-direction: row; // Add this line
  align-items: center;
  color: ${(props) => (props.isActive ? theme.Color4 : theme.Color1)};

  text-decoration: none;
  padding: 1rem;
  &:hover {
    color: ${theme.Color4};
  }
`;

export const StyledNavbar = styled.nav`
  background-color: ${theme.Color6};
  display: flex;
  align-items: center;
  padding-left: 1rem;
  column-gap: 2rem;
  box-sizing: border-box;
  font-size: 2.5rem;
`;

export const StyledNavbarLeft = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const StyledNavbarRight = styled.div`
  color: ${theme.Color1};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1rem;
  padding-right: 1rem;
`;

export const StyledLogo = styled.img`
  width: 2em;
`;

export const StyledIcon = styled.img`
  width: 1em;
  padding: 0.8em;
`;
