import { Box } from "@mui/material";
import React from "react";
import DiscoverJobsText from "./DiscoverJobsText";
import JobDiscovery from "./DiscoverJobs";

const DiscoverJobsSection = () => {
  return (
    <>
      <Box
        paddingX={1.5}
        display={"flex"}
        alignItems={{ xs: "center", md: "start" }}
        flexDirection={{ xs: "column" }}
        gap={2}
        sx={{ backgroundColor: "#f4f4f4" }}
        paddingY={8}
      >
        <DiscoverJobsText />
        <JobDiscovery />
      </Box>
    </>
  );
};

export default DiscoverJobsSection;
