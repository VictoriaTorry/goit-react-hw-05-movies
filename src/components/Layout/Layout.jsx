import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <>
      <Suspense fallback={<div>Loading page...</div>}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
}
