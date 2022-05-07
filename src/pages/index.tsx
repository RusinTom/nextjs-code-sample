import * as React from 'react';

import { SectionHeaderImage } from '@/components/SectionHeaderImage/SectionHeaderImage';
import Seo from '@/components/Seo';

const HomePage = () => {
  return (
    <>
      <Seo />

      <main
        style={{
          background: 'linear-gradient(0deg, #0D0D0D, #0D0D0D), #141417;',
        }}
      >
        <section
          className='min-h-screen pt-10'
          style={{
            background: 'var(--purple-gradient)',
          }}
        >
          <SectionHeaderImage />
        </section>
      </main>
    </>
  );
};

export default HomePage;
