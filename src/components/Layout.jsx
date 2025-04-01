import React from "react";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
