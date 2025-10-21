'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/config'

interface SocialShareProps {
  title: string
  url: string
  description?: string
  image?: string
  className?: string
}

export default function SocialShare({
  title,
  url,
  description,
  image,
  className = ''
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareData = {
    title,
    url,
    description: description || title,
    image: image || `${siteConfig.baseUrl}/og-image.jpg`
  }

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(shareData.image)}&description=${encodeURIComponent(shareData.description)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const shareButtons = [
    {
      name: 'Facebook',
      icon: '📘',
      url: shareUrls.facebook,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: shareUrls.twitter,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'Pinterest',
      icon: '📌',
      url: shareUrls.pinterest,
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: shareUrls.whatsapp,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: shareUrls.linkedin,
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'Email',
      icon: '📧',
      url: shareUrls.email,
      color: 'bg-gray-600 hover:bg-gray-700'
    }
  ]

  return (
    <div className={`social-share ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Share this recipe</h3>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {shareButtons.map((button) => (
          <a
            key={button.name}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex flex-col items-center justify-center p-3 rounded-lg text-white
              ${button.color} transition-all duration-200 transform hover:scale-105
              hover:shadow-lg group
            `}
            aria-label={`Share on ${button.name}`}
          >
            <span className="text-xl mb-1">{button.icon}</span>
            <span className="text-xs font-medium">{button.name}</span>
          </a>
        ))}
        
        {/* Copy Link Button */}
        <button
          onClick={copyToClipboard}
          className={`
            flex flex-col items-center justify-center p-3 rounded-lg text-white
            ${copied ? 'bg-green-600' : 'bg-gray-600 hover:bg-gray-700'}
            transition-all duration-200 transform hover:scale-105 hover:shadow-lg
          `}
          aria-label="Copy link"
        >
          <span className="text-xl mb-1">{copied ? '✓' : '🔗'}</span>
          <span className="text-xs font-medium">
            {copied ? 'Copied!' : 'Copy Link'}
          </span>
        </button>
      </div>

      {/* Pinterest Pin Button - Special for recipes */}
      <div className="mt-4">
        <a
          href={shareUrls.pinterest}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
        >
          <span className="text-xl">📌</span>
          <span>Save to Pinterest</span>
        </a>
      </div>
    </div>
  )
}
