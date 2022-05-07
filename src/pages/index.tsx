import * as React from 'react';

import Seo from '@/components/Seo';

import { HeaderImageSection } from '@/features/frontPage/components/HeaderImageSection';
import { PageDescription } from '@/features/frontPage/components/PageDescription';
import { PageLinksSection } from '@/features/frontPage/components/PageLinksSection';

const HomePage = () => {
  return (
    <>
      <Seo />

      <main className='base-gradient'>
        <section className='purple-gradient min-h-screen pt-10'>
          <HeaderImageSection />
          <PageDescription />
          <PageLinksSection />
        </section>
      </main>
    </>
  );
};

export default HomePage;
