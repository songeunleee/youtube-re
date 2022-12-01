import logo from "./logo.svg";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
