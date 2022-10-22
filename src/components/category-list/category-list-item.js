import { Card, CardActionArea, CardMedia, Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { ListItemWrapper } from "./styled-components";

export default function CategoryListItem({ image, alt, link, linkLabel }) {
  return (
    <>
      <ListItemWrapper>
        <Box
          sx={{
            // width: "100%",
            height: "80%",
            boxShadow: "0 6px 18px 0 rgb(0 0 0 / 10%)",
          }}
        >
          <RouterLink to="/utforska/posters">
            <img
              src={image}
              alt={alt}
              height="100%"
              width="100%"
              style={{ display: "block", objectFit: "cover" }}
            />
          </RouterLink>
        </Box>
        <Box sx={{ textAlign: "center", pt: 2, height: "20%" }}>
          <Link
            component={RouterLink}
            to="/utforska/posters"
            color="#000"
            variant="h6"
          >
            Posters
          </Link>
        </Box>
      </ListItemWrapper>
    </>
  );
}
