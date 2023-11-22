import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const Carousel = ({ children, arrowsInside, className, ...props }) => {
  const settings = {
    ...props,
    infinite: true,
    dots: true, //
  };
  const classes = useStyles();
  return (
    <Slider {...settings} className={clsx(className, classes.carousel)}>
      {children}
    </Slider>
  );
};
export default Carousel;

const useStyles = makeStyles((theme) => ({
  carousel: {
    backgroundColor: theme.palette.primary.main,
    "& .slick-dots": {
      bottom: 40,
      [theme.breakpoints.down("sm")]: {
        bottom: 10,
      },
      "& li": {
        "& button": {
          "&:before": {
            color: "#fff",
            fontSize: 15,
            [theme.breakpoints.down("sm")]: {
              fontSize: 10,
            },
          },
        },
      },
    },
  },
}));
