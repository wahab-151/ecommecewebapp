import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TextField from "../input";
import React from "react";
import Button from "../units/Button";

export default function ContactForm() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.dataSection}>
        <Typography className="heading"> ADDRESS</Typography>
        <Typography className="text"> G9, Pakistan</Typography>
        <Typography className="text"> (322) 5181881 15</Typography>
        <Typography className="text"> islamabad pakistan</Typography>
        <Typography className="text"> (322) 512 08 15</Typography>
        <Typography className="text">g9@example.com</Typography>
      </Box>
      <Box className={classes.dataSection2}>
        <div>
          <Typography className="heading"> CONTACT FORM </Typography>
          <textarea className={classes.textarea} rows="9" id="w3review">
            message
          </textarea>
        </div>
        <Box className={classes.inputSec}>
          <TextField variant="outlined" className="input" placeholder="Name" />
          <TextField variant="outlined" className="input" placeholder="Email" />
          <div style={{ marginTop: 40 }} className={classes.btnsec}>
            <Button className={classes.btnSubmit} variant="outlined">
              {" "}
              submit
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  main: {
    width: "95%",
    margin: "auto",
    display: "grid",

    gridTemplateColumns: "1fr 2fr",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      rowGap: 60,
      flexDirection: "column-reverse",
    },
  },

  dataSection: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",

    "& .heading": {
      paddingBottom: 10,
      fontSize: 22,
      fontWeight: 700,
    },
  },

  dataSection2: {
    display: "flex",
    flexDirection: "column",
    rowGap: "30px",
    "& .heading": {
      paddingBottom: 10,
      fontSize: 22,
      fontWeight: 700,
    },
  },
  textarea: {
    width: "98%",
    padding: 7,
    color: theme.palette.input.main,
    backgroundColor: theme.palette.primary.main,
    resize: "none",
    [theme.breakpoints.down("md")]: {
      width: "97%",
    },
  },

  inputSec: {
    paddingTop: 20,
    display: "grid",
    columnGap: 20,
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("md")]: {
      rowGap: 30,
      gridTemplateColumns: " 1fr",
    },
  },
  btnsec: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  btnSubmit: {
    width: 150,
  },
}));
