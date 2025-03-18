import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Avatar, Box, Container, styled, Typography } from "@mui/material";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import CusCentric from "../assets/chooseus/cus-centric.png";
import Flexibility from "../assets/chooseus/flexibility.png";
import GrivanceHandling from "../assets/chooseus/grivancehandling.png";
import Integrity from "../assets/chooseus/integrity.png";
import Reliability from "../assets/chooseus/reliability.png";
import StrongDatabase from "../assets/chooseus/strongdatabase.png";

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
  const reasons = [
    {
      img: CusCentric,
      title: "Customer Centric",
      description: ` We believe that our success is measured by your satisfaction. Our
            Customer-Centric approach is at the heart of everything we do,
            ensuring that every step of your journey towards national and
            international career is seamless, supportive, and tailored to your
            unique needs.`,
    },
    {
      img: StrongDatabase,
      title: "Strong Database",
      description: ` At Lucky HR Solution, our database isn't just a collection of information; 
      it's the backbone of our success. Automated and online processes and an integrated database
       of thousands of candidates and highly evolved search techniques to meet your requirements. `,
    },

    {
      img: Integrity,
      title: "Integrity",
      description: ` Integrity is the cornerstone of our operations. We understand that trust and
       honesty are fundamental to building strong, lasting relationships with our clients.
        Our qualities like Transparency in Communication, Confidentiality & Privacy, 
        Accountability & Quality Assurance uphold the highest standards of integrity in everything we do.`,
    },
    {
      img: Reliability,
      title: "Reliability",
      description: ` Reliability is the foundation of our relationship with you. We prioritize transparency,
       trust, and integrity in everything we do. We believe in open and honest communication, ensuring you are
     informed every step of the way. Count on us to deliver on our promises and support you throughout your job placement journey.`,
    },
    {
      img: GrivanceHandling,
      title: "Grivance Handling",
      description: ` We understand that addressing grievances promptly and effectively is crucial for maintaining trust and satisfaction among our clients and partners. Our grievance handling process is designed to provide you with a supportive and responsive experience from start to finish.`,
    },
    {
      img: Flexibility,
      title: "Flexibility",
      description: ` Flexibility is our hallmark . We guarantee that our services are customized to fulfill particular needs since we are aware of the variety of needs that our clients and candidates have. Our dedicated team is committed to provide flexible options and will make a smooth adjustment for any changes or challenges that may occur.`,
    },
  ];

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
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
          {reasons.map((reason) => (
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
    </>
  );
};

export default WhyChooseUs;
