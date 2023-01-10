import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Section from './Section';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <Section>
      {/* HEADER */}
      {pathname !== '/' && <Header />}
      {/* OUTLET */}
      <Outlet />
    </Section>
  );
};

export default Layout;
