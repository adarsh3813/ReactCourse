import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// default import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/", element: <Body /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:restaurantId", element: <RestaurantMenu /> },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
