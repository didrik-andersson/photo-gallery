import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./index";
import { useCustomTheme } from "../hooks";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const { customTheme } = useCustomTheme();
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={customTheme}>
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
