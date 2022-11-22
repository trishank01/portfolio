import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Components.css";
import home from "./../assets/icons/home.gif";
import work from "./../assets/icons/briefcase.gif";
import hacker from "./../assets/icons/hacker.gif";
import review from "./../assets/icons/review.gif";
import contact from "./../assets/icons/contact.gif";
import blog from "./../assets/icons/blog.gif";
import {
  LoginNavigation,
  LogoutNavigation,
} from "../pages/admin/LoginNavigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { LOGOUT_USER, REGISTER_USER_Email } from "../redux/slice/authSlice";

const activeLink = (isActive) => (isActive ? "active" : "");

const Navbar = ({ open }) => {


  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
         dispatch(LOGOUT_USER())
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        dispatch(REGISTER_USER_Email(user.email))
      } else {
        //dispatch(REMOVE_ACTIVE_USER());
        // User is signed out
        // ...
      }
    });
  }, [dispatch]);

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
            {open && <span className="pt-3 px-3">HOME</span>}
          </div>
        </NavLink>
        <NavLink className={`py-[10px] ${activeLink}`} to="/work">
          <div className="flex">
            <img src={work} alt="icons" className="w-12" />
            {open && <span className="pt-3 px-3">PORTFOLIO</span>}
          </div>
        </NavLink>
         <LogoutNavigation>
         <NavLink className={`py-[10px] ${activeLink}`} to="/about">
          <div className="flex">
            <img src={hacker} alt="icons" className="w-12" />
            {open && <span className="pt-3 px-3">ABOUT</span>}
          </div>
        </NavLink>
         </LogoutNavigation>
        <LogoutNavigation>
          <NavLink className={`py-[10px] ${activeLink}`} to="/reviews">
            <div className="flex">
              <img src={review} alt="icons" className="w-12" />
              {open && <span className="pt-3 px-3">REVIEWS</span>}
            </div>
          </NavLink>
        </LogoutNavigation>

        <NavLink className={`py-[10px] ${activeLink}`} to="/blog">
          <div className="flex">
            <img src={blog} alt="icons" className="w-12" />
            {open && <span className="pt-3 px-3">BLOG</span>}
          </div>
        </NavLink>


        <LoginNavigation>
          <NavLink className={`py-[10px] ${activeLink}`} to="/admin">
            <div className="flex">
              <img src={blog} alt="icons" className="w-12" />
              {open && <span className="pt-3 px-3">ADMIN</span>}
            </div>
          </NavLink>
        </LoginNavigation>

        <LogoutNavigation>
          <NavLink className={`py-[10px] ${activeLink}`} to="/contact">
            <div className="flex">
              <img src={contact} alt="icons" className="w-12" />
              {open && <span className="pt-3 px-3">CONTACT</span>}
            </div>
          </NavLink>
        </LogoutNavigation>

        <LoginNavigation>
          <NavLink className={`py-[10px] ${activeLink}`} to="/">
            <div className="flex">
              {open && <button className="pt-3 px-3" onClick={handleLogout}>LOGOUT</button>}
            </div>
          </NavLink>
        </LoginNavigation>
        

        
 
      </nav>
    </div>
  );
};

export default Navbar;
