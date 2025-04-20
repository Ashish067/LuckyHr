import React from "react";
import { Stack, Typography } from "@mui/material";
import TestimonialSwiper from "../../components/JobSeekerTestimonial/TestimonialSwiper";

const JobSeekerTestimonial = () => {
  return (
    <Stack
      alignItems={"center"}
      sx={{ backgroundColor: "#f7f7fb" }}
      paddingY={{ xs: 6, md: 10, lg: 12, xl: 14 }}
    >
      <Stack paddingX={{ xs: 1, md: 0 }}>
        <Typography
          fontSize={{ xs: "14px", lg: 16 }}
          fontWeight={700}
          color="#2042e3"
          marginBottom={"10px"}
          letterSpacing={1}
          textAlign="center"
          textTransform={"uppercase"}
        >
          Explore success stories from job seekers.
        </Typography>
        <Typography
          color="#1a1a1a"
          fontWeight={"bold"}
          fontSize={"calc(1.3rem + .6vw)"}
          lineHeight={1.2}
          textAlign="center"
        >
          Job Seekers Experiences
        </Typography>
      </Stack>
      <TestimonialSwiper />
    </Stack>
  );
};

export default JobSeekerTestimonial;
