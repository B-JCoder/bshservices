import Hero from "@/components/services/Hero"
import ServiceGrid from "@/components/services/ServiceGrid"
import TechWeUse from "@/components/services/TechWeUse"
import Features from "@/components/services/Features"
import Form from "@/components/services/Form"
import { Paintbrush, Monitor, Palette, PenTool, Video, ChartBar } from "lucide-react"
import Header from "@/components/header";
import Footer from "@/components/footer";


const services = [
  { title: "Branding", desc: "Complete visual identity design.", icon: Paintbrush },
  { title: "UI / UX", desc: "Designs that delight and convert.", icon: Monitor },
  { title: "Graphic Design", desc: "Creative visuals for print and digital.", icon: Palette },
  { title: "Logo Design", desc: "Unique, memorable brand marks.", icon: PenTool },
  { title: "Motion Graphics", desc: "Animated visuals and video graphics.", icon: Video },
  { title: "Packaging Design", desc: "Professional product packaging designs.", icon: ChartBar },
]

const tech = ["Figma", "Adobe XD", "Illustrator", "Photoshop", "After Effects", "Canva"]
const features = [
  "Pixel-perfect and responsive design",
  "User-first approach for conversions",
  "Complete brand guideline delivery",
  "Modern and aesthetic visuals",
]

export default function DesigningPage() {
  return (
    <>
      <Header />
      <Hero
        title="Designing Services"
        subtitle="Beautiful, functional designs that make brands stand out."
        image="/images/Designing.png"
      />
      <ServiceGrid services={services} />
      <TechWeUse tech={tech} />
      <Features features={features} />
      <Form serviceName="Designing" />
       <Footer />
    </>
  )
}


