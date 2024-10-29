import React from "react";
import { Nav } from "react-bootstrap";
import Navbars from "../Nav/Navbars";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <Navbars />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
