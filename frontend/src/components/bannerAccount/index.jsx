import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MyLogo from "../../assets/bannerlogo.png";

const BannerAccount = ({ Heading, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.mainherohead}>
      <Typography className="heading1">{Heading}</Typography>
      <div className={classes.sectionSecond}>{children}</div>
    </div>
  );
};

export default BannerAccount;

const useStyles = makeStyles((theme) => ({
  mainherohead: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
    height: "260px",
    backgroundImage: `url(${MyLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "88% center ",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
    backgroundColor: theme.palette.background.contact,
    textTransform: "uppercase",
    "& .heading1": {
      paddingLeft: 30,
      color: theme.palette.secondary.main,

      fontSize: 48,
      fontWeight: 500,
    },
  },
  sectionSecond: {
    padding: "0px 70px 0px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& .heading2": {
      paddingLeft: 4,
      color: theme.palette.secondary.main,
      textTransform: "capitalize",
      fontSize: 16,
      fontWeight: 500,
    },
  },

  icon: {
    color: theme.palette.secondary.main,
    fontSize: "30px  !important",
  },
}));
