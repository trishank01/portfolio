import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Art from "../components/Art";



const Hero = () => {  

  return (
    <section id="home">
      <div className="flex flex-col md:flex-row h-screen ">
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
          <div className="bg-color-brand inline-block px-3 py-4 rounded-md text-color-base2 font-base font-semibold cursor-pointer">
            <Link to="/work">Explore My Work</Link>
          </div>
        </div>
        <div className="w-[700px] ml-[90px] flex items-center">
          <Art/>
        </div> 
      </div>
    </section>
  );
};

export default Hero;
