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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
          <h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>        
          <Link href="/week-2"><u>Week 2</u></Link>
      </div>
    </main>
  )
}
