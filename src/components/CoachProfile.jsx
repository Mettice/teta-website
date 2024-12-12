import { motion } from 'framer-motion';
import { Book, Users, Heart, Star } from 'lucide-react';

const CoachProfile = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coach Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img 
                src="/src/assets/coach.jpg" 
                alt="Coach Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-orange-100 rounded-lg -z-10"></div>
          </motion.div>

          {/* Coach Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-2">Meet Your Mentor</h2>
              <p className="text-lg text-gray-600">Lead Coach & Founder, TETA Academy</p>
            </div>

            <div className="prose lg:prose-lg">
              <p>
                Born on February 21, 1985, in Limbe, our lead coach is a passionate mentor, 
                pastor's wife, and mother of four beautiful children. Beyond her immediate 
                family, she extends her motherly love to many others under her care.
              </p>
              
              <p>
                With over 5 years dedicated to youth mentorship, she brings a wealth of 
                experience in guiding young people towards their purpose. Her approach 
                combines spiritual wisdom with practical life skills, creating a unique 
                mentorship experience.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Book className="w-6 h-6 text-blue-900 mb-2" />
                <h3 className="font-semibold">Published Author</h3>
                <p className="text-sm text-gray-600">"Undefiled" - A guide to spiritual purity</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Users className="w-6 h-6 text-blue-900 mb-2" />
                <h3 className="font-semibold">Youth Mentor</h3>
                <p className="text-sm text-gray-600">5+ years of youth mentorship</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Heart className="w-6 h-6 text-blue-900 mb-2" />
                <h3 className="font-semibold">Family Values</h3>
                <p className="text-sm text-gray-600">Mother & spiritual guide</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Star className="w-6 h-6 text-blue-900 mb-2" />
                <h3 className="font-semibold">Christian Leadership</h3>
                <p className="text-sm text-gray-600">Pastor's wife & ministry leader</p>
              </div>
            </div>

            {/* Featured Book */}
            <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Featured Book: "Undefiled"</h3>
              <p className="text-gray-600">
                A powerful guide for young people navigating relationships and personal purity. 
                This book provides biblical wisdom and practical insights for maintaining 
                spiritual integrity before marriage.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoachProfile;