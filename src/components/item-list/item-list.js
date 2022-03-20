import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { ItemsContext } from "../../contexts/index";
import { useContext, useIntersectionObserver, useScrollRestorationTwo } from "../../hooks/index";
import { useNavigate } from "react-router-dom";

export default function ItemList() {
  const { items, hasNextPage, fetchNextPage } = useContext(ItemsContext);
  const loadMoreButtonRef = useRef();

  let navigate = useNavigate();

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  });

  const { scrollToLastView, updateStore } = useScrollRestorationTwo();

  const handleNavigate = (id) => {
    console.log("navigating at: ", window.scrollY)
    updateStore(window.scrollY);
    navigate(`/item/${id}`)
  }

  useEffect(() => {
    scrollToLastView()
  }, []);


  return (
    <Box sx={{ mx: "auto", maxWidth: 1800, overflow: "hidden", px: 1.3 }}>
      {items && (
        <Masonry columns={{ xs: 2, md: 3, xl: 4 }} spacing={2.5}>
          {items.map((item) => (
            <img
              style={{
                boxShadow: "0 3px 5px 0 rgb(0 0 0 / 8%)",
                border: "solid 1px rgb(0 0 0 / 3%)",
                borderBottom: "none",
              }}
              key={item._id}
              src={item.images[0]}
              alt={item.name}
              loading="lazy"
              onClick={() => handleNavigate(item._id)}
            />
          ))}
          {/* {items.map((item) => (
            <div
              key={item._id}
              onClick={() => handleNavigate(item._id)}
              style={{ width: 100, height: 100, background: "yellow" }}
            >
              {item.name}
            </div>
          ))} */}
        </Masonry>
        // <>
        //   {items.map((item) => (
        //     <div
        //       key={item._id}
        //       onClick={() => {
        //         navigate(`/item/${item._id}`);
        //       }}
        //       style={{ width: 100, height: 100, background: "yellow" }}
        //     >
        //       {item.name}
        //     </div>
        //   ))}
        // </>
      )}
      {/* <Box ref={loadMoreButtonRef}>:)</Box> */}
      <button onClick={() => fetchNextPage()}>load more</button>
    </Box>
  );
}
