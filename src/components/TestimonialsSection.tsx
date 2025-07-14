// Import client testimonial images
import testimonial1 from './clients testimonials/1.jpg';
import testimonial2 from './clients testimonials/2.jpg';
import testimonial3 from './clients testimonials/3.jpg';
import testimonial4 from './clients testimonials/4.jpg';
import testimonial5 from './clients testimonials/5.jpg';
import testimonial6 from './clients testimonials/6.jpg';
import testimonial7 from './clients testimonials/7.jpg';
import testimonial8 from './clients testimonials/8.jpg';
import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const testimonialImages = [
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
    testimonial5,
    testimonial6,
    testimonial7,
    testimonial8
  ];

  // Create multiple copies for seamless infinite scroll
  const testimonials = [...testimonialImages, ...testimonialImages, ...testimonialImages];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="py-16 bg-black/30 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 mb-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Client Testimonials
        </motion.h2>
      </div>
      
      <motion.div 
        className="relative overflow-hidden"
        variants={itemVariants}
      >
        <motion.div 
          className="flex gap-6"
          animate={{ 
            x: ["0%", "-33.33%"] 
          }}
          transition={{ 
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{ width: "300%" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="flex-shrink-0 w-96 h-96 rounded-lg overflow-hidden group cursor-pointer"
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ 
                opacity: 1, 
                rotateY: 0,
                transition: { 
                  duration: 0.6, 
                  delay: (index % 8) * 0.1,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true }}
              style={{ willChange: 'transform' }}
            >
              <motion.img 
                src={testimonial} 
                alt="" 
                role="presentation"
                loading="lazy"
                data-noindex="true"
                className="w-full h-full object-contain transition-all duration-300 ease-out"
                style={{ willChange: 'transform, filter' }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              />
              
              {/* Hover Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div 
                  className="text-center"
                  initial={{ y: 15, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-[#E50914] rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="text-white font-bold text-sm">★</span>
                  </motion.div>
                  <motion.p 
                    className="text-white font-semibold text-xs"
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Satisfied Customer
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Animated indicator */}
      <motion.div 
        className="flex justify-center mt-8"
        variants={itemVariants}
      >
        <motion.div 
          className="flex space-x-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-[#E50914] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}