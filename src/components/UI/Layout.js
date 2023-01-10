import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Section from './Section';

const Layout = () => {
  return (
    <Section>
      {/* HEADER */}
      <Header />
      {/* OUTLET */}
      <Outlet />
    </Section>
  );
};

export default Layout;
