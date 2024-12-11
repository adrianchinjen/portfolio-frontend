import Heading from '../ui/text/global/Heading';
import Paragraph from '../ui/text/global/Paragraph';
import Subheading from '../ui/text/global/Subheading';

const HeroSection = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <>
      {/* SECTION 1 */}
      <div className="mx-auto flex max-w-7xl flex-col pt-20 lg:pt-4 xl:flex-row xl:pt-6 2xl:pt-10">
        {/* COLUMN 1 */}
        <div className="flex w-full justify-center border border-slate-300 p-4 xl:min-h-56 xl:justify-start 2xl:min-h-64 3xl:min-h-80">
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
                styles="tracking-wider text-[#edb33c] dark:text-[#edb33c] drop-shadow-sm text-center xl:text-left"
              >
                Chinjen.
              </Heading>
            </div>
          </div>
        </div>
        {/* COLUMN 2 */}
        <div className="flex w-full justify-center border border-slate-300 p-4 xl:min-h-56 xl:justify-end 2xl:min-h-64 3xl:min-h-80">
          <div className="pt-6 xl:max-w-60 xl:pt-0">
            <Paragraph styles="xl:text-right text-center text-[#0d2f3f]" fontWeight="font-medium">
              I create modern websites, both frontend and backend {width} x {height}.
            </Paragraph>
          </div>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="mx-auto flex hidden max-w-7xl flex-row justify-center">
        {/* COLUMN 1 */}
        <div className="w-full border border-slate-300 p-4 xl:min-h-56 2xl:min-h-64 3xl:min-h-80"></div>
        {/* COLUMN 2 */}
        <div className="w-full border border-slate-300 p-4 xl:min-h-56 2xl:min-h-64 3xl:min-h-80"></div>
      </div>
    </>
  );
};

export default HeroSection;
// #434242
// old - #27272a
// bg-zinc-800
