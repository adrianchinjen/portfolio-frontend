import { BiLogoPostgresql } from 'react-icons/bi';
import { DiJqueryLogo, DiNodejs } from 'react-icons/di';
import { FaAws, FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from 'react-icons/fa';
import { GrDocker } from 'react-icons/gr';
import { IoInfiniteSharp, IoLogoJavascript } from 'react-icons/io5';
import { RiBootstrapFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiAxios,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiPrisma,
  SiReactquery,
  SiTypeorm,
  SiTypescript
} from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';

export interface FeaturedSkill {
  name: string;
  icon: React.ReactNode;
}

export interface FeaturedSkills {
  featured: FeaturedSkill[];
}

export interface FrontEndSkill {
  name: string;
  icon: React.ReactNode;
}

export interface FrontEndSkills {
  frontend: FrontEndSkill[];
}

export interface BackendSkill {
  name: string;
  icon: React.ReactNode;
}

export interface BackendSkills {
  backend: BackendSkill[];
}

export interface OtherSkill {
  name: string;
  icon: React.ReactNode;
}

export interface OtherSkills {
  others: OtherSkill[];
}

export const featuredSkills: FeaturedSkills[] = [
  {
    featured: [
      {
        name: 'Javascript',
        icon: <IoLogoJavascript className="text-stone-300" />
      },
      {
        name: 'Typescript',
        icon: <SiTypescript className="text-stone-300" />
      },
      {
        name: 'ReactJs',
        icon: <FaReact className="text-stone-300" />
      },
      {
        name: 'NodeJs',
        icon: <DiNodejs className="text-stone-300" />
      },
      {
        name: 'ExpressJs',
        icon: <SiExpress className="text-stone-300" />
      },
      {
        name: 'NestJs',
        icon: <SiNestjs className="text-stone-300" />
      },
      {
        name: 'TailwindCss',
        icon: <RiTailwindCssFill className="text-stone-300" />
      },
      {
        name: 'HTML',
        icon: <FaHtml5 className="text-stone-300" />
      },
      {
        name: 'CSS',
        icon: <FaCss3Alt className="text-stone-300" />
      }
    ]
  }
];

export const frontendSkills: FrontEndSkills[] = [
  {
    frontend: [
      {
        name: 'ReactJs',
        icon: <FaReact className="text-stone-300" />
      },
      {
        name: 'Tailwind',
        icon: <RiTailwindCssFill className="text-stone-300" />
      },
      {
        name: 'React-query',
        icon: <SiReactquery className="text-stone-300" />
      },
      {
        name: 'Redux Toolkit',
        icon: <TbBrandRedux className="text-stone-300" />
      },
      {
        name: 'Axios',
        icon: <SiAxios className="text-stone-300" />
      },
      {
        name: 'Bootstrap',
        icon: <RiBootstrapFill className="text-stone-300" />
      },
      {
        name: 'JQuery',
        icon: <DiJqueryLogo className="text-stone-300" />
      }
    ]
  }
];

export const otherSkills: OtherSkills[] = [
  {
    others: [
      {
        name: 'Docker',
        icon: <GrDocker className="text-stone-300" />
      },
      {
        name: 'Git',
        icon: <FaGitAlt className="text-stone-300" />
      },
      {
        name: 'CI/CD',
        icon: <IoInfiniteSharp className="text-stone-300" />
      },
      {
        name: 'AWS',
        icon: <FaAws className="text-stone-300" />
      }
    ]
  }
];

export const backendSkills: BackendSkills[] = [
  {
    backend: [
      {
        name: 'NodeJs',
        icon: <DiNodejs className="text-stone-300" />
      },
      {
        name: 'NestJs',
        icon: <SiNestjs className="text-stone-300" />
      },
      {
        name: 'ExpressJs',
        icon: <SiExpress className="text-stone-300" />
      },
      {
        name: 'TypeORM',
        icon: <SiTypeorm className="text-stone-300" />
      },
      {
        name: 'Prisma',
        icon: <SiPrisma className="text-stone-300" />
      },
      {
        name: 'Mongoose',
        icon: <SiMongoose className="text-stone-300" />
      },
      {
        name: 'Postgres',
        icon: <BiLogoPostgresql className="text-stone-300" />
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb className="text-stone-300" />
      }
    ]
  }
];
