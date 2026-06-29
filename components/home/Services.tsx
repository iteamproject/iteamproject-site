import {
  BarChart3,
  Briefcase,
  ClipboardList,
  Network,
  Settings2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { servicesByLocale, type ServiceIcon } from "@/data/services";
import type { Locale } from "@/lib/routes";

type ServicesProps = {
  locale: Locale;
  label: string;
  title: string;
  text: string;
};

const icons: Record<ServiceIcon, LucideIcon> = {
  "shield-check": ShieldCheck,
  settings: Settings2,
  network: Network,
  briefcase: Briefcase,
  "clipboard-list": ClipboardList,
  "bar-chart": BarChart3,
};

export default function Services({ locale, label, title, text }: ServicesProps) {
  const services = servicesByLocale[locale];

  return (
    <section id="servizi" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <Card
                key={service.title}
                className="group rounded-3xl border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-emerald-200 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-100">
                    <Icon className="h-6 w-6 text-emerald-700" />
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
          })}
        </div>
      </div>
    </section>
  );
}
