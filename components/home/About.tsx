import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { aboutByLocale } from "@/data/about";
import type { Locale } from "@/lib/routes";

type AboutProps = {
  locale: Locale;
};

export default function About({ locale }: AboutProps) {
  const about = aboutByLocale[locale];

  return (
    <section id="chi-siamo" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            {about.label}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            {about.title}
          </h2>
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`${index === 0 ? "mt-6" : "mt-4"} text-base leading-8 text-slate-600`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <Card className="rounded-[2rem] border-slate-200 bg-slate-50 shadow-sm">
          <CardContent className="p-8">
            <h3 className="text-lg font-semibold text-slate-950">
              {about.whyTitle}
            </h3>
            <div className="mt-6 grid gap-4">
              {about.advantages.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/40"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
