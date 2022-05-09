import React from 'react';

import { clsxm } from '@/lib/clsxm';
import { useAccordion } from '@/hooks/useAccordion';

import ArrowDown from '@/assets/svgs/arrow-down-icon.svg';

interface AccordionProps {
  title: string;
  helperText?: string;
  Icon?: React.ReactNode;
  maxContentHeight?: number;
  children: React.ReactNode;
  containerClasses?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  helperText,
  Icon,
  maxContentHeight,
  children,
  containerClasses,
}) => {
  const { contentRef, toggleAccordion } = useAccordion();

  return (
    <div className={clsxm('accordion w-full', containerClasses)}>
      <div className='rounded bg-grayBg pt-[30px] pl-[30px] pr-[25px]'>
        <div
          className='mb-7 flex cursor-pointer items-center justify-between'
          onClick={toggleAccordion}
        >
          <div className='flex items-center'>
            {Icon}
            <h4>{title}</h4>
            {helperText}
          </div>
          <ArrowDown />
        </div>
        <div
          ref={contentRef}
          className={clsxm(
            'max-h-0 overflow-hidden transition-all duration-300 ease-linear'
          )}
        >
          <div
            className='overflow-auto'
            style={{ maxHeight: maxContentHeight }}
          >
            {children}
          </div>
          <div className='h-[48px]' />
        </div>
      </div>
    </div>
  );
};
