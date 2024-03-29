/*
 * Web Development 2 - CPRG306D
 * Week 2 - Assignment
 * Name: Cathy Sun
 * Date: 2024 Jan 15
 */

import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
      <div>
          <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>        
          <ul>
            <li><Link href="/week-2" className="hover:text-green-400 hover:underline">Week 2 Assignment</Link></li>
            <li><Link href="/week-3" className="hover:text-green-400 hover:underline">Week 3 Assignment</Link></li>
            <li><Link href="/week-4" className="hover:text-green-400 hover:underline">Week 4 Assignment</Link></li>
            <li><Link href="/week-5" className="hover:text-green-400 hover:underline">Week 5 Assignment</Link></li>
            <li><Link href="/week-6" className="hover:text-green-400 hover:underline">Week 6 Assignment</Link></li>
            <li><Link href="/week-7" className="hover:text-green-400 hover:underline">Week 7 Assignment</Link></li>
            <li><Link href="/week-8" className="hover:text-green-400 hover:underline">Week 8 Assignment</Link></li>          
          </ul>
      </div>
    </main>
  )
}
