import { useQuery } from "react-query";
import { _get } from "../index";

export const useGetItem = (id) =>
  useQuery(["item", id], () => _get(`http://192.168.1.78:5000/posters/${id}`), {
    enabled: !!id,
  });
