import React from "react";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import PageHeader from "../../components/BreadCrumbsWrapper/PageHeader";
import { data } from "../../components/data/coveragedata";

const OurCoverage = () => {
  return (
    <>
      <PageHeader title={"Our Coverage"} />
      <Stack
        alignItems={"center"}
        sx={{
          backgroundColor: "#e9e9e9",
          paddingTop: { xs: 4, md: "100px" },
          paddingBottom: { xs: 2, md: "50px" },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#1a1a1a",
            marginBottom: { xs: 2, md: 4 },
            lineHeight: 1.2,
            fontSize: "calc(1.5rem + .5vw)",
          }}
        >
          Our Coverage
        </Typography>
        <Grid2
          container
          xm={12}
          md={6}
          gap={2}
          display={"flex"}
          justifyContent={"center"}
          sx={{ paddingX: { xs: "12px", md: 0 } }}
        >
          {data.map((item) => (
            <Box
              key={item.title}
              sx={{
                position: "relative",
                maxWidth: { xs: "100%", md: "400px", lg: "500px", xl: "600px" },
                overflow: "hidden",
                borderRadius: 2,
                border: "8px solid #ffffff",
                boxShadow: "0 0 2px 0px rgb(0 0 0 / 15%)",
                zIndex: 1,
                cursor: "pointer",
                "&:hover img": {
                  transform: "scale(1.2)",
                },
                "&:hover .overlay": {
                  opacity: 1,
                },
                "&:hover .titleBox": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />

              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.5)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  zIndex: 1,
                }}
              />

              <Box
                className="titleBox"
                sx={{
                  position: "absolute",
                  bottom: 20,
                  right: 20,
                  zIndex: 2,
                  color: "white",
                  p: 2,
                  borderRadius: 1,
                  maxWidth: "60%",
                  opacity: 1,
                  transform: "translateY(20px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  fontWeight="bold"
                  gutterBottom
                >
                  {item.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid2>
      </Stack>
    </>
  );
};

export default OurCoverage;
