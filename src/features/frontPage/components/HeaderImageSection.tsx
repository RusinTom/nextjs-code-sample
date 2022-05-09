import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export const HeaderImageSection = () => {
  return (
    <section className='relative m-auto w-[1440px] max-w-full px-5'>
      <motion.div
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{ duration: 1.2 }}
        className='relative h-full overflow-hidden rounded'
      >
        <Image
          className='w-full object-contain'
          src='/images/jpg/header-image.jpg'
          alt=''
          height={264}
          width={1400}
        />
      </motion.div>

      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.8 }}
        className='absolute -bottom-[63px] left-1/2 h-[149px] w-[149px] -translate-x-[63px] xl:-bottom-[58px] xl:h-[129px] xl:w-[129px] xl:-translate-x-[56px] lg:-bottom-[56px] lg:h-[110px] lg:w-[110px] lg:-translate-x-[48px] md:-bottom-[55px] md:h-[100px] md:w-[100px] md:-translate-x-[44px] sm:-bottom-[59px] sm:-bottom-[52px] sm:h-[80px] sm:w-[80px] sm:-translate-x-[36px] xsm:-bottom-[27px] xsm:h-[50px] xsm:w-[50px] xsm:-translate-x-[22px]'
      >
        <Image src='/images/png/eye.png' alt='' layout='fill' />
      </motion.div>
    </section>
  );
};
