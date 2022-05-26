import { useQuery } from "react-query";
import { _get } from "../index";

export const useGetItem = (id) =>
  useQuery(["item", id], () => _get(`https://designder-api.herokuapp.com/posters/${id}`), {
    enabled: !!id,
  });
