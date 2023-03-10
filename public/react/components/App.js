import React, { useState, useEffect } from "react";

// Import components
import { SaucesList } from "./SaucesList";
import { ItemsList } from "./ItemsList";
import { Focus } from "./Focus";

// Import and prepend the API URL to any fetch calls
import apiURL from "../api";

// Define the main component
export const App = () => {
  // Declare and initialize state variables using the useState hook
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState();

  // Define an asynchronous function to fetch sauces data from the API
  async function fetchSauces() {
    try {
      // Use the fetch method to retrieve sauces data from the API
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();

      // Update the sauces state variable using the setSauces function
      setSauces(saucesData);
    } catch (err) {
      // Log an error message to the console if the fetch operation fails
      console.log("Oh no an error! ", err);
    }
  }

  // Define an asynchronous function to fetch items data from the API
  async function fetchItems() {
    try {
      // Use the fetch method to retrieve items data from the API
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      // Update the items state variable using the setItems function
      setItems(itemsData);
    } catch (err) {
      // Log an error message to the console if the fetch operation fails
      console.log("Oh no an error! ", err);
    }
  }

  // Use the useEffect hook to fetch data from the API on component mount
  useEffect(() => {
    fetchSauces();
    fetchItems();
  }, []);

  // Render the component
  return (
    <main>
      {/* If there is no current item selected, render the sauces and items lists */}
      {!current ? (
        <>
          {/* Render the SaucesList component */}
          <h1>Sauce Store</h1>
          <h2>All Sauces</h2>
          <SaucesList sauces={sauces} setCurrent={setCurrent} />

          {/* Render the ItemsList component */}
          <h1>Item Store</h1>
          <h2>All things</h2>
          <ItemsList items={items} setCurrent={setCurrent} />
        </>
      ) : (
        // If there is a current item selected, render the Focus component
        <Focus current={current} setCurrent={setCurrent} />
      )}
    </main> 
  );
};
