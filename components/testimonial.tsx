"use client"
import React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
const testimonials = [
  {
    name: "David Wilson",
    role: "Startup Founder",
    feedback:
      "BSH helped us launch our brand online with a stunning website and smart marketing. Their team truly understands startups!",
    image: "/images/client1.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "E-Commerce Business Owner",
    feedback:
      "From branding to digital ads, BSH transformed my business into a growing online store. Highly recommended!",
    image: "/images/client2.jpg",
  },
  {
    name: "James Carter",
    role: "Tech Entrepreneur",
    feedback:
      "The AI and software solutions provided by BSH saved us months of development time and gave us a competitive edge.",
    image: "/images/client3.jpg",
  },
]

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-20 bg-white px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-gray-600">
          Hear from business leaders who partnered with BSH to transform and grow their companies.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 bg-[#F4F7FE] rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
              width={40}
              height={40}
            />
            <h3 className="font-semibold text-lg text-gray-900">
              {testimonial.name}
            </h3>
            <span className="text-sm text-[#1A14A5] font-medium mb-3">
              {testimonial.role}
            </span>
            <p className="text-gray-600 mb-4">“{testimonial.feedback}”</p>
            <div className="flex gap-1 text-yellow-500">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
