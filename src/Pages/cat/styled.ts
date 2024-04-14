import styled from "styled-components";
import { theme } from "../../styles/themes";
import { device } from "../../styles/device";

export const StyledWrapper = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  background-color: ${theme.Color2};
  border-radius: 1em;
  gap: 1em;
  margin-top: 5em;
  margin-bottom: 5em;
  padding: 2em;
  border: 0.5em solid ${theme.Color5};

  @media ${device.tablet} {
    width: 80%;
    margin-top: 3em;
    padding: 1em;
  }

  @media ${device.mobile} {
    width: 90%;
    margin-top: 2em;
    padding: 0.5em;
  }
`;

export const StyledName = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 5em;
  color: ${theme.Color4};

  @media ${device.tablet} {
    font-size: 3em;
  }

  @media ${device.mobile} {
    font-size: 2em;
  }
`;

export const StyledTraits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${theme.Color1};
  border-radius: 1em;

  @media ${device.tablet} {
    font-size: 1.5em;
  }

  @media ${device.mobile} {
    font-size: 1em;
  }
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 2em;
  max-width: 100%;
  color: ${theme.Color6};

  @media ${device.tablet} {
    font-size: 1.5em;
  }

  @media ${device.mobile} {
    font-size: 1em;
  }
`;

export const StyledImage = styled.img`
  max-width: 40em;
  max-height: 40em;

  @media ${device.tablet} {
    max-width: 30em;
    max-height: 30em;
  }

  @media ${device.mobile} {
    max-width: 20em;
    max-height: 20em;
  }
`;

export const StyledButton = styled.button`
  font-family: "VT323", monospace;
  font-weight: 400;
  width: 20%;
  padding: 0.6em;
  border-radius: 0.6em;
  background-color: ${theme.Color3};
  color: ${theme.Color1};
  font-size: 1.5em;
  border: none;
  &:hover {
    cursor: pointer;
  }

  @media ${device.tablet} {
    width: 30%;
    font-size: 1.25em;
  }

  @media ${device.mobile} {
    width: 40%;
    font-size: 1em;
  }
`;

export const StyledFavorite = styled.div`
 display: inline-block;
 cursor: pointer;
 max-width: 5em;
 max-height: 5em;

 @media ${device.tablet} {
    max-width: 5em;
    max-height: 5em;
 }

 @media ${device.mobile} {
    max-width: 5em;
    max-height: 5em;
 }

 img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
 }
`;
