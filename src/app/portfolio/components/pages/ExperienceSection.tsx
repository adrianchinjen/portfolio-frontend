import CardSubTitle from '@/components/custom-ui/text/card/CardSubTitle';
import CardTitle from '@/components/custom-ui/text/card/CardTitle';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
    <div className="relative z-0 mx-auto mt-40 flex flex-col justify-center gap-4 pb-10 sm:max-w-md md:max-w-full md:flex-row xl:max-w-5xl 2xl:max-w-6xl">
      <div className="flex-1">
        <Card className="rounded-md border-none bg-stone-200 p-3 shadow-md dark:bg-[#2d2d2f]">
          <CardHeader>
            <div className="flex flex-row justify-between">
              <CardTitle className="!font-bold">SyCip Gorres Velayo & Co.</CardTitle>
              <CardDescription className="my-auto hidden italic text-df-dark dark:text-df-light lg:block">
                March 2023 - Present
              </CardDescription>
            </div>
            <CardSubTitle className="">Fullstack Developer</CardSubTitle>
            <CardDescription className="my-auto italic text-df-dark dark:text-df-light lg:hidden">
              March 2023 - Present
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="flex-1">
        <Card className="rounded-md border-none bg-stone-200 p-3 shadow-md dark:bg-[#2d2d2f]">
          <CardHeader>
            <div className="flex flex-row justify-between">
              <CardTitle className="!font-bold">I.T. Managers Inc.</CardTitle>
              <CardDescription className="my-auto hidden italic text-df-dark dark:text-df-light lg:block">
                October 2019 - March 2023
              </CardDescription>
            </div>
            <CardSubTitle className="">Jr. Programmer</CardSubTitle>
            <CardDescription className="my-auto italic text-df-dark dark:text-df-light lg:hidden">
              October 2019 - March 2023
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceSection;
//2d2d2f
