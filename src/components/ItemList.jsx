import React from "react";
import { motion } from "framer-motion";

const ItemList = ({ item }) => {
  return (
    <motion.div 
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{duration: 0.5 }}
    >
      <div className="pr-8" key={item.id}>
        <h3>{item.name}</h3>
        <img src={item.image} />
      </div>
    </motion.div>
  );
};

export default ItemList;
