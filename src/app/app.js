import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./index";
import { ItemProvider } from "../contexts/index";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1200,
    },
  },
});

export default function App() {
  return (
    <BrowserRouter>
      <ItemProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </ItemProvider>
    </BrowserRouter>
  );
}
