/*
 * Web Development 3 - CPRG306D
 * Week 5 - Assignment
 * Name: Cathy Sun
 * Date: 2024 Feb 05
 */
"use client"

import { useState } from 'react';
import Item from "./item.js";
import itemsList from "./items.json";

export default function ItemList() {
  const nameValue = "name";
  const categoryValue = "category";
  const activeButtonColor = "bg-orange-500";
  const inactiveButtonColor = "bg-orange-700";

  const [sortBy, setSortBy] = useState(nameValue);
  const [selectedButton, setSelectedButton] = useState(nameValue);

  let myItemList = [...itemsList];  

  function handleClick(value) {
    setSortBy(value);
    setSelectedButton(value);
    return;    
  }

  if (sortBy == nameValue) {
    myItemList = myItemList.sort((a, b) => a.name > b.name ? 1 : -1);
  }
  else if (sortBy == categoryValue) {
    myItemList = myItemList.sort((a, b) => a.category > b.category ? 1 : -1);
  }

  return (
    <>
      <div class="m-4">
        <label for="sort">Sort by: </label>
        <button class={`p-1 m-2 w-28 ${selectedButton === nameValue  ? activeButtonColor : inactiveButtonColor}`}
           value={nameValue} 
          onClick={(e) => handleClick(e.target.value)}>Name</button>
        <button class={`p-1 m-2 w-28 ${selectedButton === categoryValue ? activeButtonColor : inactiveButtonColor}`}
          value={categoryValue} 
          onClick={(e) => handleClick(e.target.value)}>Category</button>        
      </div>
       {myItemList.map((item) => (
          <Item 
          name={item.name}
          quantity={item.quantity}
          category={item.category} 
          key={item.id} />
        ))}      
    </>
  );
}