import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router";

import {Home, NewArticles, Popular, Trending, Categories} from "./pages/index.js";

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
        path: "/new",
        element: <NewArticles />,
      },
      {
        path: "/popular",
        element : <Popular />
      },
      {
        path: "/trending",
        element : <Trending/>
      },
      {
        path: "/categories",
        element : <Categories />
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
