import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../../DarkModeToggle';

interface NavListProps {
  isOpen: boolean;
}

const NavItems = ({ isOpen }: NavListProps) => {
  return (
    <>
      {/* BROWSER NAV ITEMS */}
      <ul className="hidden items-center gap-12 text-base font-semibold xl:flex">
        <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-sky-400 hover:text-white">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-sky-400 hover:text-white">
          <NavLink to="about">About</NavLink>
        </li>
        <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-sky-400 hover:text-white">
          <NavLink to="">Explore</NavLink>
        </li>
        <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-sky-400 hover:text-white">
          <NavLink to="">Contact</NavLink>
        </li>
      </ul>

      {/* MOBILE NAV ITEMS */}
      <ul
        className={`absolute left-0 top-20 flex w-full transform flex-col items-center gap-6 bg-white text-lg font-semibold transition-transform dark:bg-inherit xl:hidden ${isOpen ? 'opacity-100' : 'opacity-0'}`}
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
        <li className="w-full cursor-pointer list-none p-4 text-center transition-all hover:bg-sky-400 hover:text-white">
          <DarkModeToggle />
        </li>
      </ul>
    </>
  );
};

export default NavItems;
