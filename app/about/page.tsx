"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/services/Hero";
import About from "@/components/about";
import ProcessFlow from "@/components/ProcessFlow";
import Faq from "@/components/faq";
import Contactform from "@/components/contactform";
import OurTeamSection from "@/components/Ourteam";

// ==== ICONS IMPORTS ====
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
  SiAdobexd,
  SiAdobeillustrator,
  SiTailwindcss,
} from "react-icons/si";

const page = () => {
  return (
    <>
      <Header />

      <Hero
        title="About Us"
        subtitle="We capture moments, products, and stories with a perfect blend of creativity, precision, and professional artistry."
        image="/images/Photography.png"
      />

      <section id="photography-expertise" className="text-center py-16">
        <h2 className="text-4xl font-bold">About Us</h2>
      </section>

      <About />

      {/* ================= TEAM MEMBER 1 ================= */}
      <OurTeamSection
        id="bilal"
        name="Muhammad Bilal"
        role="Full Stack Developer & SEO Specialist"
        about="Bilal is a skilled full stack developer with a strong command of modern web technologies. He also specializes in SEO, helping businesses grow organically through smart optimization strategies."
        image="/team/bilal.png" // 👉 Add your actual image here
        cvLink="/cv/muhammad-bilal.pdf"
        tech={[
          { name: "React", icon: <SiReact /> },
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "Node.js", icon: <SiNodedotjs /> },
          { name: "Tailwind", icon: <SiTailwindcss /> },
        ]}
      />

      {/* ================= TEAM MEMBER 2 ================= */}
      <OurTeamSection
        id="shahzaib"
        name="Muhammad Shahzaib"
        role="Website Developer & Digital Marketer"
        about="Shahzaib builds high-performance websites and creates effective digital marketing strategies that help brands grow faster and stronger. He delivers results with clean designs and smart marketing."
        image="/team/shahzaib.jpg" // 👉 Add your actual image here
        reverse
        cvLink="/cv/muhammad-shahzaib.pdf"
        tech={[
          { name: "Figma", icon: <SiFigma /> },
          { name: "Adobe XD", icon: <SiAdobexd /> },
          { name: "Illustrator", icon: <SiAdobeillustrator /> },
        ]}
      />

      <ProcessFlow />
      <Faq />
      <Contactform />
      <Footer />
    </>
  );
};

export default page;
