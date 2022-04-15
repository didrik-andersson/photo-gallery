import { useInfiniteQuery } from "react-query";
import { _get } from "../index"

export const useGetPaginatedItems = (searchTerm, size) => {

  const getUrl = (token) => {
    if (searchTerm) {
      if(size) {
        return `https://localhost:7229/search/${searchTerm}?token=${token}&size=${size}`
      } else {
        return `https://localhost:7229/search/${searchTerm}?token=${token}`
      }
    } else {
      if(size) {
        return `https://localhost:7229/search?token=${token}&size=${size}`
      } else {
        return `https://localhost:7229/search?token=${token}`
      }
    }
  }

  const fetchProjects = ({ pageParam = 0 }) =>
  _get(getUrl(pageParam));

  return useInfiniteQuery(["posters", searchTerm], fetchProjects, {
    getNextPageParam: (lastPage, pages) => lastPage.data.token,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });
};
