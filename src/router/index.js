import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import Abm from "../pages/Abm";
import Admin from "../pages/Admin";
import Error404 from "../pages/Error404";
import LayoutPublic from "../layout/LayoutPublic";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/item/:id",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/abm",
        element: <Abm />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);
