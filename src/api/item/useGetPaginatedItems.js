import { useInfiniteQuery } from "react-query";
import { _get } from "../index"

export const useGetPaginatedItems = (searchTerm, limit) => {

  const getUrl = (token) => {
    if (searchTerm) {
      if(limit) {
        return `http://localhost:5000/posters/search?q=${searchTerm}&page=${token}&limit=${limit}`
      } else {
        return `http://localhost:5000/posters/search?q=${searchTerm}&page=${token}`
      }
    } else {
      if(limit) {
        return `http://localhost:5000/posters?page=${token}&limit=${limit}`
      } else {
        return `http://localhost:5000/posters?page=${token}`
      }
    }
  }

  const fetchProjects = ({ pageParam = 1 }) =>
  _get(getUrl(pageParam));

  return useInfiniteQuery(["posters", searchTerm], fetchProjects, {
    getNextPageParam: (lastPage, pages) => lastPage.data.next.page,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });
};
