import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  ProductMainCont: {
    padding: "90px 0px",
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: "50px",
    backgroundColor: theme.palette.primary.main,
    overflow: "hidden",
  },

  proDetailsMiddleCont: {
    display: "grid",
    justifyContent: "center",

    gridTemplateColumns: "max-content 5fr 5fr",
    columnGap: "90px",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      rowGap: "20px",
    },
  },
  imageBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
    },
  },
  mainImage: {
    minHeight: "40vh",
    minWidth: "100%",
    maxHeight: "80vh",
    maxWidth: "100%",
    display: "block",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
    },
  },
  headingRight: {
    fontFamily: "Urbanist",
    fontSize: "32px",
    fontWeight: 700,
    margin: "0px",

    padding: "20px 0px",
    color: theme.palette.secondary.main,
  },
  subText: {
    fontFamily: "Urbanist",
    fontSize: "18px",
    fontWeight: 400,
    margin: "0px",
    textAlign: "left",
    letterSpacing: " 0.04em",
    color: theme.palette.btn.border,
  },
  rightBox: {
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: "6px",
  },
  pricePrim: {
    fontFamily: "Urbanist",
    fontSize: "32px",
    fontWeight: 700,
    margin: "0px",

    letterSpacing: " 0.04em",
    color: theme.palette.secondary.main,
  },
  priceSec: {
    fontFamily: "Urbanist",
    fontSize: "32px",
    fontWeight: 700,
    margin: "0px",

    letterSpacing: " 0.04em",
    color: theme.palette.btn.border,
    display: "inline-block",
    verticalAlign: "middle",
    marginLeft: "20px",
  },
  subHeading: {
    fontFamily: "Urbanist",
    fontSize: "16px",
    fontWeight: 700,
    margin: "0px",

    letterSpacing: " 0.04em",
    color: theme.palette.secondary.main,
  },
  textSub: {
    fontFamily: "Urbanist",
    fontSize: "14px",
    fontWeight: 400,
    margin: "0px",

    letterSpacing: " 0.04em",
    color: theme.palette.secondary.main,
  },
}));
