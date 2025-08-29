'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Users, Target, Eye, Award, Calendar, MapPin } from 'lucide-react'

const founders = [
  {
    name: "Dr. Madhuri Sharon",
    designation: "Founder & Director",
    specialization: "Vedic Science Interpretation",
    image: "/api/placeholder/200/200",
    bio: "Leading authority in Vedic science with over 25 years of research experience. Pioneer in interpreting ancient texts for modern applications.",
    achievements: ["PhD in Ancient Studies", "Author of 15+ research papers", "International speaker on Vedic science"]
  },
  {
    name: "Prof. Rajesh Verma",
    designation: "Co-Founder & Research Head",
    specialization: "Sanskrit Literature & Manuscripts",
    image: "/api/placeholder/200/200",
    bio: "Renowned Sanskrit scholar with expertise in ancient manuscript analysis and interpretation.",
    achievements: ["MA Sanskrit Literature", "20+ years teaching experience", "Expert in Devanagari scripts"]
  },
  {
    name: "Dr. Priya Sharma",
    designation: "Co-Founder & Academic Coordinator",
    specialization: "Ayurveda & Ancient Medicine",
    image: "/api/placeholder/200/200",
    bio: "Specialist in Ayurvedic medicine with focus on bridging ancient healing practices with modern healthcare.",
    achievements: ["BAMS, MD Ayurveda", "Research in herbal medicine", "Published author"]
  }
]

const partners = [
  "Indian Institute of Science, Bangalore",
  "Sanskrit University, Varanasi",
  "Archaeological Survey of India",
  "Council of Scientific & Industrial Research (CSIR)",
  "Indian Institute of Technology, Delhi",
  "Banaras Hindu University",
  "Jawaharlal Nehru University",
  "Indian Council of Historical Research"
]

const milestones = [
  {
    year: "2018",
    title: "Foundation",
    description: "VVES established with mission to preserve Vedic knowledge"
  },
  {
    year: "2019",
    title: "First Research Publication",
    description: "Published groundbreaking paper on Vimaan Shastra interpretations"
  },
  {
    year: "2020",
    title: "Academic Partnerships",
    description: "Formed collaborations with leading Indian universities"
  },
  {
    year: "2021",
    title: "International Recognition",
    description: "Received global acknowledgment for Vedic research contributions"
  },
  {
    year: "2022",
    title: "Course Launch",
    description: "Launched first certified course on Bharadwaj's Vimaan Shastra"
  },
  {
    year: "2023",
    title: "Digital Library",
    description: "Established comprehensive digital repository of Vedic texts"
  },
  {
    year: "2024",
    title: "Research Expansion",
    description: "Expanded research to include metallurgy and ancient mathematics"
  },
  {
    year: "2025",
    title: "Global Outreach",
    description: "Launched international programs and partnerships"
  }
]

export default function AboutPage() {
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
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">About VVES</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Dedicated to becoming the leading authority in the preservation and interpretation of Vedic Science, 
              integrating ancient wisdom into modern academic and cultural frameworks
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-indian-red rounded-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                To systematically study, interpret, and preserve Vedic scientific knowledge through rigorous research, 
                making ancient wisdom accessible and applicable to contemporary academic and cultural contexts.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indian-red rounded-full mr-3"></span>
                  Preserve ancient Vedic manuscripts and texts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indian-red rounded-full mr-3"></span>
                  Conduct scientific interpretation of Vedic knowledge
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indian-red rounded-full mr-3"></span>
                  Bridge ancient wisdom with modern applications
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-indian-ochre rounded-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                To become the leading global authority in the preservation and interpretation of Vedic Science, 
                fostering a deeper understanding of India's rich scientific heritage and its relevance to modern society.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indian-ochre rounded-full mr-3"></span>
                  Global recognition as Vedic science authority
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indian-ochre rounded-full mr-3"></span>
                  Integration into modern academic curricula
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indian-ochre rounded-full mr-3"></span>
                  Cultural heritage preservation for future generations
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Our Founders</h2>
            <p className="section-subtitle">
              Meet the visionary leaders who established VVES to preserve and interpret Vedic knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-indian-red font-medium mb-2">{founder.designation}</p>
                <p className="text-sm text-gray-600 mb-4">{founder.specialization}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {founder.bio}
                </p>
                <div className="space-y-1">
                  {founder.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center text-xs text-gray-600">
                      <Award className="w-3 h-3 text-indian-gold mr-2" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VVES Journey Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">VVES Journey</h2>
            <p className="section-subtitle">
              Our evolution from a vision to a leading authority in Vedic science research
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indian-red opacity-20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card">
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="w-5 h-5 text-indian-red" />
                        <span className="text-2xl font-bold text-indian-red">{milestone.year}</span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-indian-red rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Our Partners</h2>
            <p className="section-subtitle">
              Collaborating with prestigious institutions to advance Vedic research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-indian-red rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{partner}</h3>
                  <p className="text-sm text-gray-600">Research Collaboration</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}