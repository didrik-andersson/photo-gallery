import { useInfiniteQuery } from "react-query";
import { _get } from "../index";

export const useGetPaginatedItems = (searchTerm, filterQuery, limit) => {
  const getUrl = (token) => {
    if (searchTerm) {
      if (limit) {
        return `${
          process.env.REACT_APP_API_BASEPATH
        }/posters/search?q=${searchTerm}&page=${token}&limit=${limit}${
          filterQuery ? `&filters=${filterQuery}` : ""
        }`;
      } else {
        return `${process.env.REACT_APP_API_BASEPATH}/posters/search?q=${searchTerm}&page=${token}`;
      }
    } else {
      if (limit) {
        return `${process.env.REACT_APP_API_BASEPATH}/posters?page=${token}&limit=${limit}`;
      } else {
        return `${process.env.REACT_APP_API_BASEPATH}/posters?page=${token}`;
      }
    }
  };

  const fetchProjects = ({ pageParam = 1 }) => _get(getUrl(pageParam));

  return useInfiniteQuery(["posters", searchTerm, filterQuery], fetchProjects, {
    getNextPageParam: (lastPage, pages) => lastPage.data.next.page,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
