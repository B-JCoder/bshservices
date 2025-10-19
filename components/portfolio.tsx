"use client";
import React from "react";
import { Skiper52 } from "@/components/HoverExpand_001";
import { motion } from "framer-motion";


const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="w-full bg-[#f5f4f3] py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A14A5] drop-shadow-sm">
          Our <span className="text-[#231F20]">Portfolio</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#231F20]/80 max-w-2xl mx-auto leading-relaxed">
          Business Smart Hub (BSH) provides future-ready solutions to help
          businesses design, develop, market, and scale in the digital age.
        </p>
      </motion.div>

      {/* Portfolio Gallery */}
      <div className="w-full max-w-7xl flex items-center justify-center">
        <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden shadow-xl">
          <Skiper52 />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
