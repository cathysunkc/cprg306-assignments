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
          </ul>
      </div>
    </main>
  )
}
