import styled from "styled-components";
import { theme } from "../../styles/themes";

export const StyledMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9em;
  color: ${theme.Color2};
  margin: 0;
  padding: 5%;
`;

export const StyledLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
