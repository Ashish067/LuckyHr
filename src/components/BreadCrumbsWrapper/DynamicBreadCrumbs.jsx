import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, Typography, Paper, styled } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BreadcrumbWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(2),
  border: `2px solid #5d556b`,
  borderRadius: "20px",
  backgroundColor: "transparent",
  elevation: 2,
}));

function formatBreadcrumbName(str) {
  const nameMap = {
    aboutpremiumbottle: "About Premium Bottle",
    contactus: "Contact Us",
    faq: "FAQ",
  };

  const lowerStr = str.toLowerCase();
  if (nameMap[lowerStr]) return nameMap[lowerStr];

  if (/[a-z][A-Z]/.test(str)) {
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  if (str.includes("-") || str.includes("_")) {
    return str
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

const DynamicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <BreadcrumbWrapper elevation={0}>
      <Breadcrumbs
        separator={
          <NavigateNextIcon fontSize="medium" sx={{ color: "white" }} />
        }
        sx={{
          color: "text.primary",
          "& .MuiBreadcrumbs-ol": {
            justifyContent: "center",
            flexWrap: "wrap",
          },
          "& a": {
            color: "white",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        }}
      >
        <Link to="/">Home</Link>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const displayName = formatBreadcrumbName(name);

          return isLast ? (
            <Typography key={name} color="white">
              {displayName}
            </Typography>
          ) : (
            <Link key={name} to={routeTo}>
              {displayName}
            </Link>
          );
        })}
      </Breadcrumbs>
    </BreadcrumbWrapper>
  );
};

export default DynamicBreadcrumbs;
