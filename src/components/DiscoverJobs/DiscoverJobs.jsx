import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import { jobData } from "../data/recentJob";

//styled component for title
const StyledText = styled(Typography)({
  fontSize: "14px",
  fontWeight: "bold",
  color: "#1a1a1a",
});

const JobDiscovery = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row" }}
      gap={3}
      justifyItems={"space-between"}
      marginX={"0.75rem"}
      width={"98%"}
    >
      {jobData?.map((data) => (
        <Card
          key={data.id}
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
              src={data.img}
              sx={{ boxShadow: 2, width: 60, height: 60, objectFit: "contain" }}
            />
            <Box paddingX={{ xs: "0px", sm: 2 }} paddingTop={{ xs: "4px" }}>
              <Typography
                fontSize={"22px"}
                marginBottom={"8px"}
                color="#1a1a1a"
                fontWeight={"bold"}
              >
                {data.title.toUpperCase()}
              </Typography>
              <Typography
                color="#ed1d24"
                marginBottom={"8px"}
                letterSpacing={"1px"}
              >
                {data.subTitle}
              </Typography>
              <Box display={"flex"}>
                <StyledText> Education:</StyledText>
                <Typography>{data.education}</Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Experience:</StyledText>
                <Typography>{data.experience}</Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Location:</StyledText>
                <Typography>{data.location}</Typography>
              </Box>
              <Box display={"flex"}>
                <StyledText> Deadline:</StyledText>
                <Typography>{data.deadline}</Typography>
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
            {data.status.toLocaleUpperCase()}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default JobDiscovery;
