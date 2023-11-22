import { makeStyles } from "@mui/styles";
import React from "react";
import Mapaccordion from "../../components/Faqs/map";

export default function Faq() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.Faq}>
        <Mapaccordion />
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  main: { backgroundColor: theme.palette.primary.main },
  Faq: {
    width: "80%",
    padding: "20px 0px",
    margin: "auto",
  },
}));
