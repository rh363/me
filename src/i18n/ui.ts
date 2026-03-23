export const ui = {
  it: {
    'layout.title': 'Alex Massaroni',
    'layout.description': 'Portfolio personale di Alex Massaroni — Sviluppatore Full Stack & Infrastructure Engineer',

    'nav.about': 'Chi sono',
    'nav.projects': 'Progetti',
    'nav.skills': 'Competenze',
    'nav.contacts': 'Contatti',

    'hero.greeting': 'Ciao, mi chiamo',
    'hero.cta': 'Scopri i miei progetti',
    'hero.title': 'Full Stack Developer & Infrastructure Engineer',
    'hero.bio': "Sviluppo applicazioni web e infrastrutture cloud, con passione per l'architettura pulita, l'automazione e i sistemi distribuiti.",

    'about.title': 'Chi Sono',
    'about.p1': "Sono uno sviluppatore e infrastructure engineer con esperienza in ambienti cloud e hosting. Lavoro quotidianamente su backend in Python/Django e Go, frontend in SvelteKit e TypeScript, e gestisco infrastrutture basate su Docker, Kubernetes e Linux. Studio Ingegneria Informatica e Telecomunicazioni all'università, bilanciando lavoro e studio.",
    'about.p2': "Credo nell'architettura esagonale, nei principi SOLID e nelle soluzioni concrete. Quando non scrivo codice, esploro nuove tecnologie, dal mobile con Flutter all'orchestrazione con AI coding tools.",

    'projects.title': 'Progetti',
    'project.1.description': 'Sistema di gestione e storage immagini con task asincroni, backend distribuiti WebDAV, locking distribuito via Redis e architettura esagonale.',
    'project.2.description': "Piattaforma full stack per la gestione di un servizio VPC (Virtual Private Cloud): frontend SPA reattivo per configurazione reti, subnet e risorse, con backend API per orchestrazione dell'infrastruttura sottostante e pipeline CI/CD automatizzate.",
    'project.3.description': 'API worker in Go per operazioni su immagini disco (checksum, editing, cloning) con autenticazione JWT RS256 e orchestrazione tramite task queue.',
    'project.4.description': 'Setup e gestione cluster Kubernetes con Cilium, reverse proxy Traefik con plugin custom in Go, e monitoring Prometheus su Rocky Linux.',
    'project.5.description': 'Integrazione Keycloak/OIDC across multiple services: SSO, token refresh, password reset flows, admin API wrapper.',
    'project.6.description': 'Sistema SSO con frontend componibile tramite postRobot e iframe: autenticazione centralizzata, comunicazione cross-frame sicura e integrazione modulare di micro-frontend.',

    'projectCard.sourceCode': 'Codice sorgente',
    'projectCard.liveDemo': 'Demo live',

    'skills.title': 'Competenze',
    'skills.languages': 'Linguaggi',
    'skills.frameworks': 'Frameworks',
    'skills.infrastructure': 'Infrastruttura',
    'skills.devops': 'DevOps & CI/CD',
    'skills.data': 'Database & Messaging',
    'skills.security': 'Sicurezza & Identità',
    'skills.os': 'Sistemi Operativi',
    'skills.architecture': 'Architettura & Principi',

    'contact.title': 'Contatti',
    'contact.text': 'Hai un progetto interessante o vuoi semplicemente fare due chiacchiere? Non esitare a contattarmi!',
    'contact.cta': 'Scrivimi',

    'lang.switch': 'EN',
  },
  en: {
    'layout.title': 'Alex Massaroni',
    'layout.description': 'Personal portfolio of Alex Massaroni — Full Stack Developer & Infrastructure Engineer',

    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contacts': 'Contact',

    'hero.greeting': "Hi, I'm",
    'hero.cta': 'See my projects',
    'hero.title': 'Full Stack Developer & Infrastructure Engineer',
    'hero.bio': 'I build web applications and cloud infrastructure, with a passion for clean architecture, automation, and distributed systems.',

    'about.title': 'About Me',
    'about.p1': "I'm a developer and infrastructure engineer with experience in cloud and hosting environments. I work daily on backends in Python/Django and Go, frontends in SvelteKit and TypeScript, and manage infrastructure based on Docker, Kubernetes, and Linux. I study Computer and Telecommunications Engineering at university, balancing work and study.",
    'about.p2': "I believe in hexagonal architecture, SOLID principles, and practical solutions. When I'm not writing code, I explore new technologies, from mobile with Flutter to orchestration with AI coding tools.",

    'projects.title': 'Projects',
    'project.1.description': 'Image management and storage system with async tasks, WebDAV distributed backends, Redis distributed locking, and hexagonal architecture.',
    'project.2.description': 'Full stack platform for managing a VPC (Virtual Private Cloud) service: reactive SPA frontend for configuring networks, subnets and resources, with backend API for underlying infrastructure orchestration and automated CI/CD pipelines.',
    'project.3.description': 'Go worker API for disk image operations (checksum, editing, cloning) with JWT RS256 authentication and task queue orchestration.',
    'project.4.description': 'Kubernetes cluster setup and management with Cilium, Traefik reverse proxy with custom Go plugins, and Prometheus monitoring on Rocky Linux.',
    'project.5.description': 'Keycloak/OIDC integration across multiple services: SSO, token refresh, password reset flows, admin API wrapper.',
    'project.6.description': 'SSO system with composable frontend via postRobot and iframes: centralized authentication, secure cross-frame communication, and modular micro-frontend integration.',

    'projectCard.sourceCode': 'Source code',
    'projectCard.liveDemo': 'Live demo',

    'skills.title': 'Skills',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks',
    'skills.infrastructure': 'Infrastructure',
    'skills.devops': 'DevOps & CI/CD',
    'skills.data': 'Databases & Messaging',
    'skills.security': 'Security & Identity',
    'skills.os': 'Operating Systems',
    'skills.architecture': 'Architecture & Principles',

    'contact.title': 'Contact',
    'contact.text': "Have an interesting project or just want to chat? Don't hesitate to reach out!",
    'contact.cta': 'Write to me',

    'lang.switch': 'IT',
  },
} as const;
