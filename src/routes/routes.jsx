import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <h1>Product Page</h1>,
      },
      {
        path: "/about",
        element: <h2>about page</h2>,
      },
      {
        path: "/contact",
        element: <h2>Contat page</h2>,
      },
    ],
  },
  {
    path: "/seller/dashboard",
    element: <h2>Seller Dashboard</h2>,
    children: [],
  },
  {
    path: "/buyer/dashboard",
    element: <h2>Buyer dashboard</h2>,
    children: [],
  },
  {
    path: "/admin/dashboard",
    element: <h2>Admin dashboard</h2>,
    children: [],
  },
]);

export default router;
