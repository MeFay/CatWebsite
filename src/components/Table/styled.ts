import styled from "styled-components";

export const StyledTableWrapper = styled.div`
  padding-top: 3em;
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #46425e;
`;

export const StyledTable = styled.table`
  border-radius: 5px;
  width: 60%;
  font-size: 1.6rem;
  border-collapse: collapse;
`;

export const StyledTableTh = styled.th`
  font-size: 2rem;
  border-bottom: 2px solid ${(props) => props.theme.border};
  padding: 0.6em;
  text-align: center;
  background-color: #ff6973;
  color: #46425e;
`;

export const StyledTableTr = styled.tr`
  &:hover {
    background-color: #ffb0a3;
  }
  background-color: #ffeecc;
`;

export const StyledTableTd = styled.td`
  width: 200px;
  padding: 0.6em;
  border-bottom: 2px solid ${(props) => props.theme.border};
`;

export const StyledImage = styled.img`
  width: 125px;
  height: 125px;
  object-fit: contain;
  border-radius: 5px;
`;
