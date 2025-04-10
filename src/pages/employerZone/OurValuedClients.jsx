import React, { useState } from "react";
import PageHeader from "../../components/BreadCrumbsWrapper/PageHeader";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import IndustryTypeCheckbox from "../../components/valued-clients/IndustryTypeCheckbox";
import CountryDropdown from "../../components/valued-clients/CountryDropdown";
import {
  JobsData,
  countries,
  industries,
} from "../../components/data/clientsData";
import ClientsCard from "../../components/valued-clients/ClientsCard";
const ITEMS_PER_PAGE = 3;

const OurValuedClients = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchText, setSearchText] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const filteredData = JobsData.filter((item) => {
    const matchesSearch = searchText
      ? item.companyName.toLowerCase().includes(searchText.toLowerCase())
      : true;

    const matchesCountry = selectedCountry
      ? item.companyAddress
          .toLowerCase()
          .includes(selectedCountry.toLowerCase())
      : true;

    const matchesCheckbox =
      selectedOptions.length > 0
        ? selectedOptions.some((option) =>
            item.companyType.toLowerCase().includes(option.toLowerCase())
          )
        : true;

    return matchesSearch && matchesCountry && matchesCheckbox;
  });

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <>
      <PageHeader
        title={"Demand Advertisements"}
        subtitle={`Total ${JobsData.length} Advertisements`}
      />
      <Box sx={{ py: 4, px: { xs: 1, md: 4, lg: 10 } }}>
        <Box
          display="flex"
          gap={{ xs: 4, md: 10 }}
          flexDirection={{ xs: "column", md: "row" }} // Stack on xs/md, row on lg
        >
          {/* Left Section */}
          <Box
            sx={{
              width: { xs: "100%", lg: "70%" },
              display: "flex",
              flex: { xs: "1 1 auto", md: 2 },
              flexDirection: "column",
              gap: 2,
            }}
          >
            {filteredData?.length > 0 ? (
              filteredData
                ?.slice(0, visibleCount)
                .map((item, index) => (
                  <ClientsCard key={index} data={item} imageSrc={item.image} />
                ))
            ) : (
              <Typography
                variant="h6"
                color="text.secondary"
                textAlign="center"
              >
                No Data Found
              </Typography>
            )}
            {/* Load More Button */}
            {visibleCount < filteredData.length ? (
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

          {/* Right section */}
          <Box
            sx={{
              width: { xs: "100%", lg: "30%" },
              alignSelf: { lg: "flex-start" },
              flex: { xs: "1 1 auto", md: 1 },
            }}
          >
            <Paper
              elevation={3}
              sx={{
                borderTopLeftRadius: 2,
                overflow: "hidden",
              }}
            >
              <Stack spacing={2} alignItems="center" paddingX={2}>
                <Box
                  sx={{
                    bgcolor: "#efeffa",
                    py: "14px",
                    //pl: "35px",
                    width: "120%",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="#000"
                    textAlign="center"
                  >
                    Search Company
                  </Typography>
                </Box>

                <TextField
                  fullWidth
                  size="small"
                  placeholder={"Enter company name & press enter"}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  variant="outlined"
                  sx={{
                    // "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        border: "1px solid #1976d2",
                      },
                  }}
                />
                <CountryDropdown
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                  countries={countries}
                />
                <IndustryTypeCheckbox
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                  industries={industries}
                />
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OurValuedClients;
