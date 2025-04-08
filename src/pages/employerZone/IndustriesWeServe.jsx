import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid2,
  Paper,
  Box,
} from "@mui/material";
import Agriculture from "../../assets/industries-we-serve/agriculture.jpg";
import Catering from "../../assets/industries-we-serve/catering.jpg";
import Engineering from "../../assets/industries-we-serve/construction.jpg";
import Automotive from "../../assets/industries-we-serve/automotive.jpg";
import Facility from "../../assets/industries-we-serve/facility.jpg";
import Health from "../../assets/industries-we-serve/health.jpg";
import SuperMarket from "../../assets/industries-we-serve/supermarket.jpg";
import Security from "../../assets/industries-we-serve/security.jpg";
import IT from "../../assets/industries-we-serve/it.jpg";
import PageHeader from "../../components/BreadCrumbsWrapper/PageHeader";

const cardsData = [
  {
    image: Catering,
    title: "Hospitality and Catering Services",
    description:
      "Hospitality is the sector where efficiency is vital, we understand the critical importance of finding the perfect fit for every role. Lucky HR Solution is your premier partner in sourcing top-tier talent for the dynamic hospitality and catering industry on a global scale.",
  },
  {
    image: Agriculture,
    title: "Agriculture",
    description:
      "Given the wealth of agricultural knowledge and experience among Nepalese individuals, companies seeking skilled agricultural workers should consider leveraging Lucky HR Solution's expertise in recruitment. Access to proficient individuals adept in farming techniques is ensured, thereby fostering increased productivity and innovation within the agricultural sector with our exclusive service.",
  },
  {
    image: Health,
    title: "Health Care Services",
    description:
      "We stand as an outstanding provider customized workforce solutions catering specifically to the unique demands of the hospital sector. Through our tailored recruitment processes, we are committed to enhancing patient care, optimizing operational efficiency, and driving success within the healthcare industry.",
  },
  {
    image: SuperMarket,
    title: "Retail And Shopping",
    description:
      "For a retail business or shopping center to succeed, it requires not only quality goods but also qualified staff. In every industry and sector, Lucky HR Solution prides itself on finding the perfect employees for ideal companies, providing well-trained personnel known for their professionalism, punctuality, and understanding.",
  },
  {
    image: Engineering,
    title: "Engineering and Construction",
    description:
      "For engineering, procurement, construction, installation, Lucky Hr Solution has a strong history of finding and recruiting personnel in global level. We are committed to match the appropriate candidate with the suitable vacancy in a variety of disciplines related to the planning, designing, building, and managing of infrastructure, including facilities, buildings, utilities, railroads, roads, tunnels, bridges, airports, and dams.",
  },
  {
    image: Security,
    title: "Security Service",
    description:
      "Our personalized approach ensures a thorough understanding of your unique needs, allowing us to match you with candidates who not only possess the necessary skills and experience but also share your commitment to the welfare and efficiency of your company. With Lucky HR Solutions, you can build a dependable and skilled team that drives the growth and success of your business.",
  },
  {
    image: Automotive,
    title: "Automotive",
    description:
      "Our expertise helps businesses to find the right candidates to drive innovation and growth. Lucky HR Solution has always been able to hire employees through sourcing, shortlisting, interviewing, and on boarding for top companies in the automotive sectors withing very short time span.",
  },
  {
    image: IT,
    title: "Information Technology",
    description:
      "Leveraging our extensive network and industry expertise, we identify candidates who not only possess the technical skills required for the role but also align with your company's culture and values. With Lucky HR Solutions, you can build a high-performing IT team that drives innovation, efficiency, and success in your organization.",
  },
  {
    image: Facility,
    title: "Facility Management",
    description:
      "With our customer-centric approach and skilled team, we ensure precise project execution. Leveraging our expertise in Facility Management, we fill diverse roles from facility managers to maintenance technicians.",
  },
];

const IndustriesWeServe = () => {
  return (
    <>
      <PageHeader title={"Industries We Serve"} />
      <Box
        sx={{
          backgroundColor: "#e9e9e9",
          paddingTop: { xs: 4, md: "100px" },
          paddingBottom: { xs: 2, md: "50px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#1a1a1a",
            marginBottom: { xs: 2, md: 4 },
            lineHeight: 1.2,
            fontSize: "calc(1.5rem + .5vw)",
          }}
        >
          Industries We Serve
        </Typography>
        <Grid2 container justifyContent="center" padding={2}>
          {cardsData.map((card, index) => (
            <Grid2 key={index}>
              <Paper
                sx={{
                  padding: 2,
                  borderRight: "1px solid #1a1a1a",
                  borderBottom: "1px solid #1a1a1a",
                  overflow: "visible",
                  "&:hover .MuiCardMedia-img": {
                    transform: "scale(1.2)",
                    transition: "transform 0.8s ease",
                  },
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    boxSizing: "border-box",
                    width: { xs: "100%", md: "270px", lg: "400px" },
                    height: { xs: "auto", md: "700px", lg: "600px" },
                    padding: { xs: 2, md: 5 },
                  }}
                >
                  <Box sx={{ overflow: "hidden", borderRadius: "15px" }}>
                    <CardMedia
                      component="img"
                      image={card.image}
                      alt={card.title}
                      sx={{
                        width: "95%",
                        objectFit: "fill",
                        margin: "auto",
                        marginBottom: "20px",
                        borderRadius: "15px",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", paddingBottom: 1 }}
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default IndustriesWeServe;
