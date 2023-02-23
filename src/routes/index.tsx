import { RouteObject } from "react-router-dom";
import Home from "views/Home";
import Contact from "views/Contact";
import Users from "views/Users";
import App from "App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "/users",
    element: <Users />,
  },
];

export default routes;
