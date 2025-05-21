import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Transaction from "../pages/Transaction";
import Profile from "../pages/Profile";
import Analytics from "../pages/Analytics";
import Budget from "../pages/Budget";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import AppLayout from "../layouts/AppLayout";
import { requiredLogin } from "./protectedLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    loader: requiredLogin,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/transactions",
        element: <Transaction />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/budget",
        element: <Budget />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
