'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

interface HeroProps {
  visitorCount: number
}

export default function Hero({ visitorCount }: HeroProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indian-red via-indian-maroon to-indian-deepRed overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-indian-gold rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indian-ochre rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Vedic Vigyanam Explorer Society
          </h1>
          
          <div className="text-xl sm:text-2xl font-hindi mb-8 opacity-90">
            वैदिक विज्ञानम् एक्सप्लोरर सोसाइटी
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-8 leading-relaxed opacity-90"
          >
            Preserving Ancient Wisdom for Modern Understanding
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="bg-white text-indian-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Explore Our Research
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indian-red transition-all duration-300">
              Join Our Community
            </button>
          </motion.div>
        </motion.div>

        {/* Visitor Counter */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 inline-block"
        >
          <p className="text-sm opacity-80 mb-2">Total Visitors</p>
          <div className="text-3xl font-bold">
            {inView && <CountUp end={visitorCount} duration={2} separator="," />}
          </div>
        </motion.div>
      </div>
    </section>
  )
}