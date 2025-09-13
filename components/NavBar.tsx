"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AuthNav from "./AuthNav";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full border-b border-white/10">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-wide">
          Next 15 E-Book Store
        </Link>
        <ul className="flex gap-3 text-sm">
          {links.map((l) => {
            const active =
              mounted && pathname.startsWith(l.href) && l.href !== "/"
                ? "text-black dark:text-white"
                : pathname === l.href
                  ? "text-black dark:text-white"
                  : "text-[var(--fg-muted)] hover:text-black hover:dark:text-white";
            return (
              <li key={l.href}>
                <Link className={`px-2 py-1 rounded-lg ${active}`} href={l.href}>
                  {l.label}
                </Link>
              </li>
            );
          })}

          <ThemeToggle />
          <AuthNav />
        </ul>
      </div>
    </nav>
  );
}
