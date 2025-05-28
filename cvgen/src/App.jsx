import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import Profile from "./components/ui/Profile";
import Links from "./components/ui/Links";
import Education from "./components/ui/Education";
import Experience from "./components/ui/Experience";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Skills from "./components/ui/Skills";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Profile />,
      },
      {
        path: "/links",
        element: <Links />
      },
      {
        path: "/education",
        element: <Education />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/skills",
        element: <Skills />
      },
    ]
  },
]);

export default appRouter;
