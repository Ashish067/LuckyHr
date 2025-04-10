import React from "react";
import { Card, CardContent, Box, Typography, Link } from "@mui/material";
import ad from "../../assets/ad.jpeg";

const ClientsCard = ({ imageSrc, data }) => {
  return (
    <Card
      sx={{
        borderRadius: "20px 0",
        padding: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 3,
        },
      }}
    >
      <Box
        sx={{
          minWidth: 100,
          maxWidth: 100,
          height: 80,
          borderRadius: "15px 0",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <a href={ad} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} style={{ width: "100%" }} />
        </a>
      </Box>
      <CardContent
        sx={{
          textAlign: { xs: "center", lg: "left" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box sx={{ marginBottom: "20px", textAlign: "left" }}>
          <Link
            href={ad}
            target="_blank"
            variant="h6"
            color="black"
            fontWeight="bold"
            underline="none"
            sx={{ display: "block", marginBottom: "8px", lineHeight: "1.2" }}
          >
            {data.companyName}
          </Link>
          <Typography sx={{ marginBottom: "8px" }}>
            {data.companyType}
          </Typography>
          <Typography>
            {data.companyAddress ? data.companyAddress : "Address Not Found"}
          </Typography>
        </Box>
      </CardContent>

      <Box>
        <Typography sx={{ whiteSpace: "nowrap", color: "#0d6efd" }}>
          Jobs open: {data.jobsCount}
        </Typography>
      </Box>
    </Card>
  );
};

export default ClientsCard;
