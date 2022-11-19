import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import "./pages.css";
import { dataList } from "./../constant/DataList";
import ItemList from "../components/ItemList";
import { AnimatePresence } from "framer-motion";

const Work = ({ open, width }) => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = () => {
    setPopular(dataList);
    setFiltered(dataList);
  };
  console.log(filtered.length)
  return (
    <section
      className={`flex md:flex-col duration-300 xl:w-[1240px] absolute ${
        width < 640 ? "left-[95px]" : "left-[240px]"
      }`}
    >
      <div>
        <h1 className="mt-10 font-bold ml-4 md:text-[32px]">
          My Recent Project
        </h1>
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <div
          layout
          className="flex flex-col md:flex-row flex-wrap items-center justify-center"
        >
          <>
            {filtered.length === 0
              ? "Loading..."
              : filtered.map((item, index) => (
                  <AnimatePresence>
                    <ItemList key={item.id + "filter" + index} item={item} />
                  </AnimatePresence>
                ))}
          </>
        </div>
      </div>
    </section>
  );
};

export default Work;
