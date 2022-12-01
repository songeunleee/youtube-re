import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Video🔥</div>,
  },
  {
    path: "/videos",
    element: <div>Video🔥</div>,
  },
  {
    path: "/videos/query",
    element: <div>Video🔍</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
