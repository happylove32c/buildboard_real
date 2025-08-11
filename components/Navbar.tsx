"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
// import AuthButton from "./AuthButton"

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "New", href: "/new" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-gray-200 dark:border-neutral-800 bg-white dark:bg-black px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <span className="font-bold text-lg">Buildboard</span>
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-2 py-1 rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "hover:bg-gray-100 dark:hover:bg-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <AuthButton /> */}
    </nav>
  )
}
