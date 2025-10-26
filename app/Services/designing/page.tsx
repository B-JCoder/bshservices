import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/services/Hero";
import ServiceSection from "@/components/services/ServiceSection";
import Form from "@/components/services/Form";

export default function DesigningPage() {
  return (
    <>
      <Header />

      <Hero
        title="Creative Design Services"
        subtitle="We transform your vision into visually stunning designs that inspire, engage, and connect with your audience."
        image="/images/Designing.png"
      />

      <section className="text-center py-16">
        <h2 className="text-4xl font-bold">Our Design Expertise</h2>
      </section>

      {/* ===== 1. Branding ===== */}
      <ServiceSection
        title="Branding"
        description="We create cohesive brand identities that reflect your business values, build trust, and make a lasting impression."
        features={[
          "Logo & color palette creation",
          "Typography and brand guidelines",
          "Brand storytelling and strategy",
          "Consistent visual identity design",
        ]}
        tech={[
          { name: "Adobe Illustrator", icon: "/icons/illustrator.png" },
          { name: "Photoshop", icon: "/icons/photoshop.png" },
          { name: "Figma", icon: "/icons/figma.png" },
          { name: "Canva", icon: "/icons/canva.png" },
        ]}
        image="/images/Designing/1.png"
      />

      {/* ===== 2. UI / UX Design ===== */}
      <ServiceSection
        title="UI / UX Design"
        description="We design user interfaces that are intuitive, accessible, and delightful — enhancing usability and conversion rates."
        features={[
          "User research and wireframing",
          "High-fidelity prototyping",
          "Responsive UI layouts",
          "Design system creation",
        ]}
        tech={[
          { name: "Figma", icon: "/icons/figma.png" },
          { name: "Adobe XD", icon: "/icons/xd.png" },
          { name: "Sketch", icon: "/icons/sketch.png" },
          { name: "InVision", icon: "/icons/invision.png" },
        ]}
        image="/images/Designing/2.png"
        reverse
      />

      {/* ===== 3. Graphic Design ===== */}
      <ServiceSection
        title="Graphic Design"
        description="Our creative team crafts stunning visuals for digital and print that communicate your message effectively."
        features={[
          "Social media creatives",
          "Brochures and posters",
          "Business cards & stationery",
          "Ad banners and marketing visuals",
        ]}
        tech={[
          { name: "Adobe Photoshop", icon: "/icons/photoshop.png" },
          { name: "Illustrator", icon: "/icons/illustrator.png" },
          { name: "CorelDRAW", icon: "/icons/coreldraw.png" },
          { name: "Canva", icon: "/icons/canva.png" },
        ]}
        image="/images/Designing/3.png"
      />

      {/* ===== 4. Logo Design ===== */}
      <ServiceSection
        title="Logo Design"
        description="We design unique, memorable logos that capture your brand’s personality and create instant recognition."
        features={[
          "Custom concept creation",
          "Vector-based precision design",
          "Multiple revisions & variations",
          "Brand alignment and scalability",
        ]}
        tech={[
          { name: "Adobe Illustrator", icon: "/icons/illustrator.png" },
          { name: "Affinity Designer", icon: "/icons/affinity.png" },
          { name: "Figma", icon: "/icons/figma.png" },
          { name: "Canva", icon: "/icons/canva.png" },
        ]}
        image="/images/Designing/4.png"
        reverse
      />

      {/* ===== 5. Motion Graphics ===== */}
      <ServiceSection
        title="Motion Graphics"
        description="We bring your ideas to life with smooth, engaging motion visuals — perfect for ads, explainers, and branding videos."
        features={[
          "Animated logos and intros",
          "Explainer videos",
          "Social media animations",
          "Cinematic transitions & effects",
        ]}
        tech={[
          { name: "After Effects", icon: "/icons/aftereffects.png" },
          { name: "Premiere Pro", icon: "/icons/premiere.png" },
          { name: "Blender", icon: "/icons/blender.png" },
          { name: "Cinema 4D", icon: "/icons/c4d.png" },
        ]}
        image="/images/Designing/5.png"
      />

      {/* ===== 6. Packaging Design ===== */}
      <ServiceSection
        title="Packaging Design"
        description="We design professional product packaging that stands out on shelves and tells your brand story at first glance."
        features={[
          "Custom dieline design",
          "Print-ready artwork",
          "3D mockups & product visualization",
          "Material and color guidance",
        ]}
        tech={[
          { name: "Adobe Illustrator", icon: "/icons/illustrator.png" },
          { name: "Photoshop", icon: "/icons/photoshop.png" },
          { name: "Dimension", icon: "/icons/dimension.png" },
          { name: "Blender", icon: "/icons/blender.png" },
        ]}
        image="/images/Designing/6.png"
        reverse
      />

      <Form serviceName="Designing" />
      <Footer />
    </>
  );
}
