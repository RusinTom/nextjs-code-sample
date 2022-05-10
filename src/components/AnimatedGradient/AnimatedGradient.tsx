import { motion, useViewportScroll } from 'framer-motion';
import _ from 'lodash';
import React, { useEffect, useLayoutEffect, useState } from 'react';

export const AnimatedGradient = () => {
  const { scrollYProgress } = useViewportScroll();

  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    setValue(scrollYProgress.get());
  }, [scrollYProgress]);

  useEffect(() => {
    scrollYProgress.onChange(_.throttle((v) => setValue(v), 100));
  }, [scrollYProgress]);

  return (
    <motion.div
      style={{
        background: `linear-gradient( -164.26deg, rgba(46, 45, 102, 0.6) -2.5%, rgba(${
          58 * (1 + value)
        }, ${39 * (1 + value)}, ${
          63 * (1 + value)
        }, 0.6) 47.55%, #181818 90.7% )`,
      }}
      className='z-negative absolute top-0 left-0 h-full w-full'
    />
  );
};
