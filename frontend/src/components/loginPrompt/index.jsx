import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  CircularProgress,
  Divider,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "../units/Button";
import { Link } from "react-router-dom";
const LoginPrompt = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Modal
      sx={{
        width: 450,
        height: "max-content",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        borderRadius: "10px",
      }}
      open={open}
      handleClose={handleClose}
      className={classes.popUpmain}
    >
      <Paper
        sx={{
          backgroundColor: (theme) => theme.palette.background.loginsection,
        }}
      >
        <Box className={classes.headSection}>
          {" "}
          <Typography variant="h5" color={"secondary"} className={classes.typo}>
            Confirmation
          </Typography>
          <CancelIcon className={classes.cancelIcon} onClick={handleClose} />
        </Box>

        <Divider variant="main" className={classes.divider} />
        <Box>
          <Box>
            <Box sx={{ padding: 2, textAlign: "center" }}>
              <Typography variant="h5" color={"secondary"}>
                Please make sure you are logged in before you proceed.
              </Typography>
            </Box>

            <Divider variant="main" className={classes.divider} />
            <Box className={classes.buttonsSection} sx={{ padding: 1 }}>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button LinkComponent={Link} to="/login" variant="outlined">
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
};

export default LoginPrompt;

const useStyles = makeStyles((theme) => ({
  headSection: {
    display: "flex",
    padding: " 10px 15px",

    justifyContent: "space-between",
  },

  cancelIcon: {
    color: "green",
    "& :hover": {
      cursor: "pointer",
    },
  },
  typoInner: {
    padding: " 0px 15px",
    fontSize: 12,
    fontWeight: 600,
  },
  typo: {
    fontWeight: "bold",
  },

  buttonsSection: {
    padding: " 19px",
    display: "flex",
    justifyContent: "space-around",
  },
  divider: {
    width: "100%",
  },
  checkedIcon: {
    height: 100,
    width: 100,
  },
}));
