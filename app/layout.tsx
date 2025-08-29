import type { Metadata } from 'next'
import { Inter, Noto_Sans_Devanagari, Playfair_Display } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/auth/AuthProvider'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'

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
  description: 'Leading authority in the preservation and interpretation of Vedic Science, integrating ancient wisdom into modern academic and cultural frameworks',
  keywords: 'Vedic Science, Ancient Knowledge, Research, Education, Sanskrit, Vimaan Shastra, Bharadwaj, Ayurveda, Vedic Mathematics',
  authors: [{ name: 'VVES Team' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Vedic Vigyanam Explorer Society (VVES)',
    description: 'Leading authority in the preservation and interpretation of Vedic Science',
    type: 'website',
    locale: 'en_IN',
    siteName: 'VVES',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://vves.org'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansDevanagari.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7f1d1d" />
      </head>
      <body className="font-sans antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
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