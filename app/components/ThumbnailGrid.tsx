'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaDownload, FaShareAlt } from 'react-icons/fa'

interface ThumbnailGridProps {
  thumbnails: { originalUrl: string; thumbnailUrl: string }[]
}

const ThumbnailGrid: React.FC<ThumbnailGridProps> = ({ thumbnails }) => {
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handleShare = async (thumbnailUrl: string) => {
    if (navigator.share) {
      try {
        const response = await fetch(thumbnailUrl)
        const blob = await response.blob()

        const file = new File([blob], 'thumbnail.jpg', { type: blob.type })
        await navigator.share({
          title: 'Check out this image!',
          text: 'Here is an amazing thumbnail I found:',
          files: [file],
        })

        // Show success notification only when sharing succeeds
        setNotification({ message: 'Pls choose where you want to share to', type: 'success' })
      } catch (error) {
        // Handle any errors during the sharing process
        setNotification({ message: 'Failed to share the image.', type: 'error' })
        console.error('Sharing error:', error)
      }
    } else {
      // Notify user that sharing is not supported
      setNotification({ message: 'Sharing is not supported in this browser.', type: 'error' })
    }

    // Clear notification after 3 seconds
    setTimeout(() => setNotification(null), 3000)
  }

  const handleDownload = async (thumbnailUrl: string) => {
    try {
      const response = await fetch(thumbnailUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'thumbnail.jpg'
      link.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      setNotification({ message: 'Failed to download the image.', type: 'error' })
      setTimeout(() => setNotification(null), 3000)
    }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      {notification && (
        <div
          className={`fixed top-4 right-4 px-4 py-2 rounded shadow-lg text-white ${
            notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {notification.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {thumbnails.map((thumbnail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            style={{ height: '300px' }}
          >
            <img
              src={thumbnail.thumbnailUrl}
              alt="Website Thumbnail"
              className="w-full h-4/5 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center px-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  href={thumbnail.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-nowrap"
                >
                  <FaExternalLinkAlt className="text-blue-600 text-2xl" />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                    Visit Website
                  </span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleShare(thumbnail.thumbnailUrl)}
                  className="relative group text-gray-700 text-nowrap"
                >
                  <FaShareAlt className="text-2xl" />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                    Share
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDownload(thumbnail.thumbnailUrl)}
                  className="relative group text-nowrap"
                >
                  <FaDownload className="text-green-600 text-2xl" />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                    Download
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ThumbnailGrid
