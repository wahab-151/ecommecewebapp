import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import image1 from "../../assets/about1.png";
import image2 from "../../assets/about2.png";
import React from "react";

export default function AboutContent() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.inner1}>
        <div className={classes.dataSec}>
          <Typography className={classes.title}>
            Lorem ipsum dolor sit amet, consectetur adit elit,
          </Typography>
          <Typography className={classes.title2}>
            Lorem ipsum dolor sit amet, consectetur adit elit, sed do eius mod
            tempor incid ut labore e dolore magna aliqua. Ut enim ad minim veni,
            quis nostrud exercitation ullamco laboris nisi ut alu quip ex ea
            commodo consequat. Duis te irure dolor in reprehen.
          </Typography>
        </div>
        <div>
          {" "}
          <img className={classes.image1} src={image1} alt="img1" />
        </div>
      </Box>
      <Box className={classes.inner2}>
        <div>
          {" "}
          <img className={classes.image2} src={image2} alt="img1" />
        </div>
        <div className={classes.dataSec}>
          <Typography className={classes.title}>
            Lorem ipsum dolor sit amet, consectetur adit elit,
          </Typography>
          <Typography className={classes.title2}>
            Lorem ipsum dolor sit amet, consectetur adit elit, sed do eius mod
            tempor incid ut labore e dolore magna aliqua. Ut enim ad minim veni,
            quis nostrud exercitation ullamco laboris nisi ut alu quip ex ea
            commodo consequat. Duis te irure dolor in reprehen.
          </Typography>
        </div>
      </Box>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.primary.main,
    padding: " 50px 0px 60px 0px",
    display: "flex",
    flexDirection: "column",
    columnGap: 8,
    rowGap: 30,
  },

  inner1: {
    width: "95%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 30,
    [theme.breakpoints.down("md")]: { gridTemplateColumns: "1fr " },
  },
  inner2: {
    width: "95%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 30,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column-reverse ",
    },
  },
  title: {
    color: theme.palette.secondary.main,
    "&.MuiTypography-root": {
      fontWeight: 700,
      fontSize: "2.4rem",
    },
  },
  image1: {
    filter: "grayscale(100%)",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.54)",
    maxWidth: 856.82,
    width: "100%",
    height: 500,
  },
  image2: {
    maxWidth: 856.82,
    width: "100%",
    height: 500,
  },
  title2: {
    color: theme.palette.secondary.main,
    "&.MuiTypography-root": {
      fontWeight: 500,
      fontSize: "1.1rem",
    },
  },
  dataSec: {
    padding: " 0px 40px",
    [theme.breakpoints.down("md")]: {
      padding: " 30px 40px",
    },
  },
}));
