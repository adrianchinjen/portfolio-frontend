import { type SectionRefs } from '@/app/portfolio/components/layouts/Navbar';
import { NavLink } from 'react-router-dom';

interface NavListProps {
  isOpen: boolean;
  onNavigate: (ref: React.RefObject<HTMLElement>) => void;
  sectionRefs: SectionRefs;
}

const NavItems = ({ isOpen, onNavigate, sectionRefs }: NavListProps) => {
  return (
    <>
      {/* BROWSER NAV ITEMS */}
      <ul className="hidden items-center gap-12 text-base font-semibold xl:flex">
        <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-sky-400 hover:text-white">
          <NavLink to="" onClick={() => onNavigate(sectionRefs.heroRef)}>
            Home
          </NavLink>
        </li>
        <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-sky-400 hover:text-white">
          <NavLink to="" onClick={() => onNavigate(sectionRefs.experienceRef)}>
            Experience
          </NavLink>
        </li>
        <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-sky-400 hover:text-white">
          <NavLink to="" onClick={() => onNavigate(sectionRefs.skillsRef)}>
            Skills
          </NavLink>
        </li>
      </ul>

      {/* MOBILE NAV ITEMS */}
      <ul
        className={`absolute left-0 top-20 flex w-full transform flex-col items-center gap-6 bg-df-light text-lg font-semibold transition-transform dark:bg-zinc-800 xl:hidden ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
      >
        <li className="w-full cursor-pointer list-none p-4 text-center transition-all hover:bg-sky-400 hover:text-white">
          Home
        </li>
        <li className="w-full cursor-pointer list-none p-4 text-center transition-all hover:bg-sky-400 hover:text-white">
          Products
        </li>
        <li className="w-full cursor-pointer list-none p-4 text-center transition-all hover:bg-sky-400 hover:text-white">
          Explore
        </li>
        <li className="w-full cursor-pointer list-none p-4 text-center transition-all hover:bg-sky-400 hover:text-white">
          Contact
        </li>
      </ul>
    </>
  );
};

export default NavItems;
