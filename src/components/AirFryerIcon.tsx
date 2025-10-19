import React from 'react'

interface AirFryerIconProps {
  className?: string
  animated?: boolean
}

export default function AirFryerIcon({ className = "w-7 h-7", animated = false }: AirFryerIconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      {/* Air Fryer Base */}
      <rect x="4" y="16" width="16" height="4" rx="2" fill="currentColor" opacity="0.9"/>
      
      {/* Air Fryer Body */}
      <rect x="5" y="8" width="14" height="8" rx="2" fill="currentColor"/>
      
      {/* Air Fryer Handle */}
      <rect x="19" y="10" width="2" height="4" rx="1" fill="currentColor" opacity="0.8"/>
      
      {/* Modern Air Circulation Symbol - Inspired by rotating arrow/air flow */}
      <g opacity="0.8">
        {/* Main air circulation - curved arrow-like design */}
        <path 
          d="M8 6 Q12 4 16 6 Q14 7 12 6.5 Q10 7 8 6" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Air flow direction indicators */}
        <path 
          d="M9 5.5 L8.5 6.5 L9.5 6.5 Z" 
          fill="currentColor" 
          opacity="0.8"
        />
        <path 
          d="M15 5.5 L15.5 6.5 L14.5 6.5 Z" 
          fill="currentColor" 
          opacity="0.8"
        />
        
        {/* Secondary air flow lines */}
        <path 
          d="M7.5 7 Q12 5.5 16.5 7" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          opacity="0.6"
          strokeLinecap="round"
        />
      </g>
      
      {/* Heat wave indicators */}
      <g opacity="0.6">
        <path 
          d="M6 4 Q8 3.5 10 4" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M14 4 Q16 3.5 18 4" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          strokeLinecap="round"
        />
      </g>
      
      {/* Steam effect - only show if animated */}
      {animated && (
        <g opacity="0.5">
          <circle cx="12" cy="3" r="0.8" fill="currentColor">
            <animate attributeName="cy" values="3;1.5;3" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="10" cy="3.5" r="0.6" fill="currentColor">
            <animate attributeName="cy" values="3.5;2;3.5" dur="2.8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="14" cy="3.5" r="0.6" fill="currentColor">
            <animate attributeName="cy" values="3.5;2;3.5" dur="2.2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.2s" repeatCount="indefinite"/>
          </circle>
        </g>
      )}
    </svg>
  )
}
