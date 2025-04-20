import React, { useState, useMemo } from "react";
import {
  TextField,
  MenuItem,
  Popper,
  Paper,
  ClickAwayListener,
  InputAdornment,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CountryDropdownWithSearch = ({
  selectedCountry,
  setSelectedCountry,
  countries,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    handleClose();
  };

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  const open = Boolean(anchorEl);
  const id = open ? "country-dropdown" : undefined;

  return (
    <Box width={"100%"} display={"flex"} justifyContent={"center"}>
      <TextField
        aria-describedby={id}
        onClick={handleClick}
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(selectedCountry)}
        // label="Please select a country"
        placeholder="Please select a country"
        variant="outlined"
        fullWidth
      />
      {console.log(selectedCountry)}

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        style={{ zIndex: 1300, width: anchorEl?.clientWidth }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper elevation={3} style={{ maxHeight: 300, overflow: "auto" }}>
            {/* Search Bar */}
            <Box
              style={{
                padding: "8px",
                position: "sticky",
                top: 0,
                backgroundColor: "white",
                zIndex: 1,
              }}
            >
              <TextField
                autoFocus
                fullWidth
                variant="outlined"
                placeholder="Search countries..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {console.log(searchText)}
            </Box>

            {/* Country List */}
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <MenuItem
                  key={country}
                  onClick={() => handleCountrySelect(country)}
                  style={{ whiteSpace: "normal" }}
                >
                  {country}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>No countries found</MenuItem>
            )}
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default CountryDropdownWithSearch;
