import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import "./pages.css";
import { dataList } from "./../constant/DataList";
import ItemList from "../components/ItemList";
import { AnimatePresence } from "framer-motion";

const Work = ({ open }) => {
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

  return (
    <section className={`flex md:flex-col duration-300 xl:w-[1240px]`}>
      <div
        className={`${open ? "md:ml-[50px]" : "md:ml-[150px]"} duration-300 `}
      >
        <h1 className="mt-10 font-bold md:text-[32px]">My Recent Project</h1>
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <div layout className="container flex flex-wrap justify-center">
        <>
          {filtered.map((item, index) => (
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
