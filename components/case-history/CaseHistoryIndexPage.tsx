import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { caseHistoryList } from "@/data/caseHistories";
import { routes, type Locale } from "@/lib/routes";
import CookieBanner from "@/components/site/CookieBanner";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";

type CaseHistoryIndexPageProps = {
  locale: Locale;
};

const copy = {
  it: {
    label: "Case History",
    title: "Progetti e risultati",
    text: "Una raccolta di progetti reali in cui governance, coordinamento tecnico e controllo operativo hanno prodotto risultati misurabili.",
    portfolioLabel: "Ambiti coperti",
    portfolioText:
      "I casi mostrano come rendere più governabili ambienti IT complessi, con attenzione a continuità operativa, fornitori e risultati misurabili.",
    summary: [
      "Infrastrutture multi-sede",
      "Governance e controllo fornitori",
      "Service management e reporting",
    ],
    cta: "Leggi il caso",
  },
  en: {
    label: "Case Studies",
    title: "Projects and outcomes",
    text: "A collection of real projects where governance, technical coordination and operational control delivered measurable results.",
    portfolioLabel: "Covered areas",
    portfolioText:
      "The cases show how to make complex IT environments easier to govern, with focus on service continuity, vendors and measurable outcomes.",
    summary: [
      "Multi-site infrastructure",
      "Vendor governance and control",
      "Service management and reporting",
    ],
    cta: "Read the case study",
  },
} as const;

export default function CaseHistoryIndexPage({ locale }: CaseHistoryIndexPageProps) {
  const cases = caseHistoryList(locale);
  const t = copy[locale];

  return (
    <>
      <Header
        locale={locale}
        homeHref={routes.home[locale]}
        languageTargets={routes.caseHistoryIndex}
        activeHref={routes.caseHistoryIndex[locale]}
      />

      <main className="min-h-screen bg-white text-slate-800">
        <section className="border-b border-slate-200 bg-gradient-to-br from-emerald-50/50 via-white to-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {t.label}
                </p>
                <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  {t.title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {t.text}
                </p>
              </div>

              <aside className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {t.portfolioLabel}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{t.portfolioText}</p>
                <div className="mt-5 space-y-3">
                  {t.summary.map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-slate-700">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 flex-none text-emerald-600"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {cases.map((caseHistory) => (
              <article
                key={caseHistory.slug}
                className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md sm:p-8"
              >
                <div className="flex flex-1 flex-col">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    {caseHistory.listing.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-950">
                    {caseHistory.listing.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {caseHistory.listing.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {caseHistory.listing.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

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
                </div>

                <Link
                  href={caseHistory.path[locale]}
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-900"
                >
                  <span>{t.cta}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer locale={locale} />
      <CookieBanner />
    </>
  );
}
