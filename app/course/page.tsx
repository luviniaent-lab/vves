'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award, 
  Download, 
  Play, 
  Calendar,
  CheckCircle,
  Star,
  User
} from 'lucide-react'

const courseHighlights = [
  "Comprehensive study of Maharshi Bharadwaj's ancient aviation texts",
  "Scientific interpretation of Vimaan construction principles",
  "Modern applications and relevance of ancient knowledge",
  "Expert guidance from renowned Vedic scholars",
  "Certificate of completion from VVES",
  "Access to exclusive research materials and manuscripts"
]

const syllabus = [
  {
    module: "Module 1",
    title: "Introduction to Vimaan Shastra",
    duration: "2 weeks",
    topics: [
      "Historical context of Bharadwaj's work",
      "Understanding ancient Sanskrit terminology",
      "Overview of Vedic scientific methodology"
    ]
  },
  {
    module: "Module 2", 
    title: "Vimaan Construction Principles",
    duration: "3 weeks",
    topics: [
      "Materials and metallurgy in ancient texts",
      "Structural design principles",
      "Propulsion systems described in manuscripts"
    ]
  },
  {
    module: "Module 3",
    title: "Navigation and Control Systems",
    duration: "2 weeks", 
    topics: [
      "Ancient navigation techniques",
      "Control mechanisms and instrumentation",
      "Weather prediction and flight planning"
    ]
  },
  {
    module: "Module 4",
    title: "Modern Scientific Analysis",
    duration: "3 weeks",
    topics: [
      "Comparing ancient and modern aviation principles",
      "Scientific validation of described technologies",
      "Potential applications in contemporary aerospace"
    ]
  }
]

const faculty = [
  {
    name: "Dr. Madhuri Sharon",
    designation: "Course Director",
    specialization: "Vedic Science Interpretation",
    experience: "25+ years",
    image: "/api/placeholder/100/100"
  },
  {
    name: "Prof. Rajesh Verma",
    designation: "Sanskrit Expert",
    specialization: "Ancient Manuscripts",
    experience: "20+ years", 
    image: "/api/placeholder/100/100"
  },
  {
    name: "Dr. Anil Kumar",
    designation: "Aerospace Consultant",
    specialization: "Modern Aviation Technology",
    experience: "15+ years",
    image: "/api/placeholder/100/100"
  }
]

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Aerospace Engineer",
    rating: 5,
    comment: "This course opened my eyes to the incredible depth of ancient Indian knowledge. The scientific approach to interpreting Vimaan Shastra is remarkable.",
    image: "/api/placeholder/60/60"
  },
  {
    name: "Dr. Rajesh Kumar", 
    role: "Research Scholar",
    rating: 5,
    comment: "Excellent course structure and expert faculty. The blend of ancient wisdom with modern scientific analysis is truly enlightening.",
    image: "/api/placeholder/60/60"
  }
]

export default function CoursePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indian-red via-indian-maroon to-indian-deepRed text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Understanding Maharshi Bharadwaj's Vimaan Shastra
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore the fascinating world of ancient Indian aviation through scientific interpretation 
              of Maharshi Bharadwaj's revolutionary texts
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indian-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Enroll Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indian-red transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Course Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This comprehensive course delves deep into Maharshi Bharadwaj's Vimaan Shastra, 
                one of the most intriguing texts in ancient Indian literature. Through systematic 
                study and scientific analysis, students will explore the principles of ancient 
                aviation technology described in these sacred texts.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indian-red">10</div>
                  <div className="text-sm text-gray-600">Weeks Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indian-red">4</div>
                  <div className="text-sm text-gray-600">Modules</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indian-red">3</div>
                  <div className="text-sm text-gray-600">Expert Faculty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indian-red">500+</div>
                  <div className="text-sm text-gray-600">Students Enrolled</div>
                </div>
              </div>

              <div className="space-y-3">
                {courseHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Course Flyer */}
              <div className="bg-gradient-to-br from-indian-red to-indian-ochre rounded-lg p-8 text-white shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-indian-red" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Featured Course</h3>
                  <p className="opacity-90">Ancient Aviation Mastery</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" />
                    <span>10 Weeks • 40 Hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" />
                    <span>Limited to 50 Students</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5" />
                    <span>VVES Certification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5" />
                    <span>Next Batch: February 2025</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">₹15,000</div>
                  <div className="text-sm opacity-80 mb-4">Early Bird: ₹12,000</div>
                  <button className="bg-white text-indian-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
                    Register Interest
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Course Syllabus</h2>
            <p className="section-subtitle">
              Comprehensive curriculum designed to provide deep understanding of Vimaan Shastra
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {syllabus.map((module, index) => (
              <motion.div
                key={module.module}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-serif font-bold text-gray-900">
                    {module.module}: {module.title}
                  </h3>
                  <span className="text-sm bg-indian-red text-white px-3 py-1 rounded-full">
                    {module.duration}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indian-red rounded-full mt-2"></div>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-primary flex items-center space-x-2 mx-auto">
              <Download className="w-5 h-5" />
              <span>Download Complete Syllabus</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Expert Faculty</h2>
            <p className="section-subtitle">
              Learn from renowned experts in Vedic science and modern technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-indian-red font-medium mb-2">{member.designation}</p>
                <p className="text-sm text-gray-600 mb-2">{member.specialization}</p>
                <p className="text-xs text-gray-500">{member.experience} Experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Videos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Course Preview</h2>
            <p className="section-subtitle">
              Get a glimpse of what you'll learn in our comprehensive course
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl"
            >
              <div className="aspect-video bg-gradient-to-br from-indian-red to-indian-maroon flex items-center justify-center">
                <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 group">
                  <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white font-semibold">Introduction to Vimaan Shastra</h3>
                <p className="text-gray-300 text-sm">Duration: 8:45</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl"
            >
              <div className="aspect-video bg-gradient-to-br from-indian-ochre to-indian-gold flex items-center justify-center">
                <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 group">
                  <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white font-semibold">Ancient Aviation Principles</h3>
                <p className="text-gray-300 text-sm">Duration: 12:30</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Student Testimonials</h2>
            <p className="section-subtitle">
              Hear from our students about their learning experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.comment}"
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
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-gradient-to-r from-indian-red to-indian-ochre text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Explore Ancient Aviation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our next batch and embark on a journey through Maharshi Bharadwaj's revolutionary texts
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indian-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Enroll Now - Early Bird ₹12,000
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indian-red transition-all duration-300">
                Request Information
              </button>
            </div>
            
            <p className="text-sm mt-4 opacity-80">
              Limited seats available • Next batch starts February 2025
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}