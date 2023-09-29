import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Login from "../pages/login"
import Register from "../pages/register"
import MainPage from "../pages/mainPage"
import Logged from "../pages/logged"
import UpdateData from "../pages/updateData"
import Requests from "../pages/requests"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/logged",
        element: <Logged />,
      },
      {
        path: "/update",
        element: <UpdateData />,
        children: [
          {
            path: "/requests",
            element: <Requests />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
])
