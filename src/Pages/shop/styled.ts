import styled from "styled-components";

export const PaginationContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    font-size: 2em;
    list-style-type: none;
    gap: 10px;
    &:hover {
      cursor: pointer;
    }
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
