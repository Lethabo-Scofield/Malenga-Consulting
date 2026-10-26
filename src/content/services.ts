import type { PhotoKey } from "./images";

export type ServiceSlug =
  | "transport-supply-chain"
  | "startup-business-development"
  | "it-software-development"
  | "strategy-marketing"
  | "workshops-coaching-mentorship";

export type Service = {
  slug: ServiceSlug;
  number: string;
  image: PhotoKey;
  /** Very short plain-language summary for menus. */
  blurb: string;
  /** Official division name. */
  title: string;
  /** One-line description for cards and lists. */
  short: string;
  metaDescription: string;
  intro: string[];
  offerings: { title: string; description: string }[];
  challenges: string[];
  support: { title: string; description: string }[];
  audiences: string[];
  related: ServiceSlug[];
};

export const services: Service[] = [
  {
    slug: "transport-supply-chain",
    number: "01",
    image: "supplyChain",
    blurb: "Logistics, warehousing, procurement, fleet",
    title: "Transport and Supply Chain Management Consulting",
    short:
      "Practical advisory for organisations that move goods, hold stock and depend on dependable supply.",
    metaDescription:
      "Supply chain advisory, warehouse management, procurement, transport planning, fleet management and logistics optimisation consulting from Malenga Consulting.",
    intro: [
      "We help organisations that move goods and hold stock run simpler, steadier operations.",
    ],
    offerings: [
      { title: "Supply chain advisory", description: "Review how goods, information and suppliers flow." },
      { title: "Warehouse management solutions", description: "Layout, stock control and warehouse routines." },
      { title: "Procurement and sourcing", description: "Supplier selection and sourcing processes." },
      { title: "Distribution and transport planning", description: "Routes, delivery networks and transport planning." },
      { title: "Fleet management consulting", description: "Fleet use, maintenance and running costs." },
      { title: "Logistics optimisation", description: "Simplify and coordinate logistics activities." },
      { title: "Operations management", description: "Structure, roles, routines and reporting." },
      { title: "Performance improvement", description: "Measures that matter, and acting on them." },
    ],
    challenges: [
      "Limited visibility of stock, deliveries and supplier performance",
      "Transport and handling costs that are hard to explain or control",
      "Warehouses with congestion, misplaced stock or unreliable counts",
      "Processes that depend on individuals rather than documented routines",
      "Growth that has outpaced the original operating set-up",
    ],
    support: [
      { title: "Understand the operation", description: "We start by observing how work is done today and what the people doing it need." },
      { title: "Design practical improvements", description: "Recommendations are sized to your resources and sequenced so the most useful changes come first." },
      { title: "Support implementation", description: "We help put new processes, tools and routines into practice and adjust them as the team learns." },
      { title: "Strengthen internal capability", description: "Where useful, we train and coach teams so improvements are sustained after our involvement." },
    ],
    audiences: [
      "Logistics and transportation operators",
      "Retail and distribution businesses",
      "Manufacturers",
      "SMEs running their own deliveries or stores",
      "Public sector organisations",
    ],
    related: ["it-software-development", "strategy-marketing", "startup-business-development"],
  },
  {
    slug: "startup-business-development",
    number: "02",
    image: "startup",
    blurb: "Registration, planning, market entry, growth",
    title: "Startup and Business Development Consulting",
    short:
      "Guidance for entrepreneurs and growing businesses, from registration and planning to market entry and growth.",
    metaDescription:
      "Company registration guidance, startup advisory, business planning, business model development and SME growth strategies from Malenga Consulting in Sandton.",
    intro: [
      "We help entrepreneurs and growing businesses turn ideas into structured, investable businesses.",
    ],
    offerings: [
      { title: "Company registration guidance", description: "Registration requirements and first steps." },
      { title: "Startup advisory", description: "A sounding board on priorities and early decisions." },
      { title: "Business planning", description: "A clear, usable plan for offer, market and finances." },
      { title: "Entrepreneurship coaching", description: "One-on-one support for founders." },
      { title: "Business model development", description: "Test and refine how the business earns." },
      { title: "Proposal and company profile development", description: "Documents that present you well to clients and funders." },
      { title: "Market entry guidance", description: "Assess a market and plan your approach." },
      { title: "SME development", description: "Systems and structure to help SMEs grow." },
      { title: "Growth strategies", description: "Realistic growth routes and next steps." },
    ],
    challenges: [
      "A promising idea that has not yet been turned into a business plan",
      "Uncertainty about registration, structure and where to begin",
      "Difficulty presenting the business to clients, funders or partners",
      "An offer that is not clearly differentiated in its market",
      "A business that is busy but not growing in a planned way",
    ],
    support: [
      { title: "Clarify the idea", description: "We help you articulate who the business serves and why they would choose it." },
      { title: "Build the foundations", description: "Plans, models and documents that give the business structure and credibility." },
      { title: "Prepare for the market", description: "Practical guidance on positioning, pricing approach and the first steps to market." },
      { title: "Stay alongside you", description: "Ongoing advisory and coaching as the business meets real conditions and adapts." },
    ],
    audiences: [
      "Startups and first-time entrepreneurs",
      "Established SMEs preparing to grow",
      "Technology and digital businesses",
      "Non-profit organisations developing their model",
      "Professional services firms",
    ],
    related: ["strategy-marketing", "workshops-coaching-mentorship", "it-software-development"],
  },
  {
    slug: "it-software-development",
    number: "03",
    image: "software",
    blurb: "Systems, software, automation, websites",
    title: "Information Technology and Software Development Solutions",
    short:
      "Business systems, software and digital solutions that support how your organisation actually works.",
    metaDescription:
      "Business systems development, software development, digital transformation, process automation and website development from Malenga Consulting.",
    intro: [
      "We design and deliver software and systems that fit the way your organisation actually works.",
    ],
    offerings: [
      { title: "Business systems development", description: "Systems for orders, inventory, workflows and reporting." },
      { title: "Software development", description: "Custom software built to a defined need." },
      { title: "Digital transformation", description: "Move from manual processes to digital ways of working." },
      { title: "Process automation", description: "Cut repetitive tasks and hand-offs." },
      { title: "Website development", description: "Professional, fast, accessible websites." },
      { title: "Database and information systems", description: "Organised, accurate, secure data." },
      { title: "IT consulting", description: "Independent advice on technology choices." },
      { title: "Systems implementation and support", description: "Roll-out, training and ongoing support." },
    ],
    challenges: [
      "Manual, paper-based or spreadsheet processes that no longer scale",
      "Systems that do not talk to one another",
      "Uncertainty about which technology to invest in",
      "A website or system that no longer reflects the business",
      "Data that is scattered, duplicated or hard to trust",
    ],
    support: [
      { title: "Define the requirement", description: "We work with the people who use the process to agree what the solution must do." },
      { title: "Design and build", description: "Solutions are designed for clarity and built in stages so you can review progress." },
      { title: "Implement and train", description: "Careful roll-out with user training, so adoption is part of the project." },
      { title: "Support and evolve", description: "Ongoing support and improvements as the business and its needs change." },
    ],
    audiences: [
      "Technology and digital businesses",
      "Logistics, retail and manufacturing operations",
      "Educational institutions",
      "SMEs and startups building their first systems",
      "Public sector and non-profit organisations",
    ],
    related: ["transport-supply-chain", "strategy-marketing", "startup-business-development"],
  },
  {
    slug: "strategy-marketing",
    number: "04",
    image: "strategy",
    blurb: "Planning, brand, research, digital marketing",
    title: "Strategy and Marketing Consulting",
    short:
      "Strategic planning, brand positioning and marketing that give the business direction and visibility.",
    metaDescription:
      "Strategic planning, business growth strategy, marketing strategy, brand positioning, market research and business transformation consulting from Malenga Consulting.",
    intro: [
      "We help organisations set direction, sharpen their position and communicate it consistently.",
    ],
    offerings: [
      { title: "Strategic planning", description: "Clarify purpose, priorities and path." },
      { title: "Business growth strategy", description: "Weigh growth options and plan the pursuit." },
      { title: "Marketing strategy", description: "Audiences, messages, channels and priorities." },
      { title: "Brand positioning", description: "Define what makes you distinct." },
      { title: "Market research", description: "Insight on customers, markets and demand." },
      { title: "Digital marketing", description: "Online presence and campaigns that fit your goals." },
      { title: "Competitive analysis", description: "Understand the landscape and where you stand apart." },
      { title: "Business transformation", description: "Support through major change." },
    ],
    challenges: [
      "No shared view of priorities or where the business is heading",
      "An offer that is hard to distinguish from competitors",
      "Marketing activity that is inconsistent or hard to measure",
      "Limited insight into customers and market conditions",
      "A business model under pressure that needs to adapt",
    ],
    support: [
      { title: "Establish the facts", description: "Research and analysis to ground decisions in evidence rather than assumption." },
      { title: "Set direction", description: "Strategy and positioning developed with your leadership, in plain language." },
      { title: "Translate into action", description: "Priorities, roles and timelines so strategy turns into work." },
      { title: "Review and refine", description: "Regular check-ins to adjust the plan as conditions change." },
    ],
    audiences: [
      "SMEs and growing businesses",
      "Professional services firms",
      "Retail and distribution businesses",
      "Educational institutions",
      "Non-profit and public sector organisations",
    ],
    related: ["startup-business-development", "workshops-coaching-mentorship", "it-software-development"],
  },
  {
    slug: "workshops-coaching-mentorship",
    number: "05",
    image: "workshop",
    blurb: "Leadership, coaching, mentorship, workshops",
    title: "Strategic Workshops, Coaching and Mentorship",
    short:
      "Facilitated workshops, coaching and mentorship that build leadership and entrepreneurial capability.",
    metaDescription:
      "Entrepreneurship workshops, leadership development, executive coaching, youth entrepreneurship empowerment and business mentorship from Malenga Consulting.",
    intro: [
      "Workshops, coaching and mentorship that build the skills and confidence of entrepreneurs and leaders.",
    ],
    offerings: [
      { title: "Entrepreneurship workshops", description: "Practical sessions on starting and running a business." },
      { title: "Leadership development", description: "Build the leadership practices teams rely on." },
      { title: "Strategic planning workshops", description: "Align teams on direction and priorities." },
      { title: "Executive coaching", description: "Confidential one-on-one coaching for senior leaders." },
      { title: "Youth entrepreneurship empowerment", description: "Introduce young people to enterprise." },
      { title: "Business mentorship", description: "Ongoing guidance as your business develops." },
    ],
    challenges: [
      "A team that has not had time to align on direction",
      "Leaders stepping into larger roles without structured support",
      "Founders working alone without anyone to test decisions with",
      "Young people interested in enterprise but unsure how to begin",
      "Training that does not translate into changed practice",
    ],
    support: [
      { title: "Design around your group", description: "We agree objectives and tailor content to participants and context." },
      { title: "Facilitate and coach", description: "Sessions that are practical, participatory and focused on application." },
      { title: "Follow through", description: "Actions and follow-up so learning is applied after the session ends." },
      { title: "Mentor over time", description: "Ongoing relationships where a longer view is helpful." },
    ],
    audiences: [
      "Entrepreneurs and startups",
      "Educational institutions and youth programmes",
      "Leadership teams in SMEs and corporates",
      "Public sector and non-profit organisations",
      "Professional services firms",
    ],
    related: ["startup-business-development", "strategy-marketing", "transport-supply-chain"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const getRelated = (service: Service) =>
  service.related
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
