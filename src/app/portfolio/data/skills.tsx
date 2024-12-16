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
        icon: <IoLogoJavascript className="text-df-light" />
      },
      {
        name: 'Typescript',
        icon: <SiTypescript className="text-df-light" />
      },
      {
        name: 'ReactJs',
        icon: <FaReact className="text-df-light" />
      },
      {
        name: 'NodeJs',
        icon: <DiNodejs className="text-df-light" />
      },
      {
        name: 'ExpressJs',
        icon: <SiExpress className="text-df-light" />
      },
      {
        name: 'NestJs',
        icon: <SiNestjs className="text-df-light" />
      },
      {
        name: 'TailwindCss',
        icon: <RiTailwindCssFill className="text-df-light" />
      },
      {
        name: 'HTML',
        icon: <FaHtml5 className="text-df-light" />
      },
      {
        name: 'CSS',
        icon: <FaCss3Alt className="text-df-light" />
      }
    ]
  }
];

export const frontendSkills: FrontEndSkills[] = [
  {
    frontend: [
      {
        name: 'ReactJs',
        icon: <FaReact className="text-df-light" />
      },
      {
        name: 'Tailwind',
        icon: <RiTailwindCssFill className="text-df-light" />
      },
      {
        name: 'React-query',
        icon: <SiReactquery className="text-df-light" />
      },
      {
        name: 'Redux Toolkit',
        icon: <TbBrandRedux className="text-df-light" />
      },
      {
        name: 'Axios',
        icon: <SiAxios className="text-df-light" />
      },
      {
        name: 'Bootstrap',
        icon: <RiBootstrapFill className="text-df-light" />
      },
      {
        name: 'JQuery',
        icon: <DiJqueryLogo className="text-df-light" />
      }
    ]
  }
];

export const otherSkills: OtherSkills[] = [
  {
    others: [
      {
        name: 'Docker',
        icon: <GrDocker className="text-df-light" />
      },
      {
        name: 'Git',
        icon: <FaGitAlt className="text-df-light" />
      },
      {
        name: 'CI/CD',
        icon: <IoInfiniteSharp className="text-df-light" />
      },
      {
        name: 'AWS',
        icon: <FaAws className="text-df-light" />
      }
    ]
  }
];

export const backendSkills: BackendSkills[] = [
  {
    backend: [
      {
        name: 'NodeJs',
        icon: <DiNodejs className="text-df-light" />
      },
      {
        name: 'NestJs',
        icon: <SiNestjs className="text-df-light" />
      },
      {
        name: 'ExpressJs',
        icon: <SiExpress className="text-df-light" />
      },
      {
        name: 'TypeORM',
        icon: <SiTypeorm className="text-df-light" />
      },
      {
        name: 'Prisma',
        icon: <SiPrisma className="text-df-light" />
      },
      {
        name: 'Mongoose',
        icon: <SiMongoose className="text-df-light" />
      },
      {
        name: 'Postgres',
        icon: <BiLogoPostgresql className="text-df-light" />
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb className="text-df-light" />
      }
    ]
  }
];
