import { Box, Divider, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import React from "react";

//   sx={{
//     animation: "spin 2s linear",
//     "@keyframes spin": {
//       "0%": {
//         transform: "rotate(180deg)",
//       },
//       "100%": {
//         transform: "rotate(0deg)",
//       },
//     },
//   }}

export default function Accordion({
  title,
  divider = true,
  extended,
  children,
  onToggle,
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 3,
        }}
        onClick={onToggle}
      >
        <Typography>{title}</Typography>
        {!extended && <ExpandMoreIcon />}
        {extended && <ExpandLess />}
      </Box>
      {extended && <Box>{children}</Box>}
      {divider && <Divider sx={{ mt: extended ? 2 : 0 }} />}
    </>
  );
}
