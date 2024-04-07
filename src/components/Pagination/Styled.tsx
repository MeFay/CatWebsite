import styled from "styled-components";
import { theme } from "../../styles/themes";

export const StyledPagination = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    list-style-type: none;
    gap: 0.5em;
    &:hover {
      cursor: pointer;
    }
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .pagination a {
    text-decoration: none;
    color: ${theme.Color6};
    &:hover {
      color: ${theme.Color2};
    }
  }

  .pagination a.active-link {
    color: ${theme.Color1};
  }
`;
