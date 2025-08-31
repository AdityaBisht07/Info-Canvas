'use client'

import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi'
import { experience } from '@/utils/data'

export default function Experience() {
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the milestones I've achieved along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-600"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 z-10"></div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-primary-600"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <FiCalendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Performance Optimization",
                description: "Improved application performance by 60% through code optimization and caching strategies",
                icon: "⚡"
              },
              {
                title: "Team Leadership",
                description: "Led a team of 8 developers and successfully delivered 15+ projects on time",
                icon: "👥"
              },
              {
                title: "Innovation Award",
                description: "Received company innovation award for developing a new microservices architecture",
                icon: "🏆"
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white text-center"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-bold mb-3">{achievement.title}</h4>
                <p className="text-primary-100 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gray-50 dark:bg-dark-800 rounded-xl p-8"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Education & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Bachelor's in Computer Science
              </h4>
              <p className="text-primary-600 dark:text-primary-400 mb-2">University Name</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">2014 - 2018</p>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                AWS Certified Developer
              </h4>
              <p className="text-primary-600 dark:text-primary-400 mb-2">Amazon Web Services</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">2022</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
