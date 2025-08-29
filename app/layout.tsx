import type { Metadata } from 'next'
import { Inter, Noto_Sans_Devanagari, Playfair_Display } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/auth/AuthProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const notoSansDevanagari = Noto_Sans_Devanagari({ 
  subsets: ['devanagari'],
  variable: '--font-hindi'
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Vedic Vigyanam Explorer Society (VVES)',
  description: 'Leading authority in preservation and interpretation of Vedic Science',
  keywords: 'Vedic Science, Ancient Knowledge, Research, Education, Sanskrit',
  authors: [{ name: 'VVES Team' }],
  openGraph: {
    title: 'Vedic Vigyanam Explorer Society (VVES)',
    description: 'Leading authority in preservation and interpretation of Vedic Science',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansDevanagari.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        <AuthProvider>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#7f1d1d',
                color: '#fff',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  )
}