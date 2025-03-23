import { Typography } from "@mui/material";
import React from "react";

const OurServicesText = () => {
  return (
    <div>
      <Typography
        color="blue"
        textAlign={"center"}
        sx={{ marginBottom: "2px" }}
      >
        GET INSTANT ACCESS TO HASSLE FREE SERVICES
      </Typography>
      <Typography
        textAlign={"center"}
        color="#1a1a1a"
        fontWeight={"bold"}
        sx={{ fontSize: "calc(1.3rem + 0.6vw)", marginBottom: "30px" }}
      >
        Our Services
      </Typography>
    </div>
  );
};

export default OurServicesText;

// color: #1a1a1a;
// font-weight: bold;
// font-family: "Muli";
