import React, { useState } from "react";
import axios from "axios";
import { ItemContext } from "./index";

export default function ItemProvider(props) {
  const { children } = props;

  const [items, setItems] = useState(null);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  function getItems() {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:3001/items",
    })
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  function getItem(itemId) {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:3001/items",
    })
      .then((res) => {
        let item = res.data.find(({ id }) => id === itemId);
        setItem(item);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <ItemContext.Provider value={{ loading, getItems, getItem, item, items }}>
      {children}
    </ItemContext.Provider>
  );
}
