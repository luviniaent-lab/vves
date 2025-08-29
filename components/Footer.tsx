'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-indian-maroon text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-indian-red font-bold text-lg">V</span>
              </div>
              <span className="font-serif text-xl font-bold">VVES</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dedicated to preserving and interpreting Vedic knowledge for future generations through rigorous research and education.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-indian-gold cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-indian-gold cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-indian-gold cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-indian-gold cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/research" className="text-gray-300 hover:text-white transition-colors">Research</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/library" className="text-gray-300 hover:text-white transition-colors">Library</Link></li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Research Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Vedic Mathematics</li>
              <li>Ancient Astronomy</li>
              <li>Ayurvedic Medicine</li>
              <li>Sanskrit Literature</li>
              <li>Archaeological Studies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span className="text-gray-300">info@vves.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-gray-300">
                  Research Center, Sector 15<br />
                  New Delhi, India 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-indian-red mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Vedic Vigyanam Explorer Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}