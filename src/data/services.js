import React from 'react';
import { FaTools, FaSnowflake, FaTv, FaCoffee, FaPlug, FaWind, FaMicrochip, FaBurn, FaWater, FaTshirt, FaFan } from 'react-icons/fa';

export const servicesData = [
  {
    id: 1,
    iconName: "FaTools",
    title: "Washing Machine Repair",
    shortDesc: "Repair services for various washing machine brands and models.",
    longDesc: "Our technicians provide repair services for top-loading, front-loading, and semi-automatic washing machines. We assist with issues related to motor functionality, drainage, and electronic control panels using standard industry practices.",
    features: ["Drum inspection", "Motor diagnostics", "Drainage clearing", "Panel testing"],
    image: "/service-1.jpg",
    slug: "washing-machine"
  },
  {
    id: 2,
    iconName: "FaSnowflake",
    title: "Refrigerator Repair",
    shortDesc: "Maintenance and repair for residential refrigerators and freezers.",
    longDesc: "We offer support for cooling issues, compressor malfunctions, and thermostat calibration. Our services cover major household brands and aim to restore standard operating temperatures.",
    features: ["Compressor diagnostics", "Thermostat check", "Coolant level check", "Door seal inspection"],
    image: "/service-2.jpg",
    slug: "refrigerator"
  },
  {
    id: 3,
    iconName: "FaPlug",
    title: "Dishwasher Repair",
    shortDesc: "Support for built-in and portable dishwasher units.",
    longDesc: "Services include addressing drainage problems, water leakage, and cleaning cycle inefficiencies. We provide component-level diagnostics for pumps, spray arms, and heating elements.",
    features: ["Pump diagnostics", "Spray arm cleaning", "Heating element test", "Leak detection"],
    image: "/service-3.jpg",
    slug: "dishwasher"
  },
  {
    id: 4,
    iconName: "FaTv",
    title: "Television Repair",
    shortDesc: "Screen and audio repair for LED, LCD, and Smart TVs.",
    longDesc: "Our technicians handle common television issues including backlight failure, power supply problems, and connectivity errors. Service is provided based on component availability.",
    features: ["Backlight testing", "Power board repair", "Audio diagnostics", "Port inspection"],
    image: "/service-4.jpg",
    slug: "television"
  },
  {
    id: 5,
    iconName: "FaCoffee",
    title: "Coffee Maker Repair",
    shortDesc: "Maintenance for home and commercial coffee brewing equipment.",
    longDesc: "Addressing heating problems, pump failures, and internal blockages. We provide descaling services and component replacement for various brewing systems.",
    features: ["Heater testing", "Pump inspection", "Internal cleaning", "Seal replacement"],
    image: "/service-5.jpg",
    slug: "coffee-maker"
  },
  {
    id: 7,
    iconName: "FaWind",
    title: "Air Conditioner Repair",
    shortDesc: "Seasonal servicing and repair for split and window AC units.",
    longDesc: "Services include filter cleaning, gas pressure checks, and circuit board diagnostics. We aim to optimize cooling efficiency and address common operational noises.",
    features: ["Gas level inspection", "PCB diagnostics", "Filter maintenance", "Compressor testing"],
    image: "/service-7.jpg",
    slug: "air-conditioner"
  },
  {
    id: 8,
    iconName: "FaMicrochip",
    title: "Microwave Oven Repair",
    shortDesc: "Professional repair for heating and electrical microwave issues.",
    longDesc: "Common repairs include magnetron replacement, touch panel restoration, and diode testing. We follow safety protocols for all high-voltage appliance repairs.",
    features: ["Magnetron testing", "Touch pad diagnostics", "Diode inspection", "Fuse replacement"],
    image: "/service-8.jpg",
    slug: "microwave-oven"
  },
  {
    id: 9,
    iconName: "FaBurn",
    title: "Oven & Gas Stove Repair",
    shortDesc: "Repair services for gas burners, hobs, and electric ovens.",
    longDesc: "Focusing on burner efficiency, ignition reliability, and thermostat accuracy. We perform safety checks for gas leaks and electrical grounding.",
    features: ["Burner clearing", "Ignition diagnostics", "Safety leak test", "Thermostat check"],
    image: "/service-9.jpg",
    slug: "oven-stove"
  },
  {
    id: 10,
    iconName: "FaWater",
    title: "Water Purifier Repair",
    shortDesc: "Filter replacement and RO system maintenance.",
    longDesc: "Support for water purification systems, including RO membrane checks, filter changes, and pump maintenance to ensure output quality.",
    features: ["Filter replacement", "Pump inspection", "TDS monitoring", "UV lamp testing"],
    image: "/service-10.jpg",
    slug: "water-purifier"
  },
  {
    id: 11,
    iconName: "FaTshirt",
    title: "Clothes Dryer Repair",
    shortDesc: "Mechanical and electrical repair for residential dryers.",
    longDesc: "Services address heating element failures, belt replacements, and drum rotation issues. We also provide ventilation path cleaning for safety.",
    features: ["Heating element test", "Belt inspection", "Motor diagnostics", "Vent path clearing"],
    image: "/service-11.jpg",
    slug: "clothes-dryer"
  },
  {
    id: 12,
    iconName: "FaFan",
    title: "Kitchen Chimney Repair",
    shortDesc: "Cleaning and motor repair for kitchen exhaust systems.",
    longDesc: "Deep cleaning services for filters and blowers, along with motor diagnostics and switch panel repairs for all chimney types.",
    features: ["Motor diagnostics", "Blower cleaning", "Filter maintenance", "Switch testing"],
    image: "/service-12.jpg",
    slug: "kitchen-chimney"
  },
  {
    id: 6,
    iconName: "FaTools",
    title: "Other Appliances",
    shortDesc: "General repair services for various household appliances.",
    longDesc: "We provide diagnostic and repair solutions for a variety of small and large household appliances based on part availability and service feasibility.",
    features: ["Expert diagnostics", "Component testing", "Safety inspection", "Troubleshooting"],
    image: "/service-6.jpg",
    slug: "other-appliances"
  }
];
