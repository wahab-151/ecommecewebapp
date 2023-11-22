import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import menbanner from "../../assets/menbanner.png";

function HeroSectionMen() {
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

export default HeroSectionMen;

const useStyles = makeStyles((theme) => ({
  mainherohead: {
    color: theme.palette.background.text,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: " 550px",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${menbanner})`,
    backgroungPosition: "center",

    backgroundSize: "cover",

    "& .heading1": {
      fontSize: 45,
      fontWeight: 700,
    },
    "& .heading2": {
      textTransform: "uppercase",
      fontSize: 30,
      fontWeight: 500,
    },
  },
}));
