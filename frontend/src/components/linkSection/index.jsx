import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../header/styles";

const LinksSec = ({ showIcon }) => {
  const classes = useStyles();
  return (
    <div className={classes.linksCont}>
      <Link to="/Shop" className={classes.headerLinks}>
        {showIcon} Shop
      </Link>
      <Link to="/men" className={classes.headerLinks}>
        {showIcon} Men
      </Link>
      <Link to="/women" className={classes.headerLinks}>
        {showIcon} Women
      </Link>

      <Link to="/aboutus" className={classes.headerLinks}>
        {showIcon} About
      </Link>

      <Link to="/contact" className={classes.headerLinks}>
        {showIcon} Contact
      </Link>
    </div>
  );
};

export default LinksSec;
