import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { _get } from "../index"

export const useGetPaginatedItems = () => {
  const fetchProjects = ({ pageParam = 1 }) =>
  _get(`http://localhost:5000/poster?page=${pageParam}&limit=16`);

  return useInfiniteQuery("posters", fetchProjects, {
    getNextPageParam: (lastPage, pages) => lastPage.data.next.page,
    refetchOnWindowFocus: false,
  });
};
