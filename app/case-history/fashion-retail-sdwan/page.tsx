"use client";

import { useEffect, useMemo, useState } from "react";

type Lang = "it" | "en";

const kpisByLang: Record<Lang, [string, string][]> = {
  it: [
    ["Riduzione TCO", "fino al 40%"],
    ["Disponibilità infrastruttura", ">99,9%"],
    ["Riduzione interventi on-site", "fino al 70%"],
    ["Failover connettività", "automatico"],
    ["Visibilità infrastrutturale", "centralizzata"],
    ["Gestione sicurezza", "unificata"],
    ["Scalabilità nuove sedi", "immediata"],
    ["Standardizzazione sedi", "100%"],
  ],
  en: [
    ["TCO reduction", "up to 40%"],
    ["Infrastructure availability", ">99.9%"],
    ["Reduction of on-site interventions", "up to 70%"],
    ["Connectivity failover", "automatic"],
    ["Infrastructure visibility", "centralized"],
    ["Security management", "unified"],
    ["New site scalability", "immediate"],
    ["Site standardization", "100%"],
  ],
};

const contentByLang = {
  it: {
    backHome: "Torna alla Home",
    label: "Case History",
    title:
      "Oltre 100 punti vendita, una sola rete: trasformazione SD-WAN per il Fashion Retail",
    intro:
      "Come una primaria azienda italiana del Fashion Retail ha ridotto i costi, aumentato la resilienza e centralizzato la governance della propria infrastruttura IT multi-sede.",
    facts: [
      ["Settore", "Fashion Retail"],
      ["Dimensione", "Oltre 100 punti vendita"],
      ["Tecnologie", "SD-WAN, VPN, LTE, VoIP"],
      ["Partner", "World.it e iTeamProject"],
    ],
    resultsTitle: "Risultati in sintesi",
    resultsText:
      "Il progetto ha consentito di trasformare un’infrastruttura frammentata in una piattaforma centralizzata, resiliente e scalabile.",
    blocks: [
      {
        title: "Il contesto",
        text: [
          "Una delle principali realtà italiane del Fashion Retail, con oltre cento punti vendita distribuiti sul territorio nazionale e una struttura logistica strategica, si è trovata ad affrontare una problematica comune a molte aziende multi-sede: l’elevata complessità gestionale dell’infrastruttura di rete e comunicazione.",
          "Nel corso degli anni, la crescita dell’organizzazione aveva portato alla stratificazione di fornitori, tecnologie e servizi differenti, generando un ecosistema difficile da governare, costoso da mantenere e poco flessibile rispetto alle nuove esigenze del business.",
        ],
      },
      {
        title: "Le principali criticità",
        text: [
          "Costi ricorrenti elevati per connettività e telefonia, ridondanza non sempre efficace, apparati eterogenei e in parte obsoleti, limitata visibilità centralizzata, tempi elevati di troubleshooting e difficoltà di scalabilità.",
          "L’obiettivo era realizzare una piattaforma moderna capace di garantire livelli di affidabilità comparabili a una rete MPLS tradizionale, eliminandone rigidità e costi.",
        ],
      },
      {
        title: "La sfida",
        text: [
          "L’azienda ha affidato a World.it, con il supporto progettuale e consulenziale di iTeamProject, il compito di ridisegnare completamente il proprio modello di networking.",
          "La richiesta era chiara: creare una rete privata aziendale ad alta affidabilità, resiliente, monitorabile e centralizzata, capace di supportare la crescita futura del business riducendo contemporaneamente il Total Cost of Ownership.",
        ],
      },
      {
        title: "La soluzione implementata",
        text: [
          "È stata progettata una nuova architettura SD-WAN Enterprise basata su un modello Hub & Spoke centralizzato. L’infrastruttura collega oltre cento sedi attraverso tunnel VPN cifrati Always-On verso un’infrastruttura centrale ridondata.",
          "La soluzione comprende Data Center centralizzato, firewall in alta affidabilità, VPN Always-On, gestione cloud centralizzata, segmentazione VLAN, monitoraggio H24, telefonia VoIP centralizzata e backup LTE indipendente per ogni sede.",
        ],
      },
      {
        title: "Continuità Operativa by Design",
        text: [
          "Ogni punto vendita è stato progettato secondo il principio della ridondanza reale. Ogni sede dispone di connettività primaria FTTH/FTTC, backup LTE indipendente, router Enterprise, router LTE dedicato, switch PoE gestiti, WiFi Enterprise, telefonia VoIP e DECT.",
          "In caso di indisponibilità della linea principale, il traffico viene automaticamente instradato sul collegamento secondario senza interruzioni operative significative.",
        ],
      },
      {
        title: "Sicurezza e governance centralizzate",
        text: [
          "La nuova architettura consente al reparto IT di gestire l’intera infrastruttura da un unico punto di controllo, introducendo Next Generation Firewall, Deep Packet Inspection, Intrusion Prevention, Application Control, logging centralizzato, monitoraggio real-time e segmentazione del traffico.",
          "Il risultato è una piattaforma più sicura, più semplice da gestire e maggiormente allineata alle esigenze di compliance aziendale.",
        ],
      },
      {
        title: "L’estensione al polo logistico",
        text: [
          "Successivamente il progetto è stato esteso anche alla struttura logistica gestita da un operatore internazionale.",
          "L’intervento ha previsto nuovo core di rete Enterprise, switching Full-PoE, copertura WiFi industriale, infrastruttura DECT multicella, integrazione con il sistema centrale e ridondanza completa dei collegamenti.",
        ],
      },
      {
        title: "Il ruolo di iTeamProject",
        text: [
          "iTeamProject ha affiancato il cliente e World.it durante tutte le fasi del percorso di trasformazione: assessment tecnico, analisi economica, definizione dei requisiti, disegno architetturale, validazione tecnologica, governance progettuale, coordinamento dei fornitori e supporto alle migrazioni.",
          "L’obiettivo è stato garantire che ogni scelta tecnologica producesse un beneficio concreto e misurabile per il business.",
        ],
      },
      {
        title: "I risultati",
        text: [
          "Il progetto ha consentito di realizzare una piattaforma Enterprise moderna, resiliente e completamente governabile.",
          "I principali benefici ottenuti includono riduzione dei costi infrastrutturali, maggiore autonomia del reparto IT, continuità operativa superiore, standardizzazione delle sedi, maggiore sicurezza, scalabilità e riduzione degli interventi sul campo.",
        ],
      },
    ],
    ctaTitle: "Vuoi valutare un percorso simile per la tua infrastruttura IT?",
    ctaText:
      "Possiamo impostare una prima valutazione operativa senza impegno per analizzare costi, resilienza, governance e scalabilità della tua architettura.",
    ctaButton: "Contatta iTeamProject",
  },
  en: {
    backHome: "Back to Home",
    label: "Case Study",
    title:
      "Over 100 stores, one network: SD-WAN transformation for Fashion Retail",
    intro:
      "How a major Italian Fashion Retail company reduced costs, increased resilience and centralized governance across its multi-site IT infrastructure.",
    facts: [
      ["Industry", "Fashion Retail"],
      ["Scale", "Over 100 stores"],
      ["Technologies", "SD-WAN, VPN, LTE, VoIP"],
      ["Partners", "World.it and iTeamProject"],
    ],
    resultsTitle: "Results at a glance",
    resultsText:
      "The project transformed a fragmented infrastructure into a centralized, resilient and scalable platform.",
    blocks: [
      {
        title: "Context",
        text: [
          "A major Italian Fashion Retail company, with over one hundred stores across the country and a strategic logistics hub, was facing a common challenge for multi-site organizations: the growing operational complexity of its network and communication infrastructure.",
          "Over the years, business growth had led to the layering of different providers, technologies and services, creating an ecosystem that was difficult to govern, expensive to maintain and not flexible enough to support new business requirements.",
        ],
      },
      {
        title: "Key issues",
        text: [
          "High recurring costs for connectivity and telephony, redundancy that was not always effective, heterogeneous and partially obsolete devices, limited centralized visibility, long troubleshooting times and limited scalability.",
          "The objective was to build a modern platform capable of delivering reliability levels comparable to a traditional MPLS network, while removing its rigidity and cost structure.",
        ],
      },
      {
        title: "The challenge",
        text: [
          "The company asked World.it, with design and consulting support from iTeamProject, to completely redesign its networking model.",
          "The requirement was clear: create a highly reliable, resilient, monitorable and centralized private corporate network, able to support future business growth while reducing Total Cost of Ownership.",
        ],
      },
      {
        title: "The implemented solution",
        text: [
          "A new Enterprise SD-WAN architecture was designed using a centralized Hub & Spoke model. The infrastructure connects over one hundred sites through encrypted Always-On VPN tunnels to a redundant central platform.",
          "The solution includes a centralized Data Center, high-availability firewalls, Always-On VPN, centralized cloud management, VLAN segmentation, 24/7 monitoring, centralized VoIP telephony and independent LTE backup for each site.",
        ],
      },
      {
        title: "Business Continuity by Design",
        text: [
          "Each store was designed around real redundancy principles. Every site includes primary FTTH/FTTC connectivity, independent LTE backup, Enterprise router, dedicated LTE router, managed PoE switches, Enterprise WiFi, VoIP telephony and professional DECT.",
          "If the primary line becomes unavailable, traffic is automatically routed to the secondary connection with no significant operational interruption.",
        ],
      },
      {
        title: "Centralized security and governance",
        text: [
          "The new architecture allows the IT department to manage the entire infrastructure from a single control point, introducing Next Generation Firewall, Deep Packet Inspection, Intrusion Prevention, Application Control, centralized logging, real-time monitoring and traffic segmentation.",
          "The result is a safer platform, easier to manage and more aligned with corporate compliance requirements.",
        ],
      },
      {
        title: "Extension to the logistics hub",
        text: [
          "The project was later extended to the logistics facility operated by an international provider.",
          "The intervention included a new Enterprise network core, Full-PoE switching, industrial WiFi coverage, multicell DECT infrastructure, integration with the central system and full link redundancy.",
        ],
      },
      {
        title: "The role of iTeamProject",
        text: [
          "iTeamProject supported the customer and World.it throughout the entire transformation journey: technical assessment, economic analysis, requirements definition, architectural design, technology validation, project governance, vendor coordination and migration support.",
          "The goal was to ensure that every technology decision delivered concrete and measurable business value.",
        ],
      },
      {
        title: "Results",
        text: [
          "The project delivered a modern, resilient and fully governable Enterprise platform.",
          "The main benefits include reduced infrastructure costs, greater IT autonomy, stronger service continuity, site standardization, improved security, better scalability and fewer on-site interventions.",
        ],
      },
    ],
    ctaTitle: "Do you want to assess a similar path for your IT infrastructure?",
    ctaText:
      "We can set up an initial operational assessment with no obligation to analyze costs, resilience, governance and scalability of your architecture.",
    ctaButton: "Contact iTeamProject",
  },
};

