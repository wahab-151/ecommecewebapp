import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const CarouselItem = ({ image }) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.overlay}>
        <Box>
          <Typography variant="h1" className={classes.discount}>
            50% - 80 % OFF
          </Typography>
          <Typography variant="h2" className={classes.heading}>
            FASHION SALE
          </Typography>
        </Box>
        <Typography variant="h4">JAN 15 - 20</Typography>
        <button className={classes.btnShownow}>shop now</button>
      </Box>
      <Box>
        <img src={image} alt="car" className={classes.image} />
      </Box>
    </Box>
  );
};

export default CarouselItem;

const useStyles = makeStyles((theme) => ({
  btnShownow: {
    padding: "10px 20px",
    width: "fit-content",

    textTransform: "capitalize",
    color: theme.palette.info.headerLinks,
    border: "none",
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: 16,

    "&:hover": {
      cursor: "pointer",
    },
  },
  overlay: {
    position: "absolute",
    display: "grid",
    gap: 20,
    top: "50%",
    paddingLeft: 60,
    transform: "translateY(-50%)",
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
  },
  image: {
    width: "100%",
    height: 500,
    objectFit: "fill",
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  discount: {
    fontSize: "80px !important",
    fontWeight: "700 !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px !important",
    },
  },
  heading: {
    fontSize: "70px !important",
    fontWeight: "500 !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
    },
  },
}));
