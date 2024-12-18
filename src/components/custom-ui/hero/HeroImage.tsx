import { centerVariants, containerVariants } from '@/components/framer-motion/globalVariants';
import mi from '../../../assets/img/yo-miii.png';
import { motion } from 'motion/react';

const HeroImage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="inset-0 top-1/3 z-10 m-auto aspect-square -translate-y-10 transform rounded-full sm:w-[45%] md:w-[25%] xl:absolute xl:w-[40%] xl:scale-x-[-1] 2xl:w-[45%]"
    >
      <motion.img
        variants={centerVariants}
        src={mi} // Replace with your image URL
        alt="My Portrait"
        className="h-full w-full object-cover drop-shadow-[0_6px_1px_rgba(72,60,51,1)] filter dark:drop-shadow-[0_6px_1px_rgba(237,179,60,1)]"
      />
    </motion.div>
  );
};

export default HeroImage;
