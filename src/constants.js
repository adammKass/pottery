import galleryCupHorizontal from "./assets/img/gallery-cup-horizontal.jpg";
import galleryCupVertical from "./assets/img/gallery-cup-vertical.jpg";
import galleryHandsHorizontal from "./assets/img/gallery-hands-horizontal.jpg";
import galleryRingHorizontal from "./assets/img/gallery-ring-horizontal.jpg";

import iconAlabastron from "./assets/icon-alabastron.svg";
import iconHydria from "./assets/icon-hydria.svg";
import iconKrater from "./assets/icon-krater.svg";
import iconPsykter from "./assets/icon-psykter.svg";
import iconSkyphos from "./assets/icon-skyphos.svg";

export const navlinks = [
  {
    name: "Produkty",
    path: "#products",
  },
  {
    name: "O nás",
    path: "#about",
  },
  {
    name: "Partneri",
    path: "#partners",
  },
  {
    name: "Recenzie",
    path: "#testimonials",
  },
  {
    name: "Galéria",
    path: "#gallery",
  },
];

export const gallery = [
  {
    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: galleryCupHorizontal,
  },
  {
    alt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: galleryRingHorizontal,
  },
  {
    alt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    img: galleryHandsHorizontal,
  },
  {
    alt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    img: galleryCupVertical,
  },
];

export const products = [
  {
    name: "Alabastron",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "12,00 €",
    img: iconAlabastron,
  },
  {
    name: "Hydria",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "15,00 €",
    img: iconHydria,
  },
  {
    name: "Krater",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    price: "18,00 €",
    img: iconKrater,
  },
  {
    name: "Psykter",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    price: "20,00 €",
    img: iconPsykter,
  },
  {
    name: "Skyphos",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "14,00 €",
    img: iconSkyphos,
  },
];

export const testimonials = [
  {
    name: "John Doe",
    text: "Astro made our site insanely fast. Our Lighthouse score jumped overnight.",
  },
  {
    name: "John Doe",
    text: "Astro made our site insanely fast. Our Lighthouse score jumped overnight.",
  },

  {
    name: "Jane Smith",
    text: "The developer experience is unreal. Content + components finally make sense.",
  },
  {
    name: "Robert Johnson",
    text: "We shipped faster, ranked higher, and slept better. Astro is a win.",
  },
];
