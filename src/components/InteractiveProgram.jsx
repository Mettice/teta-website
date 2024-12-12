import { motion } from 'framer-motion'
import { useState } from 'react'

const InteractiveProgram = () => {
  const [activeTab, setActiveTab] = useState('personal')
  
  const programs = {
    personal: {
      title: "Personal Development",
      content: [
        "Self-confidence building",
        "Emotional intelligence",
        "Goal setting",
        "Time management"
      ]
    },
    leadership: {
      title: "Leadership Skills",
      content: [
        "Public speaking",
        "Team management",
        "Decision making",
        "Problem solving"
      ]
    },
    spiritual: {
      title: "Spiritual Growth",
      content: [
        "Bible study",
        "Character development",
        "Values alignment",
        "Community service"
      ]
    }
  }

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Our Programs
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(programs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2 rounded-full transition ${
                activeTab === key
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {programs[key].title}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6">
            {programs[activeTab].title}
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {programs[activeTab].content.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default InteractiveProgram