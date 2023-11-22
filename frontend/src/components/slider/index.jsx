import { Slider } from "@mui/material";
import { withStyles } from "@mui/styles";

export default withStyles((theme) => ({
  thumb: {
    backgroundColor: "#ffffff !important",
    border: "1px solid" + theme.palette.secondary.main,
    height: "16px !important",
    width: "16px !important",
  },
  track: {
    height: "2px !important",
    border: "none !important",
  },
  rail: {
    height: "2px !important",
  },
  markLabel: {
    color: theme.palette.secondary.main + " !important",
  },
}))(Slider);
