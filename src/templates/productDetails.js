import RotateImage from "../assets/360.jpg";

// Base URL for color images
const baseUrl =
  "https://cdn.jsdelivr.net/gh/Jayurp/phonewebsite-cdn/color-phones/";

// Phone data array
const phones = [
  {
    model: "iPhone 11",
    title: "iPhone 11: Exceptional Value",
    subtitle: "All the essentials. Incredible performance.",
    description:
      "iPhone 11 offers a dual-camera system, long battery life, and Liquid Retina display.",
    features: [
      "6.1-inch Liquid Retina display",
      "A13 Bionic chip",
      "Dual-camera system with Ultra Wide",
      "Night mode photography",
      "All-day battery",
    ],
    relatedProducts: ["iPhone 11 Pro", "iPhone 12"],
  },
  {
    model: "iPhone 12",
    title: "iPhone 12: Speed. Beauty. Power.",
    subtitle: "5G speed, Ceramic Shield, A14 Bionic chip.",
    description:
      "iPhone 12 introduces a new flat-edge design, improved durability, and stunning OLED display.",
    features: [
      "6.1-inch Super Retina XDR display",
      "A14 Bionic chip",
      "Dual-camera system",
      "Ceramic Shield front cover",
      "5G capable",
    ],
    relatedProducts: ["iPhone 11", "iPhone 12 Pro"],
  },
  {
    model: "iPhone 13",
    title: "iPhone 13: Cinematic Innovation",
    subtitle: "Advanced dual-camera and A15 chip.",
    description:
      "iPhone 13 brings a brighter Super Retina XDR display, longer battery life, and cinematic video recording.",
    features: [
      "6.1-inch Super Retina XDR display",
      "A15 Bionic chip",
      "Dual-camera system with sensor-shift stabilization",
      "Cinematic mode for video",
      "Longer battery life",
    ],
    relatedProducts: ["iPhone 12", "iPhone 13 Pro"],
  },
  {
    model: "iPhone 13 Pro",
    title: "iPhone 13 Pro: Professional Photography",
    subtitle: "Pro camera system and ProMotion display.",
    description:
      "iPhone 13 Pro delivers a triple-camera system, A15 Bionic, and ProMotion 120Hz display.",
    features: [
      "6.1-inch Super Retina XDR display with ProMotion",
      "A15 Bionic chip",
      "Triple-camera system",
      "Macro photography",
      "All-day battery life",
    ],
    relatedProducts: ["iPhone 13", "iPhone 13 Pro Max"],
  },
  {
    model: "iPhone 13 Pro Max",
    title: "iPhone 13 Pro Max: Maximum Performance",
    subtitle: "Largest display and longest battery life.",
    description:
      "iPhone 13 Pro Max combines a 6.7-inch display, triple-camera system, and A15 Bionic chip for ultimate performance.",
    features: [
      "6.7-inch Super Retina XDR display",
      "A15 Bionic chip",
      "Triple-camera system",
      "Cinematic mode for video",
      "Longest battery life",
    ],
    relatedProducts: ["iPhone 13 Pro", "iPhone 14 Pro Max"],
  },
  {
    model: "iPhone 14",
    title: "iPhone 14: Safety & Performance",
    subtitle: "Crash Detection, better cameras, and A15 chip.",
    description:
      "iPhone 14 introduces safety features like Crash Detection and Emergency SOS, with reliable performance.",
    features: [
      "6.1-inch Super Retina XDR display",
      "A15 Bionic chip",
      "Dual-camera system",
      "Crash Detection",
      "Emergency SOS via satellite",
    ],
    relatedProducts: ["iPhone 14 Pro", "iPhone 13 Pro Max"],
  },
  {
    model: "iPhone 14 Pro",
    title: "iPhone 14 Pro: Dynamic Island Innovation",
    subtitle: "Always-On display, Pro camera system, A16 chip.",
    description:
      "iPhone 14 Pro introduces Dynamic Island, Pro camera system, and the A16 Bionic chip for peak performance.",
    features: [
      "6.1-inch Super Retina XDR display with ProMotion",
      "A16 Bionic chip",
      "Triple-camera system with Photonic Engine",
      "Dynamic Island UI",
      "Always-On display",
    ],
    relatedProducts: ["iPhone 14", "iPhone 14 Pro Max"],
  },
  {
    model: "iPhone 14 Pro Max",
    title: "iPhone 14 Pro Max: Maximum Pro Features",
    subtitle: "Largest Pro display with all innovations.",
    description:
      "iPhone 14 Pro Max provides the biggest display, Dynamic Island, advanced camera system, and longest Pro battery.",
    features: [
      "6.7-inch Super Retina XDR display",
      "A16 Bionic chip",
      "Triple-camera system with Photonic Engine",
      "Dynamic Island",
      "All-day battery",
    ],
    relatedProducts: ["iPhone 14 Pro", "iPhone 15 Pro Max"],
  },
  {
    model: "iPhone 15",
    title: "iPhone 15: Powerful Performance",
    subtitle: "A16 chip, new design, great cameras.",
    description:
      "iPhone 15 brings an updated design, advanced cameras, and A16 chip performance.",
    features: [
      "6.1-inch Super Retina XDR display",
      "A16 Bionic chip",
      "Dual-camera system",
      "USB-C connector",
      "Improved battery life",
    ],
    relatedProducts: ["iPhone 15 Pro", "iPhone 14"],
  },
  {
    model: "iPhone 15 Pro",
    title: "iPhone 15 Pro: Titanium. So Pro.",
    subtitle: "A17 Pro chip and lightweight titanium design.",
    description:
      "iPhone 15 Pro introduces a titanium build, A17 Pro chip, and USB-C with USB 3 speeds.",
    features: [
      "6.1-inch Super Retina XDR display",
      "A17 Pro chip",
      "Titanium design",
      "USB-C connector",
      "Pro camera system",
    ],
    relatedProducts: ["iPhone 15 Pro Max", "iPhone 16 Pro"],
  },
  {
    model: "iPhone 15 Pro Max",
    title: "iPhone 15 Pro Max: Maximum Titanium",
    subtitle: "Largest Pro model with titanium and A17 Pro.",
    description:
      "iPhone 15 Pro Max combines titanium design, A17 Pro chip, and advanced cameras for ultimate Pro experience.",
    features: [
      "6.7-inch Super Retina XDR display",
      "A17 Pro chip",
      "Titanium design",
      "USB-C connector",
      "Pro camera system",
    ],
    relatedProducts: ["iPhone 15 Pro", "iPhone 16 Pro Max"],
  },
  {
    model: "iPhone 16",
    title: "iPhone 16: Cutting Edge Innovation",
    subtitle: "Next-gen performance and cameras.",
    description:
      "iPhone 16 introduces faster performance, improved cameras, and refined design.",
    features: [
      "6.1-inch Super Retina XDR display",
      "A18 chip",
      "Dual-camera system",
      "USB-C 3.0",
      "All-day battery",
    ],
    relatedProducts: ["iPhone 16 Pro", "iPhone 15 Pro Max"],
  },
  {
    model: "iPhone 16 Pro",
    title: "iPhone 16 Pro: The Ultimate Pro Experience",
    subtitle: "A18 Pro chip, Titanium, and advanced camera.",
    description:
      "iPhone 16 Pro offers titanium build, A18 Pro chip, and Pro camera system with cinematic video.",
    features: [
      "6.1-inch Super Retina XDR display",
      "A18 Pro chip",
      "Titanium design",
      "Pro camera system",
      "USB-C 3.0",
    ],
    relatedProducts: ["iPhone 16 Pro Max", "iPhone 15 Pro"],
  },
  {
    model: "iPhone 16 Pro Max",
    title: "iPhone 16 Pro Max: Maximum Pro Titanium",
    subtitle: "Largest Pro model, titanium design, and A18 Pro chip.",
    description:
      "iPhone 16 Pro Max combines titanium, A18 Pro chip, and all Pro features for the ultimate experience.",
    features: [
      "6.7-inch Super Retina XDR display",
      "A18 Pro chip",
      "Titanium design",
      "Pro camera system",
      "USB-C 3.0",
    ],
    relatedProducts: ["iPhone 16 Pro", "iPhone 15 Pro Max"],
  },
];

