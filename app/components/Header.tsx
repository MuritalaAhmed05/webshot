'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {}
        <Link href="/" className="text-2xl font-bold text-blue-600 whitespace-nowrap">
          WebFullShot
        </Link>
        {}
        <button
          onClick={toggleMenu}
          className="text-blue-600 md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        {}
        <div
          className={`absolute md:static top-16 left-0 w-full bg-white md:bg-transparent flex flex-col md:flex-row md:items-center md:justify-end md:space-x-8 z-10 transition-all duration-300 ease-in-out ${
            menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none md:pointer-events-auto md:opacity-100'
          }`}
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2 px-4 md:py-0"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2 px-4 md:py-0"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2 px-4 md:py-0"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}
export default Header
