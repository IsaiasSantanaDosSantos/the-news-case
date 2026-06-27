import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import News from '@/pages/News';
import Events from '@/pages/Event';
import { paths } from './paths';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={paths.news} element={<News />} />
          <Route path={paths.events} element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
