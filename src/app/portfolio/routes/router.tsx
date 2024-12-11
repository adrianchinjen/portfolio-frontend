import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import RootLayout from '../components/layouts/Rootlayout';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import PageBackground from '../components/pages/PageBackground';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Route>
  )
);

export const AppRouter = () => {
  return (
    <PageBackground>
      <RouterProvider router={router} />
    </PageBackground>
  );
};