/*
 * Web Development 3 - CPRG306D
 * Week 5 - Assignment
 * Name: Cathy Sun
 * Date: 2024 Feb 05
 */
import ItemList from './item-list.js'

export default function Page() {
    return (
      <main className="bg-slate-950">
        <div><h2 class="text-3xl font-bold m-2">Shopping List</h2>
            <ul>
                <ItemList />
            </ul>
        </div>
      </main>
    );
  }