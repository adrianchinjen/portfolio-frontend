/* eslint-disable react/no-unescaped-entities */
import HeroImage from '@/components/custom-ui/hero/HeroImage';
import WigglyArrow from '@/components/custom-ui/hero/WigglyArrow';
import Heading from '@/components/custom-ui/text/global/Heading';
import Paragraph from '@/components/custom-ui/text/global/Paragraph';
import Subheading from '@/components/custom-ui/text/global/Subheading';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  // const width = window.innerWidth;
  // const height = window.innerHeight;
  // const devicePixelRatio = window.devicePixelRatio;
  return (
    <>
      {/* SECTION 1 */}
      <div className="relative mx-auto max-w-6xl pt-16 lg:pt-4 xl:grid xl:grid-flow-col xl:grid-rows-2 xl:pt-16 2xl:px-7 2xl:pt-10 3xl:pt-16">
        <HeroImage />
        <WigglyArrow />
        {/* SECTION 1 */}
        <div className="-slate-300 w-full justify-center py-1 xl:min-h-64 xl:content-start xl:justify-start xl:p-4 2xl:min-h-64 3xl:min-h-80">
          <div>
            <Subheading
              font="font-kalam"
              fontWeight="font-bold"
              styles="text-[#0d2f3f] xl:text-left text-center"
            >
              Yo! I'm
            </Subheading>
            <Heading
              font="font-robotCondense"
              fontWeight="font-bold"
              styles="tracking-widest text-[#edb33c] dark:text-[#edb33c] drop-shadow-sm text-center xl:text-left mt-2"
            >
              Adrian
            </Heading>
          </div>
        </div>
        {/* SECTION 2 */}
        <div className="-slate-300 hidden w-full content-end p-4 xl:block xl:min-h-56 xl:justify-start 2xl:min-h-64 3xl:min-h-80">
          <div className="flex gap-3">
            <div className="content-center justify-center">
              <Heading fontWeight="font-bold" styles="text-[#0d2f3f]">
                04
              </Heading>
            </div>
            <div className="flex flex-col justify-center pt-2">
              <Paragraph styles="text-sm tracking-wider text-[#0d2f3f]">YEARS OF</Paragraph>
              <Paragraph styles="text-sm tracking-wider text-[#0d2f3f]">EXPERIENCE</Paragraph>
            </div>
          </div>
        </div>
        {/* SECTION 3 */}
        <div className="-slate-300 row-span-2 hidden w-full justify-center p-4 xl:block xl:min-h-56 xl:justify-end 2xl:min-h-64 3xl:min-h-80">
          <div className="flex h-full w-full flex-col gap-4">
            <div className="flex-1 justify-items-center">
              <Card className="-none rounded-xl bg-white p-3 shadow-md dark:bg-white">
                <div className="">
                  <Paragraph
                    styles="xl:text-left text-center text-[#0d2f3f]  dark:text-[#0d2f3f]"
                    fontWeight="font-medium"
                  >
                    I do websites for a living
                    <span className="block text-[#0d2f3f] dark:text-[#0d2f3f] xl:hidden">
                      For about 4 years
                    </span>
                  </Paragraph>
                </div>
              </Card>
            </div>
            <div className="flex-1 xl:content-center xl:justify-items-end">
              <Card className="-none rounded-xl bg-white p-3 shadow-md dark:bg-white">
                <div className="">
                  <Paragraph
                    styles="xl:text-right text-center text-[#0d2f3f] dark:text-[#0d2f3f]"
                    fontWeight="font-medium"
                  >
                    React for frontend, NodeJs for backend
                  </Paragraph>
                </div>
              </Card>
            </div>
            <div className="flex-1 xl:content-end xl:justify-items-end">
              <Card className="-none rounded-xl bg-white p-3 shadow-md dark:bg-white">
                <div className="">
                  <Paragraph
                    styles="text-center text-[#0d2f3f] dark:text-[#0d2f3f]"
                    fontWeight="font-medium"
                  >
                    And little bit of Typescript and deployment
                  </Paragraph>
                  <Paragraph
                    styles="hidden text-center  text-[#0d2f3f] dark:text-[#0d2f3f]"
                    fontWeight="font-medium"
                  >
                    Like this one
                  </Paragraph>
                </div>
              </Card>
            </div>
          </div>
        </div>
        {/* MOBILE SECTION ABOUT */}
        <div className="min-w-xl mx-auto mt-14 flex max-w-xl flex-col justify-center gap-3 border-l-[5px] border-r-[5px] border-gray-500 xl:hidden">
          <div className="">
            <Paragraph
              styles="text-center text-[#0d2f3f] !text-xl"
              font="font-robotocondense"
              fontWeight="font-medium"
            >
              I do websites for a living.
            </Paragraph>
          </div>
          <div className="">
            <Paragraph
              styles="text-center text-[#0d2f3f] !text-xl"
              font="font-robotocondense"
              fontWeight="font-medium"
            >
              Building scalable web apps for about 5 years.
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
