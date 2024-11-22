import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";

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
        element: <About />,
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
  {
    path: "/category",
    children: [
      {
        path: "/category/fish",
        element: <h2>fish category</h2>,
        children: [
          {
            path: "/category/fish/fish",
            element: <h2>Fish</h2>,
          },
          {
            path: "/category/fish/dry-fish",
            element: <h2>dry-fish</h2>,
          },
        ],
      },
      {
        path: "/category/meat",
        children: [
          {
            path: "/category/meat/beef",
            element: <h2>Beef</h2>,
          },
          {
            path: "/category/meat/chicken",
            element: <h2>Chicken</h2>,
          },
          {
            path: "/category/meat/bird",
            element: <h2>Bird</h2>,
          },
          {
            path: "/category/meat/mutton",
            element: <h2>Mutton</h2>,
          },
          {
            path: "/category/meat/duck",
            element: <h2>Duck</h2>,
          },
        ],
      },
      {
        path: "/category/fruit",
        children: [
          {
            path: "/category/fruit/local-fruit",
            element: <h2>Local Fruit</h2>,
          },
          {
            path: "/category/fruit/imported-fruit",
            element: <h2>Import Fruit</h2>,
          },
        ],
      },
      {
        path: "/category/vegetables",
        children: [
          {
            path: "/category/vegetables/local-vegetables",
            element: <h2>Local Vegetables</h2>,
          },
          {
            path: "/category/vegetables/imported-vegetables",
            element: <h2>Imported Vegetables</h2>,
          },
        ],
      },
      {
        path: "/category/dairy",
        children: [
          {
            path: "/category/dairy/borhani",
            element: <h2>Borhani</h2>,
          },
          {
            path: "/category/dairy/butter",
            element: <h2>Butter</h2>,
          },
          {
            path: "/category/dairy/cheese",
            element: <h2>Cheese</h2>,
          },
          {
            path: "/category/dairy/curd",
            element: <h2>Curd</h2>,
          },
          {
            path: "/category/dairy/ice-cream",
            element: <h2>Ice Cream</h2>,
          },
          {
            path: "/category/dairy/yogurt",
            element: <h2>Yogurt</h2>,
          },
        ],
      },
      {
        path: "/category/frozen",
        children: [
          {
            path: "/category/frozen/sea-foods",
            element: <h2>Sea Foods</h2>,
          },
          {
            path: "/category/frozen/snacks",
            element: <h2>Snack</h2>,
          },
        ],
      },
      {
        path: "/category/grocery",
        children: [
          {
            path: "/category/grocery/cookies",
            element: <h2>Cookies</h2>,
          },
          {
            path: "/category/grocery/biscuits",
            element: <h2>Biscuits</h2>,
          },
          {
            path: "/category/grocery/candies",
            element: <h2>Candies</h2>,
          },
          {
            path: "/category/grocery/rice",
            element: <h2>Rice</h2>,
          },
          {
            path: "/category/grocery/sugar",
            element: <h2>Sugar</h2>,
          },
          {
            path: "/category/grocery/vinegar",
            element: <h2>Vinegar</h2>,
          },
          {
            path: "/category/grocery/cooking-oil",
            element: <h2>Cooking Oil</h2>,
          },
        ],
      },
    ],
  },
]);

export default router;
