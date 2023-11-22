import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const FilterSection = ({ children, heading }) => {
  const classes = useStyles();
  return (
    <Box py={3}>
      <Box pb={2}>
        <Typography variant="h6" color="secondary" className={classes.heading}>
          {heading}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default FilterSection;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 35,
    borderRight: "1px solid #C6D0D4",
  },
  link: {
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  heading: {
    textTransform: "uppercase",
    fontWeight: 700 + "! important",
  },
}));
