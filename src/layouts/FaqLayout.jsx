import React from "react";
import { Grid2 } from "@mui/material";
import Accordions from "../components/Accordions";
import image from "../assets/faq-img.png";
import PageHeader from "../components/BreadCrumbsWrapper/PageHeader";

const FaqLayout = ({ data }) => {
  return (
    <>
      <PageHeader title={"Frequently Asked Questions"} />
      <Grid2
        container
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        paddingY={{ xs: "50px", md: "100px" }}
        paddingX={{ xs: 2, md: 4 }}
      >
        <Grid2 flex={{ xs: 1 }}>
          <Accordions data={data} />
        </Grid2>
        <Grid2
          flex={{ xs: 1 }}
          alignSelf={"center"}
          sx={{ width: { md: "50%" } }}
        >
          <img src={image} alt="faq-img" style={{ width: "100%" }} />
        </Grid2>
      </Grid2>
    </>
  );
};

export default FaqLayout;
