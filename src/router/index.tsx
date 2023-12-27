import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/open/Home";
import ProductDetails from "../pages/open/ProductDetails";
import OpenLayout from "../components/layout/OpenLayout";
import NotFound from "../common/NotFound";
import PrivateLayout from "../components/layout/PrivateLayout";
import Dashboard from "../pages/private/Dashboard";
import Profile from "../pages/private/Profile";
import ManageUsers from "../pages/private/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/manage-user",
        element: <ManageUsers />,
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
