import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { ListItemWrapper } from "./styled-components";

export default function CategoryListItemSkeleton({ hideMd }) {
  return (
    <ListItemWrapper className={hideMd ? "hidden-md" : undefined}>
      <Box
        sx={{
          width: "100%",
          height: "80%",
          background: "#fbfbfb",
          boxShadow: "0 6px 18px 0 rgb(0 0 0 / 10%)",
        }}
      ></Box>
      <Box
        sx={{ textAlign: "center", pt: 2, visibility: "hidden", height: "20%" }}
      >
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
  );
}
