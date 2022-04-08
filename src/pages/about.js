import { useInfiniteQuery } from "react-query";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import axios from "axios";
import Masonry from "@mui/lab/Masonry";
import { ItemContext } from "../contexts/index";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import ps from "../utils/db.json";

export default function About() {
  let navigate = useNavigate();
  const [dataa, setDataa] = useState([]);
  // const bangPostersdb = () => {
  //   console.log(ps);
  //   ps.posters.forEach(poster => {
  //     axios.post('http://localhost:5000/poster', poster)
  //   });
  // }

  const fetchProjects = async ({ pageParam = 1 }) => {
    let res = await axios.get(
      `http://localhost:5000/poster?page=${pageParam}&limit=8`
    );

    return res;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("posters", fetchProjects, {
    getNextPageParam: (lastPage, pages) => lastPage.data.next.page,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const mapPages = async () => data.pages.flatMap((page) => page.data.data);

    const lolypoop = async () => {
      let neger = await mapPages();
      setDataa(neger)
    }

    if (!!data) {
      lolypoop();
    }
  }, [data]);

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {/* <Box sx={{ mx: "auto", maxWidth: 1800, overflow: "hidden", px: 1.3 }}> */}
      <Masonry columns={{ xs: 2, md: 3, xl: 4 }} spacing={2.5}>
        {dataa.map((poster, i) => (
          <img
            style={{
              boxShadow: "0 3px 5px 0 rgb(0 0 0 / 8%)",
              border: "solid 1px rgb(0 0 0 / 3%)",
              borderBottom: "none",
            }}
            key={poster.id}
            src={`${poster.images[0]}?w=248&fit=crop&auto=format`}
            srcSet={`${poster.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={poster.name}
            loading="lazy"
            onClick={() => {
              navigate(`/item/${poster.id}`);
            }}
          />
        ))}
        {/* {data.pages.map((group, i) => (
            <Fragment key={group.config.url}>
              {group.data.data.map((poster, i) => (
                <img
                  style={{
                    boxShadow: "0 3px 5px 0 rgb(0 0 0 / 8%)",
                    border: "solid 1px rgb(0 0 0 / 3%)",
                    borderBottom: "none",
                  }}
                  key={poster._id}
                  src={poster.images[0]}
                  alt={poster.name}
                  loading="lazy"
                  onClick={() => {
                    navigate(`/item/${poster.id}`);
                  }}
                />
              ))}
            </Fragment>
          ))} */}
      </Masonry>
      {/* </Box> */}
      {/* 
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.data.data.map((poster) => (
            <p key={poster._id}>{poster.name}</p>
          ))}
        </Fragment>
      ))} */}

      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}
