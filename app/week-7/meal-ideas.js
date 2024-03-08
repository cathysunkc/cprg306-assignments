/*
 * Web Development 3 - CPRG306D
 * Week 7 - Assignment
 * Name: Cathy Sun
 * Date: 2024 Mar 08
 */

"use client"

import React, { useState, useEffect } from 'react';


async function fetchMealIdeas() {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data;
}

export default function MealIdeas( {ingredient} ) {

    const [meals, setMeal] = useState([]);   
    
    async function loadMealIdeas() {
        try {
            const data = await fetchMealIdeas();
            setMeal(data);            
        } catch (error) {
            console.error(error);
        }
    }

}