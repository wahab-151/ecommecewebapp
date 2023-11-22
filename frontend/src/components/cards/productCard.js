import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";
import { Link } from "react-router-dom";
/**
 * @dev custom  product card designed upon Material UI's   It accepts all props  related to card data
 * @props card can be all props image  product Name  and both prices (sale and default ).
 */
export default function ProductCard({ imageUrl, productName, price,_id }) {
  const classes = useStyles();
  // const navigate = useNavigate();
  // const handleGoToProduct = () => {
  //   navigate(`/product-detail/${product_id}`);
  // };
  console.log(imageUrl, productName, price,_id ,"iddddddd");
  return (
    <div className={classes.mainContainer}>
      <Link style={{ textDecoration: "none" }} to={`/product-detail/${_id}`}>
        <Box>
          <img src={imageUrl} className={classes.image} alt=" productphoto" />
        </Box>
        <Box className={classes.textName}>
          <Typography>{productName}</Typography>
        </Box>
        <Box className={classes.PriceName}>
          <Typography className="price"> Rs {price}</Typography>
        </Box>
      </Link>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: "relative",

    display: "flex",
    flexDirection: "column",

    "&:hover": {
      cursor: "pointer",
    },
  },

  image: {
    width: 250,
    height: 350,
  },
  textName: {
    padding: "5px 0px",
    color: theme.palette.secondary.main,
    textAlign: "center",
  },

  PriceName: {
    fontSize: 12,
    display: "flex",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    "& .price": {
      color: theme.palette.secondary.main,
      fontSize: 14,
    },

    "& .saleprice": {
      fontSize: 14,
      color: "#FF5C4C",
    },
  },

  hotbar: {
    width: 55,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#FF6F61",
    position: "absolute",
    top: 25,
    left: 0,
  },
  salebar: {
    textAlign: "center",
    width: 55,
    color: "#fff",
    backgroundColor: "#000",
    position: "absolute",
    top: 25,
    left: 0,
  },
}));
