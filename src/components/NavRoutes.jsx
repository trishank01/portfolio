import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Admin from "../pages/admin/Admin";
import Blog from "../pages/blogPage/Blog";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import Reviews from "../pages/Reviews";
import Work from "../pages/Work";

const NavRoutes = ({open , width}) => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Hero open={open} width={width} />}></Route>
        <Route path="/work" element={<Work open={open} width={width}/>}></Route>
        <Route path="/about" element={<About width={width}/>}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default NavRoutes;
