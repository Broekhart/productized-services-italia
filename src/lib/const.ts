import Community from '../components/ui/illustrations/community.astro';
import Jobs from '../components/ui/illustrations/jobs.astro';
import Course from '../components/ui/illustrations/course.astro';
import PinkMascotte from '../components/ui/illustrations/pink-mascotte.astro';
import PurpleMascotte from '../components/ui/illustrations/purple-mascotte.astro';
import YellowMascotte from '../components/ui/illustrations/yellow-mascotte.astro';

export const NAV_LINKS = [
  { label: 'Community', href: '#' },
  { label: 'Corso', href: '#' },
  { label: 'Lavoro', href: '#' },
  { label: 'FAQ', href: '#' },
];

export const ROWS: {
  label: string;
  telegram: string | 'check' | 'cross';
  skool: string | 'check' | 'cross';
}[] = [
  { label: 'Accesso', telegram: 'Gratuito', skool: 'Abbonamento mensile' },
  {
    label: 'Community',
    telegram: 'Chat libera con 250+ membri',
    skool: 'Spazio strutturato, classifiche, percorsi',
  },
  { label: 'Bacheca lavoro', telegram: 'cross', skool: 'check' },
  { label: 'Corso "Servizi Prodottizzati"', telegram: 'cross', skool: 'check' },
  { label: 'Workation', telegram: 'Annunci pubblici', skool: 'Accesso prioritario ai posti' },
  { label: 'Supporto/feedback diretto', telegram: 'Informale', skool: 'Strutturato' },
];

export const WIDE_MODULES = [
  {
    number: '01',
    bg: '/images/purple-bg-patch.webp',
    title: 'Introduzione ai Productized Services',
    body: 'Scopri il modello e cosa rende un servizio realmente productized.',
  },
  {
    number: '02',
    bg: '/images/red-bg-patch.webp',
    title: 'Productizza il tuo servizio',
    body: "Trasforma la tua esperienza in un'offerta chiara e strutturata.",
  },
];

export const NARROW_MODULES = [
  {
    number: '03',
    bg: '/images/lemon-bg-patch.webp',
    title: 'Come distinguerti su LinkedIn',
    body: 'Costruisci un posizionamento forte e raggiungi le persone giuste.',
  },
  {
    number: '04',
    bg: '/images/blue-bg-patch.webp',
    title: 'Acquisizione clienti',
    body: 'Impara a trovare prospect e trasformare le conversazioni in clienti.',
  },
  {
    number: '05',
    bg: '/images/black-bg-patch.webp',
    title: 'Onboarding e fidelizzazione',
    body: "Crea un'esperienza cliente solida e costruisci relazioni durature.",
    numberClass: 'text-white/20 group-hover:text-white',
  },
];

export const FAQS = [
  {
    question: 'Cos\'è "servizi prodottizzati"?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Felis hendrerit tempor felis vestibulum facilisi. Id in sapien ut integer.',
  },
  {
    question: 'Devo già avere un servizio prodottizzato per entrare?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Felis hendrerit tempor felis vestibulum facilisi. Id in sapien ut integer.',
  },
  {
    question: 'Cosa differenzia Skool dal gruppo Telegram gratuito?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Felis hendrerit tempor felis vestibulum facilisi. Id in sapien ut integer.',
  },
  {
    question: "Posso annullare l'abbonamento quando voglio?",
    answer:
      'Lorem ipsum dolor sit amet consectetur. Felis hendrerit tempor felis vestibulum facilisi. Id in sapien ut integer.',
  },
];

export const METHOD_ITEMS = [
  'Full-time o part-time: cosa scegliere',
  'Costruire da solo o in team',
  'Tenerlo semplice: il principio ASAP',
  'Posizionarti senza bisogno di un grande pubblico',
  'Definire i tuoi package e il pricing',
  'Costruire un portfolio credibile',
  'Trovare il primo cliente',
  'Vendere senza fare call infinite',
  'Gli errori più comuni da evitare',
  'Gestire i pagamenti e i rinnovi',
];

export const METHOD_COLUMNS = [METHOD_ITEMS.slice(0, 5), METHOD_ITEMS.slice(5, 10)];

export const OPPORTUNITY_PILLS = [
  { icon: '/images/search-icon.webp', text: 'Cerco un partner per la parte di delivery del mio servizio' },
  { icon: '/images/users-icon.webp', text: 'Sto assumendo un secondo membro nel mio team' },
  { icon: '/images/office-icon.webp', text: 'Cliente in cerca di un servizio prodottizzato per [settore]' },
];

