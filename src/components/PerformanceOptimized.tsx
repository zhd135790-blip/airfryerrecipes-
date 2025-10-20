'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

// 懒加载图片组件
interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function LazyImage({ 
  src, 
  alt, 
  width = 400, 
  height = 300, 
  className = '',
  priority = false 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const img = document.getElementById(`lazy-img-${src}`)
    if (img) observer.observe(img)

    return () => observer.disconnect()
  }, [src, priority])

  return (
    <div 
      id={`lazy-img-${src}`}
      className={`relative overflow-hidden ${className}`}
    >
      {isInView ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div 
          className="bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <span className="text-gray-400">Loading...</span>
        </div>
      )}
    </div>
  )
}

// 虚拟滚动组件
interface VirtualScrollProps {
  items: any[]
  itemHeight: number
  containerHeight: number
  renderItem: (item: any, index: number) => React.ReactNode
}

export function VirtualScroll({ 
  items, 
  itemHeight, 
  containerHeight, 
  renderItem 
}: VirtualScrollProps) {
  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }, [])

  const startIndex = Math.floor(scrollTop / itemHeight)
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  )

  const visibleItems = items.slice(startIndex, endIndex)

  return (
    <div
      className="overflow-auto"
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        {visibleItems.map((item, index) => (
          <div
            key={startIndex + index}
            style={{
              position: 'absolute',
              top: (startIndex + index) * itemHeight,
              width: '100%',
              height: itemHeight
            }}
          >
            {renderItem(item, startIndex + index)}
          </div>
        ))}
      </div>
    </div>
  )
}

// 搜索防抖组件
interface DebouncedSearchProps {
  onSearch: (query: string) => void
  placeholder?: string
  delay?: number
}

export function DebouncedSearch({ 
  onSearch, 
  placeholder = "Search recipes...",
  delay = 300 
}: DebouncedSearchProps) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query)
    }, delay)

    return () => clearTimeout(timer)
  }, [query, delay, onSearch])

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
    />
  )
}

// 缓存组件
interface CacheProps {
  cacheKey: string
  children: React.ReactNode
  ttl?: number // Time to live in milliseconds
}

export function Cache({ cacheKey, children, ttl = 5 * 60 * 1000 }: CacheProps) {
  const [cachedData, setCachedData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const cached = localStorage.getItem(cacheKey)
    const cacheTime = localStorage.getItem(`${cacheKey}_time`)

    if (cached && cacheTime) {
      const timeDiff = Date.now() - parseInt(cacheTime)
      if (timeDiff < ttl) {
        setCachedData(JSON.parse(cached))
        setIsLoading(false)
        return
      }
    }

    // Fetch new data
    setIsLoading(false)
  }, [cacheKey, ttl])

  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>
  }

  return <>{children}</>
}

// 性能监控组件
export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // 监控页面加载性能
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      const metrics = {
        loadTime: perfData.loadEventEnd - perfData.loadEventStart,
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        firstPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime,
        firstContentfulPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime
      }

      // 发送到分析服务
      console.log('Performance metrics:', metrics)
      
      // 如果性能较差，显示警告
      if (metrics.loadTime > 3000) {
        console.warn('Page load time is slow:', metrics.loadTime)
      }
    })

    // 监控用户交互
    let interactionCount = 0
    const handleInteraction = () => {
      interactionCount++
      if (interactionCount === 1) {
        const timeToInteractive = Date.now() - performance.timing.navigationStart
        console.log('Time to first interaction:', timeToInteractive)
      }
    }

    document.addEventListener('click', handleInteraction)
    document.addEventListener('keydown', handleInteraction)

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('keydown', handleInteraction)
    }
  }, [])

  return null
}
