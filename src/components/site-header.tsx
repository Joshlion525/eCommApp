"use client";

import { useState } from "react";
import { BagIcon, CloseIcon, MenuIcon, SearchIcon } from "./icons";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Favourites", href: "#featured" },
  { label: "Our Story", href: "#story" },
  { label: "Visit", href: "#visit" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink text-center text-xs tracking-wide text-white/90">
        <p className="px-4 py-2">
          Open today 12–11pm &nbsp;·&nbsp; Free delivery on orders over $40
        </p>
      </div>

      <div className="border-b border-line bg-paper/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>

          <a
            href="#top"
            className="font-display text-2xl font-semibold tracking-tight text-ink"
          >
            Saffron
          </a>

          <nav className="ml-8 hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <button
              type="button"
              aria-label="Search the menu"
              className="grid h-10 w-10 place-items-center rounded-full text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Your order"
              className="relative grid h-10 w-10 place-items-center rounded-full text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <BagIcon className="h-5 w-5" />
              <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-brand-600 px-1 text-[10px] font-semibold text-white">
                0
              </span>
            </button>
            <a
              href="#featured"
              className="ml-2 hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink/90 sm:inline-flex"
            >
              Order online
            </a>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-72 max-w-[80%] flex-col bg-paper p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-semibold">Saffron</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink/80 hover:bg-ink/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#featured"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Order online
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
