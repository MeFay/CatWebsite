import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { theme } from "../../styles/themes";

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    color: ${theme.Color6};
    background-color: ${theme.Color1};
    width: 100%;
    border-radius: 1em;
    padding: 1.25em;
  }

  .Toastify__toast-body {
    font-family: "VT323", monospace;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 1.2;
  }
`;
