import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { TfiGithub } from "react-icons/tfi";
import { BsFillArrowDownRightCircleFill, BsYoutube } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const ItemList = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleTransition = () => {
           setIsOpen(!isOpen)
  }
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <div className="relative flex justify-center  pr-8 w-[300px] h-[250px] "  key={item.id}>
        <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="absolute   z-10 text-red-600 pt-8">{item.name}</h3>
        <h5 className="absolute z-10 pt-14 ">
          <AiFillGithub size={40}  />
          <AiOutlineLink size={40}/>
        </h5>
        </div>
        <img  className="absolute z-0"  src={item.image}/>
      </div> */}
      <div className="flex  items-center justify-center">
        <div className="container relative   overflow-hidden mb-5 ml-5 w-[300px] h-[250px]">
          <div className="shadow-lg">
          <img  className="z-0" src={item.image} />
          </div>

          <div className={`absolute  rounded-lg top-0 z-10 box  flex justify-center items-center  ${isOpen ? "rotate-[-180deg]" : "translate-x-[-260px] translate-y-[-185px]"} duration-500 bg-[#113e44]`}>
            <div className="rotate-[-180deg]">
              <p className="text-[20px] font-semibold w-[180px]">{item.name}</p>
               <div className="flex flex-wrap">
               {item.tech.map((stack) => {
                  return (
                    <ul key={item.id + stack} className="first:ml-0 ml-2">
                    <li className="text-[16px] border px-2 mt-[10px] mb-[15px] hover:bg-color-brand2 hover:color-base2 font-semibold ">{stack}</li>
                  </ul>
                  )
              })}
               </div>
               <div className="flex ">
                <a href={item.github} target="_blank">
                <TfiGithub className="cursor-pointer hover:text-color-brand" size={26}/>
                </a>
                <a href={item.Livelink} target="_blank">
                <BiLinkExternal className="ml-3 cursor-pointer hover:text-color-brand" size={26}/>
                </a>
                  <a href="">
                  <BsYoutube className="cursor-pointer hover:text-color-brand ml-3" size={28}/>
                  </a>
               </div>
            </div>
          </div>

          <div className="absolute bottom-[35px] right-[1px] z-10 box-arrow cursor-pointer bg-color-base" onClick={handleTransition}>
            <BsFillArrowDownRightCircleFill size={30} className={`${isOpen ? "rotate-180" : ""} duration-300`} color="white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemList;
