import { motion } from 'framer-motion';
import React from 'react';

export const PageDescription = () => {
  return (
    <section className='container mt-[89px] text-center xsm:mt-[50px]'>
      <motion.h1
        animate={{ opacity: [0, 1], y: [30, 0] }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Lorem ipsum
      </motion.h1>
      <motion.p
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 1.9 }}
        className='mt-1.5 text-base leading-[20px] text-whiteText sm:text-sm'
      >
        Created by: <span className='text-red'>Lorem ipsum</span>
      </motion.p>
      <motion.p
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 1.9 }}
        className='mt-3 text-base leading-[22px] sm:text-sm'
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
      </motion.p>
    </section>
  );
};
