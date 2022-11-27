import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { ReviewData } from "../constant/ReviewData";

const Reviews = ({width}) => {
  const [count, setCount] = useState(0);

  const handleNextClick = () => {
    setCount(count + 1);
  };

  const handlePrevClick = () => {
    setCount(count - 1);
  };

  // const mystyle =  {
  //   transform: `translateX(${count * -420}px)`,
    
  // };
  


  return (
    <section className={`flex ml-[50px]  md:w-[84vw] overflow-hidden `}>
      <div className="ml-8 ">
        <div className="flex  flex-col md:flex-row  h-screen md:w-[100%] items-center">
          <div className="w-[300px] md:w-[500px] mt-[100px] md:mt-0 mr-10">
            <h1 className="text-[22px] md:text-[44px] font-semibold md:leading-[50px] text-color-brand">
              Don't just take my word for it... Read reviews of my clients
            </h1>
            <p className="text-[14px] mt-6">
               here is the link of my Fiverr Profile <a href="https://www.fiverr.com/trishankk" target="_blank">
                <b className="underline underline-offset-2 hover:text-color-brand">Link</b>
               </a>
            </p>
            <div className="mt-6 mb-10">
                <button
                disabled={count < 1}
                className="text-[50px] md:text-[70px] text-color-brand2 disabled:text-gray-600 cursor-pointer"
                onClick={() => handlePrevClick(count)}
              >
                <IoIosArrowDropleft />
              </button> 
            
              <button
                disabled={count > ReviewData.length - 2}
                className="text-[50px] md:text-[70px] text-color-brand disabled:text-gray-600 cursor-pointer "
                onClick={() => handleNextClick(count)}
              >
                <IoIosArrowDropright />
              </button> 
             
            </div>
          </div>
          <div className="w-[350px] md:w-[840px] overflow-hidden">
            <div
              className={`grid grid-flow-col gap-5 duration-300 `}
              style={width > 764 ?  {transform: `translateX(${count * -420}px)`} : {transform: `translateX(${count * -320}px)`}}
            >
              {ReviewData.map((item) => {
                return ( 
                    <div className="w-[300px] md:w-[400px]  md:h-[300px] bg-color-base rounded-xl p-6 flex flex-col justify-center " key={item.id + item.name}>
                      <div className="flex pb-2">
                        <AiFillStar size={20} color="gold" />
                        <AiFillStar size={20} color="gold" />
                        <AiFillStar size={20} color="gold" />
                        <AiFillStar size={20} color="gold" />
                        <AiFillStar size={20} color="gold" />
                      </div>
                      <div>
                        <h2 className="text-[20px] mb-2"> {item.name}</h2>
                        <p className="pb-2">
                          {" "}
                         {item.review}
                        </p>
                        <h2>&mdash; {item.country}</h2>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
