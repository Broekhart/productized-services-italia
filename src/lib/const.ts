import Community from "../components/ui/illustrations/community.astro";
import Course from "../components/ui/illustrations/course.astro";
import Jobs from "../components/ui/illustrations/jobs.astro";
import PinkMascotte from "../components/ui/illustrations/pink-mascotte.astro";
import PurpleMascotte from "../components/ui/illustrations/purple-mascotte.astro";
import YellowMascotte from "../components/ui/illustrations/yellow-mascotte.astro";

export const NAV_LINKS = [
	{ label: "Storia", href: "#storia" },
	{ label: "Community", href: "#community" },
	{ label: "Corso", href: "#corso" },
	{ label: "Lavoro", href: "#lavoro" },
	{ label: "FAQ", href: "#faq" },
];

export const LEGAL_LINKS = [
	{ label: "Privacy", href: "/privacy" },
	{ label: "Cookie", href: "/cookie" },
];

export const ROWS: {
	label: string;
	telegram: string | "check" | "cross";
	skool: string | "check" | "cross";
}[] = [
	{ label: "Accesso", telegram: "Gratuito", skool: "Abbonamento" },
	{
		label: "Community",
		telegram: "Chat libera con 250+ membri",
		skool: "Spazio strutturato, classifiche, percorsi",
	},
	{ label: "Bacheca lavoro", telegram: "cross", skool: "check" },
	{ label: 'Corso "Servizi prodottizzati"', telegram: "cross", skool: "check" },
	{
		label: "Workation",
		telegram: "Annunci pubblici",
		skool: "Accesso prioritario ai posti",
	},
	{
		label: "Supporto/feedback diretto",
		telegram: "Informale",
		skool: "Strutturato",
	},
];

export const WIDE_MODULES = [
	{
		number: "01",
		bg: "/images/purple-bg-patch.webp",
		title: "Introduzione ai servizi prodottizzati",
		body: "La mia storia, esempi concreti e i primi passi per iniziare.",
	},
	{
		number: "02",
		bg: "/images/red-bg-patch.webp",
		title: "Productizza il tuo servizio",
		body: "Unbundling, formati di vendita, scope e discovery offer per costruire la tua offerta.",
	},
];

export const NARROW_MODULES = [
	{
		number: "03",
		bg: "/images/lemon-bg-patch.webp",
		title: "Come emergere su LinkedIn",
		body: "Ottimizza il profilo, crea una strategia, pubblica contenuti e organizza il CRM.",
	},
	{
		number: "04",
		bg: "/images/blue-bg-patch.webp",
		title: "Vendita dei servizi prodottizzati",
		body: "Warm e cold outreach, chiamate di vendita e sales deck per acquisire clienti.",
	},
	{
		number: "05",
		bg: "/images/black-bg-patch.webp",
		title: "Gestione dei clienti",
		body: "Onboarding, gestione operativa, casi studio, fidelizzazione, upsell e referral.",
		numberClass: "text-white/20 group-hover:text-white",
	},
];

export const FAQS = [
	{
		question: "Cos’è un servizio prodottizzato?",
		answer:
			"È un servizio con un’offerta, un perimetro e un prezzo chiari, progettato per essere venduto e realizzato con un processo replicabile.",
	},
	{
		question: "Devo già avere un servizio prodottizzato per entrare?",
		answer:
			"No. Il corso parte dalle basi e ti accompagna nella definizione dell’offerta, nella vendita e nella gestione dei clienti.",
	},
	{
		question: "Cosa differenzia Skool dal gruppo Telegram gratuito?",
		answer:
			"Telegram è uno spazio gratuito e informale. La community Pro include il corso, workshop mensili e offerte di lavoro.",
	},
	{
		question: "Quali piani sono disponibili?",
		answer:
			"Puoi scegliere il piano annuale da 350 USD o il piano lifetime da 550 USD. Le condizioni di acquisto sono mostrate da Skool al checkout.",
	},
];

export const METHOD_ITEMS = [
	"La mia storia e i primi passi nei servizi prodottizzati",
	"Esempi di servizi prodottizzati",
	"Il metodo unbundling e la productizzazione delle attività",
	"Oltre la productizzazione: tre formati di vendita",
	"Definire scope e discovery offer",
	"Ottimizzare il profilo LinkedIn e costruire una strategia",
	"Creare post, usare un CRM e fare warm outreach",
	"Fare cold outreach e gestire le chiamate di vendita",
	"Preparare un sales deck efficace",
	"Gestire onboarding, clienti, casi studio, fidelizzazione, upsell e referral",
];

export const METHOD_COLUMNS = [
	METHOD_ITEMS.slice(0, 5),
	METHOD_ITEMS.slice(5, 10),
];

