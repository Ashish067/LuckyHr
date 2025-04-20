import React from "react";
import PageHeader from "../../components/BreadCrumbsWrapper/PageHeader";
import { Box, Grid2, List, Stack, styled, Typography } from "@mui/material";
import image from "../../assets/lucky-hr-building.jpg";
import { CheckCircle } from "@mui/icons-material";

const CustomText = styled(Typography)({
  position: "relative",
  fontSize: "15px",
  color: "rgb(69, 69, 69)",
  fontFamily: "'Space Grotesk', sans-serif",
  lineHeight: "1.5",
});

const StyledText = styled(Typography)({
  fontFamily: "'Space Grotesk', sans-serif",
  textAlign: "justify",
  boxSizing: "border-box",
  marginTop: 0,
  fontSize: "15px",
  marginBottom: "15px",
  lineHeight: "1.8",
});
const AboutLuckyHr = () => {
  return (
    <>
      <PageHeader
        title={"About Us"}
        subtitle={"Best Services and Better Solutions."}
      />
      <Grid2
        container
        paddingTop={"100px"}
        paddingBottom={"70px"}
        marginX={{ xs: "12px", md: "60px" }}
        paddingX={"12px"}
      >
        <Grid2
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginBottom={"30px"}
        >
          <Box
            component={"img"}
            src={image}
            alt=""
            sx={{
              maxWidth: { xs: "300px", sm: "400px" },
              maxHeight: "750px",
              borderRadius: "15px",
              border: "9px solid #fff",
              boxShadow: " 0 4px 50px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          paddingLeft={{ xs: "10px", md: "30px" }}
          paddingY={"12px"}
        >
          <Stack>
            <Typography
              component={"span"}
              sx={{
                color: "#2042e3",
                fontSize: "16px",
                marginBottom: "10px",
                letterSpacing: "1px",
                fontWeight: 700,
                textTransform: "uppercase",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              "Best Services and Better Solutions"
            </Typography>
            <Typography
              component={"h4"}
              sx={{
                fontSize: "35px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Welcome To Lucky{" "}
              <Typography
                component={"span"}
                sx={{
                  color: "red",
                  fontSize: "35px",
                  fontWeight: 900,
                  letterSpacing: "1.5px",
                }}
              >
                HR{" "}
              </Typography>
              Solution
            </Typography>
            <Stack spacing={2} marginBottom={2}>
              <StyledText>
                Lucky HR Solution Pvt. Ltd. is an ISO 9001: 2015 certified, one
                of the leading human resources recruiting company in Nepal,
                established in 2010 under the Company Act 2053 of Nepal
                Government License No. 875/66/67. Since the establishment, the
                company has gained vast experience in the ﬁeld of recruitment
                which has enabled it to be one of the reputed company in the
                country
              </StyledText>
              <StyledText>
                It is our privilege in response in a very co-operative and
                enthusiastic way. Our belief is in making a concept of the
                environment in a long-term basis. Lucky HR Solution Pvt. Ltd.
                has gained immense recognition from the clients and the agents
                in the field of manpower recruitment services. We place priority
                on healthy, competent, honest and professional manpower while in
                appointment.
              </StyledText>
              <StyledText>
                Lucky HR Solutions encompasses hospitality, security, medical,
                engineering, construction, IT, sales and administration. We have
                gained reputation in manpower service sector and has been
                awarded ISO certificate as well. The company has been genuinely
                successful in pursuing and developing a fertile business
                relationship with highly reputed overseas organizations since
                it's establishment. The company has already mobilized more than
                34,000 career seekers throughout the Gulf countries, Malaysia
                and Japan in different positions. We through our national and
                international network, provide all kinds of workers that
                employers might demand abroad.
              </StyledText>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              component={"h3"}
              fontSize={"20px"}
              marginBottom={"10px"}
              fontWeight={"bold"}
              color="#1a1a1a"
              lineHeight={1.2}
              marginTop={0}
            >
              What makes Lucky HR Group different?
            </Typography>
            <List>
              <CustomText>
                <CheckCircle
                  fontSize="xs"
                  sx={{
                    color: "rgb(13, 109, 252)",
                    transform: "translateY(18%)",
                  }}
                />{" "}
                Exclusive platform connecting HR professionals in contract
                staffing, consulting, and direct hire opportunities.
              </CustomText>
              <CustomText>
                <CheckCircle
                  fontSize="xs"
                  sx={{
                    color: "rgb(13, 109, 252)",
                    transform: "translateY(18%)",
                  }}
                />{" "}
                Founded and led by HR experts, we understand your challenges and
                speak your language.
              </CustomText>
              <CustomText>
                <CheckCircle
                  fontSize="xs"
                  sx={{
                    color: "rgb(13, 109, 252)",
                    transform: "translateY(18%)",
                  }}
                />{" "}
                Comprehensive HR talent database to meet your staffing needs.
              </CustomText>
              <CustomText>
                <CheckCircle
                  fontSize="xs"
                  sx={{
                    color: "rgb(13, 109, 252)",
                    transform: "translateY(18%)",
                  }}
                />{" "}
                Thousands of HR professionals advanced in their careers with our
                support.
              </CustomText>
            </List>
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
};

export default AboutLuckyHr;
