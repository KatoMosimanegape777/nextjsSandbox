import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <Link href={"/"}>Logo</Link>
        <Link href={"/sitetable"}>Sites</Link>
        <Link href={"/officers"}>Officers</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/"}>LogOut</Link>
    </div>
  )
}
