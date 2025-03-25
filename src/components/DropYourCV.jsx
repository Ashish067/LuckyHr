import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Pattern1 from "../assets/pattern5.png";
import Pattern2 from "../assets/pattern6.png";

const DropYourCV = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      flexDirection={{ xs: "column", md: "row" }}
      maxWidth={"100%"}
      sx={{
        backgroundColor: "#043d72",
        backgroundImage: `url(${Pattern1}), url(${Pattern2})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "auto, auto",
        backgroundPosition: "right bottom, left bottom",
        paddingX: { xs: "15px" },
        paddingY: { xs: "50px", xl: "100px" },
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box width={{ xs: "100%", md: "60%" }}>
        <Typography
          display={"inline-flex"}
          color="#ed1d24"
          textTransform={"uppercase"}
          fontSize={"25px"}
          fontWeight={700}
          marginTop={"14px"}
          letterSpacing={"2px"}
        >
          Let employers find you
        </Typography>
        <Typography
          fontSize={"40px"}
          fontWeight={700}
          color="#ffffff"
          borderLeft={"solid  #ed1d24 5px"}
          paddingLeft={"20px"}
          lineHeight={"50px"}
        >
          Ready to Showcase Your Skills? Upload Your CV Today!
        </Typography>
      </Box>
      <Button
        endIcon={<ArrowForwardOutlinedIcon />}
        sx={{
          alignSelf: "center",
          backgroundColor: "#e94d65",
          borderRadius: "30px",
          color: "#ffffff",
          cursor: "pointer",
          display: "inline-flex",
          flexShrink: 0,
          fontSize: "20px",
          height: "60px",
          padding: { xs: "10px 30px", md: "15px 45px" },
          textAlign: "center",
          marginY: { xs: "20px", md: 0 },
        }}
      >
        Drop your CV
      </Button>
    </Box>
  );
};

export default DropYourCV;
