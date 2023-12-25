import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/open/Home";
import ProductDetails from "../pages/open/ProductDetails";
import OpenLayout from "../components/layout/OpenLayout";
import NotFound from "../common/NotFound";
import PrivateLayout from "../components/layout/PrivateLayout";
import Dashboard from "../pages/private/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <OpenLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
