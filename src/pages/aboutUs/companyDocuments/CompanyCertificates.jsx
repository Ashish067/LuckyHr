import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import iso from "../../../assets/documents/iso.png";
import incorporation from "../../../assets/documents/incorporation.png";
import license from "../../../assets/documents/license.png";
import pan from "../../../assets/documents/pan.png";
import PageHeader from "../../../components/BreadCrumbsWrapper/PageHeader";

const CompanyCertificates = () => {
  return (
    <>
      <PageHeader title={"Company Certificates"} />
      <Box
        marginX={{ md: "32px" }}
        paddingX={{ md: "12px" }}
        paddingTop={{ xs: "40px", md: "100px" }}
        paddingBottom={{ xs: "30px", md: "70px" }}
      >
        <Typography
          sx={{
            textAlign: "center",
            boxSizing: "border-box",
            marginTop: "-6px",
            marginBottom: { xs: "30px", md: "50px" },
            lineHeight: 1.2,
            fontSize: "calc(1.3rem + .6vw)",
            color: "#1a1a1a",
            fontWeight: "bold",
            fontFamily: "'Space Grotesk', sans-serif !important",
          }}
        >
          Company Certificates
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          flexWrap={{ md: "wrap" }}
          justifyContent={{ lg: "center" }}
        >
          <Stack
            paddingX={"12px"}
            maxWidth={{ md: "280px", lg: "400px" }}
            paddingBottom={"20px"}
          >
            <img src={iso} alt="" />
            <Typography textAlign={"center"}>ISO Certificate</Typography>
          </Stack>
          <Stack
            paddingX={"12px"}
            width={{ md: "280px", lg: "400px" }}
            paddingBottom={"20px"}
          >
            <img src={pan} alt="" />
            <Typography textAlign={"center"}>PAN Certificate</Typography>
          </Stack>
          <Stack
            paddingX={"12px"}
            width={{ md: "280px", lg: "400px" }}
            paddingBottom={"20px"}
          >
            <img src={incorporation} alt="" />
            <Typography textAlign={"center"}>
              Certificate of Incorporation of Company
            </Typography>
          </Stack>
          <Stack
            paddingX={"12px"}
            width={{ md: "280px", lg: "400px" }}
            paddingBottom={"20px"}
          >
            <img src={license} alt="" />
            <Typography textAlign={"center"}>Company License</Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default CompanyCertificates;
