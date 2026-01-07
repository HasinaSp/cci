"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Assessement", href: "/" },
  { label: "About", href: "/about" },
  { label: "Resources Center", href: "/resources" },
  { label: "Contact", href: "/diagnostic" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  // Empêche le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
    
    <header className="fixed top-0 z-50 w-full bg-white text-slate-900 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link href="/" className="flex justify-center">
            <div className="flex flex-1 space-x-2">
              <Image src="/logo.png" alt="CircleNavigator" width={100} height={40} />
              <div className=""></div>
              <Image src="/calque.png" alt="CircleNavigator" width={220} height={24} />
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:opacity-80 transition"
              >
                {item.label}
              </Link>
            ))}
          <Link
            href="/circleexchange"
            className="bg-white font-semibold text-slate-900 underline hover:opacity-80 transition"
          >
            CircleExchange
          </Link>
          </nav>

          {/* CTA desktop */}
          <Link
            href="/login"
            className="bg-white text-slate-900"
          >
            Profil
          </Link>

          <Link
            href="/lang"
            className="bg-white text-slate-900 border border-slate-900 px-2 py-1 rounded-full hover:opacity-80 transition">
            ENG
          </Link>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center rounded-full
                       bg-slate-900 px-8 py-3 text-sm font-semibold
                       text-white transition
                       hover:bg-slate-800 focus:outline-none
                       focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            Start My Assessement
          </Link>

          {/* Hamburger mobile */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden focus:outline-none"
            aria-label="Open menu"
          >"
            <span className="block h-0.5 w-6 bg-current mb-1" />
            <span className="block h-0.5 w-6 bg-current mb-1" />
            <span className="block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white text-slate-900">
          <div className="flex h-full flex-col px-6 py-6">
            {/* Top */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">CircleNavigator</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Nav */}
            <nav className="mt-16 flex flex-col gap-8 text-xl font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-primary transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-auto">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block w-full rounded-xl bg-primary py-4 text-center text-white font-semibold"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
