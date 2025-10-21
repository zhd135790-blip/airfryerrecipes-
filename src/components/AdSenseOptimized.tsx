'use client'

import { useEffect } from 'react'
import { siteConfig } from '@/lib/config'

interface AdSenseOptimizedProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  adStyle?: 'display' | 'in-article'
  className?: string
  responsive?: boolean
}

export default function AdSenseOptimized({
  adSlot,
  adFormat = 'auto',
  adStyle = 'display',
  className = '',
  responsive = true
}: AdSenseOptimizedProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.log('AdSense error:', error)
    }
  }, [])

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          maxWidth: responsive ? '728px' : '100%',
          height: adFormat === 'rectangle' ? '250px' : adFormat === 'vertical' ? '600px' : '90px',
          margin: '0 auto'
        }}
        data-ad-client={siteConfig.googleAnalyticsId.replace('G-', 'ca-pub-')}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? 'true' : 'false'}
        data-ad-style={adStyle}
      />
    </div>
  )
}

// 预定义的广告位置组件
export function HeaderAd() {
  return (
    <div className="mb-6">
      <AdSenseOptimized
        adSlot="1234567890"
        adFormat="horizontal"
        className="text-center"
      />
    </div>
  )
}

export function SidebarAd() {
  return (
    <div className="sticky top-4">
      <AdSenseOptimized
        adSlot="0987654321"
        adFormat="vertical"
        className="text-center"
      />
    </div>
  )
}

export function InArticleAd() {
  return (
    <div className="my-8 text-center">
      <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-sm text-gray-500 mb-2">Advertisement</p>
        <AdSenseOptimized
          adSlot="1122334455"
          adFormat="rectangle"
          className="max-w-md mx-auto"
        />
      </div>
    </div>
  )
}

export function FooterAd() {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <AdSenseOptimized
        adSlot="5566778899"
        adFormat="horizontal"
        className="text-center"
      />
    </div>
  )
}
