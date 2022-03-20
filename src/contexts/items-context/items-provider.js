import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { ItemsContext } from "./index";
import { useGetPaginatedItems } from "../../api/index";

const flattenItems = (items) => items.pages.flatMap((page) => page.data.data)

export default function ItemsProvider(props) {
  const { children } = props;
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    status,
  } = useGetPaginatedItems();

  const [items, setItems] = useState([]);
  const loading = isFetchingNextPage || isFetching

  useEffect(() => {
    if (!!data) {
      setItems(flattenItems(data)) 
    }
  }, [data]);

  const value = useMemo(
    () => ({
      items,
      loading,
      hasNextPage,
      fetchNextPage
    }),
    [ items, loading, hasNextPage, fetchNextPage]
  );

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>;
}
