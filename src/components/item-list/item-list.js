import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { ItemContext } from "../../contexts/index";
import { useContext } from "../../hooks/index";
import { useNavigate } from "react-router-dom";

export default function ItemList() {
  const { getItems, items } = useContext(ItemContext);
  let navigate = useNavigate();

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Box sx={{ mx: "auto", maxWidth: 1200, overflow: "hidden" }}>
      {items && (
        <Masonry columns={{ xs: 2, sm: 4 }} spacing={1}>
          {items.map((item) => (
            <img
              key={item.id}
              src={`${item.images[0]}?w=248&fit=crop&auto=format`}
              srcSet={`${item.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                navigate(`/item/${item.id}`);
              }}
            />
          ))}
        </Masonry>
      )}
    </Box>
  );
}
