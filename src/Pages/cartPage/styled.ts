import styled from "styled-components";
import { theme } from "../../styles/themes";

export const StyledWrapper = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  background-color: ${theme.Color1};
  border-radius: 1em;
  margin-top: 5em;
  padding: 2em;
  gap: 2em;
  border: 0.5em solid ${theme.Color3};
`;

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 5em;
  color: ${theme.Color4};
`;

export const StyledTraits = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${theme.Color2};
  border-radius: 1em;
  padding: 1.25em;
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 2em;
  max-width: 100%;
  color: ${theme.Color5};
  width: 100%;
`;

export const StyledButton = styled.button`
  font-family: "VT323", monospace;
  font-weight: 400;
  width: 50%;
  padding: 0.625em;
  border-radius: 0.625em;
  background-color: ${theme.Color6};
  color: ${theme.Color1};
  font-size: 1.5em;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledPrice = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 2em;
  max-width: 100%;
  color: ${theme.Color1};
  background-color: ${theme.Color3};
  border-radius: 0.3125em;
  width: 100%;
`;

export const StyledImg = styled.img`
  max-width: 18em;
  max-height: 18em;
`;
