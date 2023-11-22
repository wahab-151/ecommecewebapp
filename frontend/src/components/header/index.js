//lightTheme varaible will save selected theme and give colors accordinly
//dispatch is used to dispatch action for selection of dark or light theme

import useStyles from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import imagemoon from "../../assets/imagemoon.png";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "../../redux/theme/theme.slicer";
import imageSun from "../../assets/imageSun.png";
import { Link } from "react-router-dom";

import { Box } from "@mui/system";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

import TemporaryDrawer from "../Drawe";
import Logowhite, { LogoBlack } from "../../assets/logo";
import { logout } from "../../redux/auth/auth.slicer";
import LinksSec from "../linkSection";

const Header = () => {
  const dispatch = useDispatch();
  const { lightTheme } = useSelector((state) => state.themeSlice);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const classes = useStyles({ lightTheme });

  const handleToogleTheme = () => {
    dispatch(toogleTheme(!lightTheme));
  };

  return (
    <div className={classes.headerdiv}>
      <div className={classes.headerUpper}>
        <div className={classes.icons}>
          <FacebookIcon className={classes.primaryHeaderIcon} />
          <InstagramIcon className={classes.primaryHeaderIcon} />
          <YouTubeIcon className={classes.primaryHeaderIcon} />
        </div>

        <Typography className={classes.headerUpperText} align="center">
          Free shipping on all U.S. orders Rs1000
        </Typography>

        <Box className={classes.upperLastSec} ml="auto">
          <div className={classes.toggleBtn} onClick={handleToogleTheme}>
            <div className={classes.circleToogle}></div>
            <img src={lightTheme ? imagemoon : imageSun} alt="iconTheme" />
          </div>
        </Box>
      </div>
      <div className={classes.headerLower}>
        <Link to="/home">
          {" "}
          <div>{lightTheme ? <LogoBlack /> : <Logowhite />}</div>
        </Link>
        <div className={classes.linksForDesk}>
          <LinksSec />
        </div>

        {isAuthenticated ? (
          <Box>
            <NotificationsSec />
          </Box>
        ) : (
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Typography
              component={Link}
              sx={{
                color: "secondary.main",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
              variant="h6"
              to="/login"
            >
              Login
            </Typography>
            <Typography
              component={Link}
              sx={{
                color: "secondary.main",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
              variant="h6"
              to="/"
            >
              {" "}
              Sign Up
            </Typography>
          </Box>
        )}
        <TemporaryDrawer LinkSec={LinksSec} />
      </div>
    </div>
  );
};

export default Header;

const NotificationsSec = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleClose();
    dispatch(logout());
  };
  return (
    <Box className={classes.lowerIcons}>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Person2OutlinedIcon className={classes.headerLinks} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "primary.main",
            border: (theme) => "1px solid" + theme.palette.secondary.main,
          },
        }}
      >
        <MenuItem onClick={handleLogout} sx={{ color: "secondary.main" }}>
          Logout
        </MenuItem>
      </Menu>{" "}
    </Box>
  );
};
