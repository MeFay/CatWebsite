import styled from "styled-components";
import { theme } from "../../styles/themes";

export const StyledForm = styled.form`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  background-color: ${theme.Color1};
  border-radius: 1em;
  padding: 2em;
  border: 0.5em solid ${theme.Color6};
  gap: 2em;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  row-gap: 1.25em;
  height: 100%;
`;

export const StyledLabelContainer = styled.div`
  width: 20%;
`;

export const StyledInputContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5em;
`;

export const StyledInput = styled.input`
  font-family: "VT323", monospace;
  line-height: 1.5;
  font-weight: 400;
  font-size: 1.5em;
  display: flex;
  margin: auto;
  align-items: center;
  color: ${theme.Color3};
  width: 100%;
`;

export const StyledSelect = styled.select`
  font-family: "VT323", monospace;
  line-height: 1.5;
  font-weight: 400;
  font-size: 1.5em;
  display: flex;
  margin: auto;
  align-items: center;
  color: ${theme.Color6};
  padding: 0.1875em;
  width: 100%;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.0625em;
  font-size: 2.5em;
  max-width: 100%;
  color: ${theme.Color4};
  width: 100%;
`;

export const StyledTotal = styled.p`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  color: ${theme.Color3};
  font-size: 1.7em;
`;

export const StyledButton = styled.button`
  font-family: "VT323", monospace;
  font-weight: 400;
  width: 50%;
  padding: 0.4em;
  border-radius: 0.5em;
  background-color: ${theme.Color5};
  color: ${theme.Color1};
  font-size: 2em;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

