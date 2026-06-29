type KpiGridProps = {
  title: string;
  text: string;
  kpis: {
    label: string;
    value: string;
  }[];
};

export default function KpiGrid({ title, text, kpis }: KpiGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {title}
          </h2>
          <p className="mt-4 leading-8 text-slate-600">{text}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5"
            >
              <div className="text-sm text-slate-500">{kpi.label}</div>
              <div className="mt-2 text-2xl font-semibold text-emerald-700">
                {kpi.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
