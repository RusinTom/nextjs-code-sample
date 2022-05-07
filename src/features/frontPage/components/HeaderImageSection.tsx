import Image from 'next/image';
import React from 'react';

export const HeaderImageSection = () => {
  return (
    <section className='relative m-auto h-[264px] w-[1400px] '>
      <div className='relative h-full overflow-hidden rounded'>
        <Image
          className='w-full object-contain'
          src='/images/jpg/header-image.jpg'
          alt=''
          layout='fill'
        />
      </div>

      <div className='absolute -bottom-[63px] left-1/2 -translate-x-[63px]'>
        <Image src='/images/png/eye.png' alt='' width={149} height={149} />
      </div>
    </section>
  );
};
