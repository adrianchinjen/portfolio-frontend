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

const SkillsSection = () => {
  const renderFeatured = (item: FeaturedSkill, index: number) => {
    return (
      <Card
        key={index}
        className="my-auto flex w-fit flex-row content-center items-center gap-4 rounded-sm border-none bg-df-teal p-3 shadow-sm dark:bg-[#2d2d2f] dark:shadow-df-yellow"
      >
        {item.icon}
        <CardDescription className="text-df-light dark:text-df-light">{item.name}</CardDescription>
      </Card>
    );
  };

  const renderFrontend = (item: FrontEndSkill, index: number) => {
    return (
      <Card
        key={index}
        className="my-auto flex w-fit flex-row content-center items-center gap-4 rounded-sm border-none bg-df-teal p-3 shadow-sm dark:bg-[#2d2d2f] dark:shadow-df-yellow"
      >
        {item.icon}
        <CardDescription className="text-df-light dark:text-df-light">{item.name}</CardDescription>
      </Card>
    );
  };

  const renderBackend = (item: BackendSkill, index: number) => {
    return (
      <Card
        key={index}
        className="my-auto flex w-fit flex-row content-center items-center gap-4 rounded-sm border-none bg-df-teal p-3 shadow-sm dark:bg-[#2d2d2f] dark:shadow-df-yellow"
      >
        {item.icon}
        <CardDescription className="text-df-light dark:text-df-light">{item.name}</CardDescription>
      </Card>
    );
  };

  const renderOthers = (item: OtherSkill, index: number) => {
    return (
      <Card
        key={index}
        className="my-auto flex w-fit flex-row content-center items-center gap-4 rounded-sm border-none bg-df-teal p-3 shadow-sm dark:bg-[#2d2d2f] dark:shadow-df-yellow"
      >
        {item.icon}
        <CardDescription className="text-df-light dark:text-df-light">{item.name}</CardDescription>
      </Card>
    );
  };

  return (
    <>
      <div className="mb-20 mt-40 flex justify-center text-5xl font-bold drop-shadow-md">
        Skills
      </div>
      <div className="relative z-0 mx-auto flex flex-col gap-4 pb-10 sm:max-w-md md:max-w-full xl:max-w-5xl 2xl:max-w-6xl">
        <Subheading className="text-xl lg:text-center">Featured</Subheading>
        <div className="mt-2 flex flex-row flex-wrap gap-3 lg:mx-auto lg:max-w-xl lg:justify-center">
          {featuredSkills[0].featured.map(renderFeatured)}
        </div>
        <Subheading className="mt-7 text-xl lg:text-center">Frontend</Subheading>
        <div className="mt-2 flex flex-row flex-wrap gap-3 lg:mx-auto lg:max-w-xl lg:justify-center">
          {frontendSkills[0].frontend.map(renderFrontend)}
        </div>
        <Subheading className="mt-7 text-xl lg:text-center">Backend</Subheading>
        <div className="mt-2 flex flex-row flex-wrap gap-3 lg:mx-auto lg:max-w-xl lg:justify-center">
          {backendSkills[0].backend.map(renderBackend)}
        </div>
        <Subheading className="mt-7 text-xl lg:text-center">Others</Subheading>
        <div className="mt-2 flex flex-row flex-wrap gap-3 lg:mx-auto lg:max-w-xl lg:justify-center">
          {otherSkills[0].others.map(renderOthers)}
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
// bg-[#2d2d2f]
