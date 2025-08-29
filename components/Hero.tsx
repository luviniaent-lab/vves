'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail } from 'lucide-react'

interface HeroProps {
  visitorCount: number
}

export default function Hero({ visitorCount }: HeroProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden">
      {/* Vedic Pattern Overlay */}
      <div className="absolute inset-0 vedic-pattern opacity-20"></div>
      
      {/* Floating Cultural Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 text-indian-gold opacity-30 float-animation">
        <div className="text-4xl font-hindi">ॐ</div>
      </div>
      <div className="absolute bottom-20 right-10 w-20 h-20 text-indian-ochre opacity-30 float-animation" style={{ animationDelay: '1s' }}>
        <div className="text-5xl font-hindi">🕉</div>
      </div>
      <div className="absolute top-1/3 right-20 w-12 h-12 text-indian-saffron opacity-25 float-animation" style={{ animationDelay: '2s' }}>
        <div className="text-3xl">🪷</div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-card text-gray-900 mb-8"
        >
          {/* VVES Logo and Name */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-indian-red rounded-full flex items-center justify-center shadow-lg mr-4">
              <span className="text-white font-bold text-2xl font-hindi">ॐ</span>
            </div>
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-indian-red leading-tight">
                Vedic Vigyanam Explorer Society
              </h1>
              <div className="text-lg sm:text-xl font-hindi text-indian-maroon mt-2">
                वैदिक विज्ञानम् एक्सप्लोरर सोसाइटी
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="text-xl sm:text-2xl font-serif text-indian-deepRed mb-6 italic">
            "Preserving Ancient Wisdom for Modern Understanding"
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4 text-indian-red" />
              <span>Research Center, Sector 15, New Delhi 110001</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4 text-indian-red" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4 text-indian-red" />
              <span>info@vves.org</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-6 leading-tight text-shadow">
            Vedic Vigyanam Explorer Society
          </h2>
          
          <div className="text-lg sm:text-xl font-hindi mb-8 opacity-90 text-shadow">
            वैदिक विज्ञानम् एक्सप्लोरर सोसाइटी
          </div>
          
          <p className="text-lg sm:text-xl mb-8 leading-relaxed opacity-90 text-shadow max-w-3xl mx-auto">
            Leading authority in the preservation and interpretation of Vedic Science, 
            integrating ancient wisdom into modern academic and cultural frameworks
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-indian-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Our Research
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indian-red transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Join Our Community
            </button>
            <button className="bg-indian-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-indian-ochre transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Courses
            </button>
          </div>
        </motion.div>

        {/* Visitor Counter */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect rounded-xl p-6 inline-block glow-animation"
        >
          <p className="text-sm text-white opacity-80 mb-2">Total Visitors</p>
          <div className="text-3xl font-bold text-white">
            {inView && <CountUp end={visitorCount} duration={2} separator="," />}
          </div>
          <p className="text-xs text-white opacity-70 mt-1">Since Establishment</p>
        </motion.div>
      </div>
    </section>
  )
}