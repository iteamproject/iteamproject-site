import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseHistoryList } from "@/data/caseHistories";
import { routes, type Locale } from "@/lib/routes";

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
  const cases = caseHistoryList(locale);

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

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cases.map((caseHistory) => (
            <article
              key={caseHistory.slug}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                {caseHistory.listing.category}
              </div>

              <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                {caseHistory.listing.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {caseHistory.listing.excerpt}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {caseHistory.listing.kpis.map((kpi) => (
                  <div key={kpi.label} className="rounded-2xl bg-emerald-50 p-4">
                    <div className="text-xl font-semibold text-emerald-700">
                      {kpi.value}
                    </div>
                    <div className="mt-1 text-xs leading-5 text-slate-600">
                      {kpi.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={caseHistory.path[locale]}
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-900"
              >
                <span>{ctaLabel}</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <Link
          href={routes.caseHistoryIndex[locale]}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
        >
          <span>{locale === "it" ? "Vedi tutte le case history" : "View all case studies"}</span>
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
