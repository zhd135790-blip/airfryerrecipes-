import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAdsense from '@/components/GoogleAdsense'
import { LanguageProvider } from '@/contexts/LanguageContext'

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
  metadataBase: new URL('https://airfryerrecipes.com'),
  title: {
    default: 'Air Fryer Recipes - Easy, Healthy & Delicious Recipes',
    template: '%s | Air Fryer Recipes',
  },
  description: 'Discover easy and healthy air fryer recipes. From crispy chicken to vegetables and desserts, find the best air fryer cooking ideas for every meal.',
  keywords: ['air fryer recipes', 'air fryer cooking', 'healthy recipes', 'easy air fryer meals', 'air fryer chicken', 'air fryer vegetables'],
  authors: [{ name: 'Air Fryer Recipes' }],
  creator: 'Air Fryer Recipes',
  publisher: 'Air Fryer Recipes',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://airfryerrecipes.com',
    siteName: 'Air Fryer Recipes',
    title: 'Air Fryer Recipes - Easy, Healthy & Delicious Recipes',
    description: 'Discover easy and healthy air fryer recipes for every meal.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Air Fryer Recipes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Air Fryer Recipes - Easy, Healthy & Delicious Recipes',
    description: 'Discover easy and healthy air fryer recipes for every meal.',
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
        <LanguageProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

