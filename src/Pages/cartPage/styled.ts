import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  background-color: #ffb0a3;
  border-radius: 15px;
  margin-top: 5em;
  padding: 2em;
  border: 0.5em solid #15788c;
  gap: 1em;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 5em;
  color: #46425e;
`;

export const StyledTraits = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background: #ffeecc;
  border-radius: 1em;
  padding: 20px;
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 2em;
  max-width: 100%;
  color: #00b9be;
  width: 100%;
`;

export const StyledImage = styled.img`
  max-width: 40rem;
  max-height: 40rem;
  border-radius: 1em;
  paddinng: 10px;
  width: 100%;
`;

export const StyledButton = styled.button`
  font-family: "VT323", monospace;
  font-weight: 400;
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  background-color: #ff6973;
  color: #ffeecc;
  font-size: 1.5em;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
