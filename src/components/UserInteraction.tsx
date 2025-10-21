'use client'

import { useState, useEffect } from 'react'

interface UserInteractionProps {
  recipeId: string
  initialRating?: number
  initialFavorites?: number
  initialBookmarks?: boolean
}

export default function UserInteraction({
  recipeId,
  initialRating = 0,
  initialFavorites = 0,
  initialBookmarks = false
}: UserInteractionProps) {
  const [rating, setRating] = useState(initialRating)
  const [favorites, setFavorites] = useState(initialFavorites)
  const [bookmarked, setBookmarked] = useState(initialBookmarks)
  const [userRating, setUserRating] = useState(0)
  const [showRatingForm, setShowRatingForm] = useState(false)

  // Load user preferences from localStorage
  useEffect(() => {
    const savedRating = localStorage.getItem(`rating_${recipeId}`)
    const savedBookmark = localStorage.getItem(`bookmark_${recipeId}`)
    
    if (savedRating) setUserRating(parseInt(savedRating))
    if (savedBookmark === 'true') setBookmarked(true)
  }, [recipeId])

  const handleRating = (newRating: number) => {
    setUserRating(newRating)
    localStorage.setItem(`rating_${recipeId}`, newRating.toString())
    // Here you would typically send to your backend
    console.log(`User rated recipe ${recipeId} with ${newRating} stars`)
  }

  const handleFavorite = () => {
    const newFavorites = favorites + 1
    setFavorites(newFavorites)
    // Here you would typically send to your backend
    console.log(`Recipe ${recipeId} favorited. Total: ${newFavorites}`)
  }

  const handleBookmark = () => {
    const newBookmarkState = !bookmarked
    setBookmarked(newBookmarkState)
    localStorage.setItem(`bookmark_${recipeId}`, newBookmarkState.toString())
    // Here you would typically send to your backend
    console.log(`Recipe ${recipeId} bookmarked: ${newBookmarkState}`)
  }

  const StarRating = ({ rating, onRate, interactive = false }: { 
    rating: number, 
    onRate?: (rating: number) => void, 
    interactive?: boolean 
  }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => interactive && onRate?.(star)}
            disabled={!interactive}
            className={`
              text-2xl transition-colors duration-200
              ${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'}
              ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}
            `}
          >
            ★
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="user-interaction bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {/* Rating Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">Rate this recipe</h3>
          <div className="text-sm text-gray-500">
            {rating > 0 ? `${rating.toFixed(1)}/5` : 'Not rated yet'}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <StarRating rating={userRating} onRate={handleRating} interactive={true} />
          <button
            onClick={() => setShowRatingForm(!showRatingForm)}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            {showRatingForm ? 'Cancel' : 'Rate this recipe'}
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleFavorite}
          className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors duration-200 group"
        >
          <span className="text-xl group-hover:scale-110 transition-transform duration-200">❤️</span>
          <span className="font-medium">Like</span>
          {favorites > 0 && (
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">
              {favorites}
            </span>
          )}
        </button>

        <button
          onClick={handleBookmark}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 group
            ${bookmarked 
              ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' 
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }
          `}
        >
          <span className="text-xl group-hover:scale-110 transition-transform duration-200">
            {bookmarked ? '🔖' : '📖'}
          </span>
          <span className="font-medium">
            {bookmarked ? 'Bookmarked' : 'Bookmark'}
          </span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <span>👀 1.2k views</span>
            <span>💬 23 comments</span>
          </div>
          <div className="text-xs text-gray-400">
            Last updated: 2 days ago
          </div>
        </div>
      </div>
    </div>
  )
}

// 简化的评分组件
export function QuickRating({ recipeId }: { recipeId: string }) {
  const [userRating, setUserRating] = useState(0)

  const handleRating = (rating: number) => {
    setUserRating(rating)
    localStorage.setItem(`rating_${recipeId}`, rating.toString())
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Rate:</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(star)}
            className={`
              text-lg transition-colors duration-200 hover:scale-110
              ${star <= userRating ? 'text-yellow-400' : 'text-gray-300'}
            `}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  )
}
