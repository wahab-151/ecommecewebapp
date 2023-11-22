import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import image from "../../assets/img1.png";
import React from "react";

export default function NewCollection() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.sectionOne}>
        <Typography className="head1">NEW COLLECtIONS</Typography>
        <Typography className="head2">
          Lorem ipsum dolor sit amet, consectetur.{" "}
        </Typography>
        <button className={classes.btnShownow}>show now</button>
      </Box>
      <Box className={classes.secondone}>
        <img className="image" src={image} alt="img" />
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.primary.main,
    padding: "20px 0px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("sm")]: { gridTemplateColumns: "1fr" },
  },
  sectionOne: {
    display: "flex",
    padding: "0px 50px",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    height: "450px",

    backgroundColor: theme.palette.background.banner,

    "& .head1": {
      color: theme.palette.background.text,
      textTransform: "uppercase",
      fontSize: 20,
      fontWeight: 600,
    },
    "& .head2": {
      color: theme.palette.background.text,
      fontSize: 40,
      fontWeight: 600,
    },
  },
  secondone: {
    margin: 0,
    padding: 0,
    "& .image": {
      width: "100%",
      height: "450px",
    },
  },

  btnShownow: {
    padding: " 5px",
    width: 100,
    textTransform: "capitalize",
    border: "1px solid #FFFFFF !important",
    color: "#FFFFFF",
    textAlign: "center",
    backgroundColor: "#000",

    "&:hover": {
      cursor: "pointer",
    },
  },
}));
