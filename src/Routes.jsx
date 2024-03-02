import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import About from "pages/About";
import Works from "pages/Works";
import Contact from "pages/Contact";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "works",
      element: <Works />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
