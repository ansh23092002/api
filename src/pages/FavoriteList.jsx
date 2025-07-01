import React, { useEffect, useState } from "react";

import FavoriteCard from "../components/favoriteCard";

function FavoriteList() {
  const [storedItems, setStoredItems] = useState([]);

  useEffect(() => {
    const allItems = [];

    // loop to geting all key value one by one

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i); // Get the key name
      const rawValue = localStorage.getItem(key); // Get raw value

      let value;
      try {
        value = JSON.parse(rawValue); // Try to parse JSON
      } catch (e) {
        value = rawValue; // Fallback to string if parsing fails
      }

      allItems.push({ key, value });
    }

    setStoredItems(allItems);
  }, []);

  return (
    <div className="">
      <h2 className="w-full text-white bg-black p-10 text-4xl">
        My Favorite
      </h2>

      {storedItems.length === 0 ? (
        <p className="p-4 ">No items in localStorage.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black text-white h-screen">
          {storedItems.map((item, index) => (  
              <FavoriteCard key={index} search={item.key} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteList;
