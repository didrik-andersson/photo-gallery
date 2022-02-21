import * as React from "react";
import Typography from "@mui/material/Typography";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import Link from "@mui/material/Link";
import { useLocation, matchRoutes, useNavigate } from "react-router-dom";
import { useRouter } from "../../hooks/index";

export default function Breadcrumbs({ currentPosition }) {
  let location = useLocation();
  let navigate = useNavigate();
  const { routes } = useRouter();

  const matchedRoutes = matchRoutes(routes, location.pathname);
  const mostSpecificMatchedRoute =
    matchedRoutes.length > 0 && matchedRoutes[matchedRoutes.length - 1];

  const breadcrumbs = mostSpecificMatchedRoute.route.element.props.breadcrumbs;

  return (
    <>
      <MuiBreadcrumbs aria-label="breadcrumb">
        {breadcrumbs &&
          breadcrumbs.map((crumbie) => (
            <Link
              key={crumbie.path + crumbie.name}
              underline="hover"
              color="inherit"
              onClick={() => navigate(crumbie.path)}
              sx={{ cursor: "pointer" }}
            >
              {crumbie.label}
            </Link>
          ))}
        <Typography color="text.primary">{currentPosition}</Typography>
      </MuiBreadcrumbs>
    </>
  );
}
