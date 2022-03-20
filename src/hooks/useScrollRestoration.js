import { useEffect, useRef } from "react";

let _store = undefined;

export default (key, smooth) => {
  const timeout = useRef();


  useEffect(() => {
    window.history.scrollRestoration = "manual";

    if (_store?.key === key) {
      console.log("scroll bitch!")
      window.scrollTo({
        left: window.scrollX,
        top: _store.scroll,
        behavior: smooth ? "smooth" : "auto",
      });
    }

    const onScroll = () => {
      console.log("i am scrolling bitch")
      clearTimeout(timeout.current);
      console.log(_store);
      timeout.current = setTimeout(() => {
        _store = {
          key,
          scroll: window.scrollY,
        };
      }, 200);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timeout.current);
      window.removeEventListener("scroll", onScroll);
      window.history.scrollRestoration = "manual";
    };
  }, [key]);
};
