import { routes, type Locale } from "@/lib/routes";

export type CaseHistorySlug = "fashion-retail-sdwan";

export type CaseHistoryContent = {
  slug: CaseHistorySlug;
  path: Record<Locale, string>;
  listing: {
    category: string;
    title: string;
    excerpt: string;
    kpis: {
      value: string;
      label: string;
    }[];
  };
  detail: {
    label: string;
    title: string;
    intro: string;
    facts: {
      label: string;
      value: string;
    }[];
    resultsTitle: string;
    resultsText: string;
    kpis: {
      label: string;
      value: string;
    }[];
    blocks: {
      title: string;
      text: string[];
    }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
};

export const caseHistories: Record<
  CaseHistorySlug,
  Record<Locale, CaseHistoryContent>
> = {
  "fashion-retail-sdwan": {
    it: {
      slug: "fashion-retail-sdwan",
      path: routes.caseHistories.fashionRetailSdwan,
      listing: {
        category: "Fashion Retail Multi-Sede",
        title: "Oltre 100 punti vendita, una sola rete",
        excerpt:
          "Come una primaria azienda italiana del Fashion Retail ha ridotto i costi IT e aumentato la resilienza con una nuova architettura SD-WAN Enterprise.",
        kpis: [
          { value: "40%", label: "Riduzione TCO" },
          { value: "99,9%", label: "Disponibilità" },
          { value: "100+", label: "Punti vendita" },
        ],
      },
      detail: {
        label: "Case History",
        title:
          "Oltre 100 punti vendita, una sola rete: trasformazione SD-WAN per il Fashion Retail",
        intro:
          "Come una primaria azienda italiana del Fashion Retail ha ridotto i costi, aumentato la resilienza e centralizzato la governance della propria infrastruttura IT multi-sede.",
        facts: [
          { label: "Settore", value: "Fashion Retail" },
          { label: "Dimensione", value: "Oltre 100 punti vendita" },
          { label: "Tecnologie", value: "SD-WAN, VPN, LTE, VoIP" },
          { label: "Partner", value: "World.it e iTeamProject" },
        ],
        resultsTitle: "Risultati in sintesi",
        resultsText:
          "Il progetto ha consentito di trasformare un'infrastruttura frammentata in una piattaforma centralizzata, resiliente e scalabile.",
        kpis: [
          { label: "Riduzione TCO", value: "fino al 40%" },
          { label: "Disponibilità infrastruttura", value: ">99,9%" },
          { label: "Riduzione interventi on-site", value: "fino al 70%" },
          { label: "Failover connettività", value: "automatico" },
          { label: "Visibilità infrastrutturale", value: "centralizzata" },
          { label: "Gestione sicurezza", value: "unificata" },
          { label: "Scalabilità nuove sedi", value: "immediata" },
          { label: "Standardizzazione sedi", value: "100%" },
        ],
        blocks: [
          {
            title: "Il contesto",
            text: [
              "Una delle principali realtà italiane del Fashion Retail, con oltre cento punti vendita distribuiti sul territorio nazionale e una struttura logistica strategica, si è trovata ad affrontare una problematica comune a molte aziende multi-sede: l'elevata complessità gestionale dell'infrastruttura di rete e comunicazione.",
              "Nel corso degli anni, la crescita dell'organizzazione aveva portato alla stratificazione di fornitori, tecnologie e servizi differenti, generando un ecosistema difficile da governare, costoso da mantenere e poco flessibile rispetto alle nuove esigenze del business.",
            ],
          },
          {
            title: "Le principali criticità",
            text: [
              "Costi ricorrenti elevati per connettività e telefonia, ridondanza non sempre efficace, apparati eterogenei e in parte obsoleti, limitata visibilità centralizzata, tempi elevati di troubleshooting e difficoltà di scalabilità.",
              "L'obiettivo era realizzare una piattaforma moderna capace di garantire livelli di affidabilità comparabili a una rete MPLS tradizionale, eliminandone rigidità e costi.",
            ],
          },
          {
            title: "La sfida",
            text: [
              "L'azienda ha affidato a World.it, con il supporto progettuale e consulenziale di iTeamProject, il compito di ridisegnare completamente il proprio modello di networking.",
              "La richiesta era chiara: creare una rete privata aziendale ad alta affidabilità, resiliente, monitorabile e centralizzata, capace di supportare la crescita futura del business riducendo contemporaneamente il Total Cost of Ownership.",
            ],
          },
          {
            title: "La soluzione implementata",
            text: [
              "È stata progettata una nuova architettura SD-WAN Enterprise basata su un modello Hub & Spoke centralizzato. L'infrastruttura collega oltre cento sedi attraverso tunnel VPN cifrati Always-On verso un'infrastruttura centrale ridondata.",
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
              "La nuova architettura consente al reparto IT di gestire l'intera infrastruttura da un unico punto di controllo, introducendo Next Generation Firewall, Deep Packet Inspection, Intrusion Prevention, Application Control, logging centralizzato, monitoraggio real-time e segmentazione del traffico.",
              "Il risultato è una piattaforma più sicura, più semplice da gestire e maggiormente allineata alle esigenze di compliance aziendale.",
            ],
          },
          {
            title: "L'estensione al polo logistico",
            text: [
              "Successivamente il progetto è stato esteso anche alla struttura logistica gestita da un operatore internazionale.",
              "L'intervento ha previsto nuovo core di rete Enterprise, switching Full-PoE, copertura WiFi industriale, infrastruttura DECT multicella, integrazione con il sistema centrale e ridondanza completa dei collegamenti.",
            ],
          },
          {
            title: "Il ruolo di iTeamProject",
            text: [
              "iTeamProject ha affiancato il cliente e World.it durante tutte le fasi del percorso di trasformazione: assessment tecnico, analisi economica, definizione dei requisiti, disegno architetturale, validazione tecnologica, governance progettuale, coordinamento dei fornitori e supporto alle migrazioni.",
              "L'obiettivo è stato garantire che ogni scelta tecnologica producesse un beneficio concreto e misurabile per il business.",
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
    },
    en: {
      slug: "fashion-retail-sdwan",
      path: routes.caseHistories.fashionRetailSdwan,
      listing: {
        category: "Multi-Site Fashion Retail",
        title: "Over 100 stores, one network",
        excerpt:
          "How a major Italian Fashion Retail company reduced IT costs and increased infrastructure resilience through a new Enterprise SD-WAN architecture.",
        kpis: [
          { value: "40%", label: "TCO reduction" },
          { value: "99.9%", label: "Availability" },
          { value: "100+", label: "Stores" },
        ],
      },
      detail: {
        label: "Case Study",
        title: "Over 100 stores, one network: SD-WAN transformation for Fashion Retail",
        intro:
          "How a major Italian Fashion Retail company reduced costs, increased resilience and centralized governance across its multi-site IT infrastructure.",
        facts: [
          { label: "Industry", value: "Fashion Retail" },
          { label: "Scale", value: "Over 100 stores" },
          { label: "Technologies", value: "SD-WAN, VPN, LTE, VoIP" },
          { label: "Partners", value: "World.it and iTeamProject" },
        ],
        resultsTitle: "Results at a glance",
        resultsText:
          "The project transformed a fragmented infrastructure into a centralized, resilient and scalable platform.",
        kpis: [
          { label: "TCO reduction", value: "up to 40%" },
          { label: "Infrastructure availability", value: ">99.9%" },
          { label: "Reduction of on-site interventions", value: "up to 70%" },
          { label: "Connectivity failover", value: "automatic" },
          { label: "Infrastructure visibility", value: "centralized" },
          { label: "Security management", value: "unified" },
          { label: "New site scalability", value: "immediate" },
          { label: "Site standardization", value: "100%" },
        ],
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
    },
  },
};

export const caseHistoryList = (locale: Locale) =>
  Object.values(caseHistories).map((caseHistory) => caseHistory[locale]);
