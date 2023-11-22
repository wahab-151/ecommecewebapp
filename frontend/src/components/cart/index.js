import { Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CartProduct from "../cartProduct";
import Button from "../units/Button";
import Data from "../cartProduct/data";
import { useDispatch, useSelector } from "react-redux";
import LoginPrompt from "../loginPrompt";
import { deleteCartItem, getCartItems } from "../../redux/cart/cart.action";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userId = "6551e4db6a9852d3478b450f";
  const [openLoginPrompt, setOpenLoginPrompt] = useState(false);
  const { cartItems } = useSelector((state) => state.Cart.cartData);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleProceedToCheckout = () => {
    if (!isAuthenticated) {
      setOpenLoginPrompt(true);
    } else {
      //PROCEED TO CHECKOUT IF USER IS LOGGED IN
    }
  };
  const handleClose = () => setOpenLoginPrompt(false);

  useEffect(() => {
    dispatch(getCartItems(userId));
  }, [dispatch]);

  const makePayment = async () => {
    try {
      console.log("cartitems :", cartItems);
      const response = await axios.post(
        "http://localhost:8000/api/payment/checkout",
        {
          products: cartItems,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("session_id :", response);
      const stripe = await loadStripe(
        "pk_test_51OCcV4DCIlpTyggdmLkFZDjKpzh5VSVTbLn4TpyGqQxpK6bUDXQjH8griQ0O5K11PLsbrIT2FgUa264QZzQMIjSa00XNpTC6N5"
      );
      console.log("stripe :", stripe);
      const session = response.data;

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };
  let totalAmount = 0;

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.leftContainer}>
        <Typography
          variant="h5"
          className="heading1"
          sx={{ paddingBottom: "1em" }}
        >
          Your Cart
        </Typography>
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: " 2fr 1fr 1fr",

            padding: 2,
          }}
        >
          <Typography
            sx={{
              paddingBottom: "1em",
              color: (theme) => theme.palette.secondary.main,
            }}
          >
            Product Detail
          </Typography>
          <Typography
            sx={{
              paddingBottom: "1em",
              color: (theme) => theme.palette.secondary.main,
              textAlign: "center",
            }}
          >
            Price
          </Typography>
          <Typography
            sx={{
              paddingBottom: "1em",
              color: (theme) => theme.palette.secondary.main,
              textAlign: "start",
            }}
          >
            Quantity
          </Typography>
        </Box>

        <Divider />
        {cartItems?.map((item) => {
          {
            const subtotal = item?.productId?.price * item?.quantity;
            totalAmount += subtotal;
            return (
              <>
                <Box sx={{ padding: "1em 0em 0.5em 0" }}>
                  <CartProduct
                    image={item?.productId?.imageUrl}
                    p_name={item?.productId?.productName}
                    price={item?.productId?.price}
                    quantity={item?.quantity}
                    productId={item?._id}
                    handleOndeleteItem={() => {
                      dispatch(
                        deleteCartItem({
                          userId,
                          productId: item?._id,
                          dispatch,
                        })
                      );
                    }}
                  />
                </Box>
                <Divider />
              </>
            );
          }
        })}

        {/* <Box sx={{ padding: "1.5em 0" }}>
          <Button variant="contained" sx={{ fontWeight: "bold" }}>
            Update Cart
          </Button>
        </Box> */}
      </Box>
      <Box className={classes.rightContainer}>
        <Typography
          variant="h5"
          className="heading1"
          sx={{ paddingBottom: "1em" }}
        >
          Cart Totals
        </Typography>
        <Divider />
        <Box
          sx={{
            padding: "0.8em 0em",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" className="heading2">
            Total
          </Typography>
          <Typography variant="h6" className="heading2">
            {totalAmount}
          </Typography>
        </Box>

        <Divider />
        <Box
          sx={{
            padding: "0.8em 0em",
            display: "flex",
            justifyContent: "space-between",
          }}
        ></Box>

        <Box sx={{ padding: "2em 0em", textAlign: "center" }}>
          <Button variant="outlined" fullWidth onClick={makePayment}>
            Proceed To Checkout
          </Button>
        </Box>
      </Box>
      <LoginPrompt open={openLoginPrompt} handleClose={handleClose} />
    </Box>
  );
};

export default Cart;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.primary.main,
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
    },
    columnGap: "3em",
    padding: "4em 2em 2em 2em",
    "& .heading1": {
      color: theme.palette.secondary.main,
      textTransform: "uppercase",
      fontWeight: 600,
    },
    "& .heading2": {
      textTransform: "uppercase",
      color: theme.palette.secondary.main,
    },
  },
}));
