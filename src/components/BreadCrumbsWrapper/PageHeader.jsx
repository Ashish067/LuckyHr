import React from "react";
import { Typography, Box, Container, Paper, styled } from "@mui/material";
import DynamicBreadcrumbs from "./DynamicBreadCrumbs";
import Bg from "../../assets/bg_breadcrumbs.jpg";

const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "35vh",
  minHeight: "200px",
  maxHeight: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(1, 12, 41, 0.5)",
  borderBottom: `1px solid ${theme.palette.divider}`,
  //   marginBottom: theme.spacing(4),
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(1, 12, 41, 0.5)",
    zIndex: 0,
  },

  // Ensure content is above overlay
  "& > *": {
    position: "relative",
    zIndex: 0,
  },
}));

const ContentContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

const PageHeader = ({ title, subtitle, breadcrumbs = true }) => {
  return (
    <HeaderWrapper>
      <ContentContainer maxWidth="lg">
        <Box sx={{ maxWidth: "800px" }}>
          <Typography
            variant="h2"
            component="h1"
            color="white"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              mb: subtitle ? 1 : 2,
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 400,
                color: "white",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                lineHeight: 1.2,
                mb: 1,
              }}
            >
              {subtitle}
            </Typography>
          )}
          {breadcrumbs && <DynamicBreadcrumbs />}
        </Box>
      </ContentContainer>
    </HeaderWrapper>
  );
};

export default PageHeader;
