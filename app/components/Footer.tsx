'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 mt-12"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          {}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-gray-800">WebFullshot</h3>
            <p className="text-sm text-gray-600 mt-1">Capture your website's full potential</p>
          </div>
          {}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition duration-300">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition duration-300">
                Privacy Policy
              </Link>
            </div>
          </div>
          {}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              <FaFacebook size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              <FaTwitter size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              <FaInstagram size={20} />
            </motion.a>
          </div>
        </div>
        {}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} WebFullshot. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  )
}
export default Footer
