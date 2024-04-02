import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "pages/NotFound";
import DesktopOne from "pages/DesktopOne";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <DesktopOne /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopone",
      element: <DesktopOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
