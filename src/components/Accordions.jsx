import { Add, Language } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "transparent",

  "&:before": {
    display: "none",
  },

  "&.Mui-expanded": {
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px 0",
  },

  transition: theme.transitions.create(["box-shadow", "background-color"], {
    duration: theme.transitions.duration.short,
  }),
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: "8px 16px",
  backgroundColor: "transparent",
  borderRadius: "4px",
  transition: "all 0.3s ease",
  fontWeight: "bold",
  fontSize: "15px",

  "&.Mui-expanded": {
    backgroundColor: "#f0f0fa",
    borderRadius: "20px 0 0 0",
    boxShadow: "none",
    color: theme.palette.primary.main,
  },
}));

const Accordions = ({ data }) => {
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Typography fontSize={{ xs: "25px", md: "50px" }} fontWeight={"bold"}>
        Frequently Asked Questions?
      </Typography>

      {data.map((faq, index) => (
        <StyledAccordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <StyledAccordionSummary
            expandIcon={
              expanded === `panel${index}` ? (
                <Language color="primary" />
              ) : (
                <Add color="primary" />
              )
            }
          >
            {faq.question}
          </StyledAccordionSummary>
          <AccordionDetails sx={{ padding: "20px" }}>
            {faq.answer}
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );
};

export default Accordions;
