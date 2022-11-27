import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { TfiGithub } from "react-icons/tfi";
import { BsFillArrowDownRightCircleFill, BsYoutube } from "react-icons/bs";
import { useEffect } from "react";


const ItemList = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  
  //loadAnimation
  const handleTransition = () => {
           setIsOpen(!isOpen)
  }

  useEffect(() => {
    setLoading(true)
   const time = setTimeout(() => {
    setLoading(false)
    },3000)

    return () => {
      clearTimeout(time)
    }
  },[])


  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center   my-2 justify-center ">
        <div className="relative  rounded-[16px] overflow-hidden mb-5 md:ml-5 w-[260px] md:w-[300px] h-[248px]">
          <div className="shadow-lg h-full rounded-lg">
          <img  className="z-0 h-full object-cover hover:scale-110 duration-300" src={item.image} />
          </div>

          <div className={`absolute rounded-lg  top-0 z-10 box w-[260px] md:w-[300px] flex justify-center items-center  ${isOpen ? "rotate-[-180deg]" : "md:translate-x-[-250px] translate-x-[-210px] translate-y-[-205px]"} duration-500 bg-[#113e44]`}>
            <div className="rotate-[-180deg]">
              <p className="md:text-[20px] text-[14px] font-semibold w-[180px]">{item.name}</p>
               <div className="flex flex-wrap">
               {item.tech.map((stack) => {
                  return (
                    <ul key={item.id + stack} className="first:ml-0 ml-2">
                    <li className="md:text-[16px] text-[12px]  px-2 mt-[10px] mb-[15px] hover:bg-color-brand2 hover:color-base2 font-semibold ">{stack}</li>
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

          <div className="absolute bottom-[4px] right-[3px] z-10 box-arrow cursor-pointer bg-color-base" onClick={handleTransition}>
            <BsFillArrowDownRightCircleFill size={30} className={`${isOpen ? "rotate-180" : ""} duration-300 ${loading ? "myAnimation" : ""}`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemList;
