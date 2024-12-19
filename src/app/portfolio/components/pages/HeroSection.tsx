/* eslint-disable react/no-unescaped-entities */
import HeroImage from '@/components/custom-ui/hero/HeroImage';
import WigglyArrow from '@/components/custom-ui/hero/WigglyArrow';
import Heading from '@/components/custom-ui/text/global/Heading';
import Paragraph from '@/components/custom-ui/text/global/Paragraph';
import Subheading from '@/components/custom-ui/text/global/Subheading';
import {
  bottomVariants,
  centerVariants,
  containerVariants,
  leftVariants,
  rightVariants,
  topVariants
} from '@/components/framer-motion/globalVariants';
import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';
import { forwardRef } from 'react';

const HeroSection = forwardRef<HTMLDivElement, object>((props, ref) => {
  return (
    <>
      {/* SECTION 1 */}
      <motion.div
        ref={ref}
        {...props}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="relative z-10 mx-auto my-20 min-h-full max-w-6xl pt-16 lg:pt-4 xl:grid xl:min-h-fit xl:grid-flow-col xl:grid-rows-2 xl:pt-16 2xl:px-7 2xl:pt-10 3xl:pt-16"
      >
        <HeroImage />
        <WigglyArrow />
        {/* SECTION 1 */}
        <div className="w-full justify-center py-1 xl:min-h-64 xl:content-start xl:justify-start xl:p-4 2xl:min-h-64 3xl:min-h-80">
          <motion.div variants={leftVariants}>
            <motion.div variants={leftVariants}>
              <Subheading
                font="font-kalam"
                fontWeight="font-bold"
                className="text-center xl:text-left"
              >
                Yo! I'm
              </Subheading>
            </motion.div>
            <motion.div variants={leftVariants}>
              <Heading
                font="font-robotCondense"
                fontWeight="font-bold"
                className="mt-2 text-center tracking-widest text-df-yellow drop-shadow-sm dark:text-df-yellow xl:text-left"
              >
                Adrian
              </Heading>
            </motion.div>
          </motion.div>
        </div>
        {/* SECTION 2 */}
        <div className="hidden w-full content-end p-4 xl:block xl:min-h-56 xl:justify-start 2xl:min-h-64 3xl:min-h-80">
          <motion.div variants={leftVariants} className="flex gap-3">
            <motion.div variants={leftVariants} className="content-center justify-center">
              <Heading fontWeight="font-bold" className="">
                04
              </Heading>
            </motion.div>
            <motion.div variants={leftVariants} className="flex flex-col justify-center pt-2">
              <Paragraph className="text-sm tracking-wider">YEARS OF</Paragraph>
              <Paragraph className="text-sm tracking-wider">EXPERIENCE</Paragraph>
            </motion.div>
          </motion.div>
        </div>
        {/* SECTION 3 */}
        <div className="row-span-2 hidden w-full justify-center p-4 xl:block xl:min-h-56 xl:justify-end 2xl:min-h-64 3xl:min-h-80">
          <motion.div variants={rightVariants} className="flex h-full w-full flex-col gap-4">
            <motion.div variants={rightVariants} className="flex-1 justify-items-center">
              <Card className="rounded-xl border-none bg-white p-3 shadow-md dark:bg-df-light">
                <div className="">
                  <Paragraph
                    className="text-center dark:text-[#0d2f3f] xl:text-left"
                    fontWeight="font-medium"
                  >
                    I do websites for a living
                    <span className="block dark:text-[#0d2f3f] xl:hidden">For about 4 years</span>
                  </Paragraph>
                </div>
              </Card>
            </motion.div>
            <motion.div
              variants={rightVariants}
              className="flex-1 xl:content-center xl:justify-items-end"
            >
              <Card className="rounded-xl border-none bg-white p-3 shadow-md dark:bg-df-light">
                <div className="">
                  <Paragraph
                    className="text-center dark:text-[#0d2f3f] xl:text-right"
                    fontWeight="font-medium"
                  >
                    React for frontend, NodeJs for backend
                  </Paragraph>
                </div>
              </Card>
            </motion.div>
            <motion.div
              variants={rightVariants}
              className="flex-1 xl:content-end xl:justify-items-end"
            >
              <Card className="rounded-xl border-none bg-white p-3 shadow-md dark:bg-df-light">
                <div className="">
                  <Paragraph className="text-center dark:text-[#0d2f3f]" fontWeight="font-medium">
                    And little bit of Typescript and deployment
                  </Paragraph>
                  <Paragraph
                    className="hidden text-center dark:text-[#0d2f3f]"
                    fontWeight="font-medium"
                  >
                    Like this one
                  </Paragraph>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
        {/* MOBILE SECTION ABOUT */}
        <motion.div
          variants={centerVariants}
          className="min-w-xl mx-auto mt-14 flex max-w-xl flex-col justify-center gap-3 border-l-[2px] border-r-[2px] border-[#0d2f3f] p-2 dark:border-df-light xl:hidden"
        >
          <motion.div variants={topVariants}>
            <Paragraph
              className="text-center !text-xl text-[#0d2f3f]"
              font="font-robotocondense"
              fontWeight="font-medium"
            >
              I do websites for a living.
            </Paragraph>
          </motion.div>
          <motion.div variants={bottomVariants}>
            <Paragraph
              className="text-center !text-xl text-[#0d2f3f]"
              font="font-robotocondense"
              fontWeight="font-medium"
            >
              Building scalable web apps for about 5 years.
            </Paragraph>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
