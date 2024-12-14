type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  location?: string;
};

export const images: Image[] = [
  {
    src: "https://storage.paultnewsam.com/monkey_1_optimized.webp",
    alt: "Howler Monkey",
    width: 1600,
    height: 1067,
    caption: "Howler Monkey",
    location: "Costa Rica",
  },
  {
    src: "https://storage.paultnewsam.com/frogs_1_optimized.webp",
    alt: "Frogs",
    width: 1600,
    height: 1067,
    caption: "Frogs",
    location: "Costa Rica",
  },
  {
    src: "https://storage.paultnewsam.com/boobies_1_optimized.webp",
    alt: "Nazca Boobies",
    width: 1600,
    height: 1067,
    caption: "Nazca Boobies",
    location: "Galapagos",
  },
  {
    src: "https://storage.paultnewsam.com/heron_1_optimized.webp",
    alt: "Heron",
    width: 1600,
    height: 1067,
    caption: "Heron",
    location: "Galapagos",
  },
  {
    src: "https://storage.paultnewsam.com/heron_2_optimized.webp",
    alt: "Heron",
    width: 1600,
    height: 1067,
    caption: "Heron",
    location: "Galapagos",
  },
];

export const costaRicaImages: Image[] = images.filter(
  (image) => image.location === "Costa Rica",
);

export const galapagosImages: Image[] = images.filter(
  (image) => image.location === "Galapagos",
);
