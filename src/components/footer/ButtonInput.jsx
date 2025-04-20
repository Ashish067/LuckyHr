import { Button, Box, OutlinedInput, InputAdornment } from "@mui/material";

const ButtonInput = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Outlined Input Field */}
      <OutlinedInput
        placeholder="Enter your email"
        fullWidth
        sx={{
          borderRadius: "25px",
          border: "2px solid blue",
          minWidth: "250px",
          height: "50px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "blue",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "darkblue",
          },
          paddingRight: "0",
        }}
        endAdornment={
          <InputAdornment
            position="end"
            sx={{
              marginRight: "-2px",
            }}
          >
            {/* Blue rounded button */}
            <Button
              variant="outlined"
              sx={{
                borderRadius: "25px",
                backgroundColor: "blue",
                borderColor: "blue",
                color: "white",
                paddingX: 2,
                height: "50px",
                "&:hover": {
                  backgroundColor: "darkblue",
                  borderColor: "darkblue",
                },
                marginLeft: "-2px",
              }}
            >
              Subscribe
            </Button>
          </InputAdornment>
        }
      />
    </Box>
  );
};

export default ButtonInput;
