import { makeStyles } from "@mui/styles";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import React from "react";
import { Typography, Box } from "@mui/material";

export default function BannerHomeComponent() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.sectionOne}>
        <Box className={classes.dataSec}>
          <Typography className="head1">NEW COLLECtIONS</Typography>
          <Typography className="head2">
            Lorem ipsum dolor sit amet, consectetur.{" "}
          </Typography>
          <button className={classes.btnShownow}>show now</button>
        </Box>
      </Box>

      <Box className={classes.sectionTwo}>
        <Box className={classes.dataSecTwo}>
          <Typography className="head2">25% off Everithing</Typography>
          <Typography className="head1">
            Lorem ipsum dolor sit amet, consectetur.{" "}
          </Typography>
          <button className={classes.btnShownow}>show now</button>
        </Box>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.primary.main,
    padding: "50px 0px",
    display: "grid",

    gridTemplateColumns: "1fr 1fr",
    justifyContent: "space-between",
    columnGap: "20px",
    [theme.breakpoints.down("md")]: {
      columnGap: "0px",
      rowGap: "20px",
      gridTemplateColumns: "1fr",
    },
  },
  sectionOne: {
    height: 500,
    backgroundRepeat: "no-repeat",
    backgroundImage: `url( ${banner1})`,
    backgroundPosition: " center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "317px",
    },

    padding: "0px 50px",
  },
  dataSec: {
    marginTop: 120,
    display: "flex",
    flexDirection: "column",
    gap: 30,
    "& .head1": {
      color: theme.palette.background.btnblack,
      textTransform: "uppercase",
      fontSize: 20,
      fontWeight: 600,
    },
    "& .head2": {
      color: theme.palette.background.btnblack,
      fontSize: 45,
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {
        fontSize: 28,
      },
    },
  },

  btnShownow: {
    padding: " 5px",
    width: 100,
    textTransform: "capitalize",
    border: "none",
    color: "#000",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    backgroundColor: "#FFF",

    "&:hover": {
      cursor: "pointer",
    },
  },

  sectionTwo: {
    height: 500,
    backgroundRepeat: "no-repeat",
    backgroundImage: `url( ${banner2})`,
    backgroundPosition: " center",

    padding: "0px 50px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "317px",
    },
  },

  dataSecTwo: {
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
    gap: 30,
    "& .head1": {
      color: theme.palette.background.text,
      textTransform: "uppercase",
      fontSize: 15,
      fontWeight: 600,
    },
    "& .head2": {
      color: theme.palette.background.btnblack,
      fontSize: 45,
      fontWeight: 600,
    },
  },
}));
