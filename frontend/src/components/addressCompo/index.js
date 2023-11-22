import { makeStyles } from "@mui/styles";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Box } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ListAltIcon from "@mui/icons-material/ListAlt";
const AddressCompo = ({ showSelected = true }) => {
  const classes = useStyles();
  return (
    <div className={classes.addresCont}>
      <Box display="flex" alignItems="center">
        <Box sx={{ minWidth: "30px" }}>
          {showSelected ? (
            <RadioButtonCheckedIcon className={classes.selectedIcon} />
          ) : (
            <>
              <Box className={classes.iconCOn}>
                <ListAltIcon className="icon" />
              </Box>
            </>
          )}
        </Box>

        <Box ml="40px">
          <Box display="flex" alignItems="center">
            <p className={classes.nameLabel}>Jane Cooper</p>
            <Box ml="10px" />
            <TypeButton name="Home" style />
          </Box>
          <p className={classes.addressText}>
            9032 Montgomery Blvd NE Albuquerque New York 87111 (505) 299-8387
            United States
          </p>
        </Box>
      </Box>
      <Box ml="auto" display="flex">
        <DeleteForeverIcon className={classes.selectedIcon} />
        <Box pl="30px" />
        <PostAddIcon className={classes.selectedIcon} />
      </Box>
    </div>
  );
};

export default AddressCompo;

const TypeButton = ({ name }) => {
  const classes = useStyles();
  return <div className={classes.addressBtn}>{name}</div>;
};

const useStyles = makeStyles((theme) => ({
  addresCont: {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
    justifyContent: "space-bewteen",
    backgroundColor: theme.palette.background.contact,
    padding: "10px 30px",
    boxShadow: "0px 3px 10px 5px rgba(0, 0, 0, 0.1)",
  },
  selectedIcon: {
    color: theme.palette.secondary.main,
    minWidth: "30px",
    minHeight: "30px",
  },

  nameLabel: {
    fontFamily: "Urbanist",
    fontSize: "28px",
    fontWeight: "500",
    margin: "0px",
    color: theme.palette.secondary.main,
  },

  addressBtn: {
    borderRadius: "20px",
    height: "max-content",
    padding: "7px 10px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  addressText: {
    fontFamily: "Urbanist",
    fontSize: "18px",
    fontWeight: "500",
    color: theme.palette.info.main,
  },
  iconCOn: {
    width: 50,
    height: 50,

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
}));
