import React, { useState } from "react";
import BannerAccount from "../../components/bannerAccount";
import {
  Box,
  ListItemIcon,
  MenuItem,
  MenuList,
  Select,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import UserDashboardCard from "../userDashboardCard/userdashboardcard";

import MapOrdersCard from "../ordersCard/mapOrderCard";
import UserDetailDashboard from "../usedetailDashboard";
import WishlistComponent from "../wishlist";
import AddressCompo from "../addressCompo";

const AccountLayout = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleMenuItemClick = (tabName) => {
    setActiveTab(tabName);
  };

  let content;
  if (activeTab === "dashboard") {
    content = <UserDashboardCard />;
  } else if (activeTab === "orders") {
    content = <MapOrdersCard />;
  } else if (activeTab === "addresses") {
    content = <AddressCompo showSelected={false} />;
  } else if (activeTab === "accountDetails") {
    content = <UserDetailDashboard />;
  } else if (activeTab === "wishlist") {
    content = <WishlistComponent />;
  }
  return (
    <>
      <BannerAccount Heading="My Account">
        <Box sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
          <LogoutIcon
            sx={{ color: (theme) => theme.palette.background.accountRed }}
          />
          <Typography
            sx={{ color: (theme) => theme.palette.background.accountRed }}
          >
            Logout
          </Typography>
        </Box>
      </BannerAccount>
      <Box className={classes.containerMain}>
        <Box className={classes.sideNavBar}>
          <MenuList sx={{ display: { xs: "none", md: "block" } }}>
            <MenuItem onClick={() => handleMenuItemClick("dashboard")}>
              <ListItemIcon>
                <GridViewRoundedIcon
                  sx={{ color: (theme) => theme.palette.secondary.main }}
                />
              </ListItemIcon>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: 17,
                }}
              >
                DASHBOARD
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("orders")}>
              <ListItemIcon>
                <ListAltIcon className={classes.iconss} />
              </ListItemIcon>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 17 }}>
                ORDERS
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("addresses")}>
              <ListItemIcon>
                <HouseOutlinedIcon className={classes.iconss} />
              </ListItemIcon>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 17 }}>
                ADDRESSES
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("accountDetails")}>
              <ListItemIcon>
                <AccountCircleOutlinedIcon className={classes.iconss} />
              </ListItemIcon>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 17 }}>
                Account Details
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("wishlist")}>
              <ListItemIcon>
                <StarOutlineOutlinedIcon className={classes.iconss} />
              </ListItemIcon>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 17 }}>
                WISHLIST
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <LogoutIcon
                  sx={{ color: (theme) => theme.palette.secondary.main }}
                />
              </ListItemIcon>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, fontSize: 17 }}
                onClick={() => handleMenuItemClick("logout")}
              >
                LOGOUT
              </Typography>
            </MenuItem>
          </MenuList>
          {/* Mobile Laayout */}
          <MenuList sx={{ display: { xs: "block", md: "none" } }}>
            <Select
              value={activeTab}
              onChange={(event) => handleMenuItemClick(event.target.value)}
              variant="standard"
              sx={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                fontWeight: 600,
                "& .MuiSelect-select": {
                  display: "flex",
                },
              }}
            >
              <MenuItem
                value="dashboard"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <GridViewRoundedIcon sx={{ marginRight: "0.5em" }} />
                Dashboard
              </MenuItem>
              <MenuItem value="orders">
                <ListAltIcon sx={{ marginRight: "0.5em" }} />
                Orders
              </MenuItem>
              <MenuItem value="addresses">
                <HouseOutlinedIcon sx={{ marginRight: "0.5em" }} />
                Addresses
              </MenuItem>
              <MenuItem value="accountDetails">
                <AccountCircleOutlinedIcon sx={{ marginRight: "0.5em" }} />
                Account Details
              </MenuItem>
              <MenuItem value="wishlist">
                <StarOutlineOutlinedIcon sx={{ marginRight: "0.5em" }} />
                Wishlist
              </MenuItem>
              <MenuItem value="logout">
                <LogoutIcon sx={{ marginRight: "0.5em" }} />
                Logout
              </MenuItem>
            </Select>
          </MenuList>
        </Box>
        <Box>{content}</Box>
      </Box>
    </>
  );
};

export default AccountLayout;

const useStyles = makeStyles((theme) => ({
  containerMain: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 30,
    display: "grid",
    gridTemplateColumns: "0.5fr 2fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
    },
  },
  sideNavBar: {
    display: "flex",
    gap: 2,
    alignItems: "left",
    flexDirection: "column",
    paddingLeft: "1em",
    "& li": {
      padding: "1em",
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      justifyContent: "right",
      padding: "1em",
    },
  },

  iconss: {
    fontSize: 30,
    color: theme.palette.secondary.main,
  },
}));
