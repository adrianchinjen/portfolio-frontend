import { containerVariants, leftVariants } from '@/components/framer-motion/globalVariants';
import { motion } from 'motion/react';

const CopyrightNotice = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="flex w-full flex-row justify-center gap-4 border-t border-zinc-700 bg-zinc-800 px-5 py-1 text-gray-400 dark:bg-black sm:gap-10"
    >
      <motion.p variants={leftVariants} className="text-sm text-df-light">
        © {2024} – {new Date().getFullYear()}
      </motion.p>
      <motion.p variants={leftVariants} className="text-sm text-df-light">
        A | Chinjen.
      </motion.p>
      <motion.p variants={leftVariants} className="text-sm text-df-light">
        All rights reserved.
      </motion.p>
    </motion.div>
  );
};

export default CopyrightNotice;
