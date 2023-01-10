import React from 'react';
import { Outlet } from 'react-router-dom';
import Section from './Section';

const Layout = () => {
  return (
    <Section>
      {/* HEADER */}
      <header>HEADER</header>
      {/* OUTLET */}
      <Outlet />
    </Section>
  );
};

export default Layout;
