import styled from "styled-components";

export const StyledPagination = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    list-style-type: none;
    gap: 10px;
    &:hover {
      cursor: pointer;
    }
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .pagination a {
    text-decoration: none;
    color: #00b9be;
    &:hover {
      color: #ffb0a3;
    }
  }

  .pagination a.active-link {
    font-weight: bold;
    color: #ffeecc;
  }
`;
