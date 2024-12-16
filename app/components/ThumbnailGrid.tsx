'use client'

import { motion } from 'framer-motion'

interface ThumbnailGridProps {
  thumbnails: { originalUrl: string; thumbnailUrl: string }[]
}

const ThumbnailGrid: React.FC<ThumbnailGridProps> = ({ thumbnails }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {thumbnails.map((thumbnail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={thumbnail.thumbnailUrl} alt="Website Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-4">
              <a href={thumbnail.originalUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Original
              </a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={thumbnail.thumbnailUrl}
                download
                className="block mt-2 bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Download
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ThumbnailGrid

