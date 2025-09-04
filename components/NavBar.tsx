"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AuthNav from "./AuthNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products/123", label: "Product [id]" },
  { href: "/blog", label: "Blog" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []); // avoid hydration mismatch

  return (
    <nav className="w-full border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-wide">
          Next 15 Starter
        </Link>
        <ul className="flex gap-3 text-sm">
          {links.map((l) => {
            const active =
              mounted && pathname.startsWith(l.href) && l.href !== "/"
                ? "text-white"
                : pathname === l.href
                  ? "text-white"
                  : "text-white/60 hover:text-white";
            return (
              <li key={l.href}>
                <Link className={`px-2 py-1 rounded-lg ${active}`} href={l.href}>
                  {l.label}
                </Link>
              </li>
            );
          })}
          <AuthNav />
        </ul>
      </div>
    </nav>
  );
}