// Model → filename prefix
const modelMap = {
  "iPhone 11": "11",
  "iPhone 12": "12",
  "iPhone 13": "13",
  "iPhone 13 Pro": "13pro",
  "iPhone 13 Pro Max": "13promax",
  "iPhone 14": "14",
  "iPhone 14 Pro": "14pro",
  "iPhone 14 Pro Max": "14promax",
  "iPhone 15": "15",
  "iPhone 15 Pro": "15pro",
  "iPhone 15 Pro Max": "15promax",
  "iPhone 16": "16",
  "iPhone 16 Pro": "16pro",
  "iPhone 16 Pro Max": "16promax",
};

// Color → filename suffix
const colorMap = {
  "Black Titanium": "black",
  "White Titanium": "white",
  "Natural Titanium": "natural",
  "Blue Titanium": "blue",
  Graphite: "graphite",
  Gold: "gold",
  Silver: "silver",
  Pink: "pink",
  Purple: "purple",
  Red: "red",
  Yellow: "yellow",
  Blue: "blue",
  Green: "green",
  Desert: "desert",
  Natural: "natural",
  Black: "black",
};

// Function to get phone by model + color
export function getPhoneByModelAndColor(model, color) {
  try {
    const phone = phones.find(
      (p) => p.model.toLowerCase() === model.toLowerCase()
    );
    if (!phone) return { error: `Phone model '${model}' not found.` };

    const modelPrefix = modelMap[phone.model];
    const colorSuffix = colorMap[color];

    console.log(color);

    if (!modelPrefix)
      return { error: `Model prefix not found for '${model}'.` };
    if (!colorSuffix) return { error: `Color '${color}' not mapped.` };

    const imageUrl = `${baseUrl}${modelPrefix}${colorSuffix}.webp`;

    return {
      ...phone,
      selectedColor: color,
      image: imageUrl,
      gallery: [imageUrl, RotateImage], // only selected color image
    };
  } catch (error) {
    console.log(erro);
  }
}
