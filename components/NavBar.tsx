"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AuthNav from "./AuthNav";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-primary text-white px-3 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <nav className="w-full border-b border-white/10" aria-label="Main navigation">
        <div className="container flex items-center justify-between py-3">
          {/* Site title / branding */}
          <Link href="/" className="font-semibold tracking-wide text-lg">
            Next 15 E-Book Store
          </Link>

          <ul className="flex gap-3 text-sm" role="list">
            {links.map((l) => {
              const isActive =
                mounted && pathname.startsWith(l.href) && l.href !== "/"
                  ? true
                  : pathname === l.href;

              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`px-2 py-1 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary ${
                      isActive
                        ? "text-black dark:text-white font-medium"
                        : "text-[var(--fg-muted)] hover:text-black hover:dark:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}

            <li>
              <ThemeToggle />
            </li>
            <li>
              <AuthNav />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
