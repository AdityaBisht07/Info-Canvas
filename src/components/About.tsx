'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiDownload, FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import { personalInfo } from '@/utils/data'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-primary-600 mx-auto"></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full transform rotate-6"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full transform -rotate-6"></div>
              
              {/* Profile image */}
              <div className="absolute inset-4 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Aditya Bisht" 
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {personalInfo.name}
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={20} />
                <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base truncate">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={20} />
                <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base truncate">{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={20} />
                <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base truncate">{personalInfo.phone}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gray-100 dark:bg-dark-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 interactive"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gray-100 dark:bg-dark-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 interactive"
              >
                <FiLinkedin size={20} />
              </motion.a>
            </div>

            {/* Download CV Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 interactive"
            >
              <FiDownload size={20} />
              <span>Download CV</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">3.5+</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Years Experience</h4>
            <p className="text-gray-600 dark:text-gray-300">Building web applications and solving real-life problems</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Projects Completed</h4>
            <p className="text-gray-600 dark:text-gray-300">From small apps to enterprise solutions</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">15+</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Technologies</h4>
            <p className="text-gray-600 dark:text-gray-300">Frontend, backend, and DevOps</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
