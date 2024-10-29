import React from "react";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default Layout;
