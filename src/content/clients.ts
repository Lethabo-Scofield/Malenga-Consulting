/**
 * Businesses Malenga Consulting has worked with, as supplied by the company.
 * Logos live in /public/clients. A client without a logo is shown by name.
 * Add descriptions or case studies only once the client has approved them.
 */
export type Client = {
  name: string;
  logo?: { src: string; width: number; height: number };
};

export const clients: Client[] = [
  { name: "Olyxee", logo: { src: "/clients/olyxee.png", width: 440, height: 440 } },
  { name: "FreightShift International Logistics", logo: { src: "/clients/freightshift.png", width: 640, height: 99 } },
  { name: "Kuhlula Legacy", logo: { src: "/clients/kuhlula-legacy.png", width: 440, height: 440 } },
  { name: "Mvapi Logistics", logo: { src: "/clients/mvapi-logistics.png", width: 640, height: 256 } },
  { name: "Blackroid", logo: { src: "/clients/blackroid.png", width: 640, height: 121 } },
];
