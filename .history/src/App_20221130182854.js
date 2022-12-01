import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
