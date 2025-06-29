import React, { useEffect, useState } from 'react';

import MovieList from '../components/MovieList';

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
    <div className='bg-black text-white'>
      <h2 className='w-full text-white bg-black p-10 text-4xl'>My Favorite Items</h2>

      {storedItems.length === 0 ? (
        <p className='p-4'>No items in localStorage.</p>
      ) : (
        <ul className="p-4 space-y-4">
          {storedItems.map((item, index) => (
            <li key={index} className=" pb-2 ">
              
           
               <MovieList search={item.value}/>
               
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriteList;
