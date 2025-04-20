import ButtonInput from "./ButtonInput";
import { PhoneInTalkOutlined } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import { Box, Link, Paper, Stack, styled, Typography } from "@mui/material";

const Footer = () => {
  const StyledStack = styled(Stack)(({ theme }) => ({
    width: "100%", // Default width (for mobile)
    [theme.breakpoints.up("sm")]: {
      width: "45%", // 45% width for small screens (sm) and above
    },
    [theme.breakpoints.up("md")]: {
      width: "22%", // 22% width for medium screens (md) and above
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyItems: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          margin: 1,
          gap: 1,
        }}
      >
        <StyledStack sx={{ width: { sm: "45%", md: "22%" } }}>
          <Typography variant="h5" mb={2} sx={{ fontWeight: "bold" }}>
            Reach Us
          </Typography>
          <Box mb={2} display="flex" alignItems="start">
            <PhoneInTalkOutlined color="primary" sx={{ marginRight: 1 }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Phone:
              </Typography>
              <Link
                href="tel:+977 01 5420562"
                sx={{
                  color: "black",
                  textDecoration: "none",
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                +977 01 5420562, 5450634, 5455144, 5455180
              </Link>
            </Box>
          </Box>
          <Box mb={2} display="flex" alignItems="start">
            <MailOutlineIcon color="primary" sx={{ marginRight: 1 }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Email:
              </Typography>
              <Link
                href="mailto:info@luckyhrsolution.com"
                sx={{
                  color: "black",
                  textDecoration: "none",
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                info@luckyhrsolution.com
              </Link>
            </Box>
          </Box>
          <Box mb={2} display="flex" alignItems="start">
            <AddLocationOutlinedIcon color="primary" sx={{ marginRight: 1 }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Address:
              </Typography>
              <Typography>Jawalakhel, Lalitpur, Nepal</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
                GPO Box:
              </Typography>
              <Typography>8975</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
                EPC:
              </Typography>
              <Typography>1191</Typography>
            </Box>
          </Box>
        </StyledStack>
        <Stack mb={3} sx={{ width: { sm: "45%", md: "22%" } }}>
          <Typography variant="h5" mb={1} sx={{ fontWeight: "bold" }}>
            Candidates
          </Typography>
          <Typography lineHeight={2}>
            <Link
              href="https://www.luckyhrsolution.com/"
              sx={{
                color: "black",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                  textDecoration: "none",
                },
              }}
            >
              Live Jobs
            </Link>
          </Typography>
          <Typography lineHeight={2}>
            <Link
              href="https://www.luckyhrsolution.com/"
              sx={{
                color: "black",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                  textDecoration: "none",
                },
              }}
            >
              Submit CV
            </Link>
          </Typography>
        </Stack>
        <Stack mb={3} sx={{ width: { sm: "45%", md: "22%" } }}>
          <Typography variant="h5" mb={1} sx={{ fontWeight: "bold" }}>
            Clients
          </Typography>
          <Typography lineHeight={2}>
            <Link
              href="https://www.luckyhrsolution.com/"
              sx={{
                color: "black",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                  textDecoration: "none",
                },
              }}
            >
              Company Profile
            </Link>
          </Typography>
          <Typography lineHeight={2}>
            <Link
              href="https://www.luckyhrsolution.com/"
              sx={{
                color: "black",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                  textDecoration: "none",
                },
              }}
            >
              Our Services
            </Link>
          </Typography>
          <Typography lineHeight={2}>
            <Link
              href="https://www.luckyhrsolution.com/"
              sx={{
                color: "black",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                  textDecoration: "none",
                },
              }}
            >
              Submit A Vacancy
            </Link>
          </Typography>
        </Stack>
        <Stack sx={{ width: { sm: "45%", md: "22%" } }}>
          <Box
            sx={{
              height: 300,
              width: 300,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              placeSelf: { xs: "center", sm: "" },
            }}
          >
            <img
              src="../../src/assets/excellence.png"
              alt="Excellence"
              height={"90%"}
              width={"90%"}
            />
          </Box>
        </Stack>
      </Box>
      <Paper
        sx={{
          alignSelf: "center",
          alignItems: "center",
          backgroundColor: "#F0F0FA",
          borderRadius: "40px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          minWidth: "200px",
          minHeight: "180px",
          padding: 1,
          width: "100%",
        }}
        elevation={1}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "19px", sm: "large", md: "30px" },
              fontWeight: "bold",
              textAlign: "center",
              letterSpacing: { xs: "1px" },
              marginBottom: 2,
            }}
          >
            Subscribe for great opportunities.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "90%", md: "50%" },
            alignItems: { xs: "center", md: "start" },
          }}
        >
          <ButtonInput />
          <Typography sx={{ textAlign: "center" }}>
            10,000+ Candidates Already Joined With Us!
          </Typography>
        </Box>
      </Paper>
      <Typography sx={{ textAlign: "center", paddingTop: 2 }}>
        © 2025 Lucky HR Solution © All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
