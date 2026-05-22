export const metadata = {
  title: "Privacy Policy | iTeamProject",
  description:
    "Privacy Policy di iTeamProject SNC relativa al trattamento dei dati personali e all'utilizzo del sito web.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-950 bg-emerald-50/95 backdrop-blur supports-[backdrop-filter]:bg-emerald-50/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <a
            href="/"
            className="flex items-center gap-4 transition hover:opacity-80"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-xl font-bold text-white shadow-sm">
              iT
            </div>

            <div className="text-sm font-medium text-slate-500">
              <div>
                <span className="font-semibold text-emerald-700">iTeamProject</span> · Your IT project. No stress, just results.
              </div>
            </div>
          </a>

          <a
            href="/"
            className="rounded-2xl border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-emerald-50 hover:text-emerald-700"
          >
            Torna alla Home
          </a>
        </div>
      </header>

      <main className="min-h-screen bg-white text-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Privacy Policy
        </h1>

        <p className="mt-6 text-base leading-8 text-slate-600">
          Ultimo aggiornamento: 22 maggio 2026
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Titolare del trattamento
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              iTeamProject S.n.c.
              <br />
              Via Cassia, 4 – 50124 Firenze (FI)
              <br />
              P. IVA 07518790485
              <br />
              Email: info@iteamproject.it
              <br />
              PEC: iteamproject@pec.it
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Tipologia di dati raccolti
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Il sito può raccogliere dati tecnici di navigazione,
              informazioni statistiche anonime, dati eventualmente inviati
              volontariamente tramite email o strumenti di contatto e dati
              necessari al corretto funzionamento del sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Finalità del trattamento
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-600">
              <li>gestione tecnica del sito web;</li>
              <li>sicurezza e monitoraggio dell’infrastruttura;</li>
              <li>analisi statistiche aggregate;</li>
              <li>gestione delle richieste di contatto;</li>
              <li>adempimenti normativi e di sicurezza.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Base giuridica
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Il trattamento viene effettuato sulla base del legittimo
              interesse del titolare, dell’eventuale consenso espresso
              dall’utente e degli obblighi normativi applicabili.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Cookie e strumenti tecnici
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Il sito utilizza cookie tecnici e strumenti analytics necessari
              al funzionamento, alla sicurezza e al miglioramento dei servizi
              offerti. Per maggiori informazioni è possibile consultare la
              Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Conservazione dei dati
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              I dati vengono conservati per il tempo strettamente necessario
              alle finalità per cui sono raccolti e nel rispetto delle
              normative vigenti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Diritti dell’interessato
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Gli utenti possono richiedere accesso, rettifica, cancellazione,
              limitazione del trattamento o opposizione scrivendo a:
              info@iteamproject.it
            </p>
          </section>
        </div>
      </div>
      </main>
    </>
  );
}