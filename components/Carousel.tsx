import React from 'react'
import { Carousel_001 } from "@/components/ui//skiper-ui/skiper47";

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





const Carousel = () => {
  return (
    <div> <Carousel_001
      images={images}
      showPagination={true}
      showNavigation={true}
      loop={true}
      autoplay={true}
      spaceBetween={40}
    /></div>
  )
}

export default Carousel