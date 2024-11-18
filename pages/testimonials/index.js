import TestimonialSlider from '../../components/TestimonialSlider'
import {motion} from  'framer-motion'
import { fadeIn } from '../../variants'
const Testimonials = () => {
  return( <div className=' h-full bg-primary/30 py-32 pt-[300px] xl:pt-[150px] text-center'>
    <div className=' container mx-auto h-full flex flex-col justify-center mt-52'>
      <motion.h2 variants={fadeIn('up',0.2)} initial="hidden" animate='show' exit='hidden' className='h2 mb-8 xl:mb-0 '>What Client <span className=' text-accent'>Say.</span></motion.h2>
      <motion.div  variants={fadeIn('up',0.4)} initial="hidden" animate='show' exit='hidden' className='mb-[300px] xl:mb-[150px]' >
        <TestimonialSlider/>
      </motion.div>
    </div>
  </div>
  );
};

export default Testimonials;
