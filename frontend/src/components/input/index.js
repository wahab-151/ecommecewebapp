import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

export default withStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",

    "& .MuiFormHelperText-root ": {
      fontSize: 16,
    },

    "& .MuiOutlinedInput-root": {
      outline: "none",

      border: "1px solid " + theme.palette.input.main,
    },
    "& .MuiOutlinedInput-input": {
      padding: "15px 20px",
      border: "1px solid " + theme.palette.input.main,
      color: theme.palette.input.main,
    },
    [theme.breakpoints.down("sm")]: {
      // width: "90%",
      margin: "0px 10px",
    },
  },
}))(TextField);
