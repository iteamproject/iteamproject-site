import { CheckCircle2 } from "lucide-react";
import { aboutByLocale } from "@/data/about";
import { routes, type Locale } from "@/lib/routes";
import CookieBanner from "@/components/site/CookieBanner";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";

type AboutPageProps = {
  locale: Locale;
};

const contactLabel = {
  it: "Parliamo del tuo contesto",
  en: "Discuss your context",
} as const;

export default function AboutPage({ locale }: AboutPageProps) {
  const about = aboutByLocale[locale];
  const page = about.page;

  return (
    <>
      <Header
        locale={locale}
        homeHref={routes.home[locale]}
        languageTargets={routes.about}
      />

      <main className="bg-white text-slate-800">
        <section className="border-b border-slate-200 bg-gradient-to-br from-emerald-50/70 via-white to-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              {page.heroLabel}
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {page.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {page.heroText}
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              {page.roleTitle}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {about.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {page.roleText}
            </p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm lg:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">
              {page.operatingTitle}
            </h2>
            <div className="mt-6 grid gap-4">
              {page.operatingItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              {page.principlesTitle}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {page.principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-slate-950">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl lg:p-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                {page.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {page.ctaText}
              </p>
              <a
                href="mailto:info@iteamproject.it"
                className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-50"
              >
                {contactLabel[locale]}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
      <CookieBanner />
    </>
  );
}
