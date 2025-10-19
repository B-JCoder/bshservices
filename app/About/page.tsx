import { PagesHero } from '@/components/pageshero'
import React from 'react'
import Header from "@/components/header";
import Footer from "@/components/footer";

const page = () => {
  return (
    <>
   <Header />
    <PagesHero />
    <Footer />
    </>
  )
}

export default page