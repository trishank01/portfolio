import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMaterialui,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { DiSass } from "react-icons/di";
import { CardData } from "../constant/CardData";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useEffect } from "react";

const About = ({ width }) => {
  const [zindex, setZindex] = useState("js");
  const [dataID, setDataID] = useState([]);
  const [count, setCount] = useState(1);
  const [current, setCurrent] = useState("js");

  const handleClick = (id) => {
    setZindex(id);
    setCurrent(id);
  };

  useEffect(() => {
    let id = CardData.map((item) => item.id);
    setDataID(id);
  }, [CardData]);

  const handleNext = () => {
    const ID = dataID.map((item) => item);
    setCount(count + 1);
    setCurrent(ID[count]);
    setZindex(ID[count]);
    if (count === dataID.length - 1) {
      setCount(0);
    }
  };

  const handlePrev = () => {
    const ID = dataID.map((item) => item);
    setCount(count - 1);
    console.log("count", count);
    setCurrent(ID[count]);
    setZindex(ID[count]);
    if (count === 0) {
      setCount(8);
    }
  };

  return (
    <>
    <section>
      <div
        className={`flex flex-col md:flex-row  duration-300  xl:w-[1240px] absolute ${
          width < 640 ? "left-[40px]" : "left-[240px]"
        }  h-screen w-[80%]`}
      >
        <div className="ml-[50px] mt-[40px] md:w-[50%]">
          <h2 className="font-bold text-[20px] md:text-[32px]">ABOUT ME</h2>
          <p className="tracking-wide text-[16px] md:text-[20px]">
            I am a{" "}
            <span className="font-semibold text-color-brand">
              self-taught Developer
            </span>{" "}
            and a person who loves to learn new things. I have been working as
            freelance frontend developer at{" "}
            <span className="font-semibold text-[20px] ">
              <a
                className="text-color-brand underline"
                href="https://www.fiverr.com/trishankk"
                target="_blank"
              >
                fiverr
              </a>
            </span>{" "}
            for 1.5 year. I help small to medium size bussines owner to solve
            the web related problem.{" "}
          </p>
          <br />
          <p className="tracking-wide text-[16px] md:text-[20px] ">
            On my freelance journey i have 15 plus 5 star rating from solving
            small bugs to builing end-to-end products
          </p>
          <h3 className="font-bold text-[20px] mt-5 md:text-[25px]">Skills </h3>
          <div className="skills mt-6 grid grid-cols-3 gap-6">
            <ReactTooltip
              className="font-semibold"
              effect="solid"
              place="left"
            />
            <p data-tip="JavaScript">
              <SiJavascript
                size={width < 640 ? 50 : 80}
                className="hover:text-color-brand hover:scale-105 duration-300 cursor-pointer"
                onClick={() => handleClick("js")}
              />
            </p>
            <p data-tip="React">
              <GrReactjs
                size={width < 640 ? 50 : 80}
                className="hover:text-[#5ED3F3] hover:scale-105 duration-300 cursor-pointer"
                onClick={() => handleClick("react")}
              />
            </p>

            <p data-tip="Redux-toolkit">
              <SiRedux
                size={width < 640 ? 50 : 80}
                className="hover:text-[#845DC3] hover:scale-105 duration-300 cursor-pointer"
                onClick={() => handleClick("redux")}
              />
            </p>

            <p data-tip="Firebase">
              <IoLogoFirebase
                size={width < 640 ? 50 : 80}
                className="hover:text-[#FFCC30] hover:scale-105 duration-300 cursor-pointer"
                onClick={() => handleClick("firebase")}
              />
            </p>

            <p data-tip="CSS">
              <SiCss3
                size={width < 640 ? 50 : 80}
                className="hover:text-[#254BDD] hover:scale-105 duration-300 cursor-pointer"
                onClick={() => handleClick("css")}
              />
            </p>

            <p data-tip="HTML5">
              <SiHtml5
                size={width < 640 ? 60 : 80}
                className="hover:text-[#DD4B25] hover:scale-105 duration-300 cursor-pointer"
                onClick={() => handleClick("html")}
              />
            </p>

            <p data-tip="Tailwindcss">
              <SiTailwindcss
                size={width < 640 ? 50 : 80}
                className="hover:text-[#36B7F0] hover:scale-105 duration-300 cursor-pointer"
                onClick={() => handleClick("tailwindcss")}
              />
            </p>

            <p data-tip="MaterialUI">
              <SiMaterialui
                size={width < 640 ? 50 : 80}
                className="hover:text-[#007DC5] hover:scale-105 duration-300 cursor-pointer"
                onClick={() => handleClick("MUI")}
              />
            </p>

            <p data-tip="Sass">
              <DiSass
                size={width < 640 ? 50 : 80}
                className="hover:text-[#C76494] hover:scale-105 duration-300 cursor-pointer"
                onClick={() => handleClick("sass")}
              />
            </p>
          </div>
        </div>

        <div className="relative ml-[50px]   mt-[50px] h-[93vh] md:w-[50%] flex  md:justify-center items-center">
          {CardData.map((card) => {
            return (
              <div
                class={`absolute top-[10px]   md:top-16 ${
                  zindex === card.id || current === card.id
                    ? "z-10 scale-110 translate-x-14"
                    : ""
                } md:w-[380px] w-[240px]  rounded overflow-hidden duration-300  bg-color-base shadow-lg`}
              >
                <img
                  class={`md:w-full w-[240px] md:h-[300px] object-contain ${
                    card.id === "js" ? "object-cover" : ""
                  }`}
                  src={card.image}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-[16px] md:text-xl  mb-2">
                    {card.name}
                  </div>
                  <p class="text-white-700 text-[14px] md:text-base">
                    {card.details}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2  ">
                  <span class="inline-block md:text-[16px] text-[14px] bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            );
          })}

         
            {current != undefined && width > 764 && (
              <button
                className="absolute   bottom-[20px] left-[310px] z-20"
                onClick={handlePrev}
              >
                <BsArrowLeftCircleFill size={20} />
              </button>
            )}
             
            {current != undefined && width > 764 && (
              <button
                className="absolute bottom-[20px] right-[200px] z-20"
                onClick={() => handleNext(count)}
              >
                <BsArrowRightCircleFill size={20} />
              </button>
            )}

            {current != undefined && width < 764 && (
              <button
                className="absolute top-[580px] left-[75px]  z-20"
                onClick={handlePrev}
              >
                <BsArrowLeftCircleFill size={20} />
              </button>
            )}

            {current != undefined && width < 764 && (
              <button
                className="absolute  top-[580px] left-[150px] z-20"
                onClick={() => handleNext(count)}
              >
                <BsArrowRightCircleFill size={20} />
              </button>
            )}
       
        </div>
        {width < 764 && <div className="w-[100px] relative  top-[600px] left-[150px] h-[100px] text-color-base2">dd</div>}
      </div>
    </section>
    </>
  );
};

export default About;
