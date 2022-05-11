import { motion } from 'framer-motion';
import _ from 'lodash';
import React, { useEffect, useRef } from 'react';

export const AnimatedGradient = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getCssProperty =
      (styleDeclaration: CSSStyleDeclaration) => (property: string) => {
        return +styleDeclaration.getPropertyValue(property) ?? 1;
      };

    const getMouseYProgress = (e: MouseEvent) => {
      const documentHeight = document.documentElement.scrollHeight;
      return e.pageY / documentHeight;
    };

    const changeGradientOnMouseMove = _.throttle((e: MouseEvent) => {
      if (ref.current) {
        const animatedElement = ref.current;
        const mouseYProgress = getMouseYProgress(e);

        const documentCSSStyleDeclaration = getComputedStyle(
          document.documentElement
        );
        const getDocumentCSSProperty = getCssProperty(
          documentCSSStyleDeclaration
        );

        const r = getDocumentCSSProperty('--r') * (1 + mouseYProgress);
        const g = getDocumentCSSProperty('--g') * (1 + mouseYProgress);
        const b = getDocumentCSSProperty('--b') * (1 + mouseYProgress);

        animatedElement.style.setProperty('--r', `${r}`);
        animatedElement.style.setProperty('--g', `${g}`);
        animatedElement.style.setProperty('--b', `${b}`);
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
