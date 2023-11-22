import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Banner from "../../components/banner";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import React, { useEffect } from "react";
import ProductCard from "../../components/cards/productCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllproducts } from "../../redux/products/products.action";
const ShopPage = () => {
  const classes = useStyles();
  const disptach = useDispatch();

  const {
    getproducts: { allproducts },
  } = useSelector((state) => state.Products);

  useEffect(() => {
    disptach(getAllproducts());
  }, [disptach]);
  console.log(allproducts,"allproducts");

  return (
    <Box pb={8} className={classes.root}>
      <Banner Heading="Shop">
        <Typography className="heading2"> Home</Typography>
        <HorizontalRuleOutlinedIcon className={classes.icon} />
        <Typography className="heading2">Shop</Typography>
      </Banner>

      <Box className={classes.sectionMap}>
        {allproducts?.map(({ imageUrl, productName, price, _id }) => {
          console.log(imageUrl, productName, price, _id,"allproduct");
          return (
            <ProductCard
              key={_id}
              imageUrl={imageUrl}
              productName={productName}
              price={price}
              _id={_id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ShopPage;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
    },
  },
  sectionMap: {
    paddingTop: 90,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",

    columnGap: "20px",
    rowGap: "100px",
    placeItems: "center",
    [theme.breakpoints.down("xs")]: {
      placeItems: "flex-end",

      rowGap: "80px",
    },

    [theme.breakpoints.down("xs")]: {
      placeItems: "flex-end",

      rowGap: "80px",
    },
  },
}));
