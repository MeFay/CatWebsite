import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/home/HomePage";
import { CatShopPage } from "./Pages/catShop/CatShopPage";
import { CatPage } from "./Pages/catPage/CatPage";
import { CartPage } from "./Pages/cartPage/CartPage";
import { PaymentPage } from "./Pages/payment/PaymentPage";
import { ItemShopPage } from "./Pages/itemShop/ItemShop";
import { ItemPage } from "./Pages/itemPage/ItemPage";

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
    path: "/itemShop/:pageId",
    element: <ItemShopPage />,
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
  { path: "*", element: <Navigate to="/home" replace /> },
]);
