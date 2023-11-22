import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import ProductCard from "../cards/productCard";
import {
  getProductByCategory,
  getmenproducts,
} from "../../redux/products/products.action";
import { useDispatch, useSelector } from "react-redux";
/**
 * @dev custom  component  designed upon Material UI's with makestyles   It conatin all  categories
 

 */

export default function MenCategory({ name }) {
  const disptach = useDispatch();

  const {
    categoryProducts: { Product },
  } = useSelector((state) => state.Products);

  useEffect(() => {
    disptach(getProductByCategory("Men"));
  }, [disptach]);
  const classes = useStyles();

  return (
    <div className={classes.categorymain}>
      <div className={classes.mainGrid}>
        <Box className={classes.headingContainer}>
          <Typography className="heading1"> Men CATEgORy</Typography>
          <Typography className="heading2">
            Complete your wardrobe today
          </Typography>
        </Box>

        <Box className={classes.sectionMap}>
          {Product?.map(({ ...item }) => {
            return (
              <>
                <ProductCard {...item} />
              </>
            );
          })}
        </Box>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  categorymain: {
    paddingTop: 30,
    backgroundColor: theme.palette.primary.main,
  },
  mainGrid: {
    padding: "20px 50px",
  },
  headingContainer: {
    color: theme.palette.secondary.main,
    padding: "20px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& .heading1": {
      textTransform: "uppercase",
      fontFamily: "Urbanist",
      fontWeight: 700,
      fontSize: 36,
      [theme.breakpoints.down("sm")]: {
        fontSize: 28,
      },
    },
    "& .heading2": {
      fontFamily: "Urbanist",
      fontWeight: 400,
      fontSize: 16,
    },
  },

  sectionMap: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
    columnGap: "20px",
    rowGap: "100px",
    placeItems: "center",
    [theme.breakpoints.down("xs")]: {
      placeItems: "flex-end",
      rowGap: "60px",
    },

    [theme.breakpoints.down("xs")]: {
      placeItems: "flex-end",
      rowGap: "40px",
    },
  },
}));
