import { Box, IconButton, Toolbar } from "@mui/material";
import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import logo from "../../assets/logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Close } from "@mui/icons-material";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <img src={logo} alt="logo" height={80} />
      </Box>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            {mobileOpen ? <Close /> : <MenuIcon />}
          </IconButton>
          <MobileNav
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </>
      ) : (
        <DesktopNav />
      )}
    </Toolbar>
  );
};

export default Navbar;
