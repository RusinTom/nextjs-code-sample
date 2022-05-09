import React from 'react';

import { Footer } from '@/components/Layouts/MainFooter/Footer';
import { MainHeader } from '@/components/Layouts/MainHeader/MainHeader';

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};
