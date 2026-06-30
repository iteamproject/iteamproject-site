import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
    focusLabel: "Quando interveniamo",
    focusText:
      "Quando l'IT è cresciuto per stratificazioni, i fornitori sono molti e servono regole chiare per decidere, misurare e controllare.",
    focusItems: [
      "Responsabilità e priorità non sono abbastanza esplicite",
      "SLA, KPI e reporting non supportano le decisioni",
      "Progetti, fornitori e rischi richiedono più coordinamento",
    ],
    cta: "Approfondisci",
    nextLabel: "Percorsi collegati",
    nextTitle: "Dai servizi ai risultati",
    nextText:
      "Le aree di intervento possono essere attivate singolarmente o combinate in un percorso di assessment, governance e controllo operativo.",
    caseHistoryCta: "Vedi le case history",
    contactCta: "Parliamo del tuo contesto",
  },
  en: {
    label: "Services",
    title: "Service areas to make IT more governable.",
    text: "Modular consulting paths to bring method, control and continuity to IT services, projects and compliance requirements.",
    focusLabel: "When we step in",
    focusText:
      "When IT has grown in layers, multiple vendors are involved and clear rules are needed to decide, measure and control.",
    focusItems: [
      "Responsibilities and priorities are not explicit enough",
      "SLAs, KPIs and reporting do not support decisions",
      "Projects, vendors and risks need stronger coordination",
    ],
    cta: "Explore",
    nextLabel: "Connected paths",
    nextTitle: "From services to outcomes",
    nextText:
      "Service areas can be activated individually or combined into an assessment, governance and operational control path.",
    caseHistoryCta: "View case studies",
    contactCta: "Discuss your context",
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
            <div className="grid gap-10 lg:grid-cols-[1fr_390px] lg:items-end">
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

              <aside className="rounded-[1.5rem] border border-slate-200 bg-white/85 p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {t.focusLabel}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{t.focusText}</p>
                <div className="mt-5 space-y-3">
                  {t.focusItems.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
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

        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                {t.nextLabel}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                {t.nextTitle}
              </h2>
              <p className="mt-4 leading-8 text-slate-600">{t.nextText}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href={routes.caseHistoryIndex[locale]}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
              >
                <div className="text-sm font-semibold text-slate-950">
                  {t.caseHistoryCta}
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  {locale === "it" ? "Progetti e risultati" : "Projects and outcomes"}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href={routes.contact[locale]}
                className="group rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm transition hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-md"
              >
                <div className="text-sm font-semibold">{t.contactCta}</div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-100">
                  {locale === "it" ? "Contatti" : "Contact"}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
      <CookieBanner />
    </>
  );
}
