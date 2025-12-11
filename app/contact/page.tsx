"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/services/Hero";

import Faq from "@/components/faq";
import Contactform from "@/components/contactform";

import GoogleMap from "@/components/googlemap";



const page = () => {
  return (
    <>
      <Header />

      <Hero
        title="Get In Touch"
        subtitle="We'd love to hear from you. Contact us for any inquiries or to discuss your project."
        image="/images/3dlogo.jpeg"
      />
 <Contactform />

   

       <div>

      <GoogleMap />
    </div>

      <Faq />
      
      <Footer />
    </>
  );
};

export default page;
