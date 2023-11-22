import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";

import Button from "../units/Button";
const OrderCards = ({
  type,
  date,
  image,
  totalItems,
  outofitedItems,
  productDescription,
  productName,
  size,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Box className={classes.iconCOn}>
        <ListAltIcon className="icon" />
      </Box>
      <div className={classes.dataContainer}>
        <div className={classes.inner1}>
          <div className={classes.tpooo}>
            <Box>
              {(() => {
                switch (type) {
                  case "processing":
                    return (
                      <>
                        {" "}
                        <Box>
                          <Typography className={classes.PROCESSING}>
                            {" "}
                            PROCESSING
                          </Typography>
                        </Box>
                      </>
                    );
                  case "SHIPPED":
                    return (
                      <Box className={classes.SHIPPED}>
                        <Typography> SHIPPED</Typography>
                      </Box>
                    );
                  case "DELIVERED":
                    return (
                      <Box className={classes.DELIVERED}>
                        <Typography> DELIVERED</Typography>
                      </Box>
                    );
                  case "CANCELED":
                    return (
                      <Box className={classes.CANCELED}>
                        <Typography> CANCELED</Typography>
                      </Box>
                    );

                  default:
                    return <></>;
                }
              })()}
            </Box>
            <Box>
              {" "}
              <p className={classes.datetime}>On{date}</p>
            </Box>
          </div>
          <Box style={{ display: "flex", gap: 5 }}>
            <Typography className={classes.typo}>{totalItems} </Typography>
            <Typography className={classes.typo}> for </Typography>
            <Typography className={classes.typo}> {outofitedItems} </Typography>
            <Typography className={classes.typo}> item</Typography>
          </Box>
        </div>

        <Box className={classes.inner2}>
          <Box className={classes.productData}>
            <img className={classes.productImage} src={image} alt="proimg" />
            <Box className={classes.productDetails}>
              <Typography style={{ textTransform: "capitalize" }}>
                {productName}
              </Typography>
              <Typography>{productDescription}</Typography>
              <Typography style={{ textTransform: "uppercase" }}>
                {size}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Button className={classes.btnView} variant="outlined">
              View
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};
export default OrderCards;

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "10px 30px",
    gap: 0,
    width: "90%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "10% 90%",
    backgroundColor: theme.palette.background.contact,
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  iconCOn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 50,
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    " & .icon": {
      fontSize: 24,
      color: theme.palette.primary.main,
    },
  },

  dataContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
  inner1: {
    display: "flex",
    justifyContent: "space-between",
  },
  inner2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

  datetime: {
    color: theme.palette.secondary.main,
    fontSize: 14,
  },
  productImage: {
    width: 80,
    height: 100,
  },

  productData: {
    display: "flex",
    columnGap: 15,
  },
  productDetails: {
    color: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
  },

  PROCESSING: {
    fontSize: 26,
    fontWeight: 600,
    color: "#FF6007",
  },
  SHIPPED: {
    fontSize: 26,
    fontWeight: 600,
    color: theme.palette.secondary.main,
  },
  DELIVERED: {
    fontSize: 26,
    fontWeight: 600,
    color: "#00A35E",
  },
  CANCELED: {
    fontSize: 26,
    fontWeight: 600,
    color: "#C90000",
  },

  typo: {
    color: theme.palette.secondary.main,
  },
  tpooo: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      paddingLeft: 38,
    },
  },
  btnView: {
    [theme.breakpoints.down("md")]: {
      width: 150,
    },
  },
}));
