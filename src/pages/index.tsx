import * as React from 'react';

import Seo from '@/components/Seo';

const HomePage = () => {
  return (
    <>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
