import React from 'react';

import { fakeBoxes } from '@/data/fakeData';

import { Accordion } from '@/components/Accordion/Accordion';

import FourCirclesIcon from '@/assets/svgs/four-circles-icon.svg';
import { CategoryBox } from '@/features/frontPage/components/CategoryBox';

export const CategoriesAccordion = () => {
  return (
    <Accordion
      title='Lorem ipsum'
      maxContentHeight={320}
      containerClasses='mb-6'
      Icon={<FourCirclesIcon className='mr-2.5' />}
      helperText='Lorem ipsum dolor'
    >
      {({ isAccordionOpen }) => (
        <div className='grid grid-cols-3 gap-x-1.5 gap-y-2.5 pr-[20px] xl:grid-cols-2 xsm:grid-cols-1'>
          {fakeBoxes.map((box) => (
            <CategoryBox
              key={box.id}
              data={box}
              isAccordionOpen={isAccordionOpen}
            />
          ))}
        </div>
      )}
    </Accordion>
  );
};
