import Link from "next/link";
import React from "react";

const Navlinks = [
  {
    href: "/explore",
    label: "explore",
  },
  {
    href: "/new-arrivals",
    label: "New Arrivals",
  },
  {
    href: "/categories",
    label: "Categories",
  },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 shadow-sm">
      <Link href={"/"} className="text-2xl font-bold">
        Drip <span className="text-red-500">Store</span>
      </Link>
      <ul className="flex gap-6 items-center">
        {Navlinks.map((link) => (
          <li key={link.href} className="cursor-pointer">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Link href={"/auth/sign-up"}>
        <button className="rounded-lg border p-2 shadow cursor-pointer">
          Sign Up
        </button>
      </Link>
    </nav>
  );
}
