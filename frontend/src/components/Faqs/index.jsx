import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";

const FAQsdAccordions = ({ Question, para, expand }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.accordion}
        defaultExpanded={expand}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className={classes.secondaryHeading}
          expandIcon={
            expanded ? (
              <RemoveIcon className={classes.icons} />
            ) : (
              <AddIcon className={classes.icons} />
            )
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {Question}
        </AccordionSummary>

        <AccordionDetails className={classes.anstext}>{para}</AccordionDetails>
      </Accordion>
      <div className={classes.divder}>
        <Divider />
      </div>
    </div>
  );
};

export default FAQsdAccordions;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main + "!important",
    width: "100%",
  },
  accordion: {
    backgroundColor: theme.palette.primary.main + "!important",
    boxShadow: "none !important",
  },

  secondaryHeading: {
    color: theme.palette.secondary.main + "!important",
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.main + "!important",
    textTransform: "capitalize",

    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },

  summary: {
    "& .MuiSvgIcon-root": {},
  },
  anstext: {
    padding: "10px 0px",

    color: theme.palette.secondary.main + "!important",
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: theme.palette.primary.main + "!important",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  icons: {
    border: "1px solid" + theme.palette.secondary.main + "!important",
    fontSize: 12,
    padding: 0,
    color: theme.palette.secondary.main + "!important",
  },

  divder: {
    margin: "0px 15px",
    backgroundColor: theme.palette.secondary.main + "!important",
  },
}));
