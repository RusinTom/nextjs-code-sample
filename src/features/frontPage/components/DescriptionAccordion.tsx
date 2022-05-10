import React from 'react';

import { Accordion } from '@/components/Accordion/Accordion';

import FourCirclesIcon from '@/assets/svgs/four-circles-icon.svg';

export const DescriptionAccordion = () => {
  return (
    <Accordion
      containerClasses='col-start-2 lg:col-start-1'
      title='Lorem ipsum'
      Icon={<FourCirclesIcon className='mr-2.5' />}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </Accordion>
  );
};
