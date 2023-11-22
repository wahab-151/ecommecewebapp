import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Copyright from "../copyright";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useSelector } from "react-redux";
import Logowhite, { LogoBlack } from "../../assets/logo";

const Footer = () => {
  const { lightTheme } = useSelector((state) => state.themeSlice);
  const classes = useStyles({ lightTheme });
  return (
    <>
      <Box className={classes.container}>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={5}>
            <div>{lightTheme ? <LogoBlack /> : <Logowhite />}</div>
            <Box sx={{ padding: "1em 2em 1em 0" }}>
              <Typography
                variant="body1"
                sx={{ color: (theme) => theme.palette.info.main }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                assumenda quibusdam aspernatur ex eligendi
              </Typography>
            </Box>

            <Typography
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              Know Items <ArrowRightAltIcon />
            </Typography>
          </Grid>

          {/* Company Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              Company
            </Typography>
            <List>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">About Us</Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">Careers</Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">Store Locations</Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">Our Blog</Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">Reviews</Link>
              </ListItem>
            </List>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              Useful Links
            </Typography>
            <List>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">shop</Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">men</Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">women </Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">Home</Link>
              </ListItem>
            </List>
          </Grid>

          {/* Information Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              Information
            </Typography>
            <List>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link>Start a Return</Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">Contact Us</Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="/faqs">Shipping FAQ</Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">Terms & Conditions</Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0.5em 0",
                  a: {
                    textDecoration: "none",
                    color: (theme) => theme.palette.info.main,
                  },
                }}
              >
                <Link to="#">Privacy Policy</Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
      <Copyright />
    </>
  );
};

export default Footer;

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
    messageBadge: {
      "& svg": {
        color: (props) => (props.lightTheme ? "black" : "white"),
      },
    },
  })
);
