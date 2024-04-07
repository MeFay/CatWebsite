import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./Pages/cartPage/CartProvider";
import "react-toastify/dist/ReactToastify.css";
import { router } from "./Router";
import ReactDOM from "react-dom/client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
