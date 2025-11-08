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
              <h5 className='font-bold text-lg text-[#00B2AD]'>Our Commitment</h5>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                About Wave Curtain service
              </h2>
              <p className="text-gray-600 leading-relaxed overflow-hidden text-sm">
                Wave curtains are an ideal floor to ceiling solution and also look great at shorter windows as well.
                Not all fabrics are suitable for the wave curtain style. As such we have put together a wave curtain range that always performs.

                <br /><br />
                We have learned from experience which are the best fabrics.
                We have also achieved this by adding in a fabric range from Silent Gliss. This range has been designed and tested to suit the wave curtain effect.
                <br /><br />
                The track and pole system is extremely important to ensure smooth and consistent operation. With Silent Gliss and other top brands, we provide the best-in-class wave curtain solutions across the UAE.
              </p>
            </div>

            <motion.button
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00B2AD] text-white px-8 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              <Link to='/contact'>
                Get a Quote
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
