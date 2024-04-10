import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/home/HomePage";
import { CatShopPage } from "./Pages/catShop/CatShopPage";
import { CatPage } from "./Pages/catPage/CatPage";
import { CartPage } from "./Pages/cartPage/CartPage";
import { PaymentPage } from "./Pages/payment/PaymentPage";
import { ItemPage } from "./Pages/ItemPage/ItemPage";
import { ItemShop } from "./Pages/ItemShop/ItemShop";
import { ErrorPage } from "./Pages/errorPage/ErrorPage";

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
