import React, { useEffect } from "react";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === "All") {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((item) =>
      item.category.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre, popular]);

  return (
    <div className="filter-container text-[12px] lg:text-[20px]">
      <div className="flex flex-col md:flex-row">
        <button
          className={` my-3 ${activeGenre === "All" ? "active" : ""}`}
          onClick={() => setActiveGenre("All")}
        >
          All
        </button>
        <button
          className={` my-3 ${activeGenre === "reactjs" ? "active" : ""}`}
          onClick={() => setActiveGenre("reactjs")}
        >
          Reactjs
        </button>
      </div>
      <div className="flex flex-col md:flex-row">
        <button
          className={`my-3 ${activeGenre === "javascript" ? "active" : ""}`}
          onClick={() => setActiveGenre("javascript")}
        >
          JavaScript
        </button>
        <button
          className={` my-3 ${
            activeGenre === "template_Design" ? "active" : ""
          }`}
          onClick={() => setActiveGenre("template_Design")}
        >
          Design
        </button>
      </div>
    </div>
  );
};

export default Filter;
