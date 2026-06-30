import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { contactByLocale } from "@/data/contact";
import { site } from "@/data/site";
import { routes, type Locale } from "@/lib/routes";
import CookieBanner from "@/components/site/CookieBanner";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";

type ContactPageProps = {
  locale: Locale;
};

const relatedLinks = {
  it: [
    { label: "Servizi", href: routes.servicesIndex.it },
    { label: "Case History", href: routes.caseHistoryIndex.it },
    { label: "Settori", href: routes.sectorsIndex.it },
    { label: "Chi siamo", href: routes.about.it },
  ],
  en: [
    { label: "Services", href: routes.servicesIndex.en },
    { label: "Case Studies", href: routes.caseHistoryIndex.en },
    { label: "Sectors", href: routes.sectorsIndex.en },
    { label: "About", href: routes.about.en },
  ],
} as const;

export default function ContactPage({ locale }: ContactPageProps) {
  const contact = contactByLocale[locale];
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    contact.mailSubject
  )}&body=${contact.mailBody}`;

  return (
    <>
      <Header
        locale={locale}
        homeHref={routes.home[locale]}
        languageTargets={routes.contact}
        activeHref={routes.contact[locale]}
      />

      <main className="bg-white text-slate-800">
        <section className="border-b border-slate-200 bg-gradient-to-br from-emerald-50/70 via-white to-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              {contact.label}
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {contact.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {contact.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mailHref}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                <span>{contact.ctaLabel}</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <Link
                href={routes.servicesIndex[locale]}
                className="inline-flex rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
              >
                {locale === "it" ? "Vedi i servizi" : "View services"}
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">
              {contact.requestTitle}
            </h2>
            <div className="mt-6 grid gap-4">
              {contact.requestItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard icon="mail" label={contact.emailLabel} value={site.email} />
            <InfoCard icon="shield" label={contact.pecLabel} value={site.pec} />
            <InfoCard icon="building" label={contact.officeLabel} value={site.address} />
            <InfoCard
              icon="file"
              label={contact.fiscalLabel}
              value={`P. IVA ${site.vat} · Codice Univoco ${site.recipientCode}`}
            />
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {contact.focusLabel}
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-950">
                {contact.focusText}
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              {contact.nextStepsTitle}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {contact.nextSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-semibold text-emerald-700">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl lg:p-12">
            <h2 className="text-2xl font-semibold tracking-tight">
              {contact.relatedTitle}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedLinks[locale].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
      <CookieBanner />
    </>
  );
}

type InfoCardProps = {
  icon: "mail" | "shield" | "building" | "file";
  label: string;
  value: string;
};

const infoIcons = {
  mail: Mail,
  shield: ShieldCheck,
  building: Building2,
  file: FileText,
};

function InfoCard({ icon, label, value }: InfoCardProps) {
  const Icon = infoIcons[icon];

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50">
        <Icon className="h-5 w-5 text-emerald-700" />
      </div>
      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-3 break-words text-base font-semibold leading-7 text-slate-950">
        {value}
      </p>
    </div>
  );
}
