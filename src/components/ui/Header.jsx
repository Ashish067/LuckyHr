import { Box, Typography } from "@mui/material";
import React from "react";
import { capitalizeAllLetters } from "../../utils/CapitalizeAllText";

const Header = ({ title, subtitle, isTitleCentered }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyItems={{ xs: "center", md: "start" }}
      paddingX={2}
    >
      <Typography
        fontSize={{ xs: "12px", lg: 16 }}
        fontWeight={700}
        color="#2042e3"
        marginBottom={"10px"}
        letterSpacing={1}
        textAlign={{ xs: "center", md: isTitleCentered ? "center" : "left" }}
      >
        {capitalizeAllLetters(title)}
      </Typography>
      <Typography
        color="#1a1a1a"
        fontWeight={"bold"}
        fontSize={"calc(1.3rem + .6vw)"}
        lineHeight={1.2}
        marginBottom={".5rem"}
        textAlign={{ xs: "center", md: isTitleCentered ? "center" : "left" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
