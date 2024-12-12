// src/pages/About.jsx
import { motion } from 'framer-motion'
import CoachProfile from '../components/CoachProfile'

const approaches = [
  {
    title: "Personal Mentorship",
    description: "One-on-one guidance from experienced mentors who are committed to your growth."
  },
  {
    title: "Practical Training",
    description: "Hands-on experience in leadership, communication, and life skills."
  },
  {
    title: "Spiritual Foundation",
    description: "Building strong character through biblical principles and values."
  },
  {
    title: "Community Focus",
    description: "Creating connections and opportunities for community impact."
  }
]

const About = () => {
  return (
    <div>
      <div className="py-16">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              About TETA Academy
            </h1>
            
            <div className="prose lg:prose-lg mx-auto">
              <p className="text-lg mb-6">
                The Exceptional Teens Academy (TETA) is dedicated to empowering young people
                through comprehensive personal development and leadership training. Our mission
                is to build strong foundations and redirect destinies through Christ-centered
                mentorship.
              </p>

              <h2 className="text-2xl font-semibold text-blue-900 mt-12 mb-6">
                Our Vision
              </h2>
              <p className="text-lg mb-6">
                To raise a generation of exceptional teenagers who are grounded in faith,
                equipped with life skills, and prepared to make positive impacts in their
                communities.
              </p>

              <h2 className="text-2xl font-semibold text-blue-900 mt-12 mb-6">
                Our Approach
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {approaches.map((approach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-blue-50 p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                    <p className="text-gray-700">{approach.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Coach Profile Section */}
      <CoachProfile />
    </div>
  )
}

export default About