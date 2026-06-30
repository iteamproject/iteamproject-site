"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import type { Locale } from "@/lib/routes";
import LanguageSwitcher from "./LanguageSwitcher";

export type HeaderNavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  locale: Locale;
  homeHref: string;
  languageTargets: Record<Locale, string>;
  navItems?: HeaderNavItem[];
  activeHref?: string;
  position?: "sticky" | "fixed";
};

export default function Header({
  locale,
  homeHref,
  languageTargets,
  navItems = [],
  activeHref,
  position = "sticky",
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const positionClass =
    position === "fixed" ? "fixed inset-x-0 top-0" : "sticky top-0";
  const menuLabel =
    locale === "it" ? "Apri menu navigazione" : "Open navigation menu";
  const closeMenuLabel =
    locale === "it" ? "Chiudi menu navigazione" : "Close navigation menu";

  return (
    <header
      className={`${positionClass} z-50 border-b border-slate-950 bg-emerald-50/95 backdrop-blur supports-[backdrop-filter]:bg-emerald-50/90`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href={homeHref} className="flex items-center gap-4 transition hover:opacity-80">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-xl font-bold text-white shadow-sm">
            iT
          </div>
          <div className="text-sm font-medium text-slate-500">
            <span className="font-semibold text-emerald-700">{site.name}</span>
            <span className="hidden sm:inline"> · {site.payoff}</span>
          </div>
        </Link>

        {navItems.length > 0 ? (
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeHref === item.href
                    ? "text-emerald-700"
                    : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} targets={languageTargets} />

          {navItems.length > 0 ? (
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? closeMenuLabel : menuLabel}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white/70 p-2 text-slate-600 shadow-sm lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          ) : null}
        </div>
      </div>

      {navItems.length > 0 && isMenuOpen ? (
        <nav className="border-t border-emerald-200 bg-emerald-50 px-6 py-4 shadow-sm lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                  activeHref === item.href
                    ? "bg-white text-emerald-700 shadow-sm"
                    : "text-slate-700 hover:bg-white hover:text-emerald-700"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
