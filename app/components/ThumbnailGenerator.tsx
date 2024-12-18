'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa' // Import icon

interface ThumbnailGeneratorProps {
  onThumbnailGenerated: (thumbnail: { originalUrl: string; thumbnailUrl: string }) => void
}

const ThumbnailGenerator: React.FC<ThumbnailGeneratorProps> = ({ onThumbnailGenerated }) => {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const thumbnailUrl = `https://image.thum.io/get/fullpage/${url}`
    onThumbnailGenerated({ originalUrl: url, thumbnailUrl })
    setIsLoading(false)
    setUrl('')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-4">
      <div className="flex flex-wrap items-center border-2 border-blue-300 rounded-lg overflow-hidden shadow-lg">
        {/* Input Field */}
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your website URL"
          required
          className="flex-1 min-w-0 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none rounded-lg"
        />
        {/* Submit Button (Desktop) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isLoading}
          className={`bg-blue-600 text-white px-6 py-3 font-semibold transition-all duration-300 hidden md:block rounded-lg ${
            isLoading ? 'cursor-not-allowed bg-blue-400' : 'hover:bg-blue-700'
          }`}
        >
          {isLoading ? 'Generating...' : 'Generate'}
        </motion.button>
        {/* Submit Icon (Mobile) */}
        <motion.button
          type="submit"
          disabled={isLoading}
          className={`bg-blue-600 text-white p-3 font-semibold transition-all duration-300 md:hidden rounded-lg ${
            isLoading ? 'cursor-not-allowed bg-blue-400' : 'hover:bg-blue-700'
          }`}
        >
          <FaArrowRight size={20} />
        </motion.button>
      </div>
    </form>
  )
}

export default ThumbnailGenerator
