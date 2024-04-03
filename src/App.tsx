import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./Pages/cartPage/CartProvider";
import "react-toastify/dist/ReactToastify.css";
import { router } from "./Router";
import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
