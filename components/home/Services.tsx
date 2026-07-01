import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { servicesByLocale } from "@/data/services";
import { routes, type Locale } from "@/lib/routes";
import ServiceIcon from "@/components/services/ServiceIcon";

type ServicesProps = {
  locale: Locale;
  label: string;
  title: string;
  text: string;
};

export default function Services({ locale, label, title, text }: ServicesProps) {
  const services = servicesByLocale[locale];

  return (
    <section id="servizi" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              {label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base font-normal leading-8 text-slate-600">
              {text}
            </p>
          </div>

          <Link
            href={routes.servicesIndex[locale]}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 sm:w-fit"
          >
            <span>{locale === "it" ? "Vedi tutti i servizi" : "View all services"}</span>
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const content = (
              <Card
                className="h-full rounded-3xl border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.015] group-hover:border-emerald-200 group-hover:shadow-lg"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-100">
                    <ServiceIcon name={service.icon} className="h-6 w-6 text-emerald-700" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.text}
                  </p>
                </CardContent>
              </Card>
            );

            return service.href ? (
              <Link key={service.title} href={service.href} className="group block">
                {content}
              </Link>
            ) : (
              <div key={service.title} className="group">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
