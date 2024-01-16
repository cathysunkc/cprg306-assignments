/*
 * Web Development 2 - CPRG306D
 * Week 2 - Assignment
 * Name: Cathy Sun
 * Date: 2024 Jan 15
 */

import StudentInfo from './student-info.js'

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
        <h1>Shopping List</h1>
        <StudentInfo />
      </main>
    );
  }