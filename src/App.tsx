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
import itemData from "./assets/items.json";
import { fillList as fillItemList } from "./store/features/itemList";
import { useEffect } from "react";
import { Cat, Item } from "./types";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const transformedCatData = Object.entries(catData).reduce(
      (acc, [id, cat]) => {
        acc[`cat-${id}`] = {
          ...cat,
          id: `cat-${id}`,
          isSold: false,
          quantity: 0,
          isFavorite: false,
        };
        return acc;
      },
      {} as Record<string, Cat>
    );
    dispatch(fillList(transformedCatData));

    const transformedItemData = Object.entries(itemData).reduce(
      (acc, [id, item]) => {
        acc[`item-${id}`] = {
          ...item,
          id: `item-${id}`,
          isSold: false,
          quantity: 0,
          isFavorite: false,
        };
        return acc;
      },
      {} as Record<string, Item>
    );
    dispatch(fillItemList(transformedItemData));
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
