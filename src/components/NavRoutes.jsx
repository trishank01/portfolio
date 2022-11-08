import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import Reviews from "../pages/Reviews";
import Work from "../pages/Work";

const NavRoutes = ({open}) => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/work" element={<Work open={open}/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default NavRoutes;
