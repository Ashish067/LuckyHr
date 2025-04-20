import React from "react";
import OurServicesCard from "./OurServicesCard";
import { Box } from "@mui/material";
import Header from "./ui/Header";

const OurServicesSection = () => {
  return (
    <Box>
      <Header
        isTitleCentered
        title={"Get instant access to hassle free services"}
        subtitle={"Our Services"}
      />
      <OurServicesCard />
    </Box>
  );
};

export default OurServicesSection;
