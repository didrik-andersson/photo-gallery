import { useQuery } from "react-query";
import { _get } from "../index";

export const useGetItem = (id) =>
  useQuery(["item", id], () => _get(`http://localhost:5000/posters/${id}`), {
    enabled: !!id,
  });
