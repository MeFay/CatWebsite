import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  background-color: #ffb0a3;
  border-radius: 15px;
  gap: 1em;
  margin-top: 5em;
  padding: 2em;
  border: 0.5em solid #15788c;
`;

export const StyledName = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 5em;
  color: #46425e;
`;

export const StyledTraits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #ffeecc;
  border-radius: 1em;
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 2em;
  max-width: 100%;
  color: #00b9be;
`;

export const StyledImage = styled.img`
  max-width: 40rem;
  max-height: 40rem;
  border-radius: 1em;
`;

export const StyledButton = styled.button`
  font-family: "VT323", monospace;
  font-weight: 400;
  width: 20%;
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
