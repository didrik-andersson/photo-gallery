import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./index";
import { DialogProvider, ItemProvider } from "../contexts/index";

export default function App() {
  return (
    <BrowserRouter>
      <ItemProvider>
        <DialogProvider>
          <Router />
        </DialogProvider>
      </ItemProvider>
    </BrowserRouter>
  );
}
