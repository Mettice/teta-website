import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nkafu Thelma",
      role: "Student",
      content: "TETA Academy transformed my perspective on leadership and personal growth. The mentorship program gave me the confidence to pursue my dreams.",
      rating: 5
    },
    {
      name: "Fonkem Dion",
      role: "Parent",
      content: "Seeing my Son's growth through TETA's program has been incredible. The values and life skills he's learned are invaluable.",
      rating: 5
    },
    {
      name: "Brianna",
      role: "Student",
      content: "The spiritual foundation combined with practical life skills makes TETA unique. I've grown so much in my faith and leadership abilities.",
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          What Our Students Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials