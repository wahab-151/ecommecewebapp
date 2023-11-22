import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
/**
 * @dev custom button designed upon Material UI's Button component. It accepts all props the MuI button accepts. moreover, the following props have been overridden. the default styles is contained primary
 * @props variant can be either contained or outlined
 * @props color can be primary or secondary
 */
export default withStyles((theme) => ({
  root: {
    textAlign: "center",

    "& .MuiButton-root": {},
  },

  outlined: {
    fontSize: "16px !important",
    fontWeight: 600 + "!important",
    color: theme.palette.primary.main + "!important",
    backgroundColor: theme.palette.secondary.main + "!important",
    borderRadius: " 0px !important",
    border: " none",

    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.7),
      cursor: "pointer",
    },
  },

  contained: {
    color: theme.palette.secondary.main + " !important",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: " 0px !important",
    border: `1px solid ${theme.palette.secondary.main} !important`,
    fontSize: "16px !important",
    fontWeight: 600 + "!important",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark + "!important",
      // color: theme.palette.text.primary,
      transform: "scale(1.03)",
    },
  },
}))(Button);
