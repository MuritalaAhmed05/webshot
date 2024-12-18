'use client';
import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Zap, Globe, Shield } from 'lucide-react';
const FeatureCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-md transition-shadow border-gray-200 border-[1px]"
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);
const About: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Full Page Capture',
      description: 'Capture entire web pages in high quality, preserving every detail.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Generate thumbnails in seconds with our optimized processing.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Any Website',
      description: 'Compatible with any public website, regardless of complexity.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure',
      description: 'Your data is protected with enterprise-grade security.',
    },
  ];
  return (
    <div className="py-16">
      {}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About WebFullShot</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make it simple to capture and share beautiful thumbnails of any website.
          </p>
        </div>
        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-6">
            Join thousands of users who trust ThumbPreview for their thumbnail needs.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 hover:scale-105 transition-transform"
          >
            Try It Now
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default About;
