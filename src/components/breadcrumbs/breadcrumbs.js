import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { StyledBreadcrumbs } from "./styled-components";

export default function Breadcrumbs({ breadcrumbs, currentPosition }) {

  let navigate = useNavigate();

  return (
    <>
      {breadcrumbs && currentPosition && (
        <StyledBreadcrumbs aria-label="breadcrumb">
          {breadcrumbs.map((crumbie) => (
            <Link
              key={crumbie.path + crumbie.name}
              underline="hover"
              color="inherit"
              onClick={() => navigate(crumbie.path)}
              sx={{ cursor: "pointer", textTransform: "capitalize" }}
            >
              {crumbie.label}
            </Link>
          ))}
          <Typography color="text.primary" noWrap>
            {currentPosition}
          </Typography>
        </StyledBreadcrumbs>
      )}
    </>
  );
}
