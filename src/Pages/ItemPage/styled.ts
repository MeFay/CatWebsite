import styled from "styled-components";
import { theme } from "../../styles/themes";

export const StyledWrapper = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  background-color: ${theme.Color2};
  border-radius: 0.9375em;
  gap: 1em;
  margin-top: 5em;
  padding: 2em;
  border: 0.5em solid ${theme.Color5};
`;

export const StyledName = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 5em;
  color: ${theme.Color4};
`;

export const StyledTraits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${theme.Color1};
  border-radius: 1em;
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
`;

export const StyledImage = styled.img`
  max-width: 40em;
  max-height: 40em;
`;

export const StyledButton = styled.button`
  font-family: "VT323", monospace;
  font-weight: 400;
  width: 20%;
  padding: 0.625em;
  border-radius: 0.625em;
  background-color: ${theme.Color3};
  color: ${theme.Color1};
  font-size: 1.5em;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
