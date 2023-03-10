import React from "react";
import { Sauce } from "./Sauce";

// Define a functional component called SaucesList that takes a props object as an argument
export const SaucesList = ({ sauces, setCurrent }) => {
  // Render the component using JSX
  return (
    <>
      {/* Use the map() method to iterate over the sauces array and render a Sauce component for each sauce */}
      {sauces.map((sauce, idx) => {
        return <Sauce sauce={sauce} key={idx} setCurrent={setCurrent} />;
      })}
    </>
  );
};
