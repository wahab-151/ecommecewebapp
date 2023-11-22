import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";

function Successfull() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainherohead}>
        <Typography className="heading1">Payment</Typography>

        <div className={classes.sectionSecond}>
          <Typography className="heading2"> Payment</Typography>
          <HorizontalRuleOutlinedIcon className={classes.icon} />
          <Typography className="heading2"> Payment Status</Typography>
        </div>
      </div>
      <div className={classes.row}>
        <div>Payment Successfull</div>
      </div>
    </>
  );
}

export default Successfull;

const useStyles = makeStyles((theme) => ({
  mainherohead: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
    height: " 40px",
    width: "100%",
    backgroundColor: theme.palette.background.contact,

    "& .heading1": {
      paddingLeft: 30,
      color: theme.palette.secondary.main,

      fontSize: 20,
      fontWeight: 700,
    },
  },

  icon: {
    color: theme.palette.secondary.main,
    fontSize: "30px  !important",
  },

  sectionSecond: {
    padding: "0px 30px 0px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& .heading2": {
      paddingLeft: 4,
      color: theme.palette.secondary.main,
      textTransform: "capitalize",
      fontSize: 18,
      fontWeight: 500,
    },
  },

  row: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    padding: "60px 30px",
  },
}));
