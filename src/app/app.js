import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./index";
import { useCustomTheme } from "../hooks";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ItemsProvider } from "../contexts";

export default function App() {
  const { customTheme } = useCustomTheme();
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ItemsProvider>
          <ThemeProvider theme={customTheme}>
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
          </ThemeProvider>
        </ItemsProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
