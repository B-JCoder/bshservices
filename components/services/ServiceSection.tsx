"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface ServiceSectionProps {
  title: string;
  description: string;
  features: string[];
  tech: { name: string; icon: string }[]; // icon can be image path or svg name
  image: string;
  reverse?: boolean;
  cta?: string;
}

export default function ServiceSection({
  title,
  description,
  features,
  tech,
  image,
  reverse = false,
  cta = "Get Started",
}: ServiceSectionProps) {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* ===== IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* ===== CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          {/* ===== FEATURES ===== */}
          <ul className="space-y-3 mb-6">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* ===== CTA BUTTON ===== */}
          <a
            href="#contact"
            className="inline-block bg-[#1A14A5] hover:bg-[#0f0b7a] text-white px-6 py-3 rounded-lg font-medium transition"
          >
            {cta}
          </a>
        </motion.div>
      </div>

      {/* ===== TECH WE USE ===== */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-6">Tech We Use</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {tech.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2 bg-card shadow-sm px-4 py-2 rounded-full"
            >
              <Image
                src={t.icon}
                alt={t.name}
                width={24}
                height={24}
                className="object-contain"
              />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
