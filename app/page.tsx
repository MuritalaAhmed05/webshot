'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ThumbnailGenerator from './components/ThumbnailGenerator'
import ThumbnailGrid from './components/ThumbnailGrid'

export default function Home() {
  const [thumbnails, setThumbnails] = useState<{ originalUrl: string; thumbnailUrl: string }[]>([])

  const addThumbnail = (thumbnail: { originalUrl: string; thumbnailUrl: string }) => {
    setThumbnails([...thumbnails, thumbnail])
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 py-16 text-center"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-4 text-blue-600"
        >
          Capture Your Website's Full Potential
        </motion.h1>
        <motion.p
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mb-8 text-gray-700"
        >
          Generate stunning full-page thumbnails of any website instantly
        </motion.p>
        <ThumbnailGenerator onThumbnailGenerated={addThumbnail} />
      </motion.section>
      <ThumbnailGrid thumbnails={thumbnails} />
    </div>
  )
}

