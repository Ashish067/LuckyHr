import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Link,
} from "@mui/material";
import ad from "../assets/ad.jpeg";

const AdsCard = ({ imageSrc, data }) => {
  return (
    <Card
      sx={{
        borderRadius: "20px 0",
        padding: 2,
        // width: "100%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
      }}
    >
      {/* Left Section: Text (60%) */}
      <Box
        sx={{
          width: 120,
          height: 80,
          borderRadius: "15px 0",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <a href={ad} target="_blank" rel="noopener noreferrer">
          <img src={ad} style={{ width: "100%" }} />
        </a>
      </Box>
      <CardContent sx={{ textAlign: { xs: "center", lg: "left" } }}>
        <Link
          href={ad}
          target="_blank"
          variant="h6"
          color="black"
          fontWeight="bold"
          underline="none"
        >
          LT No: {data.ltNo}
        </Link>
        <Typography>Approved Date: {data.approvedDate}</Typography>
        <Typography>Interview Venue: {data.interviewVenue}</Typography>
        <Typography>Interview Date: {data.interviewDate}</Typography>
      </CardContent>
    </Card>
  );
};

export default AdsCard;
