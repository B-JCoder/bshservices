import Hero from "@/components/services/Hero"
import ServiceGrid from "@/components/services/ServiceGrid"
import TechWeUse from "@/components/services/TechWeUse"
import Features from "@/components/services/Features"
import Form from "@/components/services/Form"
import { DollarSign, Users, Megaphone, ChartBar, PenTool } from "lucide-react"

import Header from "@/components/header";
import Footer from "@/components/footer";

const services = [
  { title: "PPC Advertising", desc: "Targeted ad campaigns for high ROI.", icon: DollarSign },
  { title: "Social Media Marketing", desc: "Growth through creative campaigns.", icon: Users },
  { title: "SEO Optimization", desc: "Rank higher with proven SEO strategies.", icon: Megaphone },
  { title: "Email Marketing", desc: "Personalized email flows for engagement.", icon: ChartBar },
  { title: "Content Marketing", desc: "Engaging blogs, videos, and media.", icon: PenTool },
  { title: "Influencer Marketing", desc: "Collaborate with trusted voices.", icon: Users },
]

const tech = ["Google Ads", "Meta Ads", "Ahrefs", "HubSpot", "Canva", "Mailchimp"]
const features = [
  "Result-driven ad strategies",
  "SEO & content integration",
  "Data-based performance reports",
  "End-to-end campaign management",
]

export default function MarketingPage() {
  return (
    <>
     <Header />
      <Hero
        title="Marketing Services"
        subtitle="We help brands grow through smart digital marketing."
        image="/images/Marketing.png"
      />
      <ServiceGrid services={services} />
      <TechWeUse tech={tech} />
      <Features features={features} />
      <Form serviceName="Marketing" />
         <Footer />
    </>
  )
}
