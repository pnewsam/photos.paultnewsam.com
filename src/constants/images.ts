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
  { src: "/images/2.jpg", alt: "Photo 2", width: 300, height: 300 },
  { src: "/images/3.jpg", alt: "Photo 3", width: 300, height: 300 },
  { src: "/images/4.jpg", alt: "Photo 4", width: 300, height: 300 },
  { src: "/images/5.jpg", alt: "Photo 5", width: 300, height: 300 },
];

export const costaRicaImages: Image[] = images.filter(
  (image) => image.location === "Costa Rica",
);

export const galapagosImages: Image[] = images.filter(
  (image) => image.location === "Galapagos",
);
