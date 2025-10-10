import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Heros from "@/components/heros";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import Faq from "@/components/faq";
import About from "@/components/about";
import Contactform from "@/components/contactform";
import { HoverExpand_001 } from "@/components/portfolio";
// import { StickyCard002 } from "@/components/StickyCard";
import { StatCounter } from "@/components/stat-counter"


const page = () => {
  const images = [
    {
      src: "https://i.pinimg.com/1200x/b5/f4/8e/b5f48ea8142b932cd58ad9ff8833fc16.jpg",
      alt: "Description 1",
      code: "# 01",
    },
    {
      src: "https://i.pinimg.com/736x/2b/d1/f4/2bd1f4cfc69c7cbdd7e438409eb97a8c.jpg",
      alt: "Description 2",
      code: "# 02",
    },
    {
      src: "https://i.pinimg.com/1200x/24/0c/e0/240ce0b9581a246b5b2780002a95f4a4.jpg",
      alt: "Description 3",
      code: "# 03",
    },
    {
      src: "https://i.pinimg.com/736x/65/1c/e4/651ce47c0e0dc7e15cf727244315f935.jpg",
      alt: "Description 4",
      code: "# 04",
    },
    

  ];
//   const cards = [
//   {
//     id: 1,
//     image: "https://i.pinimg.com/1200x/b5/f4/8e/b5f48ea8142b932cd58ad9ff8833fc16.jpg",
//     alt: "Description 1",
//   },
//   {
//     id: 2,
//     image: "https://i.pinimg.com/736x/2b/d1/f4/2bd1f4cfc69c7cbdd7e438409eb97a8c.jpg",
//     alt: "Description 2",
//   },
//   {
//     id: 1,
//     image: "https://i.pinimg.com/1200x/b5/f4/8e/b5f48ea8142b932cd58ad9ff8833fc16.jpg",
//     alt: "Description 1",
//   },
//   {
//     id: 2,
//     image: "https://i.pinimg.com/736x/2b/d1/f4/2bd1f4cfc69c7cbdd7e438409eb97a8c.jpg",
//     alt: "Description 2",
//   },
//   // Add more cards as needed
// ];
  
  return (
    <div>
      <Header />
      <Heros />
        <StatCounter />
      <About />
      <Services />
      <HoverExpand_001 images={images} className="h-full w-full" />
        {/* <div className="h-screen w-full bg-gray-900">
      <StickyCard002
        cards={cards}
        className="bg-gradient-to-br from-gray-900 to-black"
        containerClassName="rounded-2xl shadow-2xl"
        imageClassName="object-cover"
      />
    </div> */}
    

      

      <Testimonial />
      <Faq />
      <Contactform />

      <Footer />
    </div>
  );
};

export default page;
