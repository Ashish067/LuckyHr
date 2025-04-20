import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import PageHeader from "../../../components/BreadCrumbsWrapper/PageHeader";
import { CloudDownload, Home } from "@mui/icons-material";

const CompanyBrochure = () => {
  const handleOpenPDF = () => {
    const pdfUrl = "/brochure_new.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <PageHeader title={"Company Brochure"} />
      <Stack
        paddingTop={{ xs: "50px", md: "100px" }}
        paddingBottom={{ xs: "20px", md: "70px" }}
      >
        <Box margin={{ xs: "-6px auto 20px", md: "-6px auto 50px" }}>
          <Typography
            sx={{
              textAlign: "center",
              boxSizing: "border-box",
              marginTop: 0,
              marginBottom: ".5rem",
              lineHeight: "1.2",
              fontSize: "calc(1.3rem + .6vw)",
              color: "#1a1a1a",
              fontWeight: "bold",
              fontFamily: "'Space Grotesk', sans-serif !important",
            }}
          >
            Company Brochure
          </Typography>
        </Box>
        <Box alignSelf={"center"}>
          <Button
            variant="contained"
            onClick={handleOpenPDF}
            startIcon={<CloudDownload />}
            sx={{
              fontSize: { xs: "10px", md: "16px" },
              backgroundColor: "rgb(18, 41, 251)",
              borderRadius: "30px",
              paddingX: "20px",
              paddingY: "12px",
            }}
          >
            Download Company Brochure
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default CompanyBrochure;
