import React, { useState, useMemo, useEffect, useCallback } from "react";
import { ItemsContext } from "./index";
import { useGetPaginatedItems } from "../../api/index";
import { useSearchParams } from "react-router-dom";
import useOnlyOnUpdateEffect from "../../hooks/use-only-on-update-effect";

const flattenItems = (items) =>
  items.pages.flatMap((page) => page.data.data[0]?.searchResult);

const getFiltersParam = (searchParams) => searchParams.get("filters");

const getSortByParam = (searchParams) => searchParams.get("sortBy");

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

const initialViewSettings = () =>
  JSON.parse(localStorage.getItem("viewSettings")) || {
    enviromentImage: false,
  };

// prettier-ignore
export default function ItemsProvider({ children, searchTerm: initialSearchTerm} ) {
  const [items, setItems] = useState([]);
  const [totalHits, setTotalHits] = useState(null);
  const [buckets, setBuckets] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(() => getInitialFilters(searchParams));
  const [filterQuery, setFilterQuery] = useState(() => buildFilterQuery(filters));
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [sortBy, setSortBy] = useState(() => getSortByParam(searchParams) || "");
  const [viewSettings, setViewSettings] = useState(initialViewSettings);

  useOnlyOnUpdateEffect(() => {
    const isNewSearch = initialSearchTerm !== searchTerm;

    if (isNewSearch) {
      setFilters(getInitialFilters(searchParams));
      setFilterQuery("");
      setSearchTerm(initialSearchTerm);
      setViewSettings(initialViewSettings);
      setSortBy(getSortByParam(searchParams) || "");
    }
  }, [initialSearchTerm]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useGetPaginatedItems(searchTerm, filterQuery, sortBy, 24);

  useEffect(() => {
    if (data) {
      setTotalHits(data.pages.at(-1).data.data[0]?.totalHits);
      setBuckets(data.pages.at(-1).data.data[0]?.buckets);
      setItems(flattenItems(data));
    }
  }, [data]);

  const loading = isFetchingNextPage || isFetching;
  const selectedFiltersCount = useMemo(() => Object.keys(filters).length, [filters]);
  const updateSortBy = useCallback((sortByValue) => setSortBy(sortByValue), []);
  const resetFilters = useCallback(() => setFilters({}), []);

  const updateFilters = useCallback((property, value) => {
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

  }, [filters, setFilters]);

  useOnlyOnUpdateEffect(() => {
    const newFilterQuery = buildFilterQuery(filters);
    const searchParamsCopy = new URLSearchParams(searchParams);

    setFilterQuery(newFilterQuery);

    newFilterQuery
      ? searchParamsCopy.set("filters", newFilterQuery)
      : searchParamsCopy.delete("filters");
      
    sortBy
      ? searchParamsCopy.set("sortBy", sortBy)
      : searchParamsCopy.delete("sortBy");

    setSearchParams(searchParamsCopy);
  }, [filters, sortBy]);

  const updateViewSettings = useCallback((property, value) => {
      setViewSettings((prev) => {
        const next = { ...prev, [property]: value };
        localStorage.setItem("viewSettings", JSON.stringify(next));
        return next;
      });
    }, [setViewSettings]);

  const value = useMemo(
    () => ({
      items,
      totalHits,
      buckets,
      loading,
      hasNextPage,
      fetchNextPage,
      filters,
      updateFilters,
      resetFilters,
      selectedFiltersCount,
      updateSortBy,
      sortBy,
      updateViewSettings,
      viewSettings,
    }),
    [
      items,
      totalHits,
      buckets,
      loading,
      hasNextPage,
      fetchNextPage,
      filters,
      updateFilters,
      resetFilters,
      selectedFiltersCount,
      updateSortBy,
      sortBy,
      updateViewSettings,
      viewSettings,
    ]
  );

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
}
