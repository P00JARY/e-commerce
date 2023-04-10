import React from "react";
import items from "../data/items.json";
import Item from "../Components/Item";

function Store() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </div>
  );
}

export default Store;
