import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import * as React from 'react';
import styled from 'styled-components';

export function MainLayout({ children }) {
  return (
    <MainLayoutWrapper>
      <Header />
      {children}
      <Footer />
    </MainLayoutWrapper>
  );
}

const MainLayoutWrapper = styled.div``;
