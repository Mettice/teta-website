// src/components/ImageGallery.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(0);

  const images = [
    {
      url: '/src/assets/kids1.jpg',
      title: 'Book Reading Session',
      description: 'Students engaged with the "Undefiled" book'
    },
    {
      url: '/src/assets/kids2.jpg',
      title: 'TETA Academy Spirit',
      description: 'Students showing their exceptional spirit'
    },
    {
      url: '/src/assets/kids.jpg',
      title: 'Youth Activities',
      description: 'Engaging activities for personal development'
    },
    {
      url: '/src/assets/kids5.jpg',
      title: 'Community Building',
      description: 'Building strong relationships'
    },
    {
      url: '/src/assets/kids6.jpg',
      title: 'Group Activities',
      description: 'Engaging activities for personal development'
    },
    {
      url: '/src/assets/kids6.jpg',
      title: 'Mentorship Session',
      description: 'Building strong relationships'
    }

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index) => {
    setModalImage(index);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Gallery</h2>
        
        {/* Main Carousel */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl mb-8">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full 
                     hover:bg-black/75 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full 
                     hover:bg-black/75 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
            <h3 className="text-xl font-semibold">{images[currentIndex].title}</h3>
            <p className="text-sm opacity-90">{images[currentIndex].description}</p>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer aspect-[4/3] rounded-lg overflow-hidden"
              onClick={() => openModal(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-4xl mx-auto p-4">
              <img
                src={images[modalImage].url}
                alt={images[modalImage].title}
                className="max-h-[80vh] w-auto mx-auto"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageGallery;