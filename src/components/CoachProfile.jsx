import { motion } from 'framer-motion';
import { Book, Users, Heart, Star, Sprout, Award } from 'lucide-react';

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
                alt="Esandoah Beretilla Efuetngong" 
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
              <h3 className="text-xl font-semibold text-blue-700 mb-1">Esandoah Beretilla Efuetngong</h3>
              <p className="text-lg text-gray-600">Lead Coach & Founder, TETA Academy</p>
            </div>

            <div className="prose lg:prose-lg">
              <p>
                Born on February 21, 1985, in Limbe, Coach Beretilla is a multifaceted leader who 
                combines her roles as a passionate mentor, pastor's wife, and mother of four beautiful 
                children. Beyond her immediate family, she extends her motherly love to many others 
                under her care.
              </p>
              
              <p>
                With over 5 years dedicated to youth mentorship, she brings a wealth of 
                experience in guiding young people towards their purpose. Her approach 
                combines spiritual wisdom with practical life skills, creating a unique 
                mentorship experience that draws from her diverse background.
              </p>
              
              <p>
                As a successful farmer, she brings practical insights about growth, patience, 
                and sustainable development to her mentorship approach. Her agricultural expertise 
                adds a unique dimension to her teaching, using nature's principles to illustrate 
                life lessons and personal development concepts.
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

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Sprout className="w-6 h-6 text-blue-900 mb-2" />
                <h3 className="font-semibold">Agricultural Expert</h3>
                <p className="text-sm text-gray-600">Innovative farmer & sustainability advocate</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Award className="w-6 h-6 text-blue-900 mb-2" />
                <h3 className="font-semibold">Community Leader</h3>
                <p className="text-sm text-gray-600">Empowering youth & families</p>
              </div>
            </div>

            {/* Featured Book */}
            <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">Featured Book: "Undefiled"</h3>
              <p className="text-gray-600">
                A powerful guide for young people navigating relationships and personal purity. 
                This book provides biblical wisdom and practical insights for maintaining 
                spiritual integrity before marriage. Drawing from her experience mentoring youth, 
                Coach Beretilla offers guidance that resonates with today's generation.
              </p>
            </div>

            {/* Additional Background */}
            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">A Holistic Approach</h3>
              <p className="text-gray-700">
                Coach Beretilla's unique combination of farming expertise, spiritual leadership, 
                and youth mentorship creates a comprehensive approach to personal development. 
                She believes in nurturing growth in all aspects of life - spiritual, personal, 
                and professional - just as she nurtures both her family and her crops.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoachProfile;