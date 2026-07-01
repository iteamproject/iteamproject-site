import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { problemsByLocale } from "@/data/problems";
import { routes } from "@/lib/routes";
import type { Locale } from "@/lib/routes";

type ProblemsProps = {
  locale: Locale;
  label: string;
  title: string;
  text: string;
  bridge: string;
  ctaLabel: string;
};

export default function Problems({
  locale,
  label,
  title,
  text,
  bridge,
  ctaLabel,
}: ProblemsProps) {
  const problems = problemsByLocale[locale];

  return (
    <section id="problems" className="bg-white py-20">
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
          {problems.map((item) => (
            <Card
              key={item.title}
              className="rounded-3xl border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-emerald-200 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
                  <CheckCircle2 className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-emerald-100 bg-emerald-50/50 p-8">
          <p className="text-base font-medium leading-8 text-slate-700">
            {bridge}
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="w-full justify-center rounded-2xl bg-slate-950 px-6 py-6 text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:bg-slate-900 hover:shadow-lg active:scale-[0.98] sm:w-auto"
            >
              <Link href={routes.contact[locale]}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
