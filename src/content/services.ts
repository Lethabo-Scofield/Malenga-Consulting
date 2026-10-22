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
      "Goods, information and suppliers have to work together for a supply chain to perform. Malenga Consulting helps organisations understand how their transport, warehousing and procurement activities fit together, and where they can be made simpler, more reliable or less costly.",
      "Our advisory is grounded in how operations actually run day to day. We work alongside your team so that recommendations are workable, and stay with you through implementation rather than stopping at a report.",
    ],
    offerings: [
      { title: "Supply chain advisory", description: "A structured review of how goods, information and suppliers flow through your business, with clear recommendations." },
      { title: "Warehouse management solutions", description: "Support with warehouse layout, stock control routines and operating practices that keep inventory accurate." },
      { title: "Procurement and sourcing", description: "Guidance on supplier selection, sourcing approaches and procurement processes that are consistent and defensible." },
      { title: "Distribution and transport planning", description: "Planning of delivery networks, routes and transport arrangements suited to your volumes and service promises." },
      { title: "Fleet management consulting", description: "Advice on fleet utilisation, maintenance planning, driver processes and the cost of running vehicles." },
      { title: "Logistics optimisation", description: "Identifying where logistics activities can be coordinated, simplified or made more cost-effective." },
      { title: "Operations management", description: "Support with operational structure, roles, routines and reporting so teams know what is expected." },
      { title: "Performance improvement", description: "Agreeing measures that matter, setting improvement priorities and helping teams act on them." },
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
      "Starting a business and growing one are different challenges, and both benefit from clear thinking and the right foundations. Malenga Consulting supports entrepreneurs, startups and small and medium enterprises in turning ideas into structured, investable and operational businesses.",
      "We help you decide what to build, how to present it and how to take the next step, whether that is registering a company, preparing a plan, entering a market or scaling what already works.",
    ],
    offerings: [
      { title: "Company registration guidance", description: "Orientation on registration requirements and the steps to set a business up properly." },
      { title: "Startup advisory", description: "A sounding board for founders on priorities, sequencing and early decisions." },
      { title: "Business planning", description: "Developing a clear, usable business plan covering offer, market, operations and finances." },
      { title: "Entrepreneurship coaching", description: "One-on-one support to help founders build confidence, discipline and decision-making habits." },
      { title: "Business model development", description: "Testing and refining how the business creates, delivers and earns value." },
      { title: "Proposal and company profile development", description: "Professional documents that present your business clearly to clients, funders and partners." },
      { title: "Market entry guidance", description: "Assessing a market, positioning your offer and planning a sensible approach to entry." },
      { title: "SME development", description: "Strengthening the systems, structure and capacity small and medium enterprises need to grow." },
      { title: "Growth strategies", description: "Identifying realistic growth routes and the steps needed to pursue them." },
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
      "Technology is most valuable when it fits the way an organisation works. Malenga Consulting designs and delivers software and information systems that support real business processes, and advises on the technology decisions that sit behind them.",
      "From a single website to an integrated business system, we pair technical delivery with an understanding of operations, so what is built is used and keeps being useful.",
    ],
    offerings: [
      { title: "Business systems development", description: "Systems that support core processes such as orders, inventory, workflows and reporting." },
      { title: "Software development", description: "Custom software built to a defined need, with attention to maintainability." },
      { title: "Digital transformation", description: "Planning the move from manual or disconnected processes to coordinated digital ways of working." },
      { title: "Process automation", description: "Automating repetitive tasks and hand-offs to reduce effort and errors." },
      { title: "Website development", description: "Professional, fast and accessible websites that represent your organisation well." },
      { title: "Database and information systems", description: "Designing and organising data so information is accurate, accessible and secure." },
      { title: "IT consulting", description: "Independent advice on technology choices, priorities and how to approach them." },
      { title: "Systems implementation and support", description: "Rolling out systems, training users and providing support once they are live." },
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
      "Strategy sets direction, and marketing makes that direction visible to the people you want to serve. Malenga Consulting helps organisations decide where they are going, how they are positioned and how to communicate it with consistency.",
      "We combine analysis with practical planning, so strategy documents turn into decisions, priorities and actions your team can follow.",
    ],
    offerings: [
      { title: "Strategic planning", description: "Facilitated planning that clarifies purpose, priorities and the path to get there." },
      { title: "Business growth strategy", description: "Evaluating growth options and building a considered plan to pursue them." },
      { title: "Marketing strategy", description: "A structured approach to audiences, messages, channels and priorities." },
      { title: "Brand positioning", description: "Defining how your organisation is distinct and expressing it consistently." },
      { title: "Market research", description: "Gathering and interpreting information about customers, markets and demand." },
      { title: "Digital marketing", description: "Planning and supporting online presence and campaigns that fit your goals." },
      { title: "Competitive analysis", description: "Understanding the competitive landscape and where your offer can stand apart." },
      { title: "Business transformation", description: "Supporting organisations through significant change in model, structure or direction." },
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
      "Lasting change depends on people. Malenga Consulting runs workshops, coaching and mentorship programmes that build the skills, judgement and confidence of entrepreneurs, managers and leaders.",
      "Programmes are shaped around the participants and their context, with room for discussion, practice and follow-through, so learning carries back into the work.",
    ],
    offerings: [
      { title: "Entrepreneurship workshops", description: "Interactive sessions covering the fundamentals of starting and running a business." },
      { title: "Leadership development", description: "Building the leadership practices teams and organisations rely on." },
      { title: "Strategic planning workshops", description: "Facilitated sessions that bring teams together to agree direction and priorities." },
      { title: "Executive coaching", description: "Confidential one-on-one coaching for senior leaders and business owners." },
      { title: "Youth entrepreneurship empowerment", description: "Programmes that introduce young people to enterprise and help them take first steps." },
      { title: "Business mentorship", description: "Ongoing guidance from an experienced adviser as a business develops." },
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
