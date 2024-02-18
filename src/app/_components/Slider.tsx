"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
} from "@mui/material";
import { Banner } from "../_types/banner";
import Slider from "react-slick";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

export const CustomSlider = ({ data }: { data: Banner[] }) => {
  const slider = useRef<Slider | null>(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    className: "slider variable-width",
    arrows: false,
  };
  return (
    <Container
      sx={{
        position: "relative",
        "button.slick-arrow": {
          display: "none",
        },
        ".slick-list": {
          overflow: "initial",
        },
      }}
    >
      <Slider {...settings} ref={slider}>
        {data.map((banner) => (
          <Box key={banner.mainBannerId} sx={{ pr: 2 }}>
            <CardMedia
              component={"img"}
              src={banner.pcImageUrl}
              sx={{ objectFit: "cover" }}
              alt={banner.title}
            />
          </Box>
        ))}
      </Slider>
      <IconButton
        onClick={() => slider?.current?.slickPrev()}
        sx={{
          position: "absolute",
          left: 50,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "grey.700",
        }}
      >
        <ArrowBackIosNewIcon sx={{ color: "#fff" }} />
      </IconButton>
      <IconButton
        onClick={() => slider?.current?.slickNext()}
        sx={{
          position: "absolute",
          right: 50,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "grey.700",
        }}
      >
        <ArrowForwardIosIcon sx={{ color: "#fff" }} />
      </IconButton>
    </Container>
  );
};
