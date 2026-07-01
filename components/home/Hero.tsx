import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { heroHighlightsByLocale, heroMetricsByLocale } from "@/data/home";
import { routes } from "@/lib/routes";
import type { Locale } from "@/lib/routes";

type HeroProps = {
  locale: Locale;
  title: string;
  text: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export default function Hero({
  locale,
  title,
  text,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  const highlights = heroHighlightsByLocale[locale];
  const metrics = heroMetricsByLocale[locale];

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-emerald-50/50 via-white to-slate-100">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-56 w-56 rounded-full bg-emerald-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-18 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <div className="mt-6 h-1 w-24 rounded-full bg-emerald-500" />

            <p className="mt-6 max-w-2xl text-lg font-normal leading-8 text-slate-600">
              {text}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                className="w-full justify-center rounded-2xl bg-slate-950 px-6 py-6 text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:bg-slate-900 hover:shadow-lg active:scale-[0.98] sm:w-auto"
              >
                <Link href={routes.contact[locale]}>
                  {ctaPrimary} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-center rounded-2xl border-emerald-200 px-6 py-6 text-sm text-slate-700 transition-all duration-200 hover:scale-[1.03] hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-md active:scale-[0.98] sm:w-auto"
              >
                <Link href={routes.servicesIndex[locale]}>{ctaSecondary}</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-200 backdrop-blur-sm sm:p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            {metrics.map((item) => (
              <Card
                key={item.label}
                className="rounded-3xl border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="text-3xl font-semibold text-emerald-700">
                    {item.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
