import { createBrowserRouter } from "react-router-dom"
import SignUp from "../pages/auth/SignUp"

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
    path: "*",
    element: <h1 className="text-4xl text-primary">Uppsss not found sorry</h1>,
  },
])

export default routes
