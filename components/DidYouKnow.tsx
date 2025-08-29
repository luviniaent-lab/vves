'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Lightbulb, BookOpen, Star } from 'lucide-react'

const facts = [
  {
    title: "Ancient Aviation Knowledge",
    content: "Maharshi Bharadwaj's Vimaan Shastra contains detailed descriptions of aircraft construction and navigation techniques that predate modern aviation by thousands of years.",
    icon: "✈️",
    category: "Aviation"
  },
  {
    title: "Vedic Mathematics",
    content: "The Vedic mathematical system includes 16 sutras that can solve complex calculations mentally, making mathematics faster and more intuitive.",
    icon: "🔢",
    category: "Mathematics"
  },
  {
    title: "Ayurvedic Precision",
    content: "Ancient Ayurvedic texts describe surgical procedures and medical treatments with precision that rivals modern medical practices.",
    icon: "🌿",
    category: "Medicine"
  },
  {
    title: "Astronomical Accuracy",
    content: "Vedic astronomers calculated the Earth's circumference and planetary movements with remarkable accuracy using only observational tools.",
    icon: "🌟",
    category: "Astronomy"
  },
  {
    title: "Metallurgical Mastery",
    content: "The Iron Pillar of Delhi, created using ancient Indian metallurgy, has stood rust-free for over 1,600 years.",
    icon: "⚒️",
    category: "Metallurgy"
  }
]

export default function DidYouKnow() {
  const [showPopup, setShowPopup] = useState(false)
  const [currentFact, setCurrentFact] = useState(0)

  useEffect(() => {
    // Show popup after 3 seconds on first visit
    const hasSeenPopup = localStorage.getItem('vves-did-you-know-seen')
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true)
        localStorage.setItem('vves-did-you-know-seen', 'true')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    // Rotate facts every 10 seconds when popup is open
    if (showPopup) {
      const interval = setInterval(() => {
        setCurrentFact((prev) => (prev + 1) % facts.length)
      }, 10000)
      return () => clearInterval(interval)
    }
  }, [showPopup])

  const handleClose = () => {
    setShowPopup(false)
  }

  const handleNext = () => {
    setCurrentFact((prev) => (prev + 1) % facts.length)
  }

  const handlePrevious = () => {
    setCurrentFact((prev) => (prev - 1 + facts.length) % facts.length)
  }

  return (
    <>
      {/* Floating "Did You Know" Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => setShowPopup(true)}
        className="fixed bottom-6 right-6 z-40 bg-indian-gold hover:bg-indian-ochre text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 no-print"
      >
        <Lightbulb className="w-6 h-6" />
      </motion.button>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-indian-red to-indian-ochre text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{facts[currentFact].icon}</div>
                    <div>
                      <h3 className="text-xl font-serif font-bold">Did You Know?</h3>
                      <p className="text-sm opacity-90">{facts[currentFact].category}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-serif font-bold text-gray-900 mb-3">
                  {facts[currentFact].title}
                </h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {facts[currentFact].content}
                </p>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {facts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFact(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentFact ? 'bg-indian-red' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={handlePrevious}
                      className="px-3 py-1 text-sm text-indian-red hover:bg-indian-red hover:text-white rounded transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-3 py-1 text-sm bg-indian-red text-white hover:bg-indian-deepRed rounded transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      handleClose()
                      // Scroll to research section or navigate to research page
                      document.getElementById('research-section')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Explore Our Research</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}