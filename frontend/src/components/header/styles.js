import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  headerUpper: {
    display: "grid",
    backgroundColor: theme.palette.primary.light,
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyItems: "space-between",
    padding: "5px 1px",
    alignItems: "center",
    // [theme.breakpoints.down("sm")]: {
    //   gridTemplateColumns: "1fr 1fr",
    //   gridTemplateRows: "1fr 1fr",
    //   gridTemplateAreas: `
    //   "no1 no2"
    //   "text text"
    // `,
    // },
  },
  icons: {
    [theme.breakpoints.down("sm")]: {
      // gridArea: "no1",
      display: "flex",
      flexDirection: "column",
    },
  },
  headerUpperText: {
    color: "white",
    width: "100%",
    // [theme.breakpoints.down("sm")]: {
    //   gridArea: "text",
    // },
  },
  mobileText: {
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "20px",
    },
  },
  primaryHeaderIcon: {
    color: "white",
    height: "300px",
    width: "200px",
    margin: "0px 10px",
  },
  toggleBtn: {
    backgroundColor: theme.palette.info.backColor,
    borderRadius: "30px",
    display: "flex",

    columnGap: "5px",
    padding: "8px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    minWidth: "50px",
    maxWidth: "50px",

    flexDirection: (props) => (props.lightTheme ? "row" : "row-reverse"),
  },
  circleToogle: {
    display: "flex",
    backgroundColor: "black",
    borderRadius: "50%",
    width: "15px",
    height: "15px",
  },
  lowerIcons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: "20px",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      columnGap: "15px",
    },
  },

  headerLower: {
    backgroundColor: theme.palette.primary.main,
    padding: "20px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLinks: {
    textDecoration: "none",
    color: theme.palette.info.headerLinks,
    fontFamily: "Urbanist",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "19px",
    letterSpacing: "0.04em",
    alignItems: "center",
    display: "flex",
  },
  linksCont: {
    display: "flex",
    justifyContent: "space-between",
    width: "30vw",
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
      flexDirection: "column",
    },
  },
  linksForDesk: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  messageBadge: {
    "& 	.MuiBadge-root": {
      color: (props) => (props.lightTheme ? "black" : "white"),
      "& svg": {
        color: (props) => (props.lightTheme ? "black" : "white"),
      },
    },
  },

  upperLastSec: {
    display: "grid",
    gridTemplateColumns: "max-content max-content max-content ",
    columnGap: "10px",

    width: "max-content",
    [theme.breakpoints.down("sm")]: {
      // gridArea: "no2",
      gridTemplateColumns: "1fr ",
    },
  },
}));
export default useStyles;
