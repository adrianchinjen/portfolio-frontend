import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { ModeToggle } from '@/components/mode-toggle';
import NavLogo from '@/components/custom-ui/navbar/NavLogo';
import NavItems from '@/components/custom-ui/navbar/NavItems';

export interface SectionRefs {
  heroRef: React.MutableRefObject<HTMLElement | null>;
  experienceRef: React.MutableRefObject<HTMLElement | null>;
  skillsRef: React.MutableRefObject<HTMLElement | null>;
}
interface NavbarProps {
  onNavigate: (ref: React.RefObject<HTMLElement>) => void;
  sectionRefs: SectionRefs;
}

const Navbar = ({ onNavigate, sectionRefs }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="absolute h-full w-full bg-gradient-to-r from-blue-400 to-emerald-400">
    <header className="fixed top-0 flex h-20 w-full items-center justify-between bg-df-light px-8 text-black shadow-md dark:bg-zinc-800 md:px-32 xl:h-auto">
      <NavLogo>A | CHINJEN.</NavLogo>
      <NavItems isOpen={isOpen} onNavigate={onNavigate} sectionRefs={sectionRefs} />

      <div className="relative hidden items-center justify-center gap-3 xl:block">
        <ModeToggle />
      </div>

      {isOpen ? (
        <div className="flex flex-row xl:hidden">
          <div className="my-auto flex-1 p-2">
            <ModeToggle />
          </div>
          <div className="my-auto flex-1 p-2">
            <IoCloseSharp
              size={20}
              className="duration-400 cursor-pointer text-5xl text-stone-700 transition-all dark:text-stone-300 xl:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-row xl:hidden">
          <div className="my-auto flex-1 p-2">
            <ModeToggle />
          </div>
          <div className="my-auto flex-1 p-2">
            <AiOutlineMenu
              size={20}
              className="duration-400 cursor-pointer text-5xl text-stone-700 transition-all dark:text-stone-300 xl:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      )}
    </header>
    // </div>
  );
};

export default Navbar;
