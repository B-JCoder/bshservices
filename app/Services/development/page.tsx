import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/services/Hero";
import ServiceSection from "@/components/services/ServiceSection";
import Form from "@/components/services/Form";

export default function DevelopmentPage() {
  return (
    <>
      <Header />

      <Hero
        title="Web Development Services"
        subtitle="We craft fast, scalable, and beautiful web experiences tailored to your business."
        image="/images/Development.png"
      />

      <section className="text-center py-16">
        <h2 className="text-4xl font-bold">Our Development Services</h2>
      </section>

      {/* ===== 1. Website Development ===== */}
      <ServiceSection
        title="Website Development"
        description="We build responsive, SEO-friendly, and visually appealing websites that elevate your online presence."
        features={[
          "Fast and secure performance",
          "Custom UI/UX design",
          "SEO optimized structure",
          "Fully responsive layouts",
        ]}
        tech={[
          { name: "JavaScript", icon: "/icons/js.png" },
          { name: "Next.js", icon: "/icons/nextjs.png" },
          { name: "React", icon: "/icons/react.png" },
          { name: "Tailwind", icon: "/icons/tailwind.png" },
          { name: "Three.js", icon: "/icons/threejs.png" },
          { name: "Angular", icon: "/icons/angular.png" },
          { name: "PHP", icon: "/icons/php.png" },
        ]}
        image="/images/webdev.jpg"
      />

      {/* ===== 2. E-commerce Development ===== */}
      <ServiceSection
        title="E-Commerce Development"
        description="Launch your custom online store with secure payment gateways and effortless management."
        features={[
          "Custom product management",
          "Secure payment integration",
          "Fast checkout process",
          "Scalable and SEO-ready store",
        ]}
        tech={[
          { name: "Shopify", icon: "/icons/shopify.png" },
          { name: "WordPress", icon: "/icons/wordpress.png" },
          { name: "WooCommerce", icon: "/icons/woocommerce.png" },
          { name: "Stripe", icon: "/icons/stripe.png" },
          { name: "PayPal", icon: "/icons/paypal.png" },
        ]}
        image="/images/ecommerce.jpg"
        reverse
      />

      {/* ===== 3. Mobile App Development ===== */}
      <ServiceSection
        title="Mobile App Development"
        description="We design and build high-performance mobile apps that deliver seamless experiences across all devices."
        features={[
          "Cross-platform support",
          "Intuitive UI/UX design",
          "App Store & Play Store deployment",
          "Backend integration",
        ]}
        tech={[
          { name: "React Native", icon: "/icons/react.png" },
          { name: "Flutter", icon: "/icons/flutter.png" },
          { name: "iOS", icon: "/icons/ios.png" },
          { name: "Android", icon: "/icons/android.png" },
        ]}
        image="/images/mobile.jpg"
      />

      {/* ===== 4. Custom Software ===== */}
      <ServiceSection
        title="Custom Software Development"
        description="Tailored business software to automate your workflows, boost efficiency, and reduce costs."
        features={[
          "End-to-end development",
          "Custom APIs and dashboards",
          "Cloud integration",
          "Scalable architecture",
        ]}
        tech={[
          { name: "Node.js", icon: "/icons/nodejs.png" },
          { name: "Python", icon: "/icons/python.png" },
          { name: "Java", icon: "/icons/java.png" },
          { name: ".NET", icon: "/icons/dotnet.png" },
        ]}
        image="/images/software.jpg"
        reverse
      />

      {/* ===== 5. Web Applications ===== */}
      <ServiceSection
        title="Web Applications"
        description="Interactive, API-driven web apps built with cutting-edge technology to deliver exceptional performance."
        features={[
          "Real-time functionality",
          "API integrations",
          "Database optimization",
          "Cross-browser compatibility",
        ]}
        tech={[
          { name: "Next.js", icon: "/icons/nextjs.png" },
          { name: "Supabase", icon: "/icons/supabase.png" },
          { name: "Firebase", icon: "/icons/firebase.png" },
          { name: "Prisma", icon: "/icons/prisma.png" },
        ]}
        image="/images/webapp.jpg"
      />

      {/* ===== 6. Maintenance & Support ===== */}
      <ServiceSection
        title="Maintenance & Support"
        description="We ensure your systems stay updated, secure, and running at top performance round the clock."
        features={[
          "24/7 monitoring",
          "Regular updates",
          "Security patches",
          "Performance audits",
        ]}
        tech={[
          { name: "AWS", icon: "/icons/aws.png" },
          { name: "GitHub", icon: "/icons/github.png" },
          { name: "Docker", icon: "/icons/docker.png" },
          { name: "CI/CD", icon: "/icons/cicd.png" },
        ]}
        image="/images/maintenance.jpg"
        reverse
      />

      <Form serviceName="Development" />
      <Footer />
    </>
  );
}
