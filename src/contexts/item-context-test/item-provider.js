import React, { useEffect, useMemo, useState } from "react";
import { ItemContextTest } from "./index";
import { useParams } from "react-router-dom";
import { useGetItem } from "../../api/index";

export default function ItemProviderTest({ children }) {
  let { category, id } = useParams();
  const { data, isLoading } = useGetItem(id);

  // Todo: Gör endpoint för att hämta breadcrumbs till den routade kategorin

  const value = useMemo(
    () => ({
      item: data?.data,
      loading: isLoading,
      breadcrumbs: [
        { label: "Utforska", path: "/utforska" },
        { label: category, path: `/utforska/${category}` },
      ],
    }),
    [data, isLoading, category]
  );

  return (
    <ItemContextTest.Provider value={value}>
      {children}
    </ItemContextTest.Provider>
  );
}
