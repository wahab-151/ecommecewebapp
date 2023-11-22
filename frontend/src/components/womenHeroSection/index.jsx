import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import womenbanner from "../../assets/womenbanner.png";

function HeroSectionWomen() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainherohead}>
        <Typography className="heading1">50% - 80 % OFF</Typography>
        <Typography className="heading2">FASHION SALE</Typography>
      </div>
    </>
  );
}

export default HeroSectionWomen;

const useStyles = makeStyles((theme) => ({
  mainherohead: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: " 550px",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${womenbanner})`,
    backgroungPosition: "center",

    backgroundSize: "cover",

    "& .heading1": {
      color: theme.palette.background.text,
      paddingTop: 50,
      fontSize: 45,
      fontWeight: 700,
    },
    "& .heading2": {
      color: theme.palette.background.btnblack,
      textTransform: "uppercase",
      fontSize: 30,
      fontWeight: 700,
    },
  },
}));
