import { Link } from "react-router-dom";
import styled from "styled-components";

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
  color: #ffb0a3;
  &:hover {
    color: #ff6973;
    cursor: pointer;
  }
`;

export const StyledIntro = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  max-width: 50%;
  color: #ffeecc;
`;

export const StyledImage = styled.img`
  max-width: 40rem;
  max-height: 40rem;
  border-radius: 10px;
  padding: 1rem;
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
