import { useCallback, useState } from "react";

let _store = 0;

export default function useScrollRestorationTwo() {
  const updateStore = (position) => {
    _store = position;
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const scrollToLastView = useCallback(async () => {
    window.history.scrollRestoration = "manual";

    await delay(200);
    window.scrollTo({
      left: window.scrollX,
      top: _store,
      behavior: "auto",
    });

    window.history.scrollRestoration = "auto";
  }, [_store]);

  return {
    scrollToLastView,
    updateStore,
  };
}
