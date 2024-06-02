/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import { Routes, Route, useLocation} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Admin from "../pages/Admin/Admin";
import ProductPage from "pages/ProductPage/ProductPage";
import Services from "pages/Service/Services";

const Layout = () => {
    const location = useLocation();
    return (
      <div>
        <Header/>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={1000}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={<About />}/>
              <Route path="/service" element={<Services />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/login" element={<Login />}/>
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
};

export default Layout;