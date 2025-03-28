import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { cards } from "./data/ourServicesCard";

const OurServicesCard = () => {
  return (
    <Box
      display={"flex"}
      justifyItems={"flex-start"}
      alignItems={"start"}
      gap={2}
      flexDirection={{ xs: "column", sm: "row" }}
      marginX={{ md: 4 }}
      maxWidth={"100%"}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          sx={{
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.05)",
              "& .MuiBox-root": {
                bgcolor: "white",
              },
            },
            maxWidth: { xs: "95%", sm: "33%", lg: "33%" },
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              height: "50%",
              width: "100%",
              backgroundColor: "#dddddd",
            }}
          >
            <CardMedia
              component="img"
              image={`${card.image}`}
              alt="training-picture"
              sx={{
                height: "100%",
                maxWidth: "250px",
                padding: "3px",
                objectFit: "contain",
                justifySelf: "center",
              }}
            />
          </Box>
          <CardContent>
            <Typography
              component="h3"
              fontSize={"28px"}
              sx={{
                color: "#000316",
                lineHeight: "42px",
                fontWeight: "bold",
                paddingX: { xs: "40px", sm: "0", md: "40px", lg: "40px" },
                paddingY: "25px",
              }}
            >
              {card.title}
            </Typography>
            <Typography
              fontSize={"15px"}
              sx={{
                lineHeight: "20px",
                fontWeight: "400",
                textAlign: "left",
                color: "#000316",
                marginBottom: "15px",
                paddingTop: "12px",
                paddingX: { xs: "40px", sm: "0", md: "40px", lg: "40px" },
                textWrap: "wrap",
              }}
            >
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default OurServicesCard;
