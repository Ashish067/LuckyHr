import React, { useRef, useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SeekerTestimonial from "../../assets/seekertestimonial.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styleForSwiper.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";

export default function App() {
  const candidates = [
    {
      id: 1,
      name: "Bir Bahadur Gaudel",
      image: SeekerTestimonial,
      testimonial:
        "Hello there felling lucky that I found lucky hr solution for my dream of foreign employment, I got all the help from the them to make my processing easy and successful.",
    },
    {
      id: 2,
      name: "Bir Bahadur Gaudel",
      image: SeekerTestimonial,
      testimonial:
        "Hello there felling lucky that I found lucky hr solution for my dream of foreign employment, I got all the help from the them to make my processing easy and successful.",
    },
    {
      id: 3,
      name: "Bir Bahadur Gaudel",
      image: SeekerTestimonial,
      testimonial:
        "Hello there felling lucky that I found lucky hr solution for my dream of foreign employment, I got all the help from the them to make my processing easy and successful.",
    },
    {
      id: 4,
      name: "Bir Bahadur Gaudel",
      image: SeekerTestimonial,
      testimonial:
        "Hello there felling lucky that I found lucky hr solution for my dream of foreign employment, I got all the help from the them to make my processing easy and successful.",
    },
    {
      id: 5,
      name: "Bir Bahadur Gaudel",
      image: SeekerTestimonial,
      testimonial:
        "Hello there felling lucky that I found lucky hr solution for my dream of foreign employment, I got all the help from the them to make my processing easy and successful.",
    },
    {
      id: 6,
      name: "Bir Bahadur Gaudel",
      image: SeekerTestimonial,
      testimonial:
        "Hello there felling lucky that I found lucky hr solution for my dream of foreign employment, I got all the help from the them to make my processing easy and successful.",
    },
    {
      id: 7,
      name: "Bir Bahadur Gaudel",
      image: SeekerTestimonial,
      testimonial:
        "Hello there felling lucky that I found lucky hr solution for my dream of foreign employment, I got all the help from the them to make my processing easy and successful.",
    },
  ];

  return (
    <>
      <Container>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 3000 }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {candidates.map((candidate) => (
            <SwiperSlide key={candidate.id}>
              <Stack
                // spacing={{ xs: 3, md: 6 }}
                alignItems="center"
                justifyContent="center" // Ensures content remains centered
                maxWidth={600}
                minHeight="450px" // Matches swiper-slide height for uniformity
              >
                <FormatQuoteIcon color="primary" />
                <Typography
                  textAlign="center"
                  paddingY={{ xs: "20px", sm: "40px" }}
                >{`“ ${candidate.testimonial}”`}</Typography>
                <Box>
                  <Avatar
                    sx={{
                      height: "100px",
                      width: "100px",
                      marginBottom: 3,
                      marginX: "auto",
                    }}
                    src={candidate.image}
                  />
                  <Typography
                    fontSize="18px"
                    fontWeight="bold"
                    lineHeight={1.2}
                    color="#1a1a1a"
                    textAlign="center"
                  >
                    {candidate.name}
                  </Typography>
                </Box>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}
