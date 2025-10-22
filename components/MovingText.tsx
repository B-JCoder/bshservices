"use client";

import React from "react";
import {
  Monitor,
  ShoppingCart,
  Smartphone,
  Cpu,
  ChartBar,
  SlidersHorizontal,
  Paintbrush,
  Palette,
  PenTool,
  Video,
  DollarSign,
  Users,
  Megaphone,
  Camera,
  ImageIcon,
  CameraIcon,
  Aperture,
} from "lucide-react";
import "./movingtext.css";
const services = [
  {
    id: "development",
    title: "Development",
    items: [
      { title: "Website Development", icon: Monitor },
      { title: "E-commerce", icon: ShoppingCart },
      { title: "Mobile Apps", icon: Smartphone },
      { title: "Custom Software", icon: Cpu },
      { title: "Web Applications", icon: ChartBar },
      { title: "Maintenance & Support", icon: SlidersHorizontal },
    ],
  },
  {
    id: "design",
    title: "Designing",
    items: [
      { title: "Branding", icon: Paintbrush },
      { title: "UI / UX", icon: Monitor },
      { title: "Graphic Design", icon: Palette },
      { title: "Logo Design", icon: PenTool },
      { title: "Motion Graphics", icon: Video },
      { title: "Packaging Design", icon: ChartBar },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    items: [
      { title: "PPC Advertising", icon: DollarSign },
      { title: "Social Media Marketing", icon: Users },
      { title: "SEO Optimization", icon: Megaphone },
      { title: "Email Marketing", icon: ChartBar },
      { title: "Content Marketing", icon: PenTool },
      { title: "Influencer Marketing", icon: Users },
    ],
  },
  {
    id: "photography",
    title: "Photography",
    items: [
      { title: "Product Photography", icon: Camera },
      { title: "Brand Shoots", icon: ImageIcon },
      { title: "Event Coverage", icon: CameraIcon },
      { title: "Video Production", icon: Video },
      { title: "Editing & Retouching", icon: Aperture },
      { title: "Drone Photography", icon: Camera },
    ],
  },
];

const MovingText: React.FC = () => {
  return (
    <section
      id="page2"
      className="relative w-full py-12 overflow-hidden text-[#1A14A5] bg-[#fdfdfd] dark:bg-[#010b1c]"
    >
      {/* Background glow layer */}
      <div className="moving-bg"></div>

      <div className="relative flex flex-col gap-8">
        {services.map((category, idx) => (
          <div
            key={category.id}
            className={`flex items-center gap-8 ${
              idx % 2 === 0 ? "animate-move" : "animate-move-reverse"
            }`}
          >
            {category.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/10 dark:bg-white/5 px-6 py-3 rounded-full shadow-lg 
                             hover:scale-105 hover:bg-[#0ef]/10 transition-transform duration-300 cursor-default"
                >
                  <Icon className="w-6 h-6 text-[#0ef] icon-glow" />
                  <h1 className="text-[2vw] font-semibold whitespace-nowrap text-[#1A14A5] dark:text-[#0ef]">
                    {item.title}
                  </h1>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovingText;
