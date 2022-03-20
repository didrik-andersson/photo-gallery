import React, { useEffect, useMemo, useState } from "react";
import { ItemContextTest } from "./index";
import { useParams } from "react-router-dom";
import { useGetItem } from "../../api/index";

export default function ItemProviderTest({ children }) {
  let { id } = useParams();  
  const { data, isLoading} = useGetItem(id);

  const [item, setItem] = useState(false);

  useEffect(() =>  {
    if(data) {
      setItem(data.data);
    }
  }, [data])

  const value = useMemo(() => ({
    item,
    loading: isLoading
  }), [item, isLoading]);

  return (
    <ItemContextTest.Provider value={value}>
      {children}
    </ItemContextTest.Provider>
  );
}
