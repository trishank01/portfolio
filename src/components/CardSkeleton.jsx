import React from "react";

const CardSkeleton = () => {
  // const pulse = {
  //    filter: 'blur(3px)',
  //    animation : 'leftToRight 2s Infinite',

  //    @keyframes leftToRight {
  //     0% {

  //     }
  //    }
  // }
  return (
    <section className="w-[450px]">
      <div className="flex flex-col pt-5 gap-3 ">
        <div className="flex flex-col w-full px-3 animate-pulse">
          <div className="relative flex flex-col rounded w-full p-4 shadow bg-white overflow-hidden">
            <div className="absolute bg-white-500 w-10 h-full pulse"></div>
            <div className="flex flex-col w-full h-full justify-center">
              <div className="w-full h-[200px] bg-gray-300  rounded"></div>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-1/6 ml-3">
                <div className="bg-gray-300 rounded-full w-20 h-20"></div>
              </div>
              <div className="w-full pl-10">
                <div className="bg-gray-300 w-2/3 h-6 rounded mb-2"></div>
                <div className="bg-gray-300 w-1/2 h-6 rounded mb-2"></div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-300 w-14 h-4 rounded"></div>
                  <div className="bg-gray-300 w-14 h-4 rounded"></div>
                  <div className="bg-gray-300 w-14 h-4 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </section>
  );
};

export default CardSkeleton;
