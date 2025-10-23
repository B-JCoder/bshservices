
import React from 'react'
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProcessFlow from "@/components/ProcessFlow";
import Faq from "@/components/faq";
import Ourteam from '@/components/Ourteam';

const page = () => {
  return (
    <>
   <Header />
   <Ourteam />
     <Faq />
        <ProcessFlow />
  
    <Footer />
    </>
  )
}

export default page