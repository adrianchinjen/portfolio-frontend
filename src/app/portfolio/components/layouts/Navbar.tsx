import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import NavLogo from '../ui/navbar/NavLogo';
import NavItems from '../ui/navbar/NavItems';
import { ModeToggle } from '@/components/mode-toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="absolute h-full w-full bg-gradient-to-r from-blue-400 to-emerald-400">
    <header className="sticky top-0 flex h-auto w-full items-center justify-between bg-transparent px-8 text-black shadow-md dark:bg-zinc-800 md:px-32">
      <NavLogo>A | CHINJEN.</NavLogo>
      <NavItems isOpen={isOpen} />

      <div className="relative hidden items-center justify-center gap-3 md:flex">
        <ModeToggle />
      </div>

      {isOpen ? (
        <IoCloseSharp
          size={20}
          className="duration-400 block cursor-pointer text-5xl text-stone-700 transition-all dark:text-stone-300 xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <AiOutlineMenu
          size={20}
          className="duration-400 block cursor-pointer text-5xl text-stone-700 transition-all dark:text-stone-300 xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </header>
    // </div>
  );
};

export default Navbar;
