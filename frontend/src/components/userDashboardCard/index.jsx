import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
export default function Card({ icon, title, description }) {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <div className="div_image">
        <Box className="image " alt="por">
          {icon}{" "}
        </Box>
      </div>
      <div style={{ textAlign: "center" }}>
        <p className={classes.heading}>{title}</p>
        <p className={classes.description}>{description}</p>
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 339,
    height: 200,
    border: "1px solid " + theme.palette.input.main,

    " & .div_image": {
      " & .image": {
        color: theme.palette.secondary.main,
      },
    },
  },

  heading: {
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
    fontSize: 18,
    fontWeight: 700,
  },

  description: {
    color: theme.palette.info.main,
    fontSize: 14,
    fontWeight: 500,
  },
}));
