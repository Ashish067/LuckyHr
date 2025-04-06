import React, { useState } from "react";
import { Button, Box, Typography, TextField } from "@mui/material";
import AdsCard from "../../components/AdsCard";
import PageHeader from "../../components/BreadCrumbsWrapper/PageHeader";

const ITEMS_PER_PAGE = 3;

const interviewData = [
  {
    ltNo: "12",
    approvedDate: "12th March, 2025",
    interviewVenue: "LUCKY HR SOLUTION BUILDING",
    interviewDate: "12 June, 2025 10:00 AM - 15 March, 1030 5:00 PM",
  },
  {
    ltNo: "123",
    approvedDate: "12th March, 2025",
    interviewVenue: "LUCKY HR SOLUTION",
    interviewDate: "12 June, 2025 10:00 AM - 15 March, 1030 5:00 PM",
  },
  {
    ltNo: "1234",
    approvedDate: "12th March, 2025",
    interviewVenue: "LUCKY HR SOLUTION",
    interviewDate: "12 June, 2025 10:00 AM - 15 March, 1030 5:00 PM",
  },
  {
    ltNo: "12345",
    approvedDate: "12th March, 2025",
    interviewVenue: "LUCKY HR SOLUTION",
    interviewDate: "12 June, 2025 10:00 AM - 15 March, 1030 5:00 PM",
  },
];

const Ads = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchText, setSearchText] = useState("");
  const filteredData = interviewData.filter((item) =>
    item.ltNo.includes(searchText)
  );

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <>
      <PageHeader
        title={"Demand Advertisements"}
        subtitle={`Total ${interviewData.length} Advertisements`}
      />
      <Box sx={{ py: 4, px: { xs: 1, md: 4, lg: 10 } }}>
        <Box
          display="flex"
          gap={{ xs: 4, md: 10 }}
          flexDirection={{ xs: "column", lg: "row" }} // Stack on xs/md, row on lg
        >
          {/* Left Section */}
          <Box
            sx={{
              width: { xs: "100%", lg: "70%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {filteredData?.length > 0 ? (
              filteredData
                ?.slice(0, visibleCount)
                .map((item, index) => <AdsCard key={index} data={item} />)
            ) : (
              <Typography
                variant="h6"
                color="text.secondary"
                textAlign="center"
              >
                No Data Found
              </Typography>
            )}
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              width: { xs: "100%", lg: "30%" },
              alignSelf: { lg: "flex-start" }, // Align to top in row layout
            }}
          >
            <Box
              sx={{
                borderTopLeftRadius: "20px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                // mt: { xs: 2, lg: 0 }, // Add margin-top when stacked
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#efeffa",
                    py: "14px",
                    pl: "35px",
                    width: "100%",

                    // borderTopLeftRadius: "20px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="#000"
                    fontWeight="bold"
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    Search By LT No.
                  </Typography>
                </Box>

                <TextField
                  fullWidth
                  size="small"
                  placeholder="Type LT No & Press Enter"
                  onChange={(e) => setSearchText(e.target.value)}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none", // Remove border normally
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        border: "1px solid #1976d2", // Change border color on focus
                      },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Load More Button */}
        {visibleCount < interviewData.length ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button variant="contained" onClick={loadMore}>
              Load More
            </Button>
          </Box>
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            mt={2}
            textAlign="center"
          >
            End of List
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Ads;
