
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Btn from "./Btn";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Shortner", href: "/shortner" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="relative z-50 w-full bg-gray-800 text-white">

      {/* Main Navbar */}
      <div className="mx-auto flex h-[9vh] min-h-16 items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Linkly
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-blue-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/shortner">
              <Btn name="Try now" arrow={false} />
            </Link>

            <Link
              href="https://github.com/DXMAN-45"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Btn name="GitHub" arrow={false} />
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 rounded p-2 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-5 border-t border-gray-700 bg-gray-800 px-6 py-6 shadow-lg md:hidden">

          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block transition-colors hover:text-blue-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 border-t border-gray-700 pt-5">
            <Link href="/shortner" onClick={() => setMenuOpen(false)}>
              <Btn name="Try now" arrow={false} />
            </Link>

            <Link
              href="https://github.com/DXMAN-45"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Btn name="GitHub" arrow={false} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
