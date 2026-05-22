export const metadata = {
  title: "Cookie Policy | iTeamProject",
  description:
    "Cookie Policy di iTeamProject relativa all'utilizzo di cookie tecnici e strumenti analytics sul sito web.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Cookie Policy
        </h1>

        <p className="mt-6 text-base leading-8 text-slate-600">
          Ultimo aggiornamento: 22 maggio 2026
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Cosa sono i cookie
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              I cookie sono piccoli file di testo che i siti web possono
              memorizzare sul dispositivo dell’utente per garantire il corretto
              funzionamento del sito, migliorare l’esperienza di navigazione e
              raccogliere informazioni statistiche aggregate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Tipologie di cookie utilizzati
            </h2>

            <div className="mt-4 space-y-6 leading-8 text-slate-600">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Cookie tecnici
                </h3>
                <p className="mt-2">
                  Sono necessari per il corretto funzionamento del sito e non
                  richiedono il consenso dell’utente.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Cookie di preferenza
                </h3>
                <p className="mt-2">
                  Possono essere utilizzati per memorizzare preferenze espresse
                  dall’utente, come la scelta relativa al consenso cookie.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Cookie analytics
                </h3>
                <p className="mt-2">
                  Possono essere utilizzati per raccogliere statistiche
                  aggregate sull’utilizzo del sito, con finalità di analisi,
                  sicurezza e miglioramento delle performance.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Strumenti di terze parti
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Il sito può utilizzare strumenti forniti da terze parti, tra cui
              servizi di hosting, sicurezza, analytics e monitoraggio tecnico.
              Tali strumenti possono trattare dati tecnici di navigazione in
              forma aggregata o pseudonimizzata.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Gestione del consenso
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              L’utente può accettare o rifiutare i cookie non essenziali tramite
              il banner cookie presente sul sito. La scelta viene memorizzata
              localmente nel browser dell’utente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Come modificare le preferenze
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              È possibile modificare o cancellare le preferenze cookie
              eliminando i dati di navigazione del browser oppure cancellando i
              dati locali relativi al sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Contatti
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Per richieste relative alla gestione dei cookie o al trattamento
              dei dati personali è possibile scrivere a:
              info@iteamproject.it
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}