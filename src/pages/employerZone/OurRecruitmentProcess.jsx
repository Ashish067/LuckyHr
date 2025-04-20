import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import image from "../../assets/recruitment-process.png";
import PageHeader from "../../components/BreadCrumbsWrapper/PageHeader";

const OurRecruitmentProcess = () => {
  return (
    <Stack>
      <PageHeader title={"Our Recruitment Process"} />
      <Stack pt={"50px"} pb={"20px"} marginX={"auto"}>
        <Typography
          textAlign={"center"}
          fontSize={"calc(1.3rem + .6vw)"}
          fontWeight={"bold"}
          color="#1a1a1a"
          marginTop={"-6px"}
          marginBottom={"25px"}
        >
          Our Recruitment Process
        </Typography>
        <Box
          sx={{
            boxSizing: "border-box",
            paddingX: "10px",
            maxWidth: "100%",
            marginX: { lg: "100px" },
          }}
        >
          <img
            src={image}
            alt=""
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default OurRecruitmentProcess;
