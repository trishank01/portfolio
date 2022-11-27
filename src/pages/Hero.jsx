import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Art from "../components/Art";
import { auth } from "../firebase/config";
import {
  REGISTER_USER_Email,
  SelectRegisterUser,
} from "../redux/slice/authSlice";

import{ AiFillGithub, AiFillLinkedin }from "react-icons/ai"
import{ SiFiverr }from "react-icons/si"

const Hero = ({ open, width }) => {
  const dispatch = useDispatch();
  const email = useSelector(SelectRegisterUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        dispatch(REGISTER_USER_Email(user.email));
      } else {
        //dispatch(REMOVE_ACTIVE_USER());
        // User is signed out
        // ...
      }
    });
  }, [dispatch]);
  console.log("email", email);
  return (
    <section id="home">
      <div
        className={`flex h-screen w-[80vw] absolute ${
          width < 640 ? "left-[90px]" : "left-[250px]"
        } `}
      >
        <div className="my-auto  md:ml-[50px]">
          <h1 className="text-[22px] pb-3 md:text-[42px] md:leading-[50px]">
            I'M A{" "}
            <span className="text-color-brand">
              FRONTEND WEB <br /> DEVELOPER
            </span>{" "}
            FROM <br />
            DELHI INDIA
          </h1>
          <p className="text-[14px] md:text-[16px] mb-6">
            I'm Trishank , and I craft high-performing <br /> frontend products
            and deligtful experiences <br /> tailored and conversion-focused
          </p>

          <Link to="/work" className="hover:text-color-base2 text-color-base">
            <button className="bg-color-brand inline-block px-3 py-4 rounded-md  font-base font-semibold cursor-pointer">
              Explore My Work
            </button>
          </Link>
            <div className="flex mt-5 text-[40px] gap-4 duration-500">
              <a href="https://github.com/trishank01" target="_blank" >
            <AiFillGithub className="hover:text-color-brand hover:scale-125 hover:rotate-[360deg] duration-700"/>
            </a>
            <a href="https://www.linkedin.com/in/trishank-khatri" target="_blank" >
          <AiFillLinkedin className="hover:text-color-brand hover:scale-125 hover:rotate-[360deg] duration-700"/>
          </a>
          <a href="https://www.fiverr.com/trishankk" target="_blank" >
          <SiFiverr className="hover:text-color-brand hover:scale-125 hover:rotate-[360deg] duration-700"/>
          </a>
            </div>
        </div>
        {width > 1068 && (
          <div className="w-[700px]">
            <Art />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
