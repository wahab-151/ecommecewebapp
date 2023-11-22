import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Payment from "../../assets/payment.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { makeStyles, createStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const Copyright = () => {
  const { lightTheme } = useSelector((state) => state.themeSlice);
  const classes = useStyles({ lightTheme });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2em",
        flexWrap: "wrap",
        background: (theme) => theme.palette.secondary.tertiary,
      }}
    >
      <Box sx={{ display: "flex", gap: 5 }}>
        <Typography
          variant="p"
          sx={{ color: (theme) => theme.palette.info.main }}
        >
          ©G9 shop 2023
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TwitterIcon className={classes.iconMode} />
          <FacebookRoundedIcon className={classes.iconMode} />
          <InstagramIcon className={classes.iconMode} />
          <YouTubeIcon className={classes.iconMode} />
        </Box>
      </Box>

      <Box>
        <img
          src={Payment}
          alt="payment icons"
          style={{ width: "200px", height: "40px" }}
        />
      </Box>
    </Box>
  );
};

export default Copyright;

const useStyles = makeStyles((theme) =>
  createStyles({
    navUl: {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    container: {
      padding: "2em",
      background: theme.palette.secondary.tertiary,
    },
    iconMode: {
      color: (props) => (props.lightTheme ? "black" : "white"),
    },
  })
);
