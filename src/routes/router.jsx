import { createBrowserRouter } from "react-router-dom"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="text-4xl">Hello World</h1>,
  },
  {
    path: "*",
    element: <h1 className="text-4xl text-primary">Uppsss not found sorry</h1>,
  },
])

export default routes
