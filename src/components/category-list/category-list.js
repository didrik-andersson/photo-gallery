import React from "react";
import { CategoryListItem, CategoryListItemSkeleton } from "./index";
import { ListWrapper } from "./styled-components";

const categories = [
  {
    image:
      "https://didrikimages.blob.core.windows.net/images/1502995646523.jpg",
    alt: "Kategoribild av posters",
    link: "/utforska/posters",
    label: "Posters",
  },
  //   {
  //     image:
  //       "https://didrikimages.blob.core.windows.net/images/4786232652454.jpg",
  //     alt: "Kategoribild av posters",
  //     link: "/utforska/posters",
  //     label: "Posters",
  //   },
  //   {
  //     image:
  //       "https://didrikimages.blob.core.windows.net/images/4786232652454.jpg",
  //     alt: "Kategoribild av posters",
  //     link: "/utforska/posters",
  //     label: "Posters",
  //   },
];

export default function CategoryList() {
  return (
    <>
      <ListWrapper>
        {categories &&
          categories.map((category) => (
            <CategoryListItem
              key={category.link}
              image={category.image}
              alt={category.alt}
              link={category.link}
              linkLabel={category.label}
            />
          ))}
        <CategoryListItemSkeleton />
        <CategoryListItemSkeleton hideMd />
      </ListWrapper>
    </>
  );
}
