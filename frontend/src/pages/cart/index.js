import { HorizontalRuleOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Banner from "../../components/banner";
import Cart from "../../components/cart";

const CartMain = () => {
  const classes = useStyles();
  return (
    <>
      <Banner Heading="Cart">
        <Typography className="heading2"> Home</Typography>
        <HorizontalRuleOutlined className={classes.icon} />
        <Typography className="heading2"> Cart</Typography>
      </Banner>
      <Cart />
    </>
  );
};

export default CartMain;

const useStyles = makeStyles((theme) => ({}));
