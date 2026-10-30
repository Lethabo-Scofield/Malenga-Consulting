/**
 * Central company configuration. Edit here; nothing else in the codebase
 * hardcodes contact details.
 */
export const site = {
  name: "Malenga Consulting",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.malengaconsulting.co.za").replace(/\/$/, ""),
  headline: "We Turn Ideas Into Reality",
  motto: "Turning Ideas into Reality Through Strategy, Innovation and Implementation.",
  description:
    "Malenga Consulting is a South African multidisciplinary consulting company providing strategic advisory, operational implementation, business development support and technology-driven solutions.",

  contact: {
    email: "info@malengaconsulting.co.za",
    telephone: { display: "+27 10 057 0981", href: "+27100570981" },
    mobile: { display: "+27 82 445 8568", href: "+27824458568" },
    address: {
      lines: ["Lincorp Industrial Park", "21 1st Rd, Linbro Park", "Sandton, 2090"],
      street: "Lincorp Industrial Park, 21 1st Rd",
      locality: "Linbro Park, Sandton",
      postalCode: "2090",
      country: "ZA",
    },
  },

  /** WhatsApp number in international format without "+" or spaces. */
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27824458568",
    message: "Hello Malenga Consulting, I would like to make an enquiry.",
  },
} as const;

export const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
  site.whatsapp.message,
)}`;

export const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Lincorp Industrial Park, 21 1st Rd, Linbro Park, Sandton, 2090",
)}`;
