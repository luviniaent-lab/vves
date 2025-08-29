'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Linkedin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <footer className="bg-indian-maroon text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-indian-red font-bold text-xl font-hindi">ॐ</span>
              </div>
              <div>
                <span className="font-serif text-xl font-bold">VVES</span>
                <div className="text-xs font-hindi opacity-80">वैदिक विज्ञानम्</div>
              </div>
            </div>
            
            <h3 className="font-serif text-lg font-bold mb-2">Vedic Vigyanam Explorer Society</h3>
            <p className="text-sm text-indian-gold mb-3 italic">
              "Preserving Ancient Wisdom for Modern Understanding"
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Leading authority in the preservation and interpretation of Vedic Science, 
              integrating ancient wisdom into modern academic and cultural frameworks.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/course" className="text-gray-300 hover:text-white transition-colors">Course</Link></li>
              <li><Link href="/research" className="text-gray-300 hover:text-white transition-colors">Research</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/library" className="text-gray-300 hover:text-white transition-colors">Library</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Research Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indian-gold rounded-full mr-2"></span>
                Vimaan Shastra (Ancient Aviation)
              </li>
              <li>Vedic Mathematics</li>
              <li>Ancient Astronomy</li>
              <li>Ayurvedic Medicine</li>
              <li>Sanskrit Literature</li>
              <li>Metallurgical Sciences</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-indian-gold" />
                <div className="text-gray-300">
                  <div className="font-medium">VVES Research Center</div>
                  <div>Sector 15, New Delhi</div>
                  <div>India 110001</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-indian-gold" />
                <div className="text-gray-300">
                  <div>+91 98765 43210</div>
                  <div className="text-sm opacity-80">Mon-Fri 9:00 AM - 6:00 PM IST</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-indian-gold" />
                <div className="text-gray-300">
                  <div>info@vves.org</div>
                  <div className="text-sm opacity-80">Official correspondence</div>
                </div>
              </div>
            </div>
            
            {/* Professional Email Notice */}
            <div className="mt-4 p-3 bg-indian-red bg-opacity-20 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <ExternalLink className="w-3 h-3 text-indian-gold" />
                <span className="text-xs font-medium text-indian-gold">Professional Email</span>
              </div>
              <p className="text-xs text-gray-300">
                Activate your professional @vves.org email for official correspondence
              </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-indian-red mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2025 Vedic Vigyanam Explorer Society. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Registered under Indian Society Registration Act | CIN: U80904DL2020NPL999999
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-gray-500">|</span>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
              <span className="text-gray-500">|</span>
              <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
          
          {/* SSL and Security Notice */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SSL Secured | WCAG Compliant | Mobile Optimized</span>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </>
  )
}