import { Slide } from "react-toastify";
import { StyledToastContainer } from "./styled";

export const Toast = () => {
  return (
    <StyledToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Slide}
    />
  );
};
