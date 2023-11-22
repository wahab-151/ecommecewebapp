import { makeStyles } from "@mui/styles";
import React from "react";
import LoginSection from "../../components/login";

export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <LoginSection />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.login,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
