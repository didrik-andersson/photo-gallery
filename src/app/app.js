import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./index";
import { ItemProvider } from "../contexts/index";

export default function App() {
  return (
    <BrowserRouter>
      <ItemProvider>
        <Router />
      </ItemProvider>
    </BrowserRouter>
  );
}
