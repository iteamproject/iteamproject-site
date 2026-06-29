import type { Locale } from "@/lib/routes";

export type PolicyKind = "privacy" | "cookies";

type PolicySection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  subsections?: {
    title: string;
    text: string;
  }[];
};

export type PolicyContent = {
  title: string;
  updatedAt: string;
  backHome: string;
  sections: PolicySection[];
};

export const policies: Record<PolicyKind, Record<Locale, PolicyContent>> = {
  privacy: {
    it: {
      title: "Privacy Policy",
      updatedAt: "Ultimo aggiornamento: 22 maggio 2026",
      backHome: "Torna alla Home",
      sections: [
        {
          title: "Titolare del trattamento",
          paragraphs: [
            "iTeamProject S.n.c.\nVia Cassia, 4 - 50124 Firenze (FI)\nP. IVA 07518790485\nEmail: info@iteamproject.it\nPEC: iteamproject@pec.it",
          ],
        },
        {
          title: "Tipologia di dati raccolti",
          paragraphs: [
            "Il sito può raccogliere dati tecnici di navigazione, informazioni statistiche anonime, dati eventualmente inviati volontariamente tramite email o strumenti di contatto e dati necessari al corretto funzionamento del sito.",
          ],
        },
        {
          title: "Finalità del trattamento",
          items: [
            "gestione tecnica del sito web;",
            "sicurezza e monitoraggio dell'infrastruttura;",
            "analisi statistiche aggregate;",
            "gestione delle richieste di contatto;",
            "adempimenti normativi e di sicurezza.",
          ],
        },
        {
          title: "Base giuridica",
          paragraphs: [
            "Il trattamento viene effettuato sulla base del legittimo interesse del titolare, dell'eventuale consenso espresso dall'utente e degli obblighi normativi applicabili.",
          ],
        },
        {
          title: "Cookie e strumenti tecnici",
          paragraphs: [
            "Il sito utilizza cookie tecnici e strumenti analytics necessari al funzionamento, alla sicurezza e al miglioramento dei servizi offerti. Per maggiori informazioni è possibile consultare la Cookie Policy.",
          ],
        },
        {
          title: "Conservazione dei dati",
          paragraphs: [
            "I dati vengono conservati per il tempo strettamente necessario alle finalità per cui sono raccolti e nel rispetto delle normative vigenti.",
          ],
        },
        {
          title: "Diritti dell'interessato",
          paragraphs: [
            "Gli utenti possono richiedere accesso, rettifica, cancellazione, limitazione del trattamento o opposizione scrivendo a: info@iteamproject.it.",
          ],
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      updatedAt: "Last updated: May 22, 2026",
      backHome: "Back to Home",
      sections: [
        {
          title: "Data controller",
          paragraphs: [
            "iTeamProject S.n.c.\nVia Cassia, 4 - 50124 Firenze (FI), Italy\nVAT ID 07518790485\nEmail: info@iteamproject.it\nPEC: iteamproject@pec.it",
          ],
        },
        {
          title: "Types of data collected",
          paragraphs: [
            "The website may collect technical browsing data, anonymous statistical information, data voluntarily sent by email or contact tools, and data required for the correct operation of the website.",
          ],
        },
        {
          title: "Purposes of processing",
          items: [
            "technical management of the website;",
            "security and infrastructure monitoring;",
            "aggregated statistical analysis;",
            "management of contact requests;",
            "legal and security compliance.",
          ],
        },
        {
          title: "Legal basis",
          paragraphs: [
            "Processing is carried out on the basis of the controller's legitimate interest, any consent provided by the user, and applicable legal obligations.",
          ],
        },
        {
          title: "Cookies and technical tools",
          paragraphs: [
            "The website uses technical cookies and analytics tools required for operation, security, and service improvement. More information is available in the Cookie Policy.",
          ],
        },
        {
          title: "Data retention",
          paragraphs: [
            "Data is retained only for the time necessary for the purposes for which it is collected and in compliance with applicable regulations.",
          ],
        },
        {
          title: "Data subject rights",
          paragraphs: [
            "Users may request access, rectification, deletion, restriction of processing or objection by writing to: info@iteamproject.it.",
          ],
        },
      ],
    },
  },
  cookies: {
    it: {
      title: "Cookie Policy",
      updatedAt: "Ultimo aggiornamento: 22 maggio 2026",
      backHome: "Torna alla Home",
      sections: [
        {
          title: "Cosa sono i cookie",
          paragraphs: [
            "I cookie sono piccoli file di testo che i siti web possono memorizzare sul dispositivo dell'utente per garantire il corretto funzionamento del sito, migliorare l'esperienza di navigazione e raccogliere informazioni statistiche aggregate.",
          ],
        },
        {
          title: "Tipologie di cookie utilizzati",
          subsections: [
            {
              title: "Cookie tecnici",
              text: "Sono necessari per il corretto funzionamento del sito e non richiedono il consenso dell'utente.",
            },
            {
              title: "Cookie di preferenza",
              text: "Possono essere utilizzati per memorizzare preferenze espresse dall'utente, come la scelta relativa al consenso cookie.",
            },
            {
              title: "Cookie analytics",
              text: "Possono essere utilizzati per raccogliere statistiche aggregate sull'utilizzo del sito, con finalità di analisi, sicurezza e miglioramento delle performance.",
            },
          ],
        },
        {
          title: "Strumenti di terze parti",
          paragraphs: [
            "Il sito può utilizzare strumenti forniti da terze parti, tra cui servizi di hosting, sicurezza, analytics e monitoraggio tecnico. Tali strumenti possono trattare dati tecnici di navigazione in forma aggregata o pseudonimizzata.",
          ],
        },
        {
          title: "Gestione del consenso",
          paragraphs: [
            "L'utente può accettare o rifiutare i cookie non essenziali tramite il banner cookie presente sul sito. La scelta viene memorizzata localmente nel browser dell'utente.",
          ],
        },
        {
          title: "Come modificare le preferenze",
          paragraphs: [
            "È possibile modificare o cancellare le preferenze cookie eliminando i dati di navigazione del browser oppure cancellando i dati locali relativi al sito.",
          ],
        },
        {
          title: "Contatti",
          paragraphs: [
            "Per richieste relative alla gestione dei cookie o al trattamento dei dati personali è possibile scrivere a: info@iteamproject.it.",
          ],
        },
      ],
    },
    en: {
      title: "Cookie Policy",
      updatedAt: "Last updated: May 22, 2026",
      backHome: "Back to Home",
      sections: [
        {
          title: "What cookies are",
          paragraphs: [
            "Cookies are small text files that websites can store on the user's device to ensure the website works correctly, improve browsing experience, and collect aggregated statistical information.",
          ],
        },
        {
          title: "Types of cookies used",
          subsections: [
            {
              title: "Technical cookies",
              text: "They are necessary for the correct operation of the website and do not require user consent.",
            },
            {
              title: "Preference cookies",
              text: "They may be used to store preferences expressed by the user, such as the cookie consent choice.",
            },
            {
              title: "Analytics cookies",
              text: "They may be used to collect aggregated statistics about website usage for analysis, security, and performance improvement purposes.",
            },
          ],
        },
        {
          title: "Third-party tools",
          paragraphs: [
            "The website may use tools provided by third parties, including hosting, security, analytics, and technical monitoring services. These tools may process technical browsing data in aggregated or pseudonymized form.",
          ],
        },
        {
          title: "Consent management",
          paragraphs: [
            "Users can accept or reject non-essential cookies through the cookie banner available on the website. The choice is stored locally in the user's browser.",
          ],
        },
        {
          title: "How to change preferences",
          paragraphs: [
            "Cookie preferences can be changed or deleted by clearing browser data or deleting local data related to this website.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "For requests related to cookie management or personal data processing, users can write to: info@iteamproject.it.",
          ],
        },
      ],
    },
  },
};
