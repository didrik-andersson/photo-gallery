import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./index";
import { ItemProvider, ItemImageProvider } from "../contexts/index";
import { useCustomTheme } from "../hooks";
import { ThemeProvider } from "@mui/material/styles";

export default function App() {
  const { customTheme } = useCustomTheme();

  return (
    <BrowserRouter>
      <ItemProvider>
        <ItemImageProvider>
          <ThemeProvider theme={customTheme}>
            <Router />
          </ThemeProvider>
        </ItemImageProvider>
      </ItemProvider>
    </BrowserRouter>
  );
}
