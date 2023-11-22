import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { useSelector } from "react-redux";
import { darkThemee } from "../theme/darkTheme";
import { lightThemee } from "../theme/lightTheme";

import Home from "../pages/home";

import Footer from "../components/footer";
import Men from "../pages/men";
import Women from "../pages/women";
import AboutUs from "../pages/aboutUs";
import Header from "../components/header";
import ContactUs from "../pages/contactUs";
import Faq from "../pages/faq";
import Login from "../pages/login";
import ProductDetail from "../pages/productDetail";
import CartMain from "../pages/cart";

import ShopPage from "../pages/shop";
import SignUpPage from "../pages/signup";
import Succes from "../pages/success";
import Cancel from "../pages/cancel";
import Successfull from "../pages/success";

const Routers = () => {
  const { lightTheme } = useSelector((state) => state.themeSlice);
  return (
    <ThemeProvider theme={lightTheme ? lightThemee : darkThemee}>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
          <Route path="/cart" element={<CartMain />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/" element={<SignUpPage />} />
          <Route path="/success" element={<Successfull />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default Routers;
