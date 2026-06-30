import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseHistories, type CaseHistorySlug } from "@/data/caseHistories";
import { routes, type Locale } from "@/lib/routes";
import CookieBanner from "@/components/site/CookieBanner";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import CaseCTA from "./CaseCTA";
import CaseHero from "./CaseHero";
import ContentBlock from "./ContentBlock";
import KpiGrid from "./KpiGrid";

type CaseHistoryPageProps = {
  slug: CaseHistorySlug;
  locale: Locale;
};

const copy = {
  it: {
    breadcrumbHome: "Home",
    breadcrumbIndex: "Case History",
    contentsTitle: "In questa case history",
    previous: "Caso precedente",
    next: "Caso successivo",
    allCases: "Tutte le case history",
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbIndex: "Case Studies",
    contentsTitle: "In this case study",
    previous: "Previous case",
    next: "Next case",
    allCases: "All case studies",
  },
} as const;

export default function CaseHistoryPage({ slug, locale }: CaseHistoryPageProps) {
  const caseHistory = caseHistories[slug][locale];
  const content = caseHistory.detail;
  const cases = Object.values(caseHistories).map((item) => item[locale]);
  const currentIndex = cases.findIndex((item) => item.slug === slug);
  const previousCase = currentIndex > 0 ? cases[currentIndex - 1] : undefined;
  const nextCase =
    currentIndex >= 0 && currentIndex < cases.length - 1
      ? cases[currentIndex + 1]
      : undefined;
  const t = copy[locale];

  return (
    <>
      <Header
        locale={locale}
        homeHref={routes.home[locale]}
        languageTargets={caseHistory.path}
        activeHref={routes.caseHistoryIndex[locale]}
      />

      <main className="bg-white text-slate-800">
        <CaseHero content={content} />
        <KpiGrid
          title={content.resultsTitle}
          text={content.resultsText}
          kpis={content.kpis}
        />

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link href={routes.home[locale]} className="transition hover:text-emerald-700">
                {t.breadcrumbHome}
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href={routes.caseHistoryIndex[locale]}
                className="transition hover:text-emerald-700"
              >
                {t.breadcrumbIndex}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-slate-800">{content.label}</span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
              <aside className="lg:sticky lg:top-24">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    {t.contentsTitle}
                  </p>
                  <nav className="mt-4 space-y-2" aria-label={t.contentsTitle}>
                    {content.blocks.map((block, index) => (
                      <a
                        key={block.title}
                        href={`#section-${index + 1}`}
                        className="block rounded-xl px-3 py-2 text-sm leading-6 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
                      >
                        {block.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              <div className="space-y-12">
                {content.blocks.map((block, index) => (
                  <ContentBlock
                    key={block.title}
                    id={`section-${index + 1}`}
                    title={block.title}
                    paragraphs={block.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex flex-wrap gap-3">
              {previousCase ? (
                <Link
                  href={previousCase.path[locale]}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                  <span>{t.previous}</span>
                </Link>
              ) : null}

              {nextCase ? (
                <Link
                  href={nextCase.path[locale]}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  <span>{t.next}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              ) : null}
            </div>

            <Link
              href={routes.caseHistoryIndex[locale]}
              className="inline-flex w-fit rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-900"
            >
              {t.allCases}
            </Link>
          </div>
        </section>

        <CaseCTA
          title={content.ctaTitle}
          text={content.ctaText}
          buttonLabel={content.ctaButton}
        />
      </main>

      <Footer locale={locale} />
      <CookieBanner />
    </>
  );
}
