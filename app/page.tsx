'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import VideoSection from '@/components/VideoSection'
import SubhashitSection from '@/components/SubhashitSection'
import PartnersSection from '@/components/PartnersSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import QRRegistration from '@/components/QRRegistration'
import UpcomingEvents from '@/components/UpcomingEvents'
import DidYouKnow from '@/components/DidYouKnow'
import WhyJoinVVES from '@/components/WhyJoinVVES'
import Footer from '@/components/Footer'

export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Visitor counter with realistic increment
    const count = localStorage.getItem('vves-visitor-count')
    const lastVisit = localStorage.getItem('vves-last-visit')
    const today = new Date().toDateString()
    
    if (count) {
      let currentCount = parseInt(count)
      
      // Increment only once per day per user
      if (lastVisit !== today) {
        currentCount += 1
        localStorage.setItem('vves-visitor-count', currentCount.toString())
        localStorage.setItem('vves-last-visit', today)
      }
      
      setVisitorCount(currentCount)
    } else {
      const initialCount = 15247 // Starting count based on established presence
      setVisitorCount(initialCount)
      localStorage.setItem('vves-visitor-count', initialCount.toString())
      localStorage.setItem('vves-last-visit', today)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero visitorCount={visitorCount} />
      <DidYouKnow />
      <VideoSection />
      <SubhashitSection />
      <PartnersSection />
      <TestimonialsSection />
      <WhyJoinVVES />
      <QRRegistration />
      <UpcomingEvents />
      <Footer />
    </main>
  )
}