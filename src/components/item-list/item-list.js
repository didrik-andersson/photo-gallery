import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { ItemsContext } from "../../contexts/index";
import {
  useContext,
  useIntersectionObserver,
  useScrollRestoration,
} from "../../hooks/index";
import { useNavigate, useParams, useNavigationType } from "react-router-dom";
import { FormControlLabel, Switch } from "@mui/material";

export default function ItemList() {
  const { items, hasNextPage, fetchNextPage } = useContext(ItemsContext);
  const { scrollToLastView, updateStore } = useScrollRestoration();
  const [ checked, setChecked ] = useState(false);

  const loadMoreButtonRef = useRef();
  let navigate = useNavigate();
  let navigationType = useNavigationType();
  let { category } = useParams();

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
    console.log(navigationType)
    if(navigationType === 'POP') {
      scrollToLastView();
    }
  }, []);

  return (
    <Box className="kekw">
      {items && (
        <>
          <FormControlLabel 
            control={
              <Switch checked={checked} onChange={() => setChecked(!checked)}/>
            }
            label="Visa miljöbild"
          />
          <Masonry columns={{ xs: 2, md: 3, xl: 4 }} spacing={2.5}>
            {items.map((item) => (
              <img
                style={{
                  boxShadow: "0 3px 5px 0 rgb(0 0 0 / 8%)",
                  border: "solid 1px rgb(0 0 0 / 3%)",
                  borderBottom: "none",
                }}
                src={`${item.images[checked ? 1 : 0]}?w=248&fit=crop&auto=format`}
                srcSet={`${item.images[checked ? 1 : 0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                key={item._id}
                alt={item.name}
                onClick={() => handleNavigate(item._id)}
              />
            ))}
          </Masonry>
          <Box ref={loadMoreButtonRef} className="is-active"></Box>
        </>
      )}
      {/* <button onClick={() => fetchNextPage()}>load more</button> */}
    </Box>
  );
}
