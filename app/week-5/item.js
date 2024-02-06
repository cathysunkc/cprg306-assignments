/*
 * Web Development 3 - CPRG306D
 * Week 5 - Assignment
 * Name: Cathy Sun
 * Date: 2024 Feb 05
 */

export default function Item({ name, quantity, category }) {
    return (
        <li class="p-2 m-4 bg-slate-900 max-w-sm">
            <h2 class="text-xl font-bold">{name}</h2>
            <div class="text-sm">Buy {quantity} in {category}</div>    
        </li>      
    );
  }