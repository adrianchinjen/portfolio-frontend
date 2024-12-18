import Paragraph from '@/components/custom-ui/text/global/Paragraph';
import Subheading from '@/components/custom-ui/text/global/Subheading';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaViber } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-row flex-wrap">
      <div className="flex w-full flex-col items-center border-b border-zinc-500 py-7 xl:w-[40%] xl:items-start xl:border-none">
        <Subheading
          font="font-robotocondense"
          className="text-3xl tracking-tight text-df-yellow dark:text-df-yellow"
        >
          Adrian Chinjen
        </Subheading>
        <Paragraph className="mt-2 italic text-df-light">Fullstack Web Developer</Paragraph>
      </div>
      <div className="flex w-full flex-col items-center border-b border-zinc-500 py-7 md:w-[50%] md:border-none xl:w-[30%] xl:items-start">
        <Paragraph
          font="font-robotocondense"
          className="text-lg uppercase text-df-light"
          fontWeight="font-semibold"
        >
          Contact Info
        </Paragraph>
        <div className="mt-5 flex flex-row content-center items-center gap-3">
          <FiPhone className="text-df-light" />
          <Paragraph className="text-df-light">+63 919 349 1134</Paragraph>
        </div>
        <div className="mt-4 flex flex-row content-center items-center gap-3">
          <MdOutlineEmail className="text-df-light" />
          <Paragraph className="text-df-light">adrian.chinjen28@gmail.com</Paragraph>
        </div>
      </div>
      <div className="flex w-full flex-col items-center py-7 md:w-[50%] xl:w-[30%] xl:items-start">
        <Paragraph
          font="font-robotocondense"
          className="text-lg uppercase text-df-light"
          fontWeight="font-semibold"
        >
          Social Links
        </Paragraph>
        <div className="my-auto flex flex-row content-center items-center gap-5 xl:flex-col xl:items-start xl:gap-0">
          <div className="mt-4 flex flex-row content-center items-center">
            <a
              href="https://www.linkedin.com/in/chinjenadrian/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row content-center items-center gap-3"
            >
              <FaLinkedin className="size-5 text-df-light" />
              <Paragraph className="hidden text-df-light xl:block">LinkedIn</Paragraph>
            </a>
          </div>
          <div className="mt-4 flex flex-row content-center items-center gap-3">
            <a
              href="https://github.com/adrianchinjen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row content-center items-center gap-3"
            >
              <FaGithub className="size-5 text-df-light" />
              <Paragraph className="hidden text-df-light xl:block">Github</Paragraph>
            </a>
          </div>
          <div className="flex flex-row content-center items-center gap-3">
            <a
              href="https://x.com/adrianchinjen28"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex flex-row content-center items-center gap-3"
            >
              <BsTwitterX className="size-5 text-df-light" />
              <Paragraph className="hidden text-df-light xl:block">Twitter</Paragraph>
            </a>
          </div>
          <div className="mt-4 flex flex-row content-center items-center gap-3">
            <FaViber className="size-5 text-df-light" />
            <Paragraph className="hidden text-df-light xl:block">Viber</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// Copyright C 2024 All Rights Reserved.
