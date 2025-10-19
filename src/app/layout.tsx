import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAdsense from '@/components/GoogleAdsense'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { siteConfig } from '@/lib/config'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: 'Air Fryer Recipes That Actually Work - Kitchen Tested',
    template: '%s | Best Air Fryer Recipes',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  description: 'Kitchen-tested air fryer recipes that deliver crispy, flavorful results every time. From chicken wings to salmon and vegetables, find recipes that work for real home cooks.',
  keywords: ['air fryer recipes', 'air fryer cooking', 'crispy chicken wings', 'air fryer salmon', 'air fryer vegetables', 'healthy air fryer meals', 'air fryer chicken breast', 'air fryer french fries', 'air fryer bacon', 'air fryer cooking times'],
  authors: [{ name: siteConfig.siteName }],
  creator: siteConfig.siteName,
  publisher: siteConfig.siteName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.baseUrl,
    siteName: siteConfig.siteName,
    title: 'Air Fryer Recipes That Actually Work - Kitchen Tested',
    description: 'Kitchen-tested air fryer recipes that deliver crispy, flavorful results every time. From chicken wings to salmon and vegetables, find recipes that work for real home cooks.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Air Fryer Recipes - Kitchen Tested Results',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Air Fryer Recipes That Actually Work - Kitchen Tested',
    description: 'Kitchen-tested air fryer recipes that deliver crispy, flavorful results every time. From chicken wings to salmon and vegetables, find recipes that work for real home cooks.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <GoogleAdsense />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <GoogleAnalytics />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

