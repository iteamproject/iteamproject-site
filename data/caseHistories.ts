import { routes, type Locale } from "@/lib/routes";

export type CaseHistorySlug =
  | "fashion-retail-sdwan"
  | "it-governance-service-management";

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
  "it-governance-service-management": {
    it: {
      slug: "it-governance-service-management",
      path: routes.caseHistories.itGovernanceServiceManagement,
      listing: {
        category: "IT Governance Multi-Fornitore",
        title: "Governance e service management per un IT più controllabile",
        excerpt:
          "Come un'azienda con più fornitori IT ha introdotto ruoli, SLA, KPI, escalation e reporting per ridurre attriti operativi e migliorare il controllo dei servizi.",
        kpis: [
          { value: "4", label: "Aree di controllo" },
          { value: "SLA/KPI", label: "Reporting servizi" },
          { value: "1", label: "Modello operativo" },
        ],
      },
      detail: {
        label: "Case History",
        title: "Governance IT e Service Management per un contesto multi-fornitore",
        intro:
          "Un percorso di assessment e riorganizzazione operativa per rendere più chiari responsabilità, livelli di servizio, escalation e controllo dei fornitori IT.",
        facts: [
          { label: "Settore", value: "Servizi / Organizzazione multi-fornitore" },
          { label: "Dimensione", value: "Azienda strutturata con sedi e fornitori esterni" },
          { label: "Ambiti", value: "Governance IT, SLA, KPI, escalation, reporting" },
          { label: "Ruolo", value: "Assessment, modello operativo e coordinamento" },
        ],
        resultsTitle: "Risultati in sintesi",
        resultsText:
          "Il progetto ha trasformato un modello operativo poco formalizzato in un sistema di governance più leggibile, misurabile e coordinato.",
        kpis: [
          { label: "Responsabilità operative", value: "più chiare" },
          { label: "SLA e KPI", value: "definiti" },
          { label: "Escalation", value: "standardizzate" },
          { label: "Reporting", value: "mensile" },
          { label: "Fornitori", value: "coordinati" },
          { label: "Rischi operativi", value: "tracciati" },
        ],
        blocks: [
          {
            title: "Il contesto",
            text: [
              "L'azienda gestiva servizi IT critici attraverso un ecosistema composto da team interni, fornitori infrastrutturali, partner applicativi e servizi gestiti esterni.",
              "La crescita progressiva del perimetro aveva reso più complesso capire chi fosse responsabile di ogni attività, quali tempi di risposta fossero attesi e come misurare in modo coerente la qualità del servizio.",
            ],
          },
          {
            title: "Le principali criticità",
            text: [
              "Le attività operative erano spesso gestite con logiche diverse tra fornitori, senza un modello condiviso per priorità, presa in carico, escalation e chiusura delle richieste.",
              "Il management disponeva di informazioni frammentate: dati tecnici, ticket e aggiornamenti periodici non erano sempre collegati a indicatori utili per governare costi, rischi e qualità del servizio.",
            ],
          },
          {
            title: "La sfida",
            text: [
              "L'obiettivo era costruire un modello di governance pratico, sostenibile e non burocratico, capace di aumentare il controllo senza rallentare l'operatività quotidiana.",
              "Il lavoro doveva armonizzare fornitori già attivi, processi esistenti e responsabilità interne, evitando una riscrittura completa dell'organizzazione IT.",
            ],
          },
          {
            title: "La soluzione implementata",
            text: [
              "iTeamProject ha condotto un assessment operativo sui principali flussi di lavoro, mappando servizi, fornitori, responsabilità, livelli di criticità, strumenti utilizzati e punti di escalation.",
              "Su questa base è stato definito un modello di governance con ruoli chiari, matrice delle responsabilità, criteri di priorità, SLA/KPI essenziali, calendario di reporting e momenti ricorrenti di controllo.",
            ],
          },
          {
            title: "Il modello operativo",
            text: [
              "Il nuovo modello ha introdotto una distinzione più netta tra gestione operativa, controllo del servizio, decisioni di governance e coordinamento dei fornitori.",
              "Le attività ricorrenti sono state ricondotte a un ciclo semplice: richiesta, presa in carico, gestione, escalation quando necessaria, chiusura, misurazione e revisione periodica.",
            ],
          },
          {
            title: "Reporting e controllo",
            text: [
              "Il reporting è stato semplificato in un set di indicatori leggibili dal management: volumi, priorità, tempi di risposta, backlog, incidenti ricorrenti, azioni correttive e rischi aperti.",
              "Questo ha permesso di spostare la discussione da singoli problemi operativi a una vista più strutturata su qualità del servizio, responsabilità e decisioni da prendere.",
            ],
          },
          {
            title: "Il ruolo di iTeamProject",
            text: [
              "iTeamProject ha supportato assessment, disegno del modello, facilitazione dei tavoli con i fornitori, impostazione dei KPI e definizione delle routine di controllo.",
              "L'approccio è stato volutamente pragmatico: poche regole chiare, responsabilità esplicite e strumenti già compatibili con l'operatività del cliente.",
            ],
          },
          {
            title: "I risultati",
            text: [
              "Il cliente ha ottenuto maggiore visibilità sui servizi IT, una gestione più ordinata dei fornitori e un linguaggio comune per discutere priorità, livelli di servizio e rischi.",
              "Il modello ha ridotto ambiguità operative e attriti decisionali, creando una base più solida per evoluzioni future su IT Service Management, audit e controllo della delivery.",
            ],
          },
        ],
        ctaTitle: "Vuoi rendere più governabile il tuo ecosistema IT?",
        ctaText:
          "Possiamo analizzare servizi, fornitori, responsabilità e flussi operativi per costruire un modello di governance semplice, misurabile e sostenibile.",
        ctaButton: "Parla con iTeamProject",
      },
    },
    en: {
      slug: "it-governance-service-management",
      path: routes.caseHistories.itGovernanceServiceManagement,
      listing: {
        category: "Multi-Vendor IT Governance",
        title: "Governance and service management for a more controllable IT model",
        excerpt:
          "How a multi-vendor organization introduced roles, SLAs, KPIs, escalation paths and reporting to reduce operational friction and improve IT service control.",
        kpis: [
          { value: "4", label: "Control areas" },
          { value: "SLA/KPI", label: "Service reporting" },
          { value: "1", label: "Operating model" },
        ],
      },
      detail: {
        label: "Case Study",
        title: "IT Governance and Service Management for a multi-vendor environment",
        intro:
          "An assessment and operating model redesign to clarify responsibilities, service levels, escalation paths and vendor control.",
        facts: [
          { label: "Industry", value: "Services / Multi-vendor organization" },
          { label: "Scale", value: "Structured company with sites and external providers" },
          { label: "Scope", value: "IT Governance, SLAs, KPIs, escalation, reporting" },
          { label: "Role", value: "Assessment, operating model and coordination" },
        ],
        resultsTitle: "Results at a glance",
        resultsText:
          "The project turned a loosely formalized operating model into a clearer, measurable and better coordinated governance system.",
        kpis: [
          { label: "Operational responsibilities", value: "clearer" },
          { label: "SLAs and KPIs", value: "defined" },
          { label: "Escalation paths", value: "standardized" },
          { label: "Reporting", value: "monthly" },
          { label: "Vendors", value: "coordinated" },
          { label: "Operational risks", value: "tracked" },
        ],
        blocks: [
          {
            title: "Context",
            text: [
              "The company managed critical IT services through an ecosystem of internal teams, infrastructure providers, application partners and external managed services.",
              "As the IT perimeter expanded, it became harder to understand who was responsible for each activity, which response times were expected and how service quality should be measured consistently.",
            ],
          },
          {
            title: "Key issues",
            text: [
              "Operational work was often managed differently across providers, without a shared model for priorities, ownership, escalation and request closure.",
              "Management had fragmented information: technical data, tickets and periodic updates were not always connected to indicators useful for governing cost, risk and service quality.",
            ],
          },
          {
            title: "The challenge",
            text: [
              "The goal was to build a practical, sustainable and non-bureaucratic governance model that improved control without slowing down day-to-day operations.",
              "The work had to align existing vendors, processes and internal responsibilities without forcing a full redesign of the IT organization.",
            ],
          },
          {
            title: "The implemented solution",
            text: [
              "iTeamProject carried out an operational assessment of the main workstreams, mapping services, vendors, responsibilities, criticality levels, tools and escalation points.",
              "Based on this assessment, a governance model was defined with clear roles, a responsibility matrix, priority criteria, essential SLAs/KPIs, a reporting calendar and recurring control routines.",
            ],
          },
          {
            title: "The operating model",
            text: [
              "The new model introduced a clearer distinction between operations, service control, governance decisions and vendor coordination.",
              "Recurring activities were structured into a simple cycle: request, ownership, execution, escalation when needed, closure, measurement and periodic review.",
            ],
          },
          {
            title: "Reporting and control",
            text: [
              "Reporting was simplified into a set of indicators readable by management: volumes, priorities, response times, backlog, recurring incidents, corrective actions and open risks.",
              "This shifted discussions from isolated operational issues to a more structured view of service quality, responsibilities and decisions to be made.",
            ],
          },
          {
            title: "The role of iTeamProject",
            text: [
              "iTeamProject supported the assessment, model design, vendor workshops, KPI setup and definition of control routines.",
              "The approach was intentionally pragmatic: a limited set of clear rules, explicit responsibilities and tools already compatible with the customer's operations.",
            ],
          },
          {
            title: "Results",
            text: [
              "The customer gained better visibility over IT services, more orderly vendor management and a shared language for discussing priorities, service levels and risks.",
              "The model reduced operational ambiguity and decision friction, creating a stronger foundation for future evolution in IT Service Management, audit and delivery control.",
            ],
          },
        ],
        ctaTitle: "Do you want to make your IT ecosystem easier to govern?",
        ctaText:
          "We can analyze services, vendors, responsibilities and operating flows to build a governance model that is simple, measurable and sustainable.",
        ctaButton: "Talk to iTeamProject",
      },
    },
  },
};

export const caseHistoryList = (locale: Locale) =>
  Object.values(caseHistories).map((caseHistory) => caseHistory[locale]);
