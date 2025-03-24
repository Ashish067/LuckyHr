import {
  Avatar,
  Box,
  Card,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import PowerJobs from "../../assets/power_jobs_image.png";

const StyledText = styled(Typography)({
  fontSize: "14px",
  fontWeight: "bold",
  color: "#1a1a1a",
});

const JobDiscovery = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={3}
        justifyItems={"space-between"}
        // justifySelf={"center"}
        marginX={"0.75rem"}
        width={"98%"}
      >
        <Card
          sx={{
            flex: 1,
            maxWidth: "600px",
            position: "relative",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              padding: "30px",
              marginBottom: 3,
            }}
          >
            <Avatar
              variant="square"
              src={PowerJobs}
              sx={{ boxShadow: 2, width: 60, height: 60 }}
              objectFit="contain"
            />
            <Box paddingX={{ xs: "0px", sm: 2 }} paddingTop={{ xs: "4px" }}>
              <Typography
                fontSize={"22px"}
                marginBottom={"8px"}
                color="#1a1a1a"
                fontWeight={"bold"}
              >
                SALES LADY
              </Typography>
              <Typography
                color="#ed1d24"
                marginBottom={"8px"}
                letterSpacing={"1px"}
              >
                CITY CENTER
              </Typography>
              <Box display={"flex"}>
                <StyledText> Education:</StyledText>
                <Typography></Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Experience:</StyledText>
                <Typography>N/A</Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Location:</StyledText>
                <Typography>Kuwait, AI Asimah</Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Deadline:</StyledText>
                <Typography>15th Oct, 2081</Typography>
              </Box>
            </Box>
          </CardContent>
          <Typography
            sx={{
              backgroundColor: "#ed1d24",
              position: "absolute",
              top: "20px",
              right: "-36px",
              padding: "5px 40px",
              transform: "rotate(45deg)",
              fontSize: "14px",
            }}
          >
            Recent
          </Typography>
        </Card>
        <Card sx={{ flex: 1, maxWidth: "600px", position: "relative" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              padding: 4,
              marginBottom: 3,
            }}
          >
            <Avatar
              variant="square"
              src={PowerJobs}
              sx={{ boxShadow: 2, width: 60, height: 60 }}
              objectFit="contain"
            />
            <Box paddingX={{ xs: "0px", sm: 2 }} paddingTop={{ xs: "4px" }}>
              <Typography
                fontSize={"22px"}
                marginBottom={"8px"}
                color="#1a1a1a"
                fontWeight={"bold"}
              >
                SALES LADY
              </Typography>
              <Typography
                color="#ed1d24"
                marginBottom={"8px"}
                letterSpacing={"1px"}
              >
                CITY CENTER
              </Typography>
              <Box display={"flex"}>
                <StyledText> Education:</StyledText>
                <Typography></Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Experience:</StyledText>
                <Typography>N/A</Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Location:</StyledText>
                <Typography>Kuwait, AI Asimah</Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Deadline:</StyledText>
                <Typography>15th Oct, 2081</Typography>
              </Box>
            </Box>
          </CardContent>
          <Typography
            sx={{
              backgroundColor: "#ed1d24",
              position: "absolute",
              top: "20px",
              right: "-36px",
              padding: "5px 40px",
              transform: "rotate(45deg)",
              fontSize: "14px",
            }}
          >
            Recent
          </Typography>
        </Card>
        <Card sx={{ flex: 1, maxWidth: "600px", position: "relative" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              padding: 4,
              marginBottom: 3,
            }}
          >
            <Avatar
              variant="square"
              src={PowerJobs}
              sx={{ boxShadow: 2, width: 60, height: 60 }}
              objectFit="contain"
            />
            <Box paddingX={{ xs: "0px", md: 2 }} paddingTop={{ xs: "4px" }}>
              <Typography
                fontSize={"22px"}
                marginBottom={"8px"}
                color="#1a1a1a"
                fontWeight={"bold"}
              >
                SALES LADY
              </Typography>
              <Typography
                color="#ed1d24"
                marginBottom={"8px"}
                letterSpacing={"1px"}
              >
                CITY CENTER
              </Typography>
              <Box display={"flex"}>
                <StyledText> Education:</StyledText>
                <Typography></Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Experience:</StyledText>
                <Typography>N/A</Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Location:</StyledText>
                <Typography>Kuwait, AI Asimah</Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Deadline:</StyledText>
                <Typography>15th Oct, 2081</Typography>
              </Box>
            </Box>
          </CardContent>
          <Typography
            sx={{
              backgroundColor: "#ed1d24",
              position: "absolute",
              top: "20px",
              right: "-36px",
              padding: "5px 40px",
              transform: "rotate(45deg)",
              fontSize: "14px",
            }}
          >
            Recent
          </Typography>
        </Card>
      </Box>
    </>
  );
};

export default JobDiscovery;
