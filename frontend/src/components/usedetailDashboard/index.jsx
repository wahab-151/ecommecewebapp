import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Button from "../units/Button";
import image from "../../assets/profile.png";
export default function UserDetailDashboard() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Box className={classes.innerHead}>
        <img className="image" src={image} alt="imgprofile" />
        <div>
          <Button variant="outlined"> Edit Profile</Button>
        </div>
      </Box>

      <Box>
        <div className={classes.inner2}>
          <Box className="dataSec">
            {" "}
            <Typography className="typoo1">Full name</Typography>
            <Typography className="typoo2"> rj gohar</Typography>
          </Box>
          <Box className="dataSec">
            {" "}
            <Typography className="typoo1"> mobile number</Typography>
            <Typography className="typoo2">+92.......</Typography>
          </Box>
          <Box className="dataSec">
            {" "}
            <Typography className="typoo1">email id</Typography>
            <Typography className="typoo2"> rj_gohar@gmail.com</Typography>
          </Box>
          <Box className="dataSec">
            {" "}
            <Typography className="typoo1">gender</Typography>
            <Typography className="typoo2"> male</Typography>
          </Box>
          <Box className="dataSec">
            {" "}
            <Typography className="typoo1"> date of birth</Typography>
            <Typography className="typoo2"> 10-10-11</Typography>
          </Box>
          <Box className="dataSec">
            {" "}
            <Typography className="typoo1">loction</Typography>
            <Typography className="typoo2"> hunza pakistan</Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    border: "1px solid " + theme.palette.info.main,
    width: "90%",
    margin: "0 auto",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    columnGap: 10,
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  innerHead: {
    display: "flex",
    justifyContent: "space-between",

    " & .image": { width: 90, height: 90 },
  },

  inner2: {
    padding: " 40px 0px",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,

    "& .dataSec": {
      display: "flex",
      flexDirection: "column",
      gap: 5,

      "& .typoo1": {
        color: theme.palette.info.main,
        fontSize: 16,
        fontWeight: 600,
        textTransform: "uppercase",
      },
      "& .typoo2": {
        color: theme.palette.secondary.main,
        fontSize: 16,
        fontWeight: 600,
        textTransform: "capitalize",
      },
    },
  },
}));
