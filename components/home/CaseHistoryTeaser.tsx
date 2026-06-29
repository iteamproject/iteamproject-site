import Link from "next/link";
import { caseHistories } from "@/data/caseHistories";
import type { Locale } from "@/lib/routes";

type CaseHistoryTeaserProps = {
  locale: Locale;
  label: string;
  title: string;
  text: string;
  ctaLabel: string;
};

export default function CaseHistoryTeaser({
  locale,
  label,
  title,
  text,
  ctaLabel,
}: CaseHistoryTeaserProps) {
  const caseHistory = caseHistories["fashion-retail-sdwan"][locale];

  return (
    <section id="case-history" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            {label}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{text}</p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {caseHistory.listing.category}
          </div>

          <h3 className="mt-3 text-2xl font-semibold text-slate-950">
            {caseHistory.listing.title}
          </h3>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            {caseHistory.listing.excerpt}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {caseHistory.listing.kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-2xl bg-emerald-50 p-4">
                <div className="text-2xl font-semibold text-emerald-700">
                  {kpi.value}
                </div>
                <div className="text-sm text-slate-600">{kpi.label}</div>
              </div>
            ))}
          </div>

          <Link
            href={caseHistory.path[locale]}
            className="mt-8 inline-flex rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-900"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
