import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceList } from "@/data/services";
import { routes, type Locale } from "@/lib/routes";
import CookieBanner from "@/components/site/CookieBanner";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import ServiceIcon from "./ServiceIcon";

type ServiceIndexPageProps = {
  locale: Locale;
};

const copy = {
  it: {
    label: "Servizi",
    title: "Aree di intervento per rendere l'IT più governabile.",
    text: "Percorsi consulenziali modulari per portare metodo, controllo e continuità nei servizi IT, nei progetti e nei requisiti di compliance.",
    cta: "Approfondisci",
  },
  en: {
    label: "Services",
    title: "Service areas to make IT more governable.",
    text: "Modular consulting paths to bring method, control and continuity to IT services, projects and compliance requirements.",
    cta: "Explore",
  },
} as const;

export default function ServiceIndexPage({ locale }: ServiceIndexPageProps) {
  const services = serviceList(locale);
  const t = copy[locale];

  return (
    <>
      <Header
        locale={locale}
        homeHref={routes.home[locale]}
        languageTargets={routes.servicesIndex}
        activeHref={routes.servicesIndex[locale]}
      />

      <main className="min-h-screen bg-white text-slate-800">
        <section className="border-b border-slate-200 bg-gradient-to-br from-emerald-50/60 via-white to-slate-100">
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
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.path[locale]}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 transition group-hover:bg-emerald-100">
                  <ServiceIcon name={service.icon} className="h-6 w-6 text-emerald-700" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-slate-950">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.text}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  {t.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer locale={locale} />
      <CookieBanner />
    </>
  );
}
