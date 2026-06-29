import { Card, CardContent } from "@/components/ui/card";
import { methodStepsByLocale } from "@/data/method";
import type { Locale } from "@/lib/routes";

type MethodProps = {
  locale: Locale;
  label: string;
  title: string;
  text: string;
};

export default function Method({ locale, label, title, text }: MethodProps) {
  const steps = methodStepsByLocale[locale];

  return (
    <section id="metodo" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
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

      <div className="mt-10 grid gap-6 lg:grid-cols-4">
        {steps.map((item) => (
          <Card
            key={item.step}
            className="rounded-3xl border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
          >
            <CardContent className="p-6">
              <div className="text-sm font-semibold tracking-[0.2em] text-slate-400">
                {item.step}
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
    </section>
  );
}
