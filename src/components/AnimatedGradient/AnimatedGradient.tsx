import { motion } from 'framer-motion';
import _ from 'lodash';
import React, { useEffect, useRef } from 'react';

export const AnimatedGradient = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getCssProperty = (
      styleDeclaration: CSSStyleDeclaration,
      property: string
    ) => {
      return +styleDeclaration.getPropertyValue(property) ?? 1;
    };

    const changeGradientOnMouseMove = _.throttle((e: MouseEvent) => {
      if (ref.current) {
        const documentHeight = document.documentElement.scrollHeight;
        const mouseYProgress = e.pageY / documentHeight;

        const documentStyles = getComputedStyle(document.documentElement);

        const r = getCssProperty(documentStyles, '--r') * (1 + mouseYProgress);
        const g = getCssProperty(documentStyles, '--g') * (1 + mouseYProgress);
        const b = getCssProperty(documentStyles, '--b') * (1 + mouseYProgress);

        ref.current.style.setProperty('--r', `${r}`);
        ref.current.style.setProperty('--g', `${g}`);
        ref.current.style.setProperty('--b', `${b}`);
      }
    }, 50);
    document.addEventListener('mousemove', changeGradientOnMouseMove);
    return () => {
      document.removeEventListener('mousemove', changeGradientOnMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className='z-negative purple-gradient absolute top-0 left-0 h-full w-full'
    />
  );
};
