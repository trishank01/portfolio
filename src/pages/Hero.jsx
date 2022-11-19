import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Art from "../components/Art";



const Hero = ({open , width}) => {  
console.log(width)
  return (
    <section id="home" >
      <div className={`flex h-screen w-[80vw] absolute ${width < 640 ? "left-[90px]" : "left-[250px]"} `}>
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
          <div className="bg-color-brand inline-block px-3 py-4 rounded-md  font-base font-semibold cursor-pointer">
            <Link to="/work" className="text-color-base2">Explore My Work</Link>
          </div>
        </div>
        {width > 1068 && (<div className="w-[700px]">
        <Art/>
        </div>) }
      </div>
    </section>
  );
};

export default Hero;
