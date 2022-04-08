import { useQuery } from "react-query";
import { _get } from "../index";

export const useGetItem = (id) =>
  useQuery("item", () => _get(`https://localhost:7229/poster/${id}`), {
    enabled: !!id,
  });
