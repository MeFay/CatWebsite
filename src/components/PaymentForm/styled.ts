import styled from "styled-components";
export const StyledForm = styled.form`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  background-color: #ffeecc;
  border-radius: 15px;
  padding: 2em;
  border: 0.5em solid #00b9be;
  gap: 2em;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  row-gap: 20px;
  height: 100%;
`;

export const StyledLabelContainer = styled.div`
  width: 20%;
`;

export const StyledInputContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const StyledInput = styled.input`
  font-family: "VT323", monospace;
  line-height: 1.5;
  font-weight: 400;
  font-size: 1.5em;
  display: flex;
  margin: auto;
  align-items: center;
  color: #ff6973;
  width: 100%;
`;

export const StyledSelect = styled.select`
  font-family: "VT323", monospace;
  line-height: 1.5;
  font-weight: 400;
  font-size: 1.5em;
  display: flex;
  margin: auto;
  align-items: center;
  color: #00b9be;
  padding: 0.3em;
  width: 100%;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.1em;
  font-size: 2.5em;
  max-width: 100%;
  color: #46425e;
  width: 100%;
`;

export const StyledTotal = styled.p`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  color: #ff6973;
  font-size: 1.7em;
`;

export const StyledButton = styled.button`
  font-family: "VT323", monospace;
  font-weight: 400;
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  background-color: #15788c;
  color: #ffeecc;
  font-size: 2em;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
