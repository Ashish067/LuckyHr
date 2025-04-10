import {
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const IndustryTypeCheckbox = ({
  selectedOptions,
  setSelectedOptions,
  industries,
}) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((opt) => opt !== value)
    );
  };

  return (
    <Stack width={"100%"} alignItems={"center"}>
      <Typography
        sx={{
          display: "inline-block",
          textAlign: "left",
          width: "100%",
          marginY: "12px",
          fontWeight: "200",
        }}
      >
        Company Type
      </Typography>
      <Card sx={{ width: "90%", pl: "20px", py: "20px", mb: 1 }} elevation={2}>
        <FormGroup>
          {industries.map((industry) => (
            <FormControlLabel
              key={industry}
              control={
                <Checkbox
                  value={industry}
                  checked={selectedOptions.includes(industry)}
                  onChange={handleCheckboxChange}
                />
              }
              label={industry}
              sx={{ fontSize: "15px" }}
            />
          ))}
        </FormGroup>
      </Card>
    </Stack>
  );
};

export default IndustryTypeCheckbox;
