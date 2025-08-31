'use client'

import { motion } from 'framer-motion'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'
import { education } from '@/utils/data'

export default function Education() {
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
    <section id="education" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-primary-600 mx-auto"></motion.div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <FiBook className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FiCalendar size={16} />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {edu.description.map((desc, descIndex) => (
                  <div key={descIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              {edu.gpa && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">GPA:</span>
                    <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
