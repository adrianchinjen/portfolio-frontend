import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { ModeToggle } from '@/components/mode-toggle';
import NavLogo from '@/components/custom-ui/navbar/NavLogo';
import NavItems from '@/components/custom-ui/navbar/NavItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="absolute h-full w-full bg-gradient-to-r from-blue-400 to-emerald-400">
    <header className="fixed top-0 flex h-auto w-full items-center justify-between bg-df-light px-8 text-black shadow-md dark:bg-zinc-800 md:px-32">
      <NavLogo>A | CHINJEN.</NavLogo>
      <NavItems isOpen={isOpen} />

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
