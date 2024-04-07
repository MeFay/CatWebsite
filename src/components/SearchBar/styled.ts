import styled from "styled-components";
import { theme } from "../../styles/themes";

export const StyledSearchBar = styled.input`
  width: 100%;
  display: flex;
  text-align: center;
  font-family: "VT323", monospace;
  padding: 0.5em;
  box-sizing: border-box;
  border: 0.3em solid ${theme.Color4};
  border-radius: 0.5em;
  background-color: ${theme.Color2};
  font-size: 1.8em;
  color: ${theme.Color1};
`;
