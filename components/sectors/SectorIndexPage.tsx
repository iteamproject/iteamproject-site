import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  sectorCtaTargets,
  sectorPageByLocale,
} from "@/data/sectors";
import { routes, type Locale } from "@/lib/routes";
import CookieBanner from "@/components/site/CookieBanner";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";

type SectorIndexPageProps = {
  locale: Locale;
};

export default function SectorIndexPage({ locale }: SectorIndexPageProps) {
  const page = sectorPageByLocale[locale];

  return (
    <>
      <Header
        locale={locale}
        homeHref={routes.home[locale]}
        languageTargets={routes.sectorsIndex}
      />

      <main className="bg-white text-slate-800">
        <section className="border-b border-slate-200 bg-gradient-to-br from-emerald-50/70 via-white to-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              {page.label}
            </p>
            <h1 className="mt-3 max-w-5xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {page.text}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {page.sectors.map((sector) => (
              <article
                key={sector.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
              >
                <h2 className="text-2xl font-semibold text-slate-950">
                  {sector.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {sector.text}
                </p>
                <div className="mt-6 grid gap-3">
                  {sector.signals.map((signal) => (
                    <div
                      key={signal}
                      className="flex items-start gap-3 rounded-2xl bg-emerald-50/70 p-4 text-sm leading-7 text-slate-700"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                  {page.ctaTitle}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                  {page.ctaText}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="mailto:info@iteamproject.it"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-50"
                >
                  {page.ctaPrimary}
                </a>
                <Link
                  href={sectorCtaTargets[locale].services}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {page.ctaSecondary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
      <CookieBanner />
    </>
  );
}
