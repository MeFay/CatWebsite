import styled from "styled-components";
import { theme } from "../../styles/themes";

export const StyledTableWrapper = styled.div`
  padding-top: 3em;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${theme.Color4};
`;

export const StyledTable = styled.table`
  width: 60%;
  font-size: 1.6em;
  border-collapse: collapse;
`;

export const StyledTableTh = styled.th`
  font-size: 2em;
  border-bottom: 0.1em solid ${(props) => props.theme.border};
  padding: 0.6em;
  text-align: center;
  background-color: ${theme.Color3};
  color: ${theme.Color4};
`;

export const StyledTableTr = styled.tr`
  &:hover {
    background-color:${theme.Color2};
  }
  background-color: ${theme.Color1};
`;

export const StyledTableTd = styled.td`
  width: 12em;
  padding: 0.6em;
  border-bottom: 0.2em solid ${(props) => props.theme.border};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledImage = styled.img`
  width: 6em;
  height: 5em;
  object-fit: contain;
  border-radius: 0.3em;
`;
