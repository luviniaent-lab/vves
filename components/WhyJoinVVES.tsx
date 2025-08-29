'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Globe, Lightbulb, Heart } from 'lucide-react'

const benefits = [
  {
    icon: BookOpen,
    title: "Ancient Wisdom Access",
    description: "Gain exclusive access to rare Vedic texts and manuscripts with expert interpretations and modern applications.",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with renowned scholars, researchers, and practitioners in the field of Vedic science and philosophy.",
    color: "text-green-600"
  },
  {
    icon: Award,
    title: "Certified Learning",
    description: "Earn recognized certifications in Vedic studies that enhance your academic and professional credentials.",
    color: "text-purple-600"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Join an international community of Vedic enthusiasts and contribute to global research initiatives.",
    color: "text-orange-600"
  },
  {
    icon: Lightbulb,
    title: "Research Opportunities",
    description: "Participate in groundbreaking research projects that bridge ancient knowledge with modern science.",
    color: "text-yellow-600"
  },
  {
    icon: Heart,
    title: "Cultural Preservation",
    description: "Contribute to preserving and promoting India's rich cultural and scientific heritage for future generations.",
    color: "text-red-600"
  }
]

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Professor of Ancient Studies, JNU",
    quote: "VVES has revolutionized how we approach Vedic research. Their methodical interpretation provides invaluable insights.",
    image: "/api/placeholder/60/60"
  },
  {
    name: "Priya Sharma",
    role: "Research Scholar",
    quote: "The courses bridge traditional knowledge with contemporary understanding. Truly enlightening experience.",
    image: "/api/placeholder/60/60"
  },
  {
    name: "Prof. Anil Gupta",
    role: "Sanskrit Scholar",
    quote: "Dr. Sharon's work in interpreting Bharadwaj's Vimaan Shastra is groundbreaking. Exceptional research quality.",
    image: "/api/placeholder/60/60"
  }
]

export default function WhyJoinVVES() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Why Join VVES?</h2>
          <p className="section-subtitle">
            Discover the benefits of being part of our vibrant community dedicated to Vedic knowledge preservation and research
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-full bg-gray-100 mb-4 ${benefit.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Member Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            What Our Members Say
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from scholars and researchers who have benefited from our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-indian-red"
            >
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-indian-red to-indian-ochre rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-serif font-bold mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of scholars and enthusiasts in preserving and exploring Vedic knowledge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indian-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Become a Member
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indian-red transition-all duration-300">
              View Membership Plans
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}