import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import getCustom from '../../assets/getCustom2.png';

const OurCommitment = () => {
  return (
    <section className="py-10 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">


          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 overflow-hidden" // Ensures no overflow from this div
          >
            <div className="">
              <h5 className='font-bold text-lg text-[#00B2AD]'>Our</h5>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Wave Story
              </h2>
              <p className="text-gray-600 leading-relaxed overflow-hidden text-sm">
                Since we began fitting wave curtains in the UAE, we have fallen in love with them. They offer a simple, elegant style that creates a clean and uniform look. Every wave curtain we install is well received and beautifully enhances any space. Wave curtains are one of the most modern and fashionable styles, often featured by top interior designers across the UAE.

                <br /><br />
                Wave curtains are an ideal ceiling-to-floor solution and stack neatly in a small area—perfect for letting in plenty of natural light when opened.
                <br /><br />
                Beautiful and practical for any space, they are a notably effective curtain solution for modern Bi-Fold doors commonly found in UAE homes and offices.
              </p>
            </div>

            <motion.button
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00B2AD] text-white px-8 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              <Link to='/contact'>
                Get Your Estimate Now
              </Link>
            </motion.button>
          </motion.div>

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden" // Ensures no overflow from this div
          >
            <div className="overflow-hidden">
              <img
                src={getCustom}
                alt="Modern living room with custom curtains"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
