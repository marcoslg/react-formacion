import { RouteObject, Navigate } from "react-router-dom";
import Home from "views/Home";
import Contact from "views/Contact";
import Users from "views/Users";
import App from "App";
import UserDetails from "views/UserDetails";

const isLogged = () => Math.random() > 0.5;

const rutaProtegida = (element: JSX.Element): React.ReactNode => {
  if (isLogged()) {
    return element;
  }
  return <Navigate to="/" />;
};
const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "contacto",
        element: <Contact saludo="hola" />,
      },
      {
        path: "users",
        element: rutaProtegida(<Users />),
        children: [
          {
            path: ":nombre",
            element: <UserDetails />,
          },
        ],
      },
      {
        path: "manual",
        element: <h1>manual</h1>,
      },
      { path: "*", element: <h2>404</h2> },
    ],
  },
];

export default routes;
