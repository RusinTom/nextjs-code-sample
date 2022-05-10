import { motion } from 'framer-motion';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';

export const AnimatedGradient = () => {
  const [style, setStyle] = useState(
    `linear-gradient( -164.26deg, rgba(46 , 45, 102, 0.6) -2.5%, rgba(58,39,63, 0.6) 47.55%, #181818 90.7% )`
  );

  useEffect(() => {
    const changeGradientOnMouseMove = _.throttle((e: MouseEvent) => {
      const documentHeight = document.documentElement.scrollHeight;
      const mouseYProgress = e.pageY / documentHeight;
      setStyle(
        `linear-gradient( -164.26deg, rgba(46, 45, 102, 0.6) -2.5%, rgba(${
          58 * (1 + mouseYProgress)
        }, ${39 * (1 + mouseYProgress)}, ${
          63 * (1 + mouseYProgress)
        }, 0.6) 47.55%, #181818 90.7% )`
      );
    }, 50);
    document.addEventListener('mousemove', changeGradientOnMouseMove);
    return () => {
      document.removeEventListener('mousemove', changeGradientOnMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        background: style,
      }}
      className='z-negative absolute top-0 left-0 h-full w-full'
    />
  );
};