export const OPPORTUNITY_PILLS = [
	{
		icon: "/images/search-icon.webp",
		text: "Cerco un professionista con cui collaborare",
	},
	{
		icon: "/images/users-icon.webp",
		text: "Sto assumendo un secondo membro nel mio team",
	},
	{
		icon: "/images/office-icon.webp",
		text: "Clienti in cerca di professionisti",
	},
];

export const PLAN_FEATURES = [
	"Accesso completo alla community",
	"Corso completo incluso",
	"Tutte le registrazioni dei workshop",
	"Accesso al network e alle offerte di lavoro",
	"3 consulenze 1:1 all’anno di un’ora con Niccolò",
];

export const LIFETIME_FEATURES = [
	...PLAN_FEATURES,
	"Accesso a vita alla community",
];

export const PROBLEM_CARDS = [
	{
		number: "01",
		title: "Isolamento",
		body: 'Nessuno intorno a te capisce davvero cosa significa lavorare ad abbonamento. Ti confronti solo con freelance "a progetto" o agenzie tradizionali.',
		icon: YellowMascotte,
		glow: "#D1DF64",
	},
	{
		number: "02",
		title: "Nessuna rete",
		body: "Non sai dove trovare i primi clienti, un collaboratore di fiducia, o qualcuno con cui fare partnership. Ogni opportunità la devi costruire da zero.",
		icon: PinkMascotte,
		glow: "#FA5A6E",
	},
	{
		number: "03",
		title: "Nessun metodo",
		body: "Hai idee, ma manca un percorso chiaro: come strutturare l'offerta, il pricing, l'onboarding, senza reinventare la ruota.",
		icon: PurpleMascotte,
		glow: "#A855F7",
	},
];

export const STATS_CARDS = [
	{
		value: "320+",
		label: "membri attivi",
		cardClass:
			"bg-[url('/images/bg-spiral.webp')] bg-cover bg-center text-white",
	},
	{
		value: "1 - 2",
		label: "workation all'anno",
		cardClass: "bg-[#D1DF64] text-black",
	},
	{
		value: "2+",
		label: "offerte di lavoro condivise ogni mese",
		cardClass:
			"bg-[url('/images/bg-spiral-violet.webp')] bg-cover bg-center text-white",
	},
];

export const TESTIMONIALS = [
	{
		avatar: "/images/testimonials/silvio.webp",
		name: "Silvio Ceccarini",
		role: "Freelance Full-Stack Developer",
		quote:
			"Community super utile, si hanno molti spunti interessanti ma in generale la cosa più bella è che c'è veramente cooperazione, a giro ci si impegna ad aiutare il prossimo ed a risponde alle domande di altri. Una delle poche community non tossiche",
	},
	{
		avatar: "/images/testimonials/massimo.webp",
		name: "Massimo Muntoni",
		role: "Designer UI/UX freelance",
		quote:
			"Esperienza a Tenerife con altri quattro ragazzi mai visti prima, poteva andare tutto a rotoli e invece è stata un’esperienza fantastica. Questo rivela il potere di questa community.",
	},
	{
		avatar: "/images/testimonials/zambo.webp",
		name: "Federico Zambelli",
		role: "Data Engineer",
		quote: "Top 2 decisioni di carriera prese nel 2026.",
	},
	{
		avatar: "/images/testimonials/federico.webp",
		name: "Federico Bellezza",
		role: "Sviluppatore web freelance",
		quote:
			"Corso super interessante, soprattutto per il suo approccio pratico e passo passo. Niccolò ti lascia delle chicche non da poco durante le lezioni.",
	},
	{
		avatar: "/images/testimonials/mirko.webp",
		name: "Mirko Marasco",
		role: "Sviluppatore full stack freelance",
		quote:
			"Top 3 decisioni di carriera prese nel 2026. (sì, la stessa cosa già detta da Zambo)",
	},
];

export const TOUR_IMAGES = [
	"/images/tour1.webp",
	"/images/tour2.webp",
	"/images/tour3.webp",
	"/images/tour4.webp",
	"/images/tour5.webp",
];

export const WHATS_INSIDE_CARDS = [
	{
		illustration: Community,
		title: "Community",
		color: "cyan",
		body: "Entra in contatto con oltre 220 professionisti. Partecipa alle discussioni, condividi progressi e sblocca nuove connessioni attraverso livelli e classifiche.",
	},
	{
		illustration: Jobs,
		title: "Offerte di lavoro",
		color: "violet-dark",
		body: "Nella parte Pro trovi opportunità riservate ai membri: collaborazioni tra professionisti, clienti in cerca di professionisti e posizioni aperte nella community.",
	},
	{
		illustration: Course,
		title: "Corso",
		color: "yellow-dark",
		body: "Il percorso passo passo per lanciare il tuo servizio, acquisire clienti e farlo crescere, dalla prima offerta al primo cliente ricorrente.",
	},
] as const;
