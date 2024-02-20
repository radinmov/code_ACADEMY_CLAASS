import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Account from "./pages/account_page";
import Posts from "./pages/posts";



const routes = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/posts/:postID",
    element: <Posts />,
  },
  {
    path: "/account/:userId",
    element: <Account />,
  },
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
