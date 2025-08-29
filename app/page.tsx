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
import Footer from '@/components/Footer'

export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Simulate visitor counter
    const count = localStorage.getItem('vves-visitor-count')
    if (count) {
      const newCount = parseInt(count) + 1
      setVisitorCount(newCount)
      localStorage.setItem('vves-visitor-count', newCount.toString())
    } else {
      setVisitorCount(12847) // Starting count
      localStorage.setItem('vves-visitor-count', '12847')
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero visitorCount={visitorCount} />
      <VideoSection />
      <SubhashitSection />
      <PartnersSection />
      <TestimonialsSection />
      <QRRegistration />
      <UpcomingEvents />
      <Footer />
    </main>
  )
}