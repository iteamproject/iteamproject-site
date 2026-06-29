"use client";

import Link from "next/link";
import type { Locale } from "@/lib/routes";

type LanguageSwitcherProps = {
  locale: Locale;
  targets: Record<Locale, string>;
};

export default function LanguageSwitcher({ locale, targets }: LanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center rounded-xl border border-emerald-200 bg-white/80 p-1 shadow-sm">
      {(["it", "en"] as const).map((item) => (
        <Link
          key={item}
          href={targets[item]}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
            locale === item
              ? "bg-slate-950 text-white"
              : "text-slate-600 hover:text-emerald-700"
          }`}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
