'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const subhashits = [
  {
    sanskrit: "सत्यं वद धर्मं चर",
    transliteration: "Satyam vada dharmam chara",
    meaning: "Speak the truth, practice righteousness",
    source: "Taittiriya Upanishad"
  },
  {
    sanskrit: "विद्या ददाति विनयं",
    transliteration: "Vidya dadati vinayam",
    meaning: "Knowledge bestows humility",
    source: "Hitopadesha"
  },
  {
    sanskrit: "अहिंसा परमो धर्मः",
    transliteration: "Ahimsa paramo dharmah",
    meaning: "Non-violence is the highest virtue",
    source: "Mahabharata"
  }
]

export default function SubhashitSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRotating, setIsRotating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subhashits.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const handleRotate = () => {
    setIsRotating(true)
    setCurrentIndex((prev) => (prev + 1) % subhashits.length)
    setTimeout(() => setIsRotating(false), 500)
  }

  const current = subhashits[currentIndex]

  return (
    <section className="py-16 bg-gradient-to-r from-indian-ochre to-indian-gold">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            Daily Sanskrit Wisdom
          </h2>
          <p className="text-white opacity-90">
            Timeless teachings from our ancient scriptures
          </p>
        </motion.div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-6"
        >
          <div className="text-2xl sm:text-3xl font-hindi text-white mb-4 leading-relaxed">
            {current.sanskrit}
          </div>
          
          <div className="text-lg text-white opacity-90 italic mb-4">
            {current.transliteration}
          </div>
          
          <div className="text-white text-lg mb-4">
            "{current.meaning}"
          </div>
          
          <div className="text-sm text-white opacity-75">
            — {current.source}
          </div>
        </motion.div>

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handleRotate}
            disabled={isRotating}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50"
          >
            <RefreshCw className={`w-5 h-5 ${isRotating ? 'animate-spin' : ''}`} />
          </button>
          
          <div className="flex space-x-2">
            {subhashits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}