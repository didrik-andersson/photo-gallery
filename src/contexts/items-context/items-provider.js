import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { ItemsContext } from "./index";
import { useGetPaginatedItems } from "../../api/index";

const flattenItems = (items) =>
  items.pages.flatMap((page) => page.data.posters);

export default function ItemsProvider({ children, query }) {

  const [items, setItems] = useState([]);
  const [ totalHits, setTotalHits ] = useState(null);

  const {
    data,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    status,
  } = useGetPaginatedItems(query, 24);

  const loading = isFetchingNextPage || isFetching;

  useEffect(() => {
    if (!!data) {
      setTotalHits(data.pages.at(-1).data.total);
      setItems(flattenItems(data));
    }
  }, [data]);

  const value = useMemo(
    () => ({
      items,
      totalHits,
      loading,
      hasNextPage,
      fetchNextPage,
    }),
    [items, totalHits, loading, hasNextPage, fetchNextPage]
  );

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
}
