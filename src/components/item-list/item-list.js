import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { ItemsContext } from "../../contexts/index";
import {
  useContext,
  useIntersectionObserver,
  useScrollRestoration,
} from "../../hooks/index";
import { useNavigate, useParams, useNavigationType } from "react-router-dom";

export default function ItemList() {
  const { items, hasNextPage, fetchNextPage, viewSettings } =
    useContext(ItemsContext);
  const { scrollToLastView, updateStore } = useScrollRestoration();

  const loadMoreButtonRef = useRef();
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const { category } = useParams();

  const getItemImage = (images) => {
    const imageIndex = viewSettings["enviromentImage"];

    return (imageIndex && images[1] && images[1]) || images[0];
  };

  const handleNavigate = (id) => {
    console.log("navigating at: ", window.scrollY);
    updateStore(window.scrollY);
    navigate(`/${category}/${id}`);
  };

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  });

  useEffect(() => {
    if (navigationType === "POP") {
      scrollToLastView();
    }
  }, []);

  return (
    <Box className="masonry-wrapper">
      {items && (
        <>
          <Masonry columns={{ xs: 2, md: 3, xl: 3 }} spacing={2.5}>
            {items.map((item) => (
              <img
                style={{
                  boxShadow: "0 3px 5px 0 rgb(0 0 0 / 8%)",
                  border: "solid 1px rgb(0 0 0 / 3%)",
                  borderBottom: "none",
                }}
                src={`${getItemImage(item.images)}?w=248&fit=crop&auto=format`}
                srcSet={`${getItemImage(
                  item.images
                )}?w=248&fit=crop&auto=format&dpr=2 2x`}
                key={item._id}
                alt={item.name}
                onClick={() => handleNavigate(item._id)}
              />
            ))}
          </Masonry>
          <Box ref={loadMoreButtonRef} className="is-active"></Box>
        </>
      )}
    </Box>
  );
}