export default function FashionRetailSdwanCaseHistoryPage() {
  const [lang, setLang] = useState<Lang>("it");
  const t = useMemo(() => contentByLang[lang], [lang]);
  const kpis = useMemo(() => kpisByLang[lang], [lang]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");

    if (urlLang === "it" || urlLang === "en") {
      setLang(urlLang);
      localStorage.setItem("iteamproject-lang", urlLang);
      return;
    }

    const storedLang = localStorage.getItem("iteamproject-lang");

    if (storedLang === "it" || storedLang === "en") {
      setLang(storedLang);
    }
  }, []);

  const changeLanguage = (nextLang: Lang) => {
    setLang(nextLang);
    localStorage.setItem("iteamproject-lang", nextLang);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLang);
    window.history.replaceState(null, "", url.toString());
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-950 bg-emerald-50/95 backdrop-blur supports-[backdrop-filter]:bg-emerald-50/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <a href={`/?lang=${lang}`} className="flex items-center gap-4 transition hover:opacity-80">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-xl font-bold text-white shadow-sm">
              iT
            </div>
            <div className="text-sm font-medium text-slate-500">
              <span className="font-semibold text-emerald-700">iTeamProject</span> · Your IT project. No stress, just results.
            </div>
          </a>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center rounded-xl border border-emerald-200 bg-white/80 p-1 shadow-sm">
              <button
                type="button"
                onClick={() => changeLanguage("it")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  lang === "it" ? "bg-slate-950 text-white" : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                IT
              </button>
              <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  lang === "en" ? "bg-slate-950 text-white" : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={`/?lang=${lang}`}
              className="rounded-2xl border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              {t.backHome}
            </a>
          </div>
        </div>
      </header>

      <main className="bg-white text-slate-800">
        <section className="border-b border-slate-200 bg-gradient-to-br from-emerald-50/50 via-white to-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              {t.label}
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight leading-tight text-slate-950 sm:text-5xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {t.intro}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.facts.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</div>
                  <div className="mt-2 text-sm font-medium text-slate-800">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                {t.resultsTitle}
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                {t.resultsText}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {kpis.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="mt-2 text-2xl font-semibold text-emerald-700">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-12">
              {t.blocks.map((block) => (
                <Block key={block.title} title={block.title}>
                  {block.text.map((paragraph, index) => (
                    <span key={paragraph}>
                      {paragraph}
                      {index < block.text.length - 1 ? (
                        <>
                          <br />
                          <br />
                        </>
                      ) : null}
                    </span>
                  ))}
                </Block>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl lg:p-12">
            <h2 className="text-3xl font-semibold tracking-tight">
              {t.ctaTitle}
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              {t.ctaText}
            </p>
            <a
              href="mailto:info@iteamproject.it"
              className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-50"
            >
              {t.ctaButton}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-4 leading-8 text-slate-600">{children}</p>
    </article>
  );
}
