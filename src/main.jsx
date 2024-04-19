import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Body from "./Components/Body.jsx";
// import About from "./Components/About.jsx";
// import Contact from "./Components/Contact.jsx";
// import RestaurantMenu from "./Components/RestaurantMenu.jsx";
import Error from "./Components/Error.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Cart from "./Components/Cart.jsx";

const About = lazy(()=> import("./Components/About.jsx"));
const RestaurantMenu = lazy(()=> import("./Components/RestaurantMenu.jsx"));
const Contact = lazy(()=> import("./Components/Contact.jsx"));
const Cart = lazy(()=>import("./Components/Cart.jsx"))

const appRouter = createBrowserRouter([
  {
    path: "/nomnomfood",
    element: <App />,
    children: [
      {
        path: "/nomnomfood",
        element: <Body />,
      },
      {
        path: "/nomnomfood/about",
        element: <Suspense><About /></Suspense> ,
      },
      {
        path: "/nomnomfood/contact",
        element: <Suspense><Contact /></Suspense>,
      },
      {
        path: "/nomnomfood/restaurants/:resId",
        element: <Suspense > <RestaurantMenu /></Suspense>,
      },
      {
        path: "/nomnomfood/cart",
        element: <Suspense><Cart /></Suspense>,
      },
    ],
    errorElement: <Error />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
