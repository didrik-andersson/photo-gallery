import React, { useEffect, useMemo, useState } from "react";
import { ItemContextTest } from "./index";
import { useFetchData } from "../../hooks/index";
import { useParams } from "react-router-dom";

export default function ItemProviderTest({children}) {
  const [ item , setItem ] = useState();

  let { id } = useParams();
  const { data, loading, error } = useFetchData(`http://localhost:3001/items`);

  useEffect(() =>  {
    if(data) {
      let findItemById = data.find((item) => item.id === id)
      setItem(findItemById);
    }
  }, [data])

  const value = useMemo(
    () => ({
      item, loading, error
    }),
    [ item, loading, error ]
  );

  return <ItemContextTest.Provider value={value}>
    {loading && (<>loading...</>)}
    { item && children}
  </ItemContextTest.Provider>;
}
