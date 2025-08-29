'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Professor of Ancient Studies, JNU",
    content: "VVES has revolutionized how we approach Vedic research. Their methodical interpretation of ancient texts provides invaluable insights for modern scholars.",
    rating: 5,
    image: "/api/placeholder/80/80"
  },
  {
    name: "Priya Sharma",
    role: "Research Scholar",
    content: "The courses offered by VVES bridge the gap between traditional knowledge and contemporary understanding. Truly enlightening experience.",
    rating: 5,
    image: "/api/placeholder/80/80"
  },
  {
    name: "Prof. Anil Gupta",
    role: "Sanskrit Scholar",
    content: "Dr. Sharon's work in interpreting Bharadwaj's Vimaan Shastra is groundbreaking. VVES is doing exceptional work in this field.",
    rating: 5,
    image: "/api/placeholder/80/80"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            What Scholars Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonials from researchers and students who have benefited from our work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-indian-red opacity-20" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}