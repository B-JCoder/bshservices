
import React from 'react'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/services/Hero";
import About from "@/components/about";
import ProcessFlow from "@/components/ProcessFlow";
import Faq from "@/components/faq";
import Contactform from "@/components/contactform";
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
              <ProcessFlow />
               <Faq />
      <Contactform />


      
      <Footer />
    </>
  )
}

export default page