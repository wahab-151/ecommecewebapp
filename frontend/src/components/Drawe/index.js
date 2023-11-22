import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import FileOpenIcon from "@mui/icons-material/FileOpen";
export default function TemporaryDrawer({ LinkSec, NotiSec }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.mobileLinks}>
        <p className={classes.pagesText}>GO TO</p>
        <LinkSec showIcon={<FileOpenIcon sx={{ marginRight: "5px" }} />} />
      </List>
      <Divider color="white" />
    </Box>
  );

  const anchor = "right";
  return (
    <div className={classes.drawerMain}>
      <MenuIcon
        onClick={toggleDrawer(anchor, true)}
        className={classes.hamBurgerColor}
      >
        {anchor}
      </MenuIcon>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "black",
          },
        }}
        classes={{
          paper: classes.drawer,
        }}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  mobileLinks: {
    "& div": {
      "& a": {
        color: "white",
        marginTop: "10px",
      },
    },
  },
  drawerMain: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  drawer: {
    display: "none",
  },

  hamBurgerColor: {
    color: theme.palette.secondary.main,
  },

  pagesText: {
    color: "white",
    fontFamily: "Urbanist",
    fontSize: "20px",
    fontWeight: "1000",

    letterSpacing: "0.04em",
    textAlign: "Center",
  },
}));
