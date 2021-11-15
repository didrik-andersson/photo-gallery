import React from "react";
import { ItemContext } from "./index";
import tempData from "../../utils/temp-data";

export default function ItemProvider(props) {
  const { children } = props;

  return (
    <ItemContext.Provider value={{ tempData }}>{children}</ItemContext.Provider>
  );
}
