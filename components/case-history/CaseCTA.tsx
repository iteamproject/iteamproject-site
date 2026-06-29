type CaseCTAProps = {
  title: string;
  text: string;
  buttonLabel: string;
};

export default function CaseCTA({ title, text, buttonLabel }: CaseCTAProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl lg:p-12">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-4 max-w-2xl leading-8 text-slate-300">{text}</p>
        <a
          href="mailto:info@iteamproject.it"
          className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-50"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
