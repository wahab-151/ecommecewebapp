import { Checkbox as MuiCheckBox } from "@mui/material";
import { withStyles } from "@mui/styles";
/**
 * @dev custom button designed upon Material UI's checkbox component. It accepts all props the MuI checkbox accepts. moreover, the following props have been overridden. the default styles is contained primary
 * @props variant can be either contained or outlined
 * @props color can be primary or secondary
 */
const CheckBox = withStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main + " !important",
  },
}))(MuiCheckBox);

export default CheckBox;
