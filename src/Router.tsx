import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/home/Home";
import { CatShopPage } from "./Pages/catShop/CatShop";
import { CatPage } from "./Pages/cat/Cat";
import { CartPage } from "./Pages/cart/Cart";
import { PaymentPage } from "./Pages/payment/Payment";
import { ItemPage } from "./Pages/Item/Item";
import { ItemShop } from "./Pages/ItemShop/ItemShop";
import { ErrorPage } from "./Pages/error/Error";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/catShop/:pageId",
    element: <CatShopPage />,
  },
  {
    path: "/ItemShop/:pageId",
    element: <ItemShop />,
  },
  {
    path: "/cat/:catId",
    element: <CatPage />,
  },
  {
    path: "/item/:itemId",
    element: <ItemPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  { path: "/", element: <Navigate to="/home" replace /> },
  { path: "*", element: <Navigate to="/error" replace /> },
]);
