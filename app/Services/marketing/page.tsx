import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/services/Hero";
import ServiceSection from "@/components/services/ServiceSection";
import Form from "@/components/services/Form";

export default function MarketingPage() {
  return (
    <>
      <Header />

      <Hero
        title="Digital Marketing Services"
        subtitle="We help your brand grow, engage, and convert through data-driven digital marketing strategies."
        image="/images/Marketing.png"
      />

      <section className="text-center py-16">
        <h2 className="text-4xl font-bold">Our Marketing Expertise</h2>
      </section>

      {/* ===== 1. PPC Advertising ===== */}
      <ServiceSection
        title="PPC Advertising"
        description="Maximize your ROI with performance-driven Pay-Per-Click advertising. We create and manage high-converting ad campaigns that bring measurable results."
        features={[
          "Keyword and audience research",
          "Google & Meta ad campaign setup",
          "A/B testing for ad creatives",
          "Conversion tracking and optimization",
        ]}
        tech={[
          { name: "Google Ads", icon: "/icons/googleads.png" },
          { name: "Meta Ads", icon: "/icons/metaads.png" },
          { name: "LinkedIn Ads", icon: "/icons/linkedin.png" },
          { name: "Google Analytics", icon: "/icons/analytics.png" },
        ]}
        image="/images/ppc.jpg"
      />

      {/* ===== 2. Social Media Marketing ===== */}
      <ServiceSection
        title="Social Media Marketing"
        description="We help brands grow through engaging social media content and targeted campaigns that connect with your audience on every platform."
        features={[
          "Social media strategy & management",
          "Creative post & reel design",
          "Influencer collaborations",
          "Audience engagement & analytics",
        ]}
        tech={[
          { name: "Meta Business Suite", icon: "/icons/meta.png" },
          { name: "Canva", icon: "/icons/canva.png" },
          { name: "Buffer", icon: "/icons/buffer.png" },
          { name: "Hootsuite", icon: "/icons/hootsuite.png" },
        ]}
        image="/images/social-media.jpg"
        reverse
      />

      {/* ===== 3. SEO Optimization ===== */}
      <ServiceSection
        title="SEO Optimization"
        description="Boost your organic visibility and climb search rankings with our comprehensive SEO strategies tailored to your business goals."
        features={[
          "On-page & technical SEO",
          "Keyword research and content strategy",
          "Backlink building and audits",
          "Performance tracking & reporting",
        ]}
        tech={[
          { name: "Ahrefs", icon: "/icons/ahrefs.png" },
          { name: "Semrush", icon: "/icons/semrush.png" },
          { name: "Google Search Console", icon: "/icons/searchconsole.png" },
          { name: "Yoast SEO", icon: "/icons/yoast.png" },
        ]}
        image="/images/seo.jpg"
      />

      {/* ===== 4. Email Marketing ===== */}
      <ServiceSection
        title="Email Marketing"
        description="Deliver the right message to the right audience with personalized, automated email campaigns that convert and retain customers."
        features={[
          "Automated drip campaigns",
          "Segmentation & personalization",
          "Newsletter design",
          "Performance analytics",
        ]}
        tech={[
          { name: "Mailchimp", icon: "/icons/mailchimp.png" },
          { name: "Sendinblue", icon: "/icons/sendinblue.png" },
          { name: "Klaviyo", icon: "/icons/klaviyo.png" },
          { name: "HubSpot", icon: "/icons/hubspot.png" },
        ]}
        image="/images/email-marketing.jpg"
        reverse
      />

      {/* ===== 5. Content Marketing ===== */}
      <ServiceSection
        title="Content Marketing"
        description="We create impactful content strategies that educate, inspire, and convert — from blog posts to videos and social media campaigns."
        features={[
          "Blog writing and SEO content",
          "Video and visual content production",
          "Content strategy and planning",
          "Cross-channel distribution",
        ]}
        tech={[
          { name: "Notion", icon: "/icons/notion.png" },
          { name: "Grammarly", icon: "/icons/grammarly.png" },
          { name: "WordPress", icon: "/icons/wordpress.png" },
          { name: "Google Docs", icon: "/icons/docs.png" },
        ]}
        image="/images/content-marketing.jpg"
      />

      {/* ===== 6. Influencer Marketing ===== */}
      <ServiceSection
        title="Influencer Marketing"
        description="Amplify your brand’s reach by partnering with trusted influencers and creators who align with your vision and audience."
        features={[
          "Influencer research and outreach",
          "Campaign planning and execution",
          "Contract and deliverable management",
          "Performance measurement and reporting",
        ]}
        tech={[
          { name: "Upfluence", icon: "/icons/upfluence.png" },
          { name: "Heepsy", icon: "/icons/heepsy.png" },
          { name: "Instagram", icon: "/icons/instagram.png" },
          { name: "TikTok Creator Studio", icon: "/icons/tiktok.png" },
        ]}
        image="/images/influencer.jpg"
        reverse
      />

      <Form serviceName="Marketing" />
      <Footer />
    </>
  );
}
