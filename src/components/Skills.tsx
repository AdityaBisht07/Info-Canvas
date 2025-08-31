'use client'

import { motion } from 'framer-motion'
import { skills, Skill, radarSkills } from '@/utils/data'
import SkillsRadarChart from './SkillsRadarChart'

export default function Skills() {
  const categories = ['dsa', 'frontend', 'database', 'tools', 'other']
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    })
  }

  const getCategoryTitle = (category: string) => {
    const titles: { [key: string]: string } = {
      dsa: 'Programming & DSA',
      frontend: 'Web Development',
      database: 'Database & Storage',
      tools: 'Tools & Version Control',
      other: 'Other Skills'
    }
    return titles[category] || category
  }

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      dsa: '💻',
      frontend: '🌐',
      database: '🗄️',
      tools: '🛠️',
      other: '🚀'
    }
    return icons[category] || '💻'
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
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
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've worked with a wide range of technologies and tools. Here's my proficiency level in each area.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {categories.map((category) => {
            let categorySkills;
            if (category === 'frontend') {
              // Combine frontend and backend skills for Web Development section
              categorySkills = skills.filter(skill => skill.category === 'frontend' || skill.category === 'backend')
            } else {
              categorySkills = skills.filter(skill => skill.category === category)
            }
            
            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="text-3xl">{getCategoryIcon(category)}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {getCategoryTitle(category)}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02 }}
                      className="skill-card"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          variants={progressVariants}
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Skills Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Interactive radar chart showing my core competencies and proficiency levels
            </p>
          </div>
          
          <div className="flex justify-center">
            <SkillsRadarChart 
              skills={radarSkills} 
              size={400} 
              className="max-w-md"
            />
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Skills & Interests
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'UI/UX Design', icon: '🎨' },
              { name: 'Agile/Scrum', icon: '📋' },
              { name: 'Problem Solving', icon: '🧩' },
              { name: 'Team Leadership', icon: '👥' },
              { name: 'Code Review', icon: '🔍' },
              { name: 'Documentation', icon: '📚' },
              { name: 'Testing', icon: '🧪' },
              { name: 'Performance', icon: '⚡' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Always Learning
          </h3>
          <p className="text-lg mb-6 opacity-90">
            I'm constantly exploring new technologies and improving my skills. Currently learning:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Rust', 'WebAssembly', 'Machine Learning', 'Blockchain'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-4 py-2 bg-white bg-opacity-20 rounded-full font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
