//selctedImage is used to get the selected to be shown for product details

import { Box, ButtonGroup, Input, Typography } from "@mui/material";
import Banner from "../../components/banner";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import { useStyles } from "./styles";
import React, { useEffect, useState } from "react";
import Button from "../../components/units/Button";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/products/products.action";
import { addProductToCart, getCartItems } from "../../redux/cart/cart.action";

const ProductDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { productId } = useParams();
  useEffect(() => {
    dispatch(getProductDetail(productId));
  }, [dispatch]);
  const { productdetail } = useSelector((state) => state.Products);
  const [quantity,setQuantity]=useState(1)
const userId='6551e4db6a9852d3478b450f'
  const onHandleAddToCart =async () => {
     await dispatch(addProductToCart({userId:userId,quantity:quantity,productId:productId}));
     dispatch(getCartItems(userId));
  };
  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={classes.ProductMainCont}>
      <Banner Heading="HueTrap Tshirts">
        <Typography className="heading2"> Home</Typography>
        <HorizontalRuleOutlinedIcon className={classes.icon} />
        <Typography className="heading2"> Shop</Typography>
        <HorizontalRuleOutlinedIcon className={classes.icon} />
      </Banner>
      <Box sx={{ padding: "0px 80px" }}>
        <div className={classes.proDetailsMiddleCont}>
          <Box className={classes.imageBox}>
            <img
              src={productdetail?.imageUrl}
              className={classes.mainImage}
              alt="main"
            />
          </Box>

          <div className={classes.rightBox}>
            <div>
              <p className={classes.headingRight}>
                {productdetail?.productName}
              </p>
              <p className={classes.subText}>
                {productdetail?.productDescription}
              </p>
            </div>
            <Box>
              <p
                className={classes.pricePrim}
              >{`RS ${productdetail?.price}`}</p>
            </Box>
            <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
          onClick={handleQuantityIncrement}
            sx={{
              borderLeft: 1,
              borderColor: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.secondary.main,
            }}
          >
            +
          </Button>
          <Input
            sx={{
              border: 1,
              borderColor: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.secondary.main,
              textAlign: "center",
            }}
            placeholder="2"
            value={quantity}
          />
          <Button
          onClick={handleQuantityDecrement}
            sx={{
              borderLeft: 1,
              borderColor: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.secondary.main,
            }}
          >
            _
          </Button>
        </ButtonGroup>
      </Box>
            <div className={classes.actionbTns}>
              <Link to="/cart">
                <Button
                  variant="outlined"
                  sx={{ width: "150px", height: 80, padding: "10px 0px" }}
                  onClick={onHandleAddToCart}
                >
                  ADD TO BAG
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default ProductDetail;
