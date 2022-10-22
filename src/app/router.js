import React from "react";
// import { Routes, Route } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useRouter } from "../hooks/index";

export default function Router() {
  const { routes } = useRouter();
  let element = useRoutes(routes);

  return element;
}
