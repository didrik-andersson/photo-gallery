import { useQuery } from "react-query";
import { _get } from "../index";

export const useGetItem = (id) =>
  useQuery(
    ["item", id],
    () => _get(`${process.env.REACT_APP_API_BASEPATH}/posters/${id}`),
    {
      enabled: !!id,
    }
  );
