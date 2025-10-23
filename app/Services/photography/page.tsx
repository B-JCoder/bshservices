import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/services/Hero";
import ServiceSection from "@/components/services/ServiceSection";
import Form from "@/components/services/Form";

export default function PhotographyPage() {
  return (
    <>
      <Header />

      <Hero
        title="Photography & Videography Services"
        subtitle="We capture moments, products, and stories with a perfect blend of creativity, precision, and professional artistry."
        image="/images/Photography.png"
      />

      <section className="text-center py-16">
        <h2 className="text-4xl font-bold">Our Photography Expertise</h2>
      </section>

      {/* ===== 1. Product Photography ===== */}
      <ServiceSection
        title="Product Photography"
        description="Showcase your products in their best light with high-quality, detail-oriented photography designed to boost engagement and sales."
        features={[
          "E-commerce and catalog photography",
          "Studio and lifestyle setups",
          "Lighting and composition perfection",
          "High-resolution product retouching",
        ]}
        tech={[
          { name: "Canon EOS R5", icon: "/icons/camera.png" },
          { name: "Lightroom", icon: "/icons/lightroom.png" },
          { name: "Photoshop", icon: "/icons/photoshop.png" },
          { name: "Capture One", icon: "/icons/captureone.png" },
        ]}
        image="/images/product-photo.jpg"
      />

      {/* ===== 2. Brand Shoots ===== */}
      <ServiceSection
        title="Brand Shoots"
        description="We help brands visually communicate their story through conceptual photography that connects emotionally with their audience."
        features={[
          "Creative direction and planning",
          "On-location or studio sessions",
          "Professional lighting setup",
          "Consistent visual branding",
        ]}
        tech={[
          { name: "Sony A7R IV", icon: "/icons/sony.png" },
          { name: "Lightroom", icon: "/icons/lightroom.png" },
          { name: "Photoshop", icon: "/icons/photoshop.png" },
          { name: "Figma", icon: "/icons/figma.png" },
        ]}
        image="/images/brand-shoot.jpg"
        reverse
      />

      {/* ===== 3. Event Coverage ===== */}
      <ServiceSection
        title="Event Coverage"
        description="From corporate events to personal celebrations, we capture every key moment with a creative and journalistic eye."
        features={[
          "Professional event photography team",
          "Multi-angle coverage",
          "Instant on-site editing support",
          "Photo and video package options",
        ]}
        tech={[
          { name: "Nikon Z8", icon: "/icons/nikon.png" },
          { name: "Adobe Lightroom", icon: "/icons/lightroom.png" },
          { name: "Premiere Pro", icon: "/icons/premiere.png" },
          { name: "DaVinci Resolve", icon: "/icons/davinci.png" },
        ]}
        image="/images/event-coverage.jpg"
      />

      {/* ===== 4. Video Production ===== */}
      <ServiceSection
        title="Video Production"
        description="Full-scale video production services — from concept to final edit — delivering cinematic visuals that tell powerful stories."
        features={[
          "Concept, scripting, and storyboarding",
          "4K filming and direction",
          "Professional color grading",
          "Sound design and motion graphics",
        ]}
        tech={[
          { name: "Blackmagic 6K", icon: "/icons/blackmagic.png" },
          { name: "Premiere Pro", icon: "/icons/premiere.png" },
          { name: "After Effects", icon: "/icons/aftereffects.png" },
          { name: "DaVinci Resolve", icon: "/icons/davinci.png" },
        ]}
        image="/images/video-production.jpg"
        reverse
      />

      {/* ===== 5. Editing & Retouching ===== */}
      <ServiceSection
        title="Editing & Retouching"
        description="Bring every shot to perfection with expert color correction, compositing, and digital retouching that enhances natural beauty."
        features={[
          "High-end retouching",
          "Color grading and tone balance",
          "Image compositing and cleanup",
          "Batch export for web & print",
        ]}
        tech={[
          { name: "Photoshop", icon: "/icons/photoshop.png" },
          { name: "Lightroom", icon: "/icons/lightroom.png" },
          { name: "Capture One", icon: "/icons/captureone.png" },
          { name: "DaVinci Resolve", icon: "/icons/davinci.png" },
        ]}
        image="/images/editing-retouching.jpg"
      />

      {/* ===== 6. Drone Photography ===== */}
      <ServiceSection
        title="Drone Photography"
        description="Aerial imagery that adds cinematic perspectives to your visuals — perfect for real estate, events, and creative brand films."
        features={[
          "4K aerial photo and video",
          "Licensed drone operators",
          "Dynamic FPV shots",
          "Post-production editing and color work",
        ]}
        tech={[
          { name: "DJI Mavic 3", icon: "/icons/dji.png" },
          { name: "Air 2S", icon: "/icons/drone.png" },
          { name: "Premiere Pro", icon: "/icons/premiere.png" },
          { name: "After Effects", icon: "/icons/aftereffects.png" },
        ]}
        image="/images/drone-photo.jpg"
        reverse
      />

      <Form serviceName="Photography" />
      <Footer />
    </>
  );
}
