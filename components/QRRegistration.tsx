'use client'

import { motion } from 'framer-motion'
import { QrCode, Smartphone, UserPlus } from 'lucide-react'

export default function QRRegistration() {
  return (
    <section className="py-16 bg-indian-red">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
              Quick Registration
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Scan the QR code to instantly register for our courses and events. 
              Get immediate access to our learning materials and community.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-6 h-6" />
                <span>Scan with your mobile device</span>
              </div>
              <div className="flex items-center space-x-3">
                <UserPlus className="w-6 h-6" />
                <span>Complete registration in 2 minutes</span>
              </div>
              <div className="flex items-center space-x-3">
                <QrCode className="w-6 h-6" />
                <span>Instant access to member benefits</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="w-24 h-24 text-gray-400" />
              </div>
              <p className="text-center text-gray-600 text-sm">
                Scan to register for VVES membership
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}