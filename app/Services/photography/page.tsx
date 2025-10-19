import Hero from "@/components/services/Hero"
import ServiceGrid from "@/components/services/ServiceGrid"
import TechWeUse from "@/components/services/TechWeUse"
import Features from "@/components/services/Features"
import Form from "@/components/services/Form"
import { Camera, ImageIcon, CameraIcon, Video, Aperture } from "lucide-react"

import Header from "@/components/header";
import Footer from "@/components/footer";

const services = [
  { title: "Product Photography", desc: "High-quality product visuals for online stores.", icon: Camera },
  { title: "Brand Shoots", desc: "Professional shoots that tell your brand’s story.", icon: ImageIcon },
  { title: "Event Coverage", desc: "Capture events with precision and creativity.", icon: CameraIcon },
  { title: "Video Production", desc: "Full-scale promotional and brand videos.", icon: Video },
  { title: "Editing & Retouching", desc: "Expert editing for stunning final results.", icon: Aperture },
  { title: "Drone Photography", desc: "Aerial shots with cinematic quality.", icon: Camera },
]

const tech = ["Canon", "Sony", "Adobe Lightroom", "Premiere Pro", "After Effects", "DaVinci Resolve"]
const features = [
  "Professional-grade photography gear",
  "Expert editing & retouching",
  "On-site and studio shoots",
  "Cinematic-quality visuals",
]

export default function PhotographyPage() {
  return (
    <>
     <Header />
      <Hero
        title="Photography & Videography Services"
        subtitle="We capture visuals that tell your brand’s story."
        image="/images/Photography.png"
      />
      <ServiceGrid services={services} />
      <TechWeUse tech={tech} />
      <Features features={features} />
      <Form serviceName="Photography" />
         <Footer />
    </>
  )
}
