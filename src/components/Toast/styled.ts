import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    color: #00b9be;
    background-color: #ffeecc;
    width: 100%;
    border-radius: 1em;
    padding: 20px;
  }

  .Toastify__toast-body {
    font-family: "VT323", monospace;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 1.2;
  }

`;
