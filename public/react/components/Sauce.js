import React from "react";

// Define a functional component called Sauce that takes a props object as an argument
export const Sauce = (props) => {
  // Define a click handler function called clickHandler that sets the current item using the setCurrent function passed in through props
  const clickHandler = () => {
    if (props.setCurrent) {
      props.setCurrent(props.sauce);
    }
  };

  // Render the component using JSX
  return (
    <>
      {/* Render the sauce name */}
      <h3>{props.sauce.name}</h3>
      {/* Render the sauce image with an onClick listener that calls the clickHandler function */}
      <img
        src={props.sauce.image}
        alt={props.sauce.name}
        onClick={clickHandler}
      />
    </>
  );
};
