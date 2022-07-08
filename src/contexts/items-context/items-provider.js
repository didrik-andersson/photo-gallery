import React, { useState, useMemo, useEffect, useCallback } from "react";
import { ItemsContext } from "./index";
import { useGetPaginatedItems } from "../../api/index";
import { useSearchParams } from "react-router-dom";
import useOnlyOnUpdateEffect from "../../hooks/use-only-on-update-effect";

const flattenItems = (items) =>
  items.pages.flatMap((page) => page.data.data[0]?.searchResult);

const getFiltersParam = (searchParams) => searchParams.get("filters");

const getInitialFilters = (searchParams) => {
  const filters = {};
  const filtersParam = getFiltersParam(searchParams);

  filtersParam &&
    filtersParam.split("|").forEach((filter) => {
      const keyValue = filter.includes(":") && filter.split(":");
      keyValue[0] &&
        keyValue[1] &&
        (filters[keyValue[0]] = keyValue[1]
          .split(",")
          .filter((value) => value));
    });

  return filters;
};

const buildFilterQuery = (filters) =>
  filters &&
  Object.keys(filters)
    .sort()
    .reduce((params, property) => {
      const value = filters[property];
      params.push(`${property}:${value.join(",")}`);

      return params;
    }, [])
    .join("|");

export default function ItemsProvider({ children, query }) {
  const [items, setItems] = useState([]);
  const [totalHits, setTotalHits] = useState(null);
  const [buckets, setBuckets] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(getInitialFilters(searchParams));
  const [filterQuery, setFilterQuery] = useState(buildFilterQuery(filters));

  const {
    data,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    status,
  } = useGetPaginatedItems(query, filterQuery, 24);

  const loading = isFetchingNextPage || isFetching;

  useEffect(() => {
    if (!!data && !error) {
      setTotalHits(data.pages.at(-1).data.data[0]?.totalHits);
      setBuckets(data.pages.at(-1).data.data[0]?.buckets);
      setItems(flattenItems(data));
    }
  }, [data, error]);

  const updateFilters = useCallback(
    (property, value) => {
      const values = filters[property] && Object.values(filters[property]);
      const newValues = values && values.filter((v) => v !== value);

      setFilters((prev) => {
        const next = { ...prev };

        if (!values) {
          next[property] = [value];
        } else if (values && values.includes(value)) {
          !!newValues?.length
            ? (next[property] = newValues)
            : delete next[property];
        } else {
          next[property] = [...next[property], value];
        }
        return next;
      });
    },
    [filters, setFilters]
  );

  useOnlyOnUpdateEffect(() => {
    const newFilterQuery = buildFilterQuery(filters);
    const searchParamsCopy = new URLSearchParams(searchParams);

    setFilterQuery(newFilterQuery);

    if (newFilterQuery) {
      searchParamsCopy.set("filters", newFilterQuery);
      setSearchParams(searchParamsCopy);
    } else {
      searchParamsCopy.delete("filters");
      setSearchParams(searchParamsCopy);
    }
  }, [filters]);

  const value = useMemo(
    () => ({
      items,
      totalHits,
      buckets,
      loading,
      hasNextPage,
      fetchNextPage,
      filters,
      // setFilters,
      updateFilters,
    }),
    [
      items,
      totalHits,
      buckets,
      loading,
      hasNextPage,
      fetchNextPage,
      filters,
      // setFilters,
      updateFilters,
    ]
  );

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
}