export const OPPORTUNITY_TESTIMONIALS = [
  {
    initials: 'E',
    color: '#FA5A6E',
    name: 'Emanuele',
    quote:
      "Ciao a tutti, ho un cliente che ha uno store Shopify e sta cercando una figura che lo possa supportare nelle piccole modifiche o anche semplicemente quando c'è bisogno di fare qualche aggiornamento o se dovesse avere qualche problema/problematiche. Insomma, di base si tratta probabilmente di un contratto di manutenzione sullo Store. Per caso qualcuno di voi conosce qualcuno o è interessato a questa cosa?",
  },
  {
    initials: 'AB',
    color: '#D1DF64',
    name: 'Alessandro B',
    quote:
      'Ciao ragazzi. Ho un potenziale cliente che mi ha chiamato per dare loro una mano. Startup costituita (srl) che vorrebbe creare prodotto. Hanno un buon inizio di funzionalità ma devono concentrarsi sulla creazione del prodotto lasciando il codice a un terzo. Cercano full stack dev per: CTO che prenda anche responsabilità…..',
  },
  {
    initials: 'SV',
    color: '#B44EEB',
    name: 'Sofia Vicedomini',
    quote:
      "Ciao Ragazzi! Per una startup che sto seguendo gratuitamente: Figma già realizzato da un designer, principio di app in React native, per il backend stavamo pensando a Nodejs (Nest). C'è qualcuno che voglia entrare come CTO e prendere le quote? l'obiettivo è fare l'MVP, portarlo ad un angel / venture capital e far il primo round di investimento…..",
  },
  {
    initials: 'S',
    color: '#69DBFC',
    name: 'Stefano',
    quote:
      "Ciao a tutti sono alla ricerca di uno sviluppatore web Full-Stack per lo sviluppo di Corsi al Cubo, una piattaforma pensata per supportare gli studenti nella preparazione ai test d'ammissione universitari (attualmente focalizzata su Bocconi). Il progetto ha già una Brand identity solida e definita e gli aspetti legali (privacy, termini e condizioni) sono già coperti. Cerco preferibilmente un CTO o un profilo..",
  },
];

export const MONTHLY_FEATURES = [
  'Accesso completo alla community',
  'Corso completo incluso',
  'Tutti i 5 moduli',
  'Accesso al network e alle opportunità',
  'Telegram gratuito',
];

export const ANNUAL_FEATURES = [
  'Risparmia 2 mesi con il piano annuale.',
  'Accesso completo alla community',
  'Corso completo incluso',
  'Tutti i 5 moduli',
  'Accesso al network e alle opportunità',
  'Telegram gratuito',
];

export const PROBLEM_CARDS = [
  {
    number: '01',
    title: 'Isolamento',
    body: 'Nessuno intorno a te capisce davvero cosa significa lavorare ad abbonamento. Ti confronti solo con freelance "a progetto" o agenzie tradizionali.',
    icon: YellowMascotte,
    glow: '#D1DF64',
  },
  {
    number: '02',
    title: 'Nessuna rete',
    body: 'Non sai dove trovare i primi clienti, un collaboratore di fiducia, o qualcuno con cui fare partnership. Ogni opportunità la devi costruire da zero.',
    icon: PinkMascotte,
    glow: '#FA5A6E',
  },
  {
    number: '03',
    title: 'Nessun metodo',
    body: "Hai idee, ma manca un percorso chiaro: come strutturare l'offerta, il pricing, l'onboarding, senza reinventare la ruota.",
    icon: PurpleMascotte,
    glow: '#A855F7',
  },
];

export const STATS_CARDS = [
  {
    value: '100+',
    label: 'membri attivi',
    cardClass: "bg-[url('/images/bg-spiral.webp')] bg-cover bg-center text-white",
  },
  {
    value: '1 - 2',
    label: "workation all'anno",
    cardClass: 'bg-[#D1DF64] text-black',
  },
  {
    value: '2',
    label: 'offerte di lavoro condivise ogni mese',
    cardClass: "bg-[url('/images/bg-spiral-violet.webp')] bg-cover bg-center text-white",
  },
];

export const TESTIMONIALS = [
  {
    avatar: '/images/sean.webp',
    name: 'Sean Rose',
    role: 'Direttore Commerciale, Azienda Tecnologica',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Felis hendrerit tempor felis vestibulum facilisi. Id in sapien ut integer. Cras a etiam in sem luctus nisl vitae vel vitae.',
    rating: 4,
  },
  {
    avatar: '/images/dimetria.webp',
    name: 'Demetria Giles',
    role: 'Fondatore, Agenzia di Marketing',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Felis hendrerit tempor felis vestibulum facilisi. Id in sapien ut integer. Cras a etiam in sem luctus nisl vitae vel vitae.',
    rating: 5,
  },
  {
    avatar: '/images/ryan.webp',
    name: 'Ryan Delk',
    role: 'Partner, Società di Servizi Professionali',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Felis hendrerit tempor felis vestibulum facilisi. Id in sapien ut integer. Cras a etiam in sem luctus nisl vitae vel vitae.',
    rating: 4,
  },
];

export const TOUR_IMAGES = [
  '/images/tour1.webp',
  '/images/tour2.webp',
  '/images/tour3.webp',
  '/images/tour4.webp',
];

export const WHATS_INSIDE_CARDS = [
  {
    illustration: Community,
    title: 'Community',
    color: 'cyan',
    body: "Confrontati ogni giorno con 250+ professionisti che stanno costruendo lo stesso modello di business. Domande, feedback, partnership, amicizie — e i workation in giro per l'Europa per conoscersi davvero.",
  },
  {
    illustration: Jobs,
    title: 'Offerte di lavoro',
    color: 'violet-dark',
    body: 'Dentro alla parte paid trovi una bacheca con opportunità riservate ai membri: collaborazioni, clienti in cerca di servizi prodottizzati, posizioni aperte da altri membri della community.',
  },
  {
    illustration: Course,
    title: 'Corso',
    color: 'yellow-dark',
    body: 'Il percorso passo passo per lanciare, prezzare e scalare il tuo servizio ad abbonamento — dalla prima offerta al primo cliente ricorrente.',
  },
] as const;
