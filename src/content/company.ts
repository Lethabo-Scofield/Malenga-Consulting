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
  { title: "Practical implementation", description: "We stay involved from plan to delivery." },
  { title: "Multidisciplinary expertise", description: "Operations, business, technology and strategy under one roof." },
  { title: "Client-centred solutions", description: "Built around your context, not a standard package." },
  { title: "A focus on growth", description: "From first-time founders to established organisations." },
  { title: "Professional service", description: "Clear communication and respect for your time." },
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

export type IndustrySlug =
  | "logistics-transportation"
  | "retail-distribution"
  | "manufacturing"
  | "smes"
  | "startups-entrepreneurs"
  | "educational-institutions"
  | "public-sector"
  | "non-profit"
  | "technology-digital"
  | "professional-services";

export type Industry = {
  slug: IndustrySlug;
  name: string;
  description: string;
  /** Concrete areas where Malenga's capabilities may apply. */
  help: string[];
  services: ServiceSlug[];
};

export const industries: Industry[] = [
  { slug: "logistics-transportation", name: "Logistics and transportation", description: "Organisations that move goods depend on planning, visibility and discipline. Our supply chain advisory pairs with systems work to keep operations running smoothly.", help: ["Route, fleet and distribution planning", "Warehouse and stock-control practices", "Systems that give you visibility of operations"], services: ["transport-supply-chain", "it-software-development"] },
  { slug: "retail-distribution", name: "Retail and distribution", description: "From the supplier to the shelf, stock and sourcing decisions shape the business. We help tighten those processes and sharpen how the brand shows up.", help: ["Procurement and supplier sourcing", "Stock and warehouse processes", "Brand positioning and market research"], services: ["transport-supply-chain", "strategy-marketing"] },
  { slug: "manufacturing", name: "Manufacturing", description: "Manufacturers need dependable inputs, efficient operations and information they can trust. We support the operational side and the systems behind it.", help: ["Sourcing and supply planning", "Operations and performance improvement", "Process automation and information systems"], services: ["transport-supply-chain", "it-software-development"] },
  { slug: "smes", name: "SMEs", description: "Small and medium enterprises often outgrow the way they started. We help owners plan the next stage and build the structure to support it.", help: ["Business planning and growth strategy", "Systems and process automation", "Leadership coaching for owners and managers"], services: ["startup-business-development", "strategy-marketing"] },
  { slug: "startups-entrepreneurs", name: "Startups and entrepreneurs", description: "Turning an idea into a business is the heart of what we do. We guide founders from registration and planning through to a first market approach.", help: ["Company registration guidance", "Business model and company profile development", "Mentorship through the first steps to market"], services: ["startup-business-development", "workshops-coaching-mentorship"] },
  { slug: "educational-institutions", name: "Educational institutions", description: "Schools, colleges and training bodies can build enterprise skills and run better on the inside. We support both the programmes and the platforms.", help: ["Entrepreneurship and leadership workshops", "Youth entrepreneurship programmes", "Websites and information systems"], services: ["workshops-coaching-mentorship", "it-software-development"] },
  { slug: "public-sector", name: "Public sector organisations", description: "Public bodies deliver services under real constraints. We help with planning, operations and the capability of the teams doing the work.", help: ["Operational and performance improvement", "Strategic planning facilitation", "Capability building for teams"], services: ["strategy-marketing", "transport-supply-chain"] },
  { slug: "non-profit", name: "Non-profit organisations", description: "Mission-driven organisations need clear direction and a credible public presence. We help with both, and with developing the people who lead.", help: ["Strategic planning and organisational direction", "Digital presence and communications", "Leadership development and mentorship"], services: ["strategy-marketing", "workshops-coaching-mentorship"] },
  { slug: "technology-digital", name: "Technology and digital businesses", description: "Good technology still needs a clear market position and a sound business behind it. We help with go-to-market thinking and with building the product.", help: ["Business development and positioning", "Market entry guidance", "Software and systems delivery"], services: ["it-software-development", "startup-business-development"] },
  { slug: "professional-services", name: "Professional services", description: "For firms whose value is expertise, reputation and efficiency matter most. We help them present themselves well and run smoothly.", help: ["Brand positioning and marketing", "Business development support", "Internal systems and automation"], services: ["strategy-marketing", "startup-business-development"] },
];
