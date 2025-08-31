'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Skill {
  name: string
  level: number
  color?: string
}

interface SkillsRadarChartProps {
  skills: Skill[]
  size?: number
  className?: string
}

const SkillsRadarChart = ({ 
  skills, 
  size = 300, 
  className = "" 
}: SkillsRadarChartProps) => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Calculate positions for hexagon vertices
  const calculateVertexPosition = (index: number, radius: number) => {
    const angle = (index * 60 - 90) * (Math.PI / 180) // Start from top, 60° intervals
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)
    return { x, y }
  }

  // Calculate skill point position based on level
  const calculateSkillPosition = (index: number, level: number, maxRadius: number) => {
    const radius = (level / 100) * maxRadius
    return calculateVertexPosition(index, radius)
  }

  const centerX = size / 2
  const centerY = size / 2
  const maxRadius = size * 0.35

  // Generate hexagon grid lines
  const gridLevels = [20, 40, 60, 80, 100]
  const gridLines = gridLevels.map(level => {
    const radius = (level / 100) * maxRadius
    const points = skills.map((_, index) => {
      const pos = calculateVertexPosition(index, radius)
      return `${centerX + pos.x},${centerY + pos.y}`
    }).join(' ')
    return { level, points }
  })

  // Generate skill points and labels
  const skillPoints = skills.map((skill, index) => {
    const pos = calculateSkillPosition(index, skill.level, maxRadius)
    const vertexPos = calculateVertexPosition(index, maxRadius)
    return {
      ...skill,
      index,
      x: centerX + pos.x,
      y: centerY + pos.y,
      vertexX: centerX + vertexPos.x,
      vertexY: centerY + vertexPos.y,
      labelX: centerX + vertexPos.x * 1.15,
      labelY: centerY + vertexPos.y * 1.15,
    }
  })

  // Generate radar area path
  const radarPath = skillPoints.map((point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`
    return `L ${point.x} ${point.y}`
  }).join(' ') + ' Z'

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const gridLineVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 0.1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

  const skillPointVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  }

  const radarAreaVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.3,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className={`relative ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Grid lines */}
        {gridLines.map((grid, index) => (
          <motion.polygon
            key={grid.level}
            points={grid.points}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-300 dark:text-gray-600"
            variants={gridLineVariants}
            custom={index}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          />
        ))}

        {/* Skill labels */}
        {skillPoints.map((skill, index) => (
          <motion.text
            key={skill.name}
            x={skill.labelX}
            y={skill.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xs font-medium fill-gray-600 dark:fill-gray-400 transition-colors duration-200"
            variants={skillPointVariants}
            custom={index}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            style={{
              transform: `translate(-50%, -50%)`,
            }}
          >
            {skill.name}
          </motion.text>
        ))}

        {/* Radar area */}
        <motion.path
          d={radarPath}
          fill="url(#radarGradient)"
          stroke="url(#radarStroke)"
          strokeWidth="2"
          className="drop-shadow-lg"
          variants={radarAreaVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        />

        {/* Skill points */}
        {skillPoints.map((skill, index) => (
          <motion.g key={skill.name}>
            {/* Connection line from center to skill point */}
            <motion.line
              x1={centerX}
              y1={centerY}
              x2={skill.x}
              y2={skill.y}
              stroke="currentColor"
              strokeWidth="1"
              className={`transition-all duration-300 ${
                hoveredSkill === index 
                  ? 'text-primary-500 opacity-100' 
                  : 'text-gray-300 dark:text-gray-600 opacity-30'
              }`}
              variants={skillPointVariants}
              custom={index}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            />
            
            {/* Skill point */}
            <motion.circle
              cx={skill.x}
              cy={skill.y}
              r={hoveredSkill === index ? 8 : 6}
              fill="currentColor"
              className={`transition-all duration-300 cursor-pointer ${
                hoveredSkill === index 
                  ? 'text-primary-500 drop-shadow-lg' 
                  : 'text-primary-400'
              }`}
              variants={skillPointVariants}
              custom={index}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.2 }}
            />
            
            {/* Glow effect for hovered skill */}
            {hoveredSkill === index && (
              <motion.circle
                cx={skill.x}
                cy={skill.y}
                r={12}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary-400"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.g>
        ))}

        {/* Center point */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={4}
          fill="currentColor"
          className="text-primary-600 dark:text-primary-400"
          variants={skillPointVariants}
          custom={0}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0.2)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0.1)" />
          </linearGradient>
          <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0.8)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0.6)" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Tooltip */}
      {hoveredSkill !== null && (
        <motion.div
          className="absolute bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg z-10"
          style={{
            left: skillPoints[hoveredSkill].x + 10,
            top: skillPoints[hoveredSkill].y - 10,
            transform: 'translate(0, -50%)',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-sm font-semibold text-gray-900 dark:text-white">
            {skillPoints[hoveredSkill].name}
          </div>
          <div className="text-xs text-primary-600 dark:text-primary-400">
            {skillPoints[hoveredSkill].level}% proficiency
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default SkillsRadarChart

