// src/pages/Home.jsx
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ImageGallery from '../components/ImageGallery'
import Testimonials from '../components/Testimonials'
import InteractiveProgram from '../components/InteractiveProgram'
import RegistrationForm from '../components/RegistrationForm'

const features = [
  {
    title: "Leadership Development",
    description: "Building confident, capable young leaders through practical experience and mentorship.",
    icon: "🎯"
  },
  {
    title: "Life Skills Training",
    description: "Essential skills for success in academics, career, and personal life.",
    icon: "💡"
  },
  {
    title: "Spiritual Growth",
    description: "Nurturing faith-based values and character development.",
    icon: "✨"
  }
]

const Home = () => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center"></div>
        <div className="relative max-w-6xl mx-auto h-full flex items-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Rebuilding Foundations,<br />
              Redirecting Destinies
            </h1>
            <p className="text-xl mb-8">
              Empowering exceptional teens through Christ-centered mentorship,
              leadership development, and life skills training.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold 
                             hover:bg-orange-600 transition flex items-center gap-2">
              Register Now <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Program Section */}
      <InteractiveProgram />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <ImageGallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Registration Form */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Join Our Program</h2>
          <RegistrationForm />
        </div>
      </section>
    </div>
  )
}

export default Home