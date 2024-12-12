import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const Programs = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
            Our Programs
          </h1>

          {/* Core Program */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Core Development Program
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corePrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                  <ul className="space-y-3">
                    {program.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Program Schedule */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Program Schedule
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {schedule.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.time}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
}

const corePrograms = [
  {
    title: "Personal Development",
    items: [
      "Self-confidence building",
      "Personal boundaries",
      "Character development",
      "Emotional intelligence"
    ]
  },
  {
    title: "Life Skills",
    items: [
      "Financial literacy",
      "Time management",
      "Communication skills",
      "Problem-solving"
    ]
  },
  {
    title: "Leadership Training",
    items: [
      "Public speaking",
      "Team building",
      "Project management",
      "Community service"
    ]
  }
]

const schedule = [
  {
    title: "Morning Sessions",
    time: "9:00 AM - 12:00 PM",
    description: "Focus on core skills development and personal growth activities."
  },
  {
    title: "Afternoon Workshops",
    time: "2:00 PM - 4:00 PM",
    description: "Practical training and hands-on learning experiences."
  }
]

export default Programs