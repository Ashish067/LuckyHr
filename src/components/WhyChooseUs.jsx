import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Avatar, Box, styled, Typography } from "@mui/material";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import { reasons } from "./data/whyChooseUs";

const StyledAccordianSummary = styled(AccordionSummary)(({ theme }) => ({
  background: "linear-gradient(to left, #f5fbf6 50%, blue 50%)",
  backgroundSize: "200% 100%", // Double the width to allow sliding
  backgroundPosition: "right", // Start from the left
  transition: "background-position .5s ease",
  ":hover": {
    backgroundPosition: "left", // Slide to the right
    color: "white",
  },

  height: "90px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover .MuiAccordionSummary-expandIconWrapper": {
    color: "white",
  },
  borderBottom: "2px solid blue",
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: "white",
  height: "70px",
  width: "70px",
  "& img": {
    height: "50px",
    width: "50px",
  },
}));

const WhyChooseUs = () => {
  const [expanded, setExpanded] = React.useState(false);

  //function to handle the accordion
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          justifySelf: "center",
          padding: { xs: 4, sm: 6 },
          fontWeight: "bold",
        }}
      >
        Why Choose Us
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { md: "center" },
          flexWrap: "wrap",
          gap: 3,
          paddingX: { xs: 1, sm: 4 },
        }}
      >
        {reasons?.map((reason) => (
          <Accordion
            key={reason.title}
            sx={{ width: { xs: "100%", sm: "45%" } }}
            expanded={expanded === reason.title}
            onChange={handleChange(reason.title)}
          >
            <StyledAccordianSummary
              expandIcon={<ExpandMoreSharpIcon fontSize="large" />}
            >
              <StyledAvatar src={`${reason.img}`} />
              <Typography
                sx={{
                  alignSelf: "center",
                  marginLeft: 1,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                {reason.title}
              </Typography>
            </StyledAccordianSummary>
            <AccordionDetails>
              <Typography>{reason.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
