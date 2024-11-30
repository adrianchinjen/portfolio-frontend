import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
