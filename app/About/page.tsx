
import React from 'react'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/services/Hero";
const page = () => {
  return (
    <>
    <Header />

      <Hero
        title="Photography & Videography Services"
        subtitle="We capture moments, products, and stories with a perfect blend of creativity, precision, and professional artistry."
        image="/images/Photography.png"
      />

      <section id="photography-expertise" className="text-center py-16">
        <h2 className="text-4xl font-bold">Our Photography Expertise</h2>
      </section>
      
      <Footer />
    </>
  )
}

export default page