import type { ServiceSlug } from "./services";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
] as const;

export const values = [
  { title: "Professionalism", description: "Reliable, respectful and well-prepared in every engagement." },
  { title: "Innovation", description: "Open to new thinking and technology where it makes the work better." },
  { title: "Excellence", description: "Careful work held to a high standard from first conversation to delivery." },
  { title: "Integrity", description: "Honest advice, clear communication and responsible handling of client information." },
  { title: "Collaboration", description: "Working with clients and their teams, not around them." },
  { title: "Sustainability", description: "Building solutions and capability that last beyond the engagement." },
] as const;

export const pillars = [
  { title: "Strategy", description: "Clear direction grounded in an understanding of your business, market and resources." },
  { title: "Innovation", description: "Fresh thinking and technology applied where it solves a real problem." },
  { title: "Implementation", description: "Hands-on support to put plans into practice and see them through." },
] as const;

export const whyMalenga = [
  { title: "Practical implementation", description: "Advice is only useful if it can be carried out. We stay involved from planning through to delivery." },
  { title: "Multidisciplinary expertise", description: "Operations, business development, technology, strategy and capability building under one roof." },
  { title: "Client-centred solutions", description: "Every engagement starts with your context and goals rather than a standard package." },
  { title: "A focus on growth", description: "From first-time entrepreneurs to established organisations, we help clients build for what comes next." },
  { title: "Professional service", description: "Clear communication, sensible scoping and respect for your time and information." },
] as const;

/** Proposed engagement journey as presented on the website. */
export const approach = [
  { step: "01", title: "Discovery", description: "We listen, ask questions and learn about your organisation, objectives and constraints." },
  { step: "02", title: "Strategy", description: "We shape a clear, practical plan and agree priorities and scope with you." },
  { step: "03", title: "Implementation", description: "We work with your team to put the plan into practice, step by step." },
  { step: "04", title: "Support", description: "We remain available to refine, train and support as things develop." },
] as const;

/* Wording below is derived from the brief and motto; confirm against the
   official company profile before removing the draft labels. */
export const aboutDraft = {
  overview: [
    "Malenga Consulting is a South African multidisciplinary consulting company. We provide strategic advisory, operational implementation, business development support and technology-driven solutions to entrepreneurs, startups, SMEs, corporations and institutions.",
    "Our work spans five divisions: transport and supply chain management, startup and business development, information technology and software development, strategy and marketing, and strategic workshops, coaching and mentorship.",
  ],
  vision:
    "To be a trusted partner that helps organisations and entrepreneurs turn ideas into lasting, well-run realities.",
  mission:
    "To deliver practical advisory, implementation support and technology solutions that help our clients plan with clarity, act with confidence and grow sustainably.",
  philosophy: [
    "Strategy only matters if it is carried out. We bring strategic thinking, innovation and hands-on implementation together, so that ideas move from the page into operation.",
    "We work with clients as collaborators, tailoring our approach to their context and building their own capability along the way.",
  ],
  objectives: [
    "Provide credible, multidisciplinary advisory to clients across sectors",
    "Support entrepreneurs and SMEs to start, formalise and grow",
    "Deliver technology solutions that fit real business processes",
    "Build leadership and entrepreneurial capability through coaching and mentorship",
    "Maintain professional standards of service, integrity and excellence",
  ],
};

export type Industry = {
  name: string;
  description: string;
  services: ServiceSlug[];
};

export const industries: Industry[] = [
  { name: "Logistics and transportation", description: "Supply chain, fleet, distribution and operations advisory for organisations that move goods, with systems to support them.", services: ["transport-supply-chain", "it-software-development"] },
  { name: "Retail and distribution", description: "Procurement, stock and warehouse practices, along with brand positioning and market insight for businesses that sell and deliver products.", services: ["transport-supply-chain", "strategy-marketing"] },
  { name: "Manufacturing", description: "Sourcing, operations management and performance improvement, supported by process automation and information systems.", services: ["transport-supply-chain", "it-software-development"] },
  { name: "SMEs", description: "Business planning, growth strategy, systems and leadership support for small and medium enterprises at each stage.", services: ["startup-business-development", "strategy-marketing"] },
  { name: "Startups and entrepreneurs", description: "Registration guidance, business models, company profiles, coaching and early market entry for new ventures.", services: ["startup-business-development", "workshops-coaching-mentorship"] },
  { name: "Educational institutions", description: "Workshops, leadership development and youth entrepreneurship programmes, plus information systems and web presence.", services: ["workshops-coaching-mentorship", "it-software-development"] },
  { name: "Public sector organisations", description: "Operational improvement, strategic planning and capability building for public bodies delivering services.", services: ["strategy-marketing", "transport-supply-chain"] },
  { name: "Non-profit organisations", description: "Strategic planning, programme design, digital presence and leadership support for mission-driven organisations.", services: ["strategy-marketing", "workshops-coaching-mentorship"] },
  { name: "Technology and digital businesses", description: "Business development, positioning and go-to-market guidance, alongside software and systems delivery.", services: ["it-software-development", "startup-business-development"] },
  { name: "Professional services", description: "Positioning, marketing, business development and internal systems for firms whose value is expertise.", services: ["strategy-marketing", "startup-business-development"] },
];
