import { makeStyles } from "@mui/styles";
import React from "react";
import profile from "../../assets/profile.png";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import Card from ".";
import { Box, Typography } from "@mui/material";
import Button from "../units/Button";
export default function UserDashboardCard() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.headSec}>
        <Box className={classes.profile}>
          <img className="imageProfile" src={profile} alt="profile" />
          <div className="dataSection">
            <Typography className="name">Jane Cooper</Typography>
            <Typography className="email">Janecooper@gmail.com</Typography>
          </div>
        </Box>
        <div>
          <Button variant="outlined"> Edit Profile</Button>
        </div>
      </Box>
      <div className={classes.maiContainer}>
        {Data.map(({ icon, title, description, i }) => {
          return (
            <Card key={i} icon={icon} title={title} description={description} />
          );
        })}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    width: "90%",
    margin: "auto",

    display: "flex",
    flexDirection: "column",
    rowGap: 40,
  },

  headSec: {
    display: "flex",

    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {
      paddingTop: 30,
    },
  },

  profile: {
    display: "flex",
    columnGap: 10,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },

    " & .imageProfile": {
      width: 100,
      height: 100,
    },

    " & .dataSection": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      rowGap: 1,
      "& .name": {
        color: theme.palette.secondary.main,

        fontSize: 16,
        fontWeight: 600,
      },
      "& .email": {
        fontSize: 16,
        fontWeight: 500,
        color: theme.palette.info.main,
      },
    },
  },
  maiContainer: {
    display: "flex",
    columnGap: "40px",
    flexWrap: "wrap",
    rowGap: 30,
    [theme.breakpoints.down("md")]: {
      paddingTop: 30,
      justifyContent: "center",
    },
  },
}));

const Data = [
  {
    icon: <ListAltIcon style={{ fontSize: 60 }} />,
    title: "Orders",
    description: "Check your order status",
  },
  {
    icon: <HouseOutlinedIcon style={{ fontSize: 60 }} />,
    title: "ADDRESSES",
    description: "Check your order status",
  },

  {
    icon: <AccountCircleOutlinedIcon style={{ fontSize: 60 }} />,
    title: "ACOUNT DETAILS",
    description: "Check your order status",
  },

  {
    icon: <StarOutlineOutlinedIcon style={{ fontSize: 60 }} />,
    title: "WISHLIST",
    description: "Check your order status",
  },
];
