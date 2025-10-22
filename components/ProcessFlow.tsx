"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaComments,
  FaHandshake,
  FaFileInvoiceDollar,
  FaFileInvoice,
  FaSearch,
  FaMapMarkedAlt,
  FaPhoneVolume,
  FaUsers,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Customer Query",
    icon: <FaComments />,
    desc: "We listen carefully to your needs and gather all essential details about your project.",
  },
  {
    number: "02",
    title: "Initial Meeting",
    icon: <FaHandshake />,
    desc: "We discuss ideas, goals, and vision to understand your expectations clearly.",
  },
  {
    number: "03",
    title: "Quotation",
    icon: <FaFileInvoiceDollar />,
    desc: "A transparent quote is shared with all cost details and timelines for approval.",
  },
  {
    number: "04",
    title: "Invoicing",
    icon: <FaFileInvoice />,
    desc: "Once approved, we initiate the formal agreement and send the invoice.",
  },
  {
    number: "05",
    title: "Detailed Analysis",
    icon: <FaSearch />,
    desc: "Our team analyzes the project scope deeply to build a tailored strategy.",
  },
  {
    number: "06",
    title: "Strategy & Road Map",
    icon: <FaMapMarkedAlt />,
    desc: "We prepare a clear action plan that defines the entire execution process.",
  },
  {
    number: "07",
    title: "Onboarding Call",
    icon: <FaPhoneVolume />,
    desc: "We connect with you and align every detail before the work officially begins.",
  },
  {
    number: "08",
    title: "Let's Work Together",
    icon: <FaUsers />,
    desc: "Your journey begins! We start delivering with full dedication and transparency.",
  },
];

const ProcessFlow = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Step card animation
      gsap.utils.toArray<HTMLElement>(".step-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.15,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // Vertical line glowing scroll animation
      gsap.fromTo(
        ".timeline-line",
        { height: 0 },
        {
          height: "100%",
          duration: 3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-full min-h-[100vh] bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-400 text-black py-24 px-6 overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold mb-24 text-center bg-gradient-to-r from-[#1A14A5] to-[#4b35ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(26,20,165,0.4)]"
      >
        Our Work Process
      </motion.h2>

      {/* Center Timeline Line */}
      <div className="absolute left-1/2 top-0 w-[4px] h-full bg-gradient-to-b from-[#1A14A5] to-[#4b35ff] rounded-full timeline-line shadow-[0_0_25px_rgba(26,20,165,0.4)]"></div>

      {/* Steps */}
      <div className="relative z-10 flex flex-col gap-24 mt-10 w-full max-w-5xl">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`step-card relative flex flex-col sm:flex-row items-center ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            } justify-between gap-6 sm:gap-12`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 180 }}
          >
            {/* Connecting Line Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#1A14A5] to-[#4b35ff] rounded-full border-4 border-white shadow-[0_0_20px_rgba(26,20,165,0.5)] z-10"></div>

            {/* Connector Arm */}
            <div
              className={`absolute top-1/2 ${
                index % 2 === 0 ? "right-[50%]" : "left-[50%]"
              } w-[18vw] h-[2px] bg-gradient-to-r from-[#1A14A5] to-[#4b35ff] shadow-[0_0_15px_rgba(74,58,255,0.6)]`}
            ></div>

            {/* Step Box */}
            <div
              className={`relative px-8 py-10 sm:px-10 sm:py-12 bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_0_35px_rgba(74,58,255,0.4)] rounded-3xl w-[90%] sm:w-[45%] text-center ${
                index % 2 === 0 ? "sm:text-left" : "sm:text-right"
              }`}
            >
              {/* Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1A14A5]/25 to-[#4b35ff]/25 rounded-3xl blur-lg animate-pulse"></div>

              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotateY: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex justify-center mb-4 text-5xl text-[#1A14A5]"
              >
                {step.icon}
              </motion.div>

              {/* Number */}
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1A14A5] to-[#4b35ff] bg-clip-text text-transparent mb-1">
                {step.number}
              </div>

              {/* Title */}
              <p className="text-lg sm:text-xl font-semibold text-black mb-2">
                {step.title}
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessFlow;
