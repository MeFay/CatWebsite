import { RouterProvider } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { CartProvider } from "./Pages/cartPage/CartProvider";
import "react-toastify/dist/ReactToastify.css";
import { router } from "./Router";
import ReactDOM from "react-dom/client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";
import { store } from "./store";
import catData from "./assets/cats.json";
import { fillList } from "./store/features/catList";
import { useEffect } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

function App() {
  const dispatch = useDispatch();
  console.log(catData);

  useEffect(() => {
    dispatch(fillList(catData));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
