import Subheading from '@/components/custom-ui/text/global/Subheading';
import { Card, CardDescription } from '@/components/ui/card';
import {
  type BackendSkill,
  backendSkills,
  type FeaturedSkill,
  featuredSkills,
  type FrontEndSkill,
  frontendSkills,
  type OtherSkill,
  otherSkills
} from '../../data/skills';
import { motion } from 'motion/react';
import {
  centerVariants,
  containerVariants,
  itemVariants,
  leftVariants
} from '@/components/framer-motion/globalVariants';
import { forwardRef } from 'react';

const SkillsSection = forwardRef<HTMLDivElement, object>((props, ref) => {
  const itemsClass =
    'my-auto flex w-fit flex-row content-center items-center gap-3 rounded-sm border-[1px] bg-df-teal p-3 shadow-sm dark:border-df-teal dark:bg-[#2d2d2f]';

  const renderFeatured = (item: FeaturedSkill, index: number) => {
    return (
      <motion.div variants={centerVariants} key={index}>
        <Card className={itemsClass}>
          {item.icon}
          <CardDescription className="text-df-light dark:text-stone-300">
            {item.name}
          </CardDescription>
        </Card>
      </motion.div>
    );
  };

  const renderFrontend = (item: FrontEndSkill, index: number) => {
    return (
      <motion.div variants={centerVariants} key={index}>
        <Card className={itemsClass}>
          {item.icon}
          <CardDescription className="text-df-light dark:text-stone-300">
            {item.name}
          </CardDescription>
        </Card>
      </motion.div>
    );
  };

  const renderBackend = (item: BackendSkill, index: number) => {
    return (
      <motion.div variants={centerVariants} key={index}>
        <Card className={itemsClass}>
          {item.icon}
          <CardDescription className="text-df-light dark:text-stone-300">
            {item.name}
          </CardDescription>
        </Card>
      </motion.div>
    );
  };

  const renderOthers = (item: OtherSkill, index: number) => {
    return (
      <motion.div variants={centerVariants} key={index}>
        <Card className={itemsClass}>
          {item.icon}
          <CardDescription className="text-df-light dark:text-stone-300">
            {item.name}
          </CardDescription>
        </Card>
      </motion.div>
    );
  };

  return (
    <>
      <div
        ref={ref}
        {...props}
        className="mb-20 mt-40 flex justify-center text-5xl font-bold drop-shadow-md"
      >
        Skills
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-0 mx-auto flex flex-col gap-4 pb-10 sm:max-w-md md:max-w-full xl:max-w-5xl 2xl:max-w-6xl"
      >
        <motion.div variants={itemVariants}>
          <Subheading className="text-xl lg:text-center">Featured</Subheading>
        </motion.div>

        <motion.div
          variants={leftVariants}
          className="mt-2 flex flex-row flex-wrap gap-3 lg:mx-auto lg:max-w-xl lg:justify-center"
        >
          {featuredSkills[0].featured.map(renderFeatured)}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Subheading className="mt-7 text-xl lg:text-center">Frontend</Subheading>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-2 flex flex-row flex-wrap gap-2 lg:mx-auto lg:max-w-xl lg:justify-center"
        >
          {frontendSkills[0].frontend.map(renderFrontend)}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Subheading className="mt-7 text-xl lg:text-center">Backend</Subheading>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-2 flex flex-row flex-wrap gap-2 lg:mx-auto lg:max-w-xl lg:justify-center"
        >
          {backendSkills[0].backend.map(renderBackend)}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Subheading className="mt-7 text-xl lg:text-center">Others</Subheading>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-2 flex flex-row flex-wrap gap-2 lg:mx-auto lg:max-w-xl lg:justify-center"
        >
          {otherSkills[0].others.map(renderOthers)}
        </motion.div>
      </motion.div>
    </>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
// bg-[#2d2d2f]
