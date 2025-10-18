'use client'

import { useEffect } from 'react'

interface AdUnitProps {
  slot: string
  format?: 'horizontal' | 'vertical' | 'rectangle' | 'auto'
  className?: string
}

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      if (window.adsbygoogle && process.env.NODE_ENV === 'production') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  if (!process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID) {
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-500 text-sm">AdSense Placeholder</p>
        <p className="text-xs text-gray-400 mt-1">Add NEXT_PUBLIC_GOOGLE_ADSENSE_ID to show ads</p>
      </div>
    )
  }

  const formatStyle = {
    horizontal: { display: 'block' },
    vertical: { display: 'block' },
    rectangle: { display: 'block' },
    auto: { display: 'block' },
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={formatStyle[format]}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format === 'auto' ? 'auto' : undefined}
        data-full-width-responsive={format === 'auto' ? 'true' : undefined}
      />
    </div>
  )
}

