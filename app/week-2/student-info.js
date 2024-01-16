/*
 * Web Development 2 - CPRG306D
 * Week 2 - Assignment
 * Name: Cathy Sun
 * Date: 2024 Jan 15
 */

import Link from "next/link";

export default function StudentInfo() {
    return (<div className="flex min-h-screen flex-col items-center">
                <p>Cathy Sun</p>
                <p><Link href="https://github.com/cathysunkc" target="_new" className="hover:text-green-400 hover:underline">https://github.com/cathysunkc</Link></p>
            </div>);
}
  

 