'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

const events = [
  {
    id: 1,
    title: "Vedic Mathematics Workshop",
    date: "January 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "VVES Research Center, Delhi",
    attendees: 45,
    maxAttendees: 60,
    description: "Explore the fascinating world of Vedic mathematical techniques and their modern applications."
  },
  {
    id: 2,
    title: "Ancient Astronomy Seminar",
    date: "January 22, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Online Webinar",
    attendees: 128,
    maxAttendees: 200,
    description: "Discover the sophisticated astronomical knowledge preserved in Vedic texts."
  },
  {
    id: 3,
    title: "Ayurveda Research Conference",
    date: "February 5, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "IIT Delhi Campus",
    attendees: 23,
    maxAttendees: 100,
    description: "Latest research findings in Ayurvedic medicine and its scientific validation."
  }
]

export default function UpcomingEvents() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our workshops, seminars, and conferences to deepen your understanding of Vedic science
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{event.attendees}/{event.maxAttendees} registered</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                    <div 
                      className="bg-indian-red h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                  <button className="btn-primary whitespace-nowrap">
                    Register
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}