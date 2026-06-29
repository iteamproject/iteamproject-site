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

export default function CaseHistoryPage({ slug, locale }: CaseHistoryPageProps) {
  const caseHistory = caseHistories[slug][locale];
  const content = caseHistory.detail;

  return (
    <>
      <Header
        locale={locale}
        homeHref={routes.home[locale]}
        languageTargets={caseHistory.path}
      />

      <main className="bg-white text-slate-800">
        <CaseHero content={content} />
        <KpiGrid
          title={content.resultsTitle}
          text={content.resultsText}
          kpis={content.kpis}
        />

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-12">
              {content.blocks.map((block) => (
                <ContentBlock
                  key={block.title}
                  title={block.title}
                  paragraphs={block.text}
                />
              ))}
            </div>
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
