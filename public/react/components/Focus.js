import React from "react";
import { Sauce } from "./Sauce";
import { Item } from "./Item";

// Define a component called Focus
export const Focus = ({ current, setCurrent }) => {
  // Define a click handler for the "Go Back" button
  const clickHandler = () => {
    setCurrent();
  };

  // Conditionally render either the Item or Sauce component based on the type of the current item
  return (
    <>
      {current.price ? <Item item={current} /> : <Sauce sauce={current} />}
      <button onClick={clickHandler}>Go Back</button>
    </>
  );
};
