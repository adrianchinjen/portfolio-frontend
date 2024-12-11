import Heading from '../ui/text/global/Heading';
import Paragraph from '../ui/text/global/Paragraph';
import Subheading from '../ui/text/global/Subheading';

const HeroSection = () => {
  // const width = window.innerWidth;
  // const height = window.innerHeight;
  return (
    <>
      {/* SECTION 1 */}
      <div className="mx-auto grid max-w-7xl pt-20 lg:pt-4 xl:grid-flow-col xl:grid-rows-3 xl:pt-16 2xl:pt-10">
        {/* SECTION 1 */}
        <div className="w-full justify-center border border-slate-300 p-4 xl:min-h-56 xl:justify-start 2xl:min-h-64 3xl:min-h-80">
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
        <div className="hidden w-full justify-center border border-slate-300 p-4 xl:min-h-56 xl:justify-start 2xl:min-h-64 3xl:min-h-80"></div>
        {/* SECTION 3 */}
        <div className="row-span-2 w-full justify-center border border-slate-300 p-4 xl:min-h-56 xl:justify-end 2xl:min-h-64 3xl:min-h-80">
          <div className="flex flex-col gap-4 p-2">
            <Paragraph styles="xl:text-left text-center text-[#0d2f3f] " fontWeight="font-medium">
              I do websites for a living.
            </Paragraph>
            <Paragraph styles="xl:text-left text-center text-[#0d2f3f] " fontWeight="font-medium">
              React for frontend, NodeJs for backend.
            </Paragraph>
            <Paragraph styles="xl:text-left text-center text-[#0d2f3f] " fontWeight="font-medium">
              with a little bit of Typescript and some deployment.
            </Paragraph>
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
