import React from "react";
import { NavLink } from "react-router-dom";
import "./Components.css";
import home from "./../assets/icons/home.gif";
import work from "./../assets/icons/briefcase.gif";
import hacker from "./../assets/icons/hacker.gif";
import review from "./../assets/icons/review.gif";
import contact from "./../assets/icons/contact.gif";
import blog from "./../assets/icons/blog.gif";

const activeLink = (isActive) => (isActive ? "active" : "");

const Navbar = ({ open }) => {
  return (
    <div
      className={`flex flex-col ${open ? "mx-5" : ""}  ${
        open ? "w-[200px] h-[200px]" : "w-[50px] h-[50px]"
      } ${open ? "mt-[40px]" : "mt-[80px]"} duration-300 ml-1`}
    >
      <div>
        <img
          className={`rounded-full w-[200px] ${
            open ? "border-[8px]" : "border-[2px]"
          } border-color-brand`}
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFeCCHcGgYu5A/profile-displayphoto-shrink_800_800/0/1651341264624?e=1669852800&v=beta&t=UOLpLyqurj0c8F9twRd2OaiF-bC_QLtLIAqdhmkGR6c"
          alt="pic"
        />
      </div>
      <nav
        className={`flex flex-col  ${
          open ? "mt-[40px]" : "mt-[60px] "
        } font-semibold text-lg font-base`}
      >
        <NavLink className={`py-[10px] ${activeLink}]`} to="/">
          <div className="flex">
            <img src={home} alt="icons" className="w-12" />
            {open && <span className="pt-3 px-3">Home</span>}
          </div>
        </NavLink>
        <NavLink className={`py-[10px] ${activeLink}`} to="/work">
          <div className="flex">
            <img src={work} alt="icons" className="w-12" />
            {open && <span className="pt-3 px-3">Portfolio</span>}
          </div>
        </NavLink>
        <NavLink className={`py-[10px] ${activeLink}`} to="/about">
          <div className="flex">
            <img src={hacker} alt="icons" className="w-12" />
            {open && <span className="pt-3 px-3">About</span>}
          </div>
        </NavLink>
        <NavLink className={`py-[10px] ${activeLink}`} to="/reviews">
          <div className="flex">
            <img src={review} alt="icons" className="w-12" />
            {open && <span className="pt-3 px-3">REVIEWS</span>}
          </div>
        </NavLink>
        <NavLink className={`py-[10px] ${activeLink}`} to="/blog">
          <div className="flex">
            <img src={blog} alt="icons" className="w-12" />
            {open && <span className="pt-3 px-3">BLOG</span>}
          </div>
        </NavLink>
        <NavLink className={`py-[10px] ${activeLink}`} to="/contact">
          <div className="flex">
            <img src={contact} alt="icons" className="w-12" />
            {open && <span className="pt-3 px-3">CONTACT</span>}
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
