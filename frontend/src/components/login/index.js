import React from "react";
import {
  Box,
  CircularProgress,
  FormHelperText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckBox from "../checkBox";
import TextField from "../input";
import Button from "../units/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/auth.actions";

export default function LoginSection() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isAuthenticationLoading,
    isAuthenticated,
    isAuthenticationFailed,
    isLoginCalled,
  } = useSelector((state) => state.auth);
  const { handleBlur, handleChange, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: object().shape({
        email: string()
          .email("Enter a valid email")
          .required("Email is required"),
        password: string().required("Password is required"),
      }),
      onSubmit: async (values) => {
        dispatch(login(values));
      },
    }
  );
  return (
    <Box mb={10} className={classes.mainContainer}>
      <Box pt={6} pb={3}>
        <Typography variant="h2" className={classes.typo}>
          Login
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box pt={2} pb={2} className={classes.boxInput}>
          <span className={classes.spanText}>Email*</span>
          <TextField
            className={classes.textField}
            variant="outlined"
            placeholder="Username"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && (
            <FormHelperText error>{errors.email}</FormHelperText>
          )}
        </Box>
        <Box pt={2} pb={4} className={classes.boxInput}>
          <span className={classes.spanText}>Password*</span>
          <TextField
            className={classes.textField}
            variant="outlined"
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && (
            <FormHelperText error>{errors.password}</FormHelperText>
          )}
        </Box>
        <Box className={classes.boxCheck}>
          <CheckBox />
          <span className={classes.spanText}>Remember me</span>
        </Box>
        <Box
          pt={2}
          pb={4}
          style={{ display: "flex", gap: 20, alignItems: "center" }}
        >
          <Button
            className={classes.btn}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Log In
          </Button>
          <span className={classes.spanText}>Lost your password?</span>
        </Box>
      </form>
      {isAuthenticationLoading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            display: "grid",
            placeContent: "center",
            background: (theme) => theme.palette.secondary.main,
            opacity: 0.4,
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      )}
      {isAuthenticated && <Navigate to="/home" replace />}
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    margin: "40px 0px",
    padding: " 10px 60px",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.loginsection,
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("sm")]: {
      padding: " 10px 10px",
    },
  },
  typo: {
    textTransform: "capitalize",
    color: theme.palette.secondary.main,
  },

  btn: {
    width: 150,
  },
  spanText: {
    color: theme.palette.info.headerLinks,
  },
  textField: {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
  },

  boxInput: {
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
    [theme.breakpoints.down("sm")]: {
      width: "98%",
      rowGap: 20,
      margin: "auto",
    },
  },
}));
