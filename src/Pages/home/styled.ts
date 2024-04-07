import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/themes";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  color: ${theme.Color2};
  &:hover {
    color: ${theme.Color3};
    cursor: pointer;
  }
`;

export const StyledImage = styled.img`
  max-width: 32em;
  max-height: 32em;
  border-radius: 0.625em;
  padding: 1em;
  background: linear-gradient(
    48deg,
    rgba(255, 176, 163, 1) 43%,
    rgba(255, 105, 115, 1) 100%
  );
  &:hover {
    background: linear-gradient(
      48deg,
      rgba(0, 185, 190, 1) 43%,
      rgba(21, 120, 140, 1) 100%
    );
  }
`;
