import { Card, CardContent } from "@/components/ui/card";
import { outcomesByLocale } from "@/data/outcomes";
import type { Locale } from "@/lib/routes";

type OutcomesProps = {
  locale: Locale;
  label: string;
  title: string;
  text: string;
};

export default function Outcomes({ locale, label, title, text }: OutcomesProps) {
  const outcomes = outcomesByLocale[locale];

  return (
    <section id="risultati" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            {label}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            {text}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {outcomes.map((item) => (
            <Card
              key={item.title}
              className="rounded-3xl border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-emerald-200 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {item.value}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
