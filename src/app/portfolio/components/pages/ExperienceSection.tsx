import CardBody from '@/components/custom-ui/text/card/CardBody';
import CardSubTitle from '@/components/custom-ui/text/card/CardSubTitle';
import CardTitle from '@/components/custom-ui/text/card/CardTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { AiOutlineJava } from 'react-icons/ai';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { DiNodejs } from 'react-icons/di';
import { FaAws } from 'react-icons/fa6';
import { GrDocker } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsLine } from 'react-icons/ri';
import { SiJquery, SiMongodb, SiMysql, SiNestjs } from 'react-icons/si';

const ExperienceSection = () => {
  return (
    <>
      <div className="mb-20 mt-40 flex justify-center text-5xl font-bold drop-shadow-md">
        Experience
      </div>
      <div className="relative z-0 mx-auto flex flex-col gap-4 pb-10 sm:max-w-md md:max-w-full md:flex-row xl:max-w-5xl 2xl:max-w-6xl">
        <div className="flex-1">
          <Card className="flex h-full flex-col rounded-md border-none bg-stone-200 p-3 shadow-md dark:bg-[#2d2d2f]">
            <CardHeader className="">
              <div className="flex flex-row justify-between">
                <CardTitle className="!font-bold">SyCip Gorres Velayo & Co.</CardTitle>
                <CardDescription className="my-auto hidden italic text-df-dark dark:text-df-light lg:block">
                  March 2023 - Present
                </CardDescription>
              </div>
              <CardSubTitle className="text-sm">Fullstack Developer</CardSubTitle>
              <CardDescription className="my-auto italic text-df-dark dark:text-df-light lg:hidden">
                March 2023 - Present
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[80%]">
              <CardBody>
                <CardSubTitle className="font-semibold">Projects</CardSubTitle>
                <ul className="list-inside list-decimal pl-2">
                  <li>
                    EY-Commerce - <span className="italic">(Internal project)</span>
                  </li>
                  <li>
                    eForms BIR System - <span className="italic">(Bureau of Internal Revenue)</span>
                  </li>
                </ul>
                <CardSubTitle className="mt-5 font-semibold">Details</CardSubTitle>
                <div className="adrian mt-2 italic">
                  Collaborated as a member of an Agile team, contributing to backend codebases for
                  the eForms project and both frontend and backend development for other
                  initiatives. Actively participated in code reviews, provided constructive
                  feedback, and managed pull requests to ensure code quality and consistency.
                  Organized and prioritized tasks on Trello boards in alignment with system
                  requirements and deadline, facilitating efficient workflow management and project
                  execution.
                </div>
              </CardBody>
            </CardContent>
            <CardFooter className="flex flex-row flex-wrap justify-center gap-4">
              <IoLogoJavascript className="h-6 w-6" />
              <BiLogoTypescript className="h-6 w-6" />
              <RiReactjsLine className="h-6 w-6" />
              <SiNestjs className="h-6 w-6" />
              <SiMongodb className="h-6 w-6" />
              <AiOutlineJava className="h-6 w-6" />
              <SiMysql className="h-6 w-6" />
              <GrDocker className="h-6 w-6" />
            </CardFooter>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="flex h-full flex-col rounded-md border-none bg-stone-200 p-3 shadow-md dark:bg-[#2d2d2f]">
            <CardHeader className="">
              <div className="flex flex-row justify-between">
                <CardTitle className="!font-bold">I.T. Managers Inc.</CardTitle>
                <CardDescription className="my-auto hidden italic text-df-dark dark:text-df-light lg:block">
                  October 2019 - March 2023
                </CardDescription>
              </div>
              <CardSubTitle className="text-sm">Jr. Programmer</CardSubTitle>
              <CardDescription className="my-auto italic text-df-dark dark:text-df-light lg:hidden">
                October 2019 - March 2023
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[80%]">
              <CardBody>
                <CardSubTitle className="font-semibold">Projects</CardSubTitle>
                <ul className="list-inside list-decimal pl-2">
                  <li>
                    Learning Hub - <span className="italic">(Toyota Motors Philippines)</span>
                  </li>
                  <li>
                    Database Data Cleanup -{' '}
                    <span className="italic">(Toyota Motors Philippines)</span>
                  </li>
                </ul>
                <CardSubTitle className="mt-5 font-semibold">Details</CardSubTitle>
                <div className="adrian mt-2 italic">
                  Learning Hub was initiated and developed from the ground up, where I contributed
                  to both frontend and backend codebases and gathered information to define system
                  requirements. The platform includes applications such as a Digital Library, Online
                  Examination, Exam Scheduling, Admin Dashboard, and Content Management, which
                  deliver personalized content based on user rank. I participated in code reviews,
                  managed pull requests, and ensured code quality. I also assisted in implementing
                  CI/CD pipelines and deployment processes, providing ongoing user support.
                </div>
              </CardBody>
            </CardContent>
            <CardFooter className="flex flex-row flex-wrap justify-center gap-4">
              <IoLogoJavascript className="h-6 w-6" />
              <BiLogoTypescript className="h-6 w-6" />
              <RiReactjsLine className="h-6 w-6" />
              <SiMongodb className="h-6 w-6" />
              <DiNodejs className="h-6 w-6" />
              <BiLogoPostgresql className="h-6 w-6" />
              <FaAws className="h-6 w-6" />
              <GrDocker className="h-6 w-6" />
              <SiJquery className="h-6 w-6" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
//2d2d2f
