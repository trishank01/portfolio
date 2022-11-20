import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { ReviewData } from "../constant/ReviewData";

const Reviews = () => {
  const [count, setCount] = useState(2);

  const handleNextClick = () => {
    setCount(count + 1);
  };

  const handlePrevClick = () => {
    setCount(count - 1);
  };
  console.log(count);
  return (
    <section className={`flex md:w-[84vw] overflow-hidden `}>
      <div className="ml-8">
        <div className="flex flex-col md:flex-row h-screen md:w-[100%] items-center">
          <div className="w-[40%] mr-10">
            <h1 className="text-[40px] leading-[45px] w-[500px]">
              Don't just take my word for it... Read reviews of my clients
            </h1>
            <p className="text-[14px] mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>
            <div className="mt-10">
              {count < ReviewData.length && count > 0 ?  <button
                className="text-[70px] text-color-brand2"
                onClick={() => handlePrevClick(count)}
              >
                <IoIosArrowDropleft />
              </button>  : ""}
            
             {count < ReviewData.length - 1 ?  <button
                className="text-[70px] text-color-brand"
                onClick={() => handleNextClick(count)}
              >
                <IoIosArrowDropright />
              </button> : ""}
             
            </div>
          </div>
          <div className="w-[420px] md:w-[840px] overflow-hidden">
            <div
              className={`max-w-[60%] grid grid-flow-col gap-5 duration-300`}
              style={{ transform: `translateX(${count * -420}px)` }}
            >
              {ReviewData.map((item) => {
                return ( 
                    <div className="w-[400px] h-[300px] bg-color-base rounded-xl p-6 flex flex-col justify-center " key={item.id + item.name}>
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
