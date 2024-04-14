import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/themes";
import { device } from "../../styles/device";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  color: ${theme.Color2};

  &:hover {
    color: ${theme.Color3};
    cursor: pointer;
  }

  @media ${device.mobile} {
    font-size: 1.5em;
    padding: 0.5rem;
  }

  @media ${device.tablet} {
    font-size: 2.5em;
    padding: 0.5rem;
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

  @media ${device.mobile} {
    max-width: 20em;
    max-height: 20em;
  }

  @media ${device.tablet} {
    max-width: 26em;
    max-height: 26em;
  }

  &:hover {
    background: linear-gradient(
      48deg,
      rgba(0, 185, 190, 1) 43%,
      rgba(21, 120, 140, 1) 100%
    );
  }
`;

export const StyledIntro = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  max-width: 50%;
  color: ${theme.Color1};
  margin: 0;

  @media ${device.mobile} {
    font-size: 1.5em;
    max-width: 90%;
  }

  @media ${device.tablet} {
    font-size: 1.5em;
    max-width: 90%;
  }
`;
