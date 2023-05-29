import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./component/Error";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import RestaurantMenu from "./component/RestaurantMenu";
//import Profile from "./component/Profile";
import Profile from "./component/ProfileClass";
import About1 from "./component/About";
// const styleCard={
//     backgroundColor: "gray"
// };
const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About1 />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          // {
          //   path: "profile",
          //   element: <Profile />,
          // },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
