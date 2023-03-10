import React from "react";

// Define a functional component called Item that takes a props object as an argument
export const Item = (props) => {
  // Define a click handler function called clickHandler that sets the current item using the setCurrent function passed in through props
  const clickHandler = () => {
    if (props.setCurrent) {
      props.setCurrent(props.item);
    }
  };

  // Render the component using JSX
  return (
    <>
      {/* Render the item title */}
      <h3>{props.item.title}</h3>
      {/* Render the item image with an onClick listener that calls the clickHandler function */}
      <img
        src={props.item.image}
        alt={props.item.title}
        onClick={clickHandler}
      />
      {/* Render the item description */}
      <p>{props.item.description}</p>
      {/* Render the item price */}
      <p>£{props.item.price}</p>
      {/* Render the item category */}
      <p>{props.item.category}</p>
    </>
  );
};
