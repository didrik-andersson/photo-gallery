import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";

export default function ImageSlider({ children }) {
  var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box sx={{ mx: 0 }}>
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
}
