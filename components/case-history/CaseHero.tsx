import Image from "next/image";
import type { CaseHistoryContent } from "@/data/caseHistories";

type CaseHeroProps = {
  content: CaseHistoryContent["detail"];
};

export default function CaseHero({ content }: CaseHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-br from-emerald-50/50 via-white to-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div
          className={
            content.visual
              ? "grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:items-center"
              : ""
          }
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              {content.label}
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              {content.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {content.intro}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {fact.label}
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-800">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {content.visual ? (
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <Image
                src={content.visual.src}
                alt={content.visual.alt}
                className="h-auto w-full"
                width={1200}
                height={686}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
