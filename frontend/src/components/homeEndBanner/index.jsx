import React from "react";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AssignmentReturnedOutlinedIcon from "@mui/icons-material/AssignmentReturnedOutlined";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

export default function HomeEndBanner() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box className={classes.innerSection}>
        <ShoppingCartOutlinedIcon className="icon" />
        <Typography className="typoo1">Free Shopping</Typography>
        <Typography className="typoo2">
          {" "}
          Free Shopping for orders over $130
        </Typography>
      </Box>
      <Box className={classes.innerSection}>
        <AssignmentReturnedOutlinedIcon className="icon" />
        <Typography className="typoo1">Returns</Typography>
        <Typography className="typoo2">
          {" "}
          Within 30 days for an Exchange
        </Typography>
      </Box>
      <Box className={classes.innerSection}>
        <ForumOutlinedIcon className="icon" />
        <Typography className="typoo1">Online Support </Typography>
        <Typography className="typoo2">
          {" "}
          24 hours a day, 7 days a week
        </Typography>
      </Box>
      <Box className={classes.innerSection}>
        <CreditCardOutlinedIcon className="icon" />
        <Typography className="typoo1">Flexinble Payment</Typography>
        <Typography className="typoo2">
          {" "}
          Pay with Multiple Credit Cards
        </Typography>
      </Box>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "30px 0px",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      rowGap: 30,
      display: "grid",
      textAlign: "center",
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns: "1fr",
    },
  },

  innerSection: {
    display: "flex",
    flexDirection: "column",
    gap: 20,

    "& .icon": {
      width: "99%",
      margin: "auto",
      fontSize: "5rem",
      color: theme.palette.secondary.main,
    },

    "& .typoo1": {
      fontSize: 16,
      textAlign: "center",
      fontWeight: "bold",
      color: theme.palette.secondary.main,
    },
    "& .typoo2": {
      fontSize: 14,

      color: theme.palette.info.main,
    },
  },
}));
