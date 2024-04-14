import styled from "styled-components";
import { theme } from "../../styles/themes";
import { device } from "../../styles/device";

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px;
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: ${theme.Color2};
  border: 2px solid ${theme.Color3};
  border-radius: 4px;
  cursor: pointer;
  &:checked {
    background-color: ${theme.Color1};
    border-color: ${theme.Color1};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.Color1} ;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  cursor: pointer;
  font-size: 2em;
  @media ${device.tablet} {
    font-size: 1.2em;
  }
`;

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 8px;
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
