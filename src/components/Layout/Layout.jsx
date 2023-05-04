import { Outlet } from 'react-router-dom';

import { LayoutStyled } from './Layout.styled';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <LayoutStyled>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutStyled>
  );
};
