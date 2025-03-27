import React, { useRef, useState } from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SeekerTestimonial from "../../assets/seekertestimonial.png";
import TestimonialSwiper from "../../components/JobSeekerTestimonial/TestimonialSwiper";

const JobSeekerTestimonial = () => {
  return (
    <Stack
      alignItems={"center"}
      sx={{ backgroundColor: "#f7f7fb" }}
      paddingY={{ xs: 6, md: 10, lg: 12, xl: 14 }}
      // spacing={{ xs: 3, md: 6 }}
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

{
  /* <Stack spacing={2} alignItems={"center"} maxWidth={600} padding={4}>
            <FormatQuoteIcon color="primary" />
            <Typography>
              “I am very happy with the processing time cause it is very quick
              and easy. Very thankful for the staff and the company for
              providing me good company to work.”
            </Typography>
            <Avatar
              sx={{ height: "100px", width: "100px" }}
              src={SeekerTestimonial}
            ></Avatar>
            <Typography
              fontSize={"18px"}
              fontWeight={"bold"}
              lineHeight={1.2}
              color="#1a1a1a"
            >
              Job Seeker Name
            </Typography>
          </Stack> */
}
