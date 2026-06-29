import { sectorsByLocale } from "@/data/sectors";
import type { Locale } from "@/lib/routes";

type SectorsProps = {
  locale: Locale;
  label: string;
  title: string;
  text: string;
};

export default function Sectors({ locale, label, title, text }: SectorsProps) {
  const sectors = sectorsByLocale[locale];

  return (
    <section id="settori" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              {label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base font-normal leading-8 text-slate-600">
              {text}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sectors.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/40 hover:text-emerald-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
