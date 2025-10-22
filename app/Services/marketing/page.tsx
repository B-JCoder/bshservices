import Hero from "@/components/services/Hero"
import ServiceGrid from "@/components/services/ServiceGrid"
import TechWeUse from "@/components/services/TechWeUse"
import Features from "@/components/services/Features"
import Form from "@/components/services/Form"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DollarSign, Users, Megaphone, ChartBar, PenTool } from "lucide-react"

const services = [
  { title: "PPC Advertising", desc: "Targeted ad campaigns for high ROI.", icon: DollarSign },
  { title: "Social Media Marketing", desc: "Growth through creative campaigns.", icon: Users },
  { title: "SEO Optimization", desc: "Rank higher with proven SEO strategies.", icon: Megaphone },
  { title: "Email Marketing", desc: "Personalized email flows for engagement.", icon: ChartBar },
  { title: "Content Marketing", desc: "Engaging blogs, videos, and media.", icon: PenTool },
  { title: "Influencer Marketing", desc: "Collaborate with trusted voices.", icon: Users },
]

const tech = [
  "Google Ads",
  "Meta Ads",
  "Ahrefs",
  "Canva",
  "HubSpot",
  "Buffer",
  "Mailchimp",
  "Hootsuite",
]

const features = [
  "Data-driven marketing strategy for measurable results",
  "Creative ad designs that attract and convert",
  "Detailed analytics and monthly performance reports",
  "Customized approach for every business niche",
]

export default function MarketingPage() {
  return (
    <>
      <Header />
      <Hero
        title="Marketing Services"
        subtitle="Boost your online presence with targeted campaigns and creative strategies."
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
