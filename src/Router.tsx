import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/home/HomePage";
import ShopPage from "./Pages/shop/ShopPage";
import CatPage from "./Pages/catPage/CatPage";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/shop/:pageId",
    element: <ShopPage />,
  },
  {
    path: "/cat/:catId",
    element: <CatPage />,
  },
  { path: "*", element: <Navigate to="/home" replace /> },
]);
