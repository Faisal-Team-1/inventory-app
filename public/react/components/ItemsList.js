import React from "react";
import { Item } from "./Item";

// Define a functional component called ItemsList that takes a props object as an argument
export const ItemsList = ({ items, setCurrent }) => {
  // Render the component using JSX
  return (
    <>
      {/* Use the map() method to iterate over the items array and render an Item component for each item */}
      {items.map((item, idx) => {
        return <Item item={item} key={idx} setCurrent={setCurrent} />;
      })}
    </>
  );
};
