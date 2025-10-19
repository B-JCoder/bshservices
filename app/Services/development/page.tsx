import Hero from "@/components/services/Hero"
import ServiceGrid from "@/components/services/ServiceGrid"
import TechWeUse from "@/components/services/TechWeUse"
import Features from "@/components/services/Features"
import Form from "@/components/services/Form"
import { Monitor, ShoppingCart, Smartphone, Cpu, ChartBar, SlidersHorizontal } from "lucide-react"

import Header from "@/components/header";
import Footer from "@/components/footer";

const services = [
  { title: "Website Development", desc: "Fast, secure, and scalable web solutions.", icon: Monitor },
  { title: "E-commerce", desc: "Custom online stores with secure payment gateways.", icon: ShoppingCart },
  { title: "Mobile Apps", desc: "Cross-platform apps built for performance.", icon: Smartphone },
  { title: "Custom Software", desc: "Tailored systems to automate and optimize business.", icon: Cpu },
  { title: "Web Applications", desc: "Dynamic, API-integrated web apps.", icon: ChartBar },
  { title: "Maintenance & Support", desc: "Ongoing updates, fixes, and technical support.", icon: SlidersHorizontal },
]

const tech = ["Next.js", "React", "Node.js", "TypeScript", "Supabase", "Tailwind CSS"]
const features = [
  "Scalable and maintainable architecture",
  "Fully responsive and SEO-optimized",
  "High-performance web applications",
  "Modern stack with latest technologies",
]

export default function DevelopmentPage() {
  return (
    <>
     <Header />
      <Hero
        title="Web Development Services"
        subtitle="Fast, scalable, and modern web solutions for your business."
        image="/images/Development.png"
      />
      <ServiceGrid services={services} />
      <TechWeUse tech={tech} />
      <Features features={features} />
      <Form serviceName="Development" />
         <Footer />
    </>
  )
}
