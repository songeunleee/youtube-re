import logo from "./logo.svg";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
