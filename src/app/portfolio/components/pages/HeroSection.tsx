import Heading from '../ui/text/global/Heading';
import Paragraph from '../ui/text/global/Paragraph';
import Subheading from '../ui/text/global/Subheading';

const HeroSection = () => {
  // const width = window.innerWidth;
  // const height = window.innerHeight;
  return (
    <>
      {/* SECTION 1 */}
      <div className="mx-auto grid max-w-7xl grid-rows-2 pt-20 lg:pt-4 xl:grid-flow-col xl:pt-16 2xl:pt-10 3xl:pt-16">
        {/* SECTION 1 */}
        <div className="w-full content-center justify-center border border-slate-300 p-4 xl:min-h-56 xl:content-start xl:justify-start 2xl:min-h-64 3xl:min-h-80">
          <div>
            <Subheading
              font="font-kalam"
              fontWeight="font-bold"
              styles="text-[#0d2f3f] xl:text-left text-center"
            >
              Yo! I Am
            </Subheading>
            <div className="mt-2">
              <Heading
                font="font-robotCondense"
                fontWeight="font-bold"
                styles="tracking-widest text-[#edb33c] dark:text-[#edb33c] drop-shadow-sm text-center xl:text-left"
              >
                Adrian
              </Heading>
            </div>
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
          <div className="grid h-full gap-4 lg:grid-cols-3 xl:grid-cols-none xl:grid-rows-3 xl:justify-items-end">
            <div className="grid content-center justify-items-center border xl:min-w-80 xl:max-w-80 xl:content-start">
              <div className="w-72 border">
                <Paragraph
                  styles="xl:text-left text-center text-[#0d2f3f] "
                  fontWeight="font-medium"
                >
                  I do websites for a living.
                  <span className="block xl:hidden">About 4 years</span>
                </Paragraph>
              </div>
            </div>
            <div className="grid content-center justify-items-center border xl:min-w-80 xl:max-w-80 xl:content-center xl:justify-items-end">
              <div className="w-56 border">
                <Paragraph
                  styles="xl:text-right text-center text-[#0d2f3f]"
                  fontWeight="font-medium"
                >
                  React for frontend, NodeJs for backend
                </Paragraph>
              </div>
            </div>
            <div className="grid content-center justify-items-center border xl:min-w-80 xl:max-w-80 xl:content-end">
              <div className="w-56 border">
                <Paragraph styles="text-center  text-[#0d2f3f]" fontWeight="font-medium">
                  And little bit of Typescript and some deployment. Like this one
                </Paragraph>
              </div>
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
