import { useCallback, useState } from "react";

let _store = 0;

export default function useScrollRestorationTwo() {
  const updateStore = (position) => {
      console.log("setting store to: ", position)
      _store = position
    };

  window.history.scrollRestoration = "manual";

  const scrollToLastView = useCallback(() => {
    console.log("scrolling to: ", _store);  
    window.scrollTo({
      left: window.scrollX,
      top: _store,
      behavior: "auto",
    });
  }, [_store]);


  return {
    scrollToLastView,
    updateStore,
  };
}
