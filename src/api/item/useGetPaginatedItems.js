import { useInfiniteQuery } from "react-query";
import { _get } from "../index";

const buildQueryParameters = (
  searchTerm,
  token,
  limit,
  filterQuery,
  sortBy
) => {
  const parameters = [
    { key: "q=", value: searchTerm },
    { key: "page=", value: token },
    { key: "limit=", value: limit },
    { key: "filters=", value: filterQuery },
    { key: "sortBy=", value: sortBy },
  ];

  return parameters
    .reduce((joinedParams, param) => {
      if (!!param.value) joinedParams.push(param.key + param.value);

      return joinedParams;
    }, [])
    .join("&");
};

const buildPath = (searchTerm) => {
  if (searchTerm) {
    return `${process.env.REACT_APP_API_BASEPATH}/posters/search?`;
  } else {
    return `${process.env.REACT_APP_API_BASEPATH}/posters?`;
  }
};

export const useGetPaginatedItems = (
  searchTerm,
  filterQuery,
  sortBy,
  limit
) => {
  const getUrl = (token) => {
    // prettier-ignore
    const query = buildQueryParameters(searchTerm, token, limit, filterQuery, sortBy);
    const path = buildPath(searchTerm);

    return `${path}${query}`;
  };

  const fetchProjects = ({ pageParam = 1 }) => _get(getUrl(pageParam));

  return useInfiniteQuery(
    ["posters", searchTerm, filterQuery, sortBy, limit],
    fetchProjects,
    {
      getNextPageParam: (lastPage, pages) => lastPage.data.next.page,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
};
