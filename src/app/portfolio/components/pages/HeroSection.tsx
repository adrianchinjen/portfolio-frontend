import Heading from '../ui/text/global/Heading';
import Paragraph from '../ui/text/global/Paragraph';
import Subheading from '../ui/text/global/Subheading';
import HeroImage from '../ui/hero/HeroImage';
import WigglyArrow from '../ui/hero/WigglyArrow';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  // const width = window.innerWidth;
  // const height = window.innerHeight;
  return (
    <>
      {/* SECTION 1 */}
      <div className="relative mx-auto max-w-6xl pt-20 lg:pt-4 xl:grid xl:grid-flow-col xl:grid-rows-2 xl:pt-16 2xl:px-7 2xl:pt-10 3xl:pt-16">
        <HeroImage />
        <WigglyArrow />
        {/* SECTION 1 */}
        <div className="w-full justify-center border border-slate-300 p-4 xl:min-h-64 xl:content-start xl:justify-start 2xl:min-h-64 3xl:min-h-80">
          <div>
            <Subheading
              font="font-kalam"
              fontWeight="font-bold"
              styles="text-[#0d2f3f] xl:text-left text-center"
            >
              Yo! I Am
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
        <div className="hidden w-full content-end border border-slate-300 p-4 xl:block xl:min-h-56 xl:justify-start 2xl:min-h-64 3xl:min-h-80">
          <div className="flex gap-3">
            <div className="content-center justify-center border">
              <Heading fontWeight="font-bold" styles="text-[#0d2f3f]">
                04
              </Heading>
            </div>
            <div className="flex flex-col justify-center border pt-2">
              <Paragraph styles="text-sm tracking-wider text-[#0d2f3f]">YEARS OF</Paragraph>
              <Paragraph styles="text-sm tracking-wider text-[#0d2f3f]">EXPERIENCE</Paragraph>
            </div>
          </div>
        </div>
        {/* SECTION 3 */}
        <div className="row-span-2 w-full justify-center border border-slate-300 p-4 xl:min-h-56 xl:justify-end 2xl:min-h-64 3xl:min-h-80">
          {/* <div className="grid h-full gap-4 border border-green-500 lg:grid-cols-3 xl:grid-cols-none xl:grid-rows-3 xl:justify-items-end"> */}
          <div className="flex h-full w-full flex-col gap-4 border border-green-500">
            {/* <div className="grid content-center justify-items-center border xl:min-w-80 xl:max-w-80 xl:content-start"> */}
            <div className="flex-1 justify-items-center">
              <Card className="rounded-xl border-none bg-white p-3 shadow-md dark:bg-white">
                <div className="border">
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
            {/* <div className="grid content-center justify-items-center border xl:min-w-80 xl:max-w-80 xl:content-center xl:justify-items-end"> */}
            <div className="flex-1 xl:content-center xl:justify-items-end">
              <Card className="rounded-xl border-none bg-white p-3 shadow-md dark:bg-white">
                <div className="border">
                  <Paragraph
                    styles="xl:text-right text-center text-[#0d2f3f] dark:text-[#0d2f3f]"
                    fontWeight="font-medium"
                  >
                    React for frontend, NodeJs for backend
                  </Paragraph>
                </div>
              </Card>
            </div>
            {/* <div className="grid content-center justify-items-center border xl:min-w-80 xl:max-w-80 xl:content-end"> */}
            <div className="flex-1 xl:content-end xl:justify-items-end">
              <Card className="rounded-xl border-none bg-white p-3 shadow-md dark:bg-white">
                <div className="border">
                  <Paragraph
                    styles="text-center  text-[#0d2f3f] dark:text-[#0d2f3f]"
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
      </div>
    </>
  );
};

export default HeroSection;
// #434242
// old - #27272a
// bg-zinc-800
// brown shadow - 483c33
