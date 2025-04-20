import { Box } from "@mui/material";
import React from "react";
import JobDiscovery from "./DiscoverJobs";
import Header from "../ui/Header";

const DiscoverJobsSection = () => {
  return (
    <Box
      paddingX={1.5}
      display={"flex"}
      alignItems={{ xs: "center", md: "start" }}
      flexDirection={{ xs: "column" }}
      gap={2}
      sx={{ backgroundColor: "#f4f4f4" }}
      paddingY={8}
    >
      <Header
        title={"Discover recent jobs across popular roles."}
        subtitle={"Find a relevant job for your career."}
      />
      <JobDiscovery />
    </Box>
  );
};

export default DiscoverJobsSection;
