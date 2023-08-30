import { Navigation } from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const CommonLayout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
