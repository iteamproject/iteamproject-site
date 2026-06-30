import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { serviceDetails, type ServiceSlug } from "@/data/services";
import { routes, type Locale } from "@/lib/routes";
import CookieBanner from "@/components/site/CookieBanner";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import ServiceIcon from "./ServiceIcon";

type ServicePageProps = {
  slug: ServiceSlug;
  locale: Locale;
};

const copy = {
  it: {
    back: "Tutti i servizi",
    contact: "Parliamo del tuo contesto",
  },
  en: {
    back: "All services",
    contact: "Discuss your context",
  },
} as const;

export default function ServicePage({ slug, locale }: ServicePageProps) {
  const service = serviceDetails[slug][locale];
  const t = copy[locale];

  return (
    <>
      <Header
        locale={locale}
        homeHref={routes.home[locale]}
        languageTargets={service.path}
        activeHref={routes.servicesIndex[locale]}
      />

      <main className="bg-white text-slate-800">
        <section className="border-b border-slate-200 bg-gradient-to-br from-emerald-50/70 via-white to-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <Link
              href={routes.servicesIndex[locale]}
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.back}
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_0.45fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {service.label}
                </p>
                <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  {service.intro}
                </p>
              </div>

              <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
                  <ServiceIcon name={service.icon} className="h-6 w-6 text-emerald-700" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-950">
                  {service.ctaTitle}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.ctaText}
                </p>
                <a
                  href="mailto:info@iteamproject.it"
                  className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  {t.contact}
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-3 lg:px-8">
          {[
            { title: service.outcomesTitle, items: service.outcomes },
            { title: service.activitiesTitle, items: service.activities },
            { title: service.fitTitle, items: service.fit },
          ].map((block) => (
            <div
              key={block.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-950">
                {block.title}
              </h2>
              <ul className="mt-5 space-y-4">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>

      <Footer locale={locale} />
      <CookieBanner />
    </>
  );
}
