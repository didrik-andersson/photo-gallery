import { Box } from "@mui/system";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 100,
          background: "#f5f2ee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "auto",
        }}
      >
        Copyright© 2022
      </Box>
    </>
  );
}
