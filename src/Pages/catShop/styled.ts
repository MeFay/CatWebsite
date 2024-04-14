import styled from "styled-components";
import { theme } from "../../styles/themes";
import { device } from "../../styles/device";

export const StyledImage = styled.img`
  max-width: 40px;
  max-height: 40px;

  @media ${device.tablet} {
    max-width: 60px;
    max-height: 60px;
  }
`;

export const StyledNoCatsFound = styled.p`
  text-align: center;
  font-size: 2em;
  color: ${theme.Color1};
`;
