import { Card, CardContent } from '@/components/ui/card';
import { repositories, type Repository } from '../../data/repository';
import CardTitle from '@/components/custom-ui/text/card/CardTitle';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'motion/react';
import {
  centerVariants,
  containerVariants,
  itemVariants
} from '@/components/framer-motion/globalVariants';
import { forwardRef } from 'react';

const RepositorySection = forwardRef<HTMLDivElement, object>((props, ref) => {
  const widthDefinition = {
    xsWidth: 'min-w-[90%] max-w-[90%]',
    smWidth: 'sm:min-w-[40%] sm:max-w-[40%]',
    mdWidth: 'md:min-w-[35%] md:max-w-[35%]',
    lgWidth: 'lg:min-w-[30%] lg:max-w-[30%]',
    xlWidth: 'xl:min-w-[25%] xl:max-w-[25%]'
  };

  const renderRepositories = (item: Repository) => {
    return (
      <motion.div
        variants={itemVariants}
        className={` ${widthDefinition.xsWidth} ${widthDefinition.smWidth} ${widthDefinition.mdWidth} ${widthDefinition.lgWidth} ${widthDefinition.xlWidth} flex-[1_1_45%] md:flex-[1_1_30%]`}
      >
        <Card
          key={item.id}
          className="flex h-full cursor-pointer flex-col flex-wrap rounded-md border border-gray-400 bg-inherit p-3 shadow dark:border-gray-500 dark:bg-[#2d2d2f]"
        >
          <motion.div variants={centerVariants}>
            <CardTitle>{item.title}</CardTitle>
          </motion.div>
          <motion.div
            variants={centerVariants}
            className="mt-2 flex-1 text-sm italic dark:text-stone-300"
          >
            {item.description}
          </motion.div>
          <CardContent className="mt-2 flex flex-row justify-end gap-4 p-0">
            <a
              href={item.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-end gap-2 text-xs text-[#0000EE] hover:underline dark:text-[#599bd9]"
            >
              github
              <FaExternalLinkAlt className="" />
            </a>
            {item.websiteLink && (
              <a
                href={item.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-end gap-2 text-xs text-[#0000EE] hover:underline dark:text-[#599bd9]"
              >
                website
                <FaExternalLinkAlt className="" />
              </a>
            )}
          </CardContent>
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
        Repositories
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto flex max-w-7xl flex-row flex-wrap justify-center gap-4"
      >
        {repositories[0].items.map(renderRepositories)}
      </motion.div>
    </>
  );
});

RepositorySection.displayName = 'RepositorySection';

export default RepositorySection;
