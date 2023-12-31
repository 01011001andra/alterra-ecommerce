import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Checkout,
  Home,
  Login,
  Products,
  Register,
  DetailProduct
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <DetailProduct />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
