import React, { useEffect, useMemo, useState } from "react";
import { ItemContextTest } from "./index";
import { useParams } from "react-router-dom";
import { useGetItem } from "../../api/index";

export default function ItemProviderTest({ children }) {
  let { id } = useParams();  
  const { data, isLoading} = useGetItem(id);

  const value = useMemo(() => ({
    item : data?.data,
    loading: isLoading
  }), [data, isLoading]);

  return (
    <ItemContextTest.Provider value={value}>
      {children}
    </ItemContextTest.Provider>
  );
}
