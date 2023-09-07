import { ApplicationBar } from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const CommonLayout = () => {
  return (
    <div>
      <header style={{ width: '100vw' }}>
        <ApplicationBar />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
