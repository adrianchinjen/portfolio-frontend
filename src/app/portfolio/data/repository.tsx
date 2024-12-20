export interface Repository {
  id: number;
  title: string;
  repoLink: string;
  websiteLink: string | null;
  description: string;
}

export interface Repositories {
  items: Repository[];
}

export const repositories: Repositories[] = [
  {
    items: [
      {
        id: 1,
        title: 'Portfolio Frontend',
        repoLink: 'https://github.com/adrianchinjen/portfolio-frontend',
        websiteLink: null,
        description:
          'This what you are currently viewing. Built with React, TypeScript, and TailwindCSS. A containerized app and deployed in AWS EC2 with CI/CD pipeline.'
      },
      {
        id: 2,
        title: 'Portfolio Backend',
        repoLink: 'https://github.com/adrianchinjen/portfolio-backend',
        websiteLink: null,
        description:
          'Built with NestJs, Postgres and Prisma where my portfolio backend logic is being served.'
      },
      {
        id: 3,
        title: 'Auth Server (MongoDB)',
        repoLink: 'https://github.com/adrianchinjen/auth-server-mongo',
        websiteLink: null,
        description: 'A separate auth server for user authentication using MongoDB.'
      },
      {
        id: 4,
        title: 'React Template',
        repoLink: 'https://github.com/adrianchinjen/react-template',
        websiteLink: null,
        description: 'Initial setup for React projects. Created with vite react.'
      },
      {
        id: 5,
        title: 'React Native Expo Template',
        repoLink: 'https://github.com/adrianchinjen/react-native-expo-template',
        websiteLink: null,
        description: 'Initial setup for React Native projects using Expo and Typescript.'
      },
      {
        id: 6,
        title: 'NestJs Template',
        repoLink: 'https://github.com/adrianchinjen/nestjs-template',
        websiteLink: null,
        description: 'Initial setup for NestJs projects.'
      },
      {
        id: 7,
        title: 'NodeJs TS Template',
        repoLink: 'https://github.com/adrianchinjen/backend-template-node',
        websiteLink: null,
        description: 'Initial setup for NodeJs projects using TypeScript.'
      }
    ]
  }
];
