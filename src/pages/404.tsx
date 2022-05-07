import * as React from 'react';

import Seo from '@/components/Seo';

const NotFoundPage = () => {
  return (
    <>
      <Seo templateTitle='Not Found' />
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            Not found
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
