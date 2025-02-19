import CardBody from '@/components/custom-ui/text/card/CardBody';
import CardSubTitle from '@/components/custom-ui/text/card/CardSubTitle';
import CardTitle from '@/components/custom-ui/text/card/CardTitle';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
// import { AiOutlineJava } from 'react-icons/ai';
// import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
// import { DiNodejs } from 'react-icons/di';
// import { FaAws } from 'react-icons/fa6';
// import { GrDocker } from 'react-icons/gr';
// import { IoLogoJavascript } from 'react-icons/io5';
// import { RiReactjsLine } from 'react-icons/ri';
// import { SiJquery, SiMongodb, SiMysql, SiNestjs } from 'react-icons/si';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '@/components/framer-motion/globalVariants';
import { forwardRef } from 'react';

const ExperienceSection = forwardRef<HTMLDivElement, object>((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="mb-20 mt-40 flex justify-center text-5xl font-bold drop-shadow-md"
        {...props}
      >
        Experience
      </div>
      <div className="relative z-0 mx-auto flex flex-col gap-4 pb-10 sm:max-w-md md:max-w-full md:flex-row xl:max-w-5xl 2xl:max-w-6xl">
        <motion.div
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="flex h-full flex-col rounded-md border-none bg-stone-200 p-3 shadow-md dark:bg-[#2d2d2f]">
            <motion.div variants={itemVariants}>
              <CardHeader className="">
                <div className="flex flex-row justify-between">
                  <CardTitle className="!font-bold">SyCip Gorres Velayo & Co.</CardTitle>
                  <CardDescription className="my-auto hidden italic text-df-dark dark:text-df-light lg:block">
                    Mar 2023 - Present
                  </CardDescription>
                </div>
                <CardSubTitle className="text-sm">Fullstack Engineer</CardSubTitle>
                <CardDescription className="my-auto italic text-df-dark dark:text-df-light lg:hidden">
                  March 2023 - Present
                </CardDescription>
              </CardHeader>
            </motion.div>
            <motion.div variants={itemVariants} className="h-[80%]">
              <CardContent>
                <CardBody>
                  <motion.div variants={itemVariants}>
                    <motion.div variants={itemVariants}>
                      <CardSubTitle className="font-semibold">Projects</CardSubTitle>
                    </motion.div>
                    <ul className="list-inside list-decimal pl-2">
                      <motion.li variants={itemVariants}>EY-Commerce</motion.li>
                      <motion.li variants={itemVariants}>eForms BIR System</motion.li>
                      <motion.li variants={itemVariants}>EIS - E-Receipt System</motion.li>
                    </ul>
                    <motion.div variants={itemVariants}>
                      <motion.div variants={itemVariants}>
                        <CardSubTitle className="mt-5 font-semibold">Detailed Tasks</CardSubTitle>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <ul className="list-outside list-disc pl-6">
                          <motion.li variants={itemVariants}>
                            Developed full-stack applications, including an e-commerce web app, an
                            e-receipt system, and system enhancements for a national government
                            agency.
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            Collaborated with Agile teams to deliver solutions that met stakeholder
                            requirements and project goals.
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            Carried out code reviews to ensure compliance with coding standards and
                            best practices.
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            Participated in identifying opportunities for improvement and
                            implemented optimizations and effective solutions to enhance application
                            performance and user experience.
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            Supervised a team of junior developers in the development of an
                            e-commerce web app, fostering collaboration and skills development.
                          </motion.li>
                        </ul>
                        {/* <div className="adrian mt-2 italic">
                          Developed full-stack applications, including an e-commerce web app and
                          system enhancements for a national government agency. I collaborated with
                          Agile teams to deliver solutions that met stakeholder requirements and
                          project goals. As part of the development process, I carried out code
                          reviews to ensure compliance with coding standards and best practices.
                          Additionally, I actively participated in identifying opportunities for
                          improvement and implemented optimizations to enhance application
                          performance and user experience.
                        </div> */}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </CardBody>
              </CardContent>
            </motion.div>
            {/* <motion.div variants={itemVariants}>
              <CardFooter className="flex flex-row flex-wrap justify-center gap-4">
                <motion.div variants={centerVariants}>
                  <IoLogoJavascript className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <BiLogoTypescript className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <RiReactjsLine className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <SiNestjs className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <SiMongodb className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <AiOutlineJava className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <SiMysql className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <GrDocker className="h-6 w-6" />
                </motion.div>
              </CardFooter>
            </motion.div> */}
          </Card>
        </motion.div>
        <motion.div
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="flex h-full flex-col rounded-md border-none bg-stone-200 p-3 shadow-md dark:bg-[#2d2d2f]">
            <motion.div variants={itemVariants}>
              <CardHeader className="">
                <div className="flex flex-row justify-between">
                  <CardTitle className="!font-bold">I.T. Managers Inc.</CardTitle>
                  <CardDescription className="my-auto hidden italic text-df-dark dark:text-df-light lg:block">
                    Oct 2019 - Mar 2023
                  </CardDescription>
                </div>
                <CardSubTitle className="text-sm">Jr. Fullstack Developer</CardSubTitle>
                <CardDescription className="my-auto italic text-df-dark dark:text-df-light lg:hidden">
                  Oct 2019 - Mar 2023
                </CardDescription>
              </CardHeader>
            </motion.div>
            <motion.div variants={itemVariants} className="h-[80%]">
              <CardContent>
                <CardBody>
                  <motion.div variants={itemVariants}>
                    <CardSubTitle className="font-semibold">Projects</CardSubTitle>
                    <ul className="list-inside list-decimal pl-2">
                      <motion.li variants={itemVariants}>Learning Hub</motion.li>
                      <motion.li variants={itemVariants}>
                        Database Data Cleanup{' '}
                        {/* <span className="italic">(Toyota Motors Philippines)</span> */}
                      </motion.li>
                    </ul>
                    <motion.div variants={itemVariants}>
                      <motion.div variants={itemVariants}>
                        <CardSubTitle className="mt-5 font-semibold">Details</CardSubTitle>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <ul className="list-outside list-disc pl-6">
                          <motion.li variants={itemVariants}>
                            Successfully deployed a comprehensive learning system for a global
                            organization, enabling nationwide staff training.
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            Meet with stakeholders to gather and analyze system requirements,
                            ensuring alignment with business goals and outcomes.
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            Collaborated with an Agile team to deliver solutions that met project
                            objectives and stakeholder expectations.
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            Transformed UI/UX wireframes into fully functional, user-facing
                            applications.
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            Developed critical system modules, including an online quiz and exam
                            platform, a content management dashboard, and a scheduling application.
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            Provided end-user and administrator support during the system&apos;s
                            initial launch to ensure a smooth adoption process.
                          </motion.li>
                        </ul>
                        {/* <div className="adrian mt-2 italic">
                          Learning Hub was initiated and developed from the ground up, where I
                          contributed to both frontend and backend codebases and worked closely with
                          stakeholders to gather and analyze system requirements, ensuring alignment
                          with business goals and desired outcomes. The platform includes
                          applications such as Digital Library, Online Examination, Exam Scheduling,
                          Admin Dashboard, and Content Management, which deliver personalized
                          content based on user rank. Collaborated with an agile team and
                          transformed UI/UX wireframes into fully functional web applications and
                          performing code reviews to ensure code quality. Assisted in implementing
                          CI/CD pipelines and deployment processes, and providing ongoing user
                          support.
                        </div> */}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </CardBody>
              </CardContent>
            </motion.div>
            {/* <motion.div variants={itemVariants}>
              <CardFooter className="flex flex-row flex-wrap justify-center gap-4">
                <motion.div variants={centerVariants}>
                  <IoLogoJavascript className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <BiLogoTypescript className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <RiReactjsLine className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <SiMongodb className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <DiNodejs className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <BiLogoPostgresql className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <FaAws className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <GrDocker className="h-6 w-6" />
                </motion.div>
                <motion.div variants={centerVariants}>
                  <SiJquery className="h-6 w-6" />
                </motion.div>
              </CardFooter>
            </motion.div> */}
          </Card>
        </motion.div>
      </div>
    </>
  );
});

ExperienceSection.displayName = 'ExperienceSection';

export default ExperienceSection;
//2d2d2f
