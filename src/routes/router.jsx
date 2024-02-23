import { createBrowserRouter } from "react-router-dom"
import SignUp from "../pages/auth/SignUp"
import SignIn from "../pages/auth/SignIn"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="text-4xl">Hello World</h1>,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <h1 className="text-4xl text-primary">Uppsss not found sorry</h1>,
  },
])

export default routes
