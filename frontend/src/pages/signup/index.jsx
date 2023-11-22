import { useFormik } from "formik";
import * as Yup from "yup";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import TextField from "../../components/input";
import Button from "../../components/units/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  otp: Yup.string().required("OTP is required"),
});

export default function SignUpPage() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  const sendOtpToServer = async (email, path) => {
    const url = "http://localhost:8000/api/auth/send-otp"; // Replace with your actual server URL

    try {
      const response = await axios.post(url, { email, path });
      const responseData = response.data;
      console.log(responseData);
    } catch (error) {
      console.error("Error sending OTP to server:", error.message);
    }
  };

  const registerUser = async (username, email, password, otp) => {
    const url = "http://localhost:8000/api/auth/register"; // Replace with your actual server URL

    try {
      const userData = {
        username: username,
        email: email,
        password: password,
        otp: otp, // Replace with the actual OTP
      };

      const response = await axios.post(url, userData);
      const responseData = response.data;
      console.log(responseData);
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Box mb={10} className={classes.mainContainer}>
        <Box pt={6} pb={3}>
          <Typography variant="h2" className={classes.typo}>
            Sign Up
          </Typography>
        </Box>
        <Box pt={1} pb={1} className={classes.boxInput}>
          <span className={classes.spanText}>Username*</span>
          <TextField
            className={classes.textField}
            variant="outlined"
            placeholder="Username"
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && formik.errors.username}
            helperText={formik.touched.username && formik.errors.username}
          />
        </Box>
        <Box pt={1} pb={2} className={classes.boxInput}>
          <span className={classes.spanText}>Password*</span>
          <TextField
            className={classes.textField}
            placeholder="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Box>

        <Box pt={1} pb={2} className={classes.boxInput}>
          <span className={classes.spanText}>Email*</span>
          <TextField
            className={classes.textField}
            variant="outlined"
            placeholder="Email Address"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>
        <Box pt={1} pb={2} className={classes.boxInput}>
          <span className={classes.spanText}>OTP</span>
          <TextField
            className={classes.textField}
            variant="outlined"
            placeholder="OTP"
            type="text"
            name="otp"
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otp && formik.errors.otp}
            helperText={formik.touched.otp && formik.errors.otp}
          />

          {console.log(!formik.errors.email && formik.touched.email)}

          <Button
            className={classes.textField}
            color="primary"
            disabled={!formik.dirty && formik.touched.email}
            variant="outlined"
            onClick={() => sendOtpToServer(formik.values.email, "signup")}
          >
            Send OTP
          </Button>
        </Box>
        <Box
          pt={2}
          pb={4}
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/login">
            <Button
              className={classes.btn}
              variant="outlined"
              color="primary"
              type="submit"
              disabled={
                !formik.values.username ||
                !formik.values.email ||
                !formik.values.password ||
                !formik.values.otp
              }
              onClick={() => {
                registerUser(
                  formik.values.username,
                  formik.values.email,
                  formik.values.password,
                  formik.values.otp
                );
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.login,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    margin: "40px 0px",
    padding: " 10px 60px",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.loginsection,
    display: "flex",
    flexDirection: "column",
    position: "relative",
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
