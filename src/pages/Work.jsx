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

  const fetchPopular = async () => {
    setPopular(dataList);
    setFiltered(dataList);
  };
  return (
    <section
      className={`flex flex-col ${
        open ? "w-[calc(100vw-250px)]" : "w-[calc(100vw-60px)]"
      } duration-300`}
    >
      <div className={`${open ? "pl-[50px]" : "pl-[180px]"} duration-300`}>
        <h1 className="mt-10">WORK</h1>
        <h1 className="">My Recent project</h1>
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <div layout className="container flex flex-wrap">
          <>
            {filtered.map((item) => (
              <AnimatePresence>
                <ItemList key={item.id} item={item} />
              </AnimatePresence>
            ))}
          </>
        </div>
      </div>
    </section>
  );
};

export default Work;
