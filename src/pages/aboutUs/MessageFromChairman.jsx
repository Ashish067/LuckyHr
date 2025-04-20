import { Box, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import chairman from "../../assets/chairman.jpeg";
import PageHeader from "../../components/BreadCrumbsWrapper/PageHeader";

const MessageFromChairman = () => {
  return (
    <>
      <PageHeader title={"Message From Chairman"} />
      <Grid2
        container
        margin={{ xs: 2, md: 4 }}
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent={"center"}
      >
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Stack spacing={2} marginY={"16px"}>
            <Typography>
              We are an authorized company by the government of Nepal to operate
              foreign employment. We have been supplying skilled, semi-skilled
              and unskilled workforce around the world for more than a decade.
            </Typography>
            <Typography>
              As per my experience and knowledge is concerned, the Nepali
              employees are hardworking and efficient as a result the employers
              are highly satisfied with Nepalese workers around the globe.
            </Typography>
            <Typography>
              We have gained immense succession and recognition providing
              quality services to the valued international job providers and job
              seekers as well. Satisfaction of our clients and happiness of our
              candidates is our ultimate achievement. Therefore, we have strong
              commitments to acquire that satisfaction.
            </Typography>
            <Typography>
              We have studied the availability of human resources in general and
              skilled candidates in particular and come to the conclusion that
              now Nepal can supply considerable number of skilled and
              high-profile employees. For instance, Medical Doctors, Qualified
              Nurses, Engineers, Chefs for five-star hotels, and graduates from
              different reputed companies as well as service sectors.
            </Typography>
            <Typography>
              We have started moving forward with the training and development
              of the individual candidate. We are concerned about quality
              candidates with the knowledge of soft and hard skills. We have
              recently made a plan strategically that every candidate must learn
              skills and I am happy to launch a training school for candidates,
              affiliated with the highly trusted Government educational body of
              Nepal. I have already collected big number of quality CVs of
              skilled people through the CV Bank, one of the important outlets
              of our company.
            </Typography>
            <Typography>
              I always welcome the suggestions and advice from our clients,
              distinguished business scholars, and well-wishers to make our
              company as the best service provider in Nepal.
            </Typography>
          </Stack>
          <Stack alignItems={{ xs: "center", md: "start" }}>
            <Typography
              component={"span"}
              sx={{ color: "#2042e3", fontSize: "16px", marginBottom: "10px" }}
            >
              Best Regards,
            </Typography>
            <Typography
              component={"h5"}
              sx={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1a1a1a",
                marginBottom: "10px",
              }}
            >
              MS Kapri
            </Typography>
            <Typography
              component={"span"}
              sx={{ color: "red", fontSize: "16px", marginBottom: "10px" }}
            >
              Chairman
            </Typography>
            <Typography
              component={"span"}
              sx={{ color: "#2042e3", fontSize: "16px", marginBottom: "10px" }}
            >
              chairman@luckyhrsolution.com
            </Typography>
          </Stack>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "center" },
          }}
        >
          <Stack alignItems={{ xs: "center", md: "flex-start" }}>
            <img
              src={chairman}
              alt="picture of respected chairman"
              style={{
                height: "auto",
                maxWidth: "250px",
                borderRadius: "35px 0",
                border: "solid #dd2027 5px",
              }}
            />
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
};

export default MessageFromChairman;
