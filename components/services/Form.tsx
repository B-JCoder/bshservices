"use client"
import { useState } from "react"

interface FormProps {
  serviceName: string
}

export default function Form({ serviceName }: FormProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you ${form.name}! We'll contact you about ${serviceName}.`)
  }

  return (
    <section className="py-20 bg-gray-100 dark:bg-zinc-800">
      <div className="max-w-lg mx-auto text-center px-4">
        <h2 className="text-2xl font-semibold mb-6">
          Contact Us for {serviceName} Services
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md border bg-white dark:bg-zinc-900"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border bg-white dark:bg-zinc-900"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md border bg-white dark:bg-zinc-900"
            rows={4}
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
