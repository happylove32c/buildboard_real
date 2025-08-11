"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 p-4 flex justify-between items-center shadow-md">
      <div className=""><h1 className="text-xl font-bold">Buildboard</h1></div>
      <div className="nav-items flex items-center gap-6">
        <Link href="/" className="text-sm font-medium flex items-center gap-1 hover:text-black transition-colors">
          Dashboard
        </Link>
        <Link href="/about" className="text-sm font-medium flex items-center gap-1 hover:text-black transition-colors">
          Projects
        </Link>
      </div>
    </nav>
  );
}