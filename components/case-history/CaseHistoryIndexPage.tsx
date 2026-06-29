import Link from "next/link";
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
    cta: "Leggi il caso",
  },
  en: {
    label: "Case Studies",
    title: "Projects and outcomes",
    text: "A collection of real projects where governance, technical coordination and operational control delivered measurable results.",
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
      />

      <main className="min-h-screen bg-white text-slate-800">
        <section className="border-b border-slate-200 bg-gradient-to-br from-emerald-50/50 via-white to-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
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
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cases.map((caseHistory) => (
              <article
                key={caseHistory.slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {caseHistory.listing.category}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                  {caseHistory.listing.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {caseHistory.listing.excerpt}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {caseHistory.listing.kpis.map((kpi) => (
                    <div key={kpi.label} className="rounded-2xl bg-emerald-50 p-4">
                      <div className="text-xl font-semibold text-emerald-700">
                        {kpi.value}
                      </div>
                      <div className="text-xs text-slate-600">{kpi.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={caseHistory.path[locale]}
                  className="mt-8 inline-flex rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-900"
                >
                  {t.cta}
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
