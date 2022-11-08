import React ,{ useEffect } from "react";



const Filter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === "All") {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((item) =>  item.category.includes(activeGenre));
     setFiltered(filtered);
  }, [activeGenre , popular]);

  return (
    <div className="filter-container">
      <button className={` ${activeGenre === "All" ? "active" : ""}`} onClick={() => setActiveGenre("All")}>All</button>
      <button className={activeGenre === "template_Design" ? "active" : ""}  onClick={() => setActiveGenre("template_Design")}>UI Design</button>
      <button className={activeGenre === "reactjs" ? "active" : ""}  onClick={() => setActiveGenre("reactjs")}>Reactjs</button>
      <button className={activeGenre === "javascript" ? "active" : ""}  onClick={() => setActiveGenre("javascript")}>JavaScript</button>
    </div>
  );
};

export default Filter;
