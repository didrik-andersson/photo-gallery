import { useQuery } from "react-query";
import { _get } from "../index";

export const useGetItem = (id) =>
  useQuery("item", () => _get(`http://localhost:5000/poster/${id}`));
