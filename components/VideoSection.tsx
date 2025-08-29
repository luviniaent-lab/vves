'use client'

import { useState } from 'react'
import { Play, Pause } from 'lucide-react'
import { motion } from 'framer-motion'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

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
            Message from Our Founder
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dr. Madhuri Sharon shares her vision for preserving and interpreting Vedic knowledge
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-indian-red to-indian-maroon flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 group"
              >
                {isPlaying ? (
                  <Pause className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                ) : (
                  <Play className="w-12 h-12 text-white ml-1 group-hover:scale-110 transition-transform" />
                )}
              </button>
            </div>
            
            {/* Video Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white font-semibold text-lg mb-1">
                Dr. Madhuri Sharon
              </h3>
              <p className="text-gray-300 text-sm">
                Founder & Director, VVES | Duration: 5:42
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}