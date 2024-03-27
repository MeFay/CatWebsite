import styled from "styled-components";



export const StyledSearchBar = styled.input`
  width: 20%;
  font-family: "VT323", monospace;
  padding: 10px;
  box-sizing: border-box;
  border: 5px solid #46425e;
  border-radius: 15px;
  background-color:  #ffb0a3;
  font-size: 26px;
  color #ffeecc;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color:  #ffb0a3;
  }

`;

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
