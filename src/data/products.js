// src/data/products.js

import mini1 from "../assets/images/products/mini1.jpg";
import mini1r from "../assets/images/products/mini1r.png";

import medium1 from "../assets/images/products/medium1.jpg";
import medium1r from "../assets/images/products/medium1r.png";
import medium2 from "../assets/images/products/medium2.jpg";

import big1 from "../assets/images/products/big1.jpg";
import big1r from "../assets/images/products/big1r.png";

import metal1 from "../assets/images/products/metal1.jpg";
import metal1r from "../assets/images/products/metal1r.png";
import metal2 from "../assets/images/products/metal2.jpg";

import premiumAcrylic from "../assets/images/products/Premium_Acrylic.jpg";
import crystal from "../assets/images/products/Crystal.jpg";

import corporate from "../assets/images/products/Corporate.jpg";
import customlogo from "../assets/images/products/Customlogo.jpg";

import sports from "../assets/images/products/Sports.jpg";

import gold from "../assets/images/products/Gold.jpg";
import goldMedal from "../assets/images/products/goldmedal.jpg";

import mementos1 from "../assets/images/products/mementos1.jpg";

const products = [
  // Wooden
  {
    id: 1,
    name: "Mini Wooden Trophy",
    category: "Wooden",
    image: mini1,
  },
  {
    id: 2,
    name: "Medium Wooden Trophy",
    category: "Wooden",
    image: medium1,
  },
  {
    id: 3,
    name: "Big Wooden Trophy",
    category: "Wooden",
    image: big1,
  },

  // Acrylic
  {
    id: 4,
    name: "Premium Acrylic Trophy",
    category: "Acrylic",
    image: premiumAcrylic,
  },

  // Metal
  {
    id: 5,
    name: "Metal Trophy",
    category: "Metal",
    image: metal1,
  },
  {
    id: 6,
    name: "Metal Award",
    category: "Metal",
    image: metal1r,
  },
  {
    id: 7,
    name: "Metal Champion Trophy",
    category: "Metal",
    image: metal2,
  },

  // Glass
  {
    id: 8,
    name: "Crystal Glass Trophy",
    category: "Glass",
    image: crystal,
  },

  // Fiber
  {
    id: 9,
    name: "Fiber Trophy",
    category: "Fiber",
    image: sports, // Temporary
  },

  // Base
  {
    id: 10,
    name: "Premium Base Trophy",
    category: "Based",
    image: medium2,
  },

  // Trophy
  {
    id: 11,
    name: "Sports Trophy",
    category: "Trophy",
    image: sports,
  },

  // Shield
  {
    id: 12,
    name: "Wooden Shield",
    category: "Shield",
    image: corporate,
  },

  // Medals
  {
    id: 13,
    name: "Gold Medal",
    category: "Medals",
    image: goldMedal,
  },
  {
    id: 14,
    name: "Gold Award Medal",
    category: "Medals",
    image: gold,
  },

  // Cup
  {
    id: 15,
    name: "Champion Cup",
    category: "Cup",
    image: big1r,
  },

  // Mementos
  {
    id: 16,
    name: "Corporate Memento",
    category: "Mementos",
    image: mementos1,
  },

  // Customized
  {
    id: 17,
    name: "Custom Logo Trophy",
    category: "Customized",
    image: customlogo,
  },

  // Extra Products
  {
    id: 18,
    name: "Mini Trophy Premium",
    category: "Wooden",
    image: mini1r,
  },
  {
    id: 19,
    name: "Medium Trophy Premium",
    category: "Wooden",
    image: medium1r,
  },
];

export default products;

