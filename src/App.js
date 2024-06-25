import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Universities from "./pages/institutions/Universities";
import Schools from "./pages/institutions/Schools";
import Highschools from "./pages/institutions/Highschools";

const router = createBrowserRouter([
  {
    path: "/", element: <Home />, children: [
      { path: "/universities", element: <Universities /> },
      { path: "/schools", element: <Schools /> },
      { path: "/highschools", element: <Highschools /> }
    ]
  },
  { path: "/login", element: <Login /> }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
