import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const ImageIcon = ({ image }) => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        width: "25px",
        height: "25px",
      }}
    >
      <img
        src={image}
        width="100%"
        height="100%"
        alt={image}
        className={classes.icon}
      />
    </Box>
  );
};

export default ImageIcon;

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.secondary.main,
  },
}));
