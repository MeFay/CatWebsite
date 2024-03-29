import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/home/HomePage";
import ShopPage from "./Pages/shop/ShopPage";
import CatPage from "./Pages/catPage/CatPage";
import CartPage from "./Pages/cartPage/CartPage";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/shop/:1",
    element: <ShopPage />,
  },
  {
    path: "/cat/:catId",
    element: <CatPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  { path: "*", element: <Navigate to="/home" replace /> },
]);
