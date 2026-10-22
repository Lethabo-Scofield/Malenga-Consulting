/**
 * Photography registry. Files live in /public/photos (sources in SOURCES.md).
 * `position` is the CSS object-position used when a photo is cropped.
 */
export type Photo = { src: string; width: number; height: number; alt: string; position: string };

export const photos = {
  supplyChain: {
    src: "/photos/supply-chain-warehouse.jpg",
    width: 1800,
    height: 2700,
    alt: "A forklift operator working between tall racking in a distribution warehouse",
    position: "center 55%",
  },
  startup: {
    src: "/photos/startup-desk.jpg",
    width: 1800,
    height: 1198,
    alt: "A laptop on a bright desk beside a notebook and coffee",
    position: "center",
  },
  software: {
    src: "/photos/it-developer.jpg",
    width: 1800,
    height: 2703,
    alt: "A developer working at a computer with code on screen",
    position: "center 70%",
  },
  strategy: {
    src: "/photos/strategy-tower.jpg",
    width: 1800,
    height: 2400,
    alt: "A glass office tower rising against a clear blue sky",
    position: "center 30%",
  },
  workshop: {
    src: "/photos/workshop-whiteboard.jpg",
    width: 1800,
    height: 1192,
    alt: "Two colleagues planning at a whiteboard covered in notes",
    position: "center 40%",
  },
  truckYard: {
    src: "/photos/logistics-truck-yard.jpg",
    width: 1800,
    height: 1800,
    alt: "Aerial view of a freight truck yard with trailers parked in rows",
    position: "center",
  },
  port: {
    src: "/photos/port-containers.jpg",
    width: 1800,
    height: 1415,
    alt: "Aerial view of a container port with stacked shipping containers",
    position: "center 55%",
  },
  warehouseWalk: {
    src: "/photos/warehouse-walk.jpg",
    width: 1800,
    height: 1198,
    alt: "Two colleagues walking through a warehouse aisle, one holding a clipboard",
    position: "center 35%",
  },
  skylineDusk: {
    src: "/photos/skyline-dusk.jpg",
    width: 2000,
    height: 2470,
    alt: "Johannesburg towers silhouetted against a hazy evening sky",
    position: "center 65%",
  },
  sandton: {
    src: "/photos/sandton-towers.jpg",
    width: 1800,
    height: 1013,
    alt: "Aerial view of Sandton's office towers under a bright sky",
    position: "center 40%",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
