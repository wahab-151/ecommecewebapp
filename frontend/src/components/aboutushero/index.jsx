import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import aboutbanner from "../../assets/aboutbanner.png";

function HeroSectionAboutUs() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainherohead}>
        <Typography className="heading1">ABOUT</Typography>

        <div className={classes.sectionSecond}>
          <Typography className="heading2"> Home</Typography>
          <HorizontalRuleOutlinedIcon className={classes.icon} />
          <Typography className="heading2"> About</Typography>
        </div>
      </div>
    </>
  );
}

export default HeroSectionAboutUs;

const useStyles = makeStyles((theme) => ({
  mainherohead: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
    height: " 355px",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    background: `url(${aboutbanner})  `,
    backgroundSize: "cover",
    filter: "grayscale(100%)",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.54)",

    "& .heading1": {
      paddingLeft: 30,
      color: theme.palette.background.text,

      fontSize: 40,
      fontWeight: 700,
    },
  },

  icon: {
    color: theme.palette.background.text,
    fontSize: "50px  !important",
  },

  sectionSecond: {
    padding: "0px 30px 0px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& .heading2": {
      paddingLeft: 4,
      color: theme.palette.background.text,
      textTransform: "capitalize",
      fontSize: 20,
      fontWeight: 500,
    },
  },
}));
