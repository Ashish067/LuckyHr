import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Training from "../assets/training.png";
import Recruitment from "../assets/recruitment.png";
import Executive from "../assets/executive_search.png";

const OurServicesCard = () => {
  const cards = [
    {
      id: 1,
      title: "Executive Search",
      image: Executive,
      description:
        "We mentor remarkable leadership journeys, prioritizing top talent acquisition and retention to drive your company's success through top-notch staffing and recruitment services.",
    },
    {
      id: 2,
      title: "Recruitment Services",
      image: Recruitment,
      description:
        "We offer top companies efficient global manpower solutions with meticulous planning, disciplined recruitment, and grievance handling services.",
    },
    {
      id: 3,
      title: "Training and Counselling",
      image: Training,
      description:
        "We recognize the crucial role of industrial skill training in global recruitment. We offer exclusive training and counseling to ensure candidates excel in their roles, meeting industry standards for our valued clients.",
    },
  ];

  return (
    <>
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
    </>
  );
};

export default OurServicesCard;

// <Card
// sx={{
//   transition: "transform 0.5s ease",
//   "&:hover": {
//     transform: "scale(1.05)",
//     "& .MuiBox-root": {
//       bgcolor: "white",
//     },
//   },

//   height: { sm: "450px", md: "450px", lg: "500px" },
//   maxWidth: { xs: "95%", sm: "34%" },
//   cursor: "pointer",
//   display: "flex",
//   flexDirection: "column",
//   flexWrap: "wrap",
//   alignSelf: "center",
// }}
// >
// <Box
//   sx={{
//     height: "40%",
//     width: "100%",
//     backgroundColor: "#dddddd",
//   }}
// >
//   <CardMedia
//     component="img"
//     image={Training}
//     alt="training-picture"
//     sx={{
//       maxHeight: "100%",
//       maxWidth: "90%",
//       padding: "3px",
//       objectFit: "contain",
//       justifySelf: "center",
//     }}
//   />
// </Box>
// <CardContent>
//   <Typography
//     component="h3"
//     fontSize={"28px"}
//     sx={{
//       color: "#000316",
//       lineHeight: "42px",
//       fontWeight: "bold",
//       paddingX: "40px",
//       paddingY: "25px",
//     }}
//   >
//     Training And Counselling
//   </Typography>
//   <Typography
//     fontSize={"15px"}
//     sx={{
//       lineHeight: "20px",
//       fontWeight: "400",
//       textAlign: "left",
//       color: "#000316",
//       marginBottom: "15px",
//       padding: "12px 40px 0px",
//     }}
//   >
//     We recognize the crucial role of industrial skill training in global
//     recruitment. We offer exclusive training and counseling to ensure
//     candidates excel in their roles, meeting industry standards for our
//     valued clients.
//   </Typography>
// </CardContent>
// </Card>
