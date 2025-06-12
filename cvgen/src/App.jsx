import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import Profile from "./components/ui/Profile";
import Links from "./components/ui/Links";
import Education from "./components/ui/Education";
import Experience from "./components/ui/Experience";
import Skills from "./components/ui/Skills";
import Certifications from "./components/ui/Certifications";
import Preview from "./components/ui/Preview";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { useState } from "react";
import cvContext from "./context/cvcontext.js";
import "./App.css";


function App() {
  const [profileData, setProfileData] = useState({ name: "", email: "" });
  const [eduData, setEduData] = useState([]);
  const [links, setLinks] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <cvContext.Provider value={{profileData, setProfileData, eduData, setEduData, links, setLinks, experience, setExperience}}>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <Outlet />
        </div>
      </div>      
    </cvContext.Provider>

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/links",
        element: <Links />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/certifications",
        element: <Certifications />,
      },
      {
        path: "/preview",
        element: <Preview />,
      },
    ],
  },
]);

export default appRouter;
