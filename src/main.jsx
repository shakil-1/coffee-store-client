import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import App from "./App";
import CoffeeView from "./components/CoffeeView";
import NotFound from "./components/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffees"),
    errorElement:<NotFound></NotFound>
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>,
  },

  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader:({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path:'/view/:id',
    element:<CoffeeView></CoffeeView>,
    loader:({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
