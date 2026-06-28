import { Outlet } from 'react-router-dom';

import AppHeader from '@/components/AppHeader';
import Navigation from '@/components/Navigation/index';

import { Wrapper } from './styles';

export default function MainLayout() {
  return (
    <Wrapper>
      <AppHeader />

      <Outlet />

      <Navigation />
    </Wrapper>
  );
}
