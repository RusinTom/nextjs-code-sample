import React from 'react';

import { BaseLink } from '@/components/Links/BaseLink';

import FourCirclesIcon from '@/assets/svgs/four-circles-icon.svg';
import StepsIcon from '@/assets/svgs/steps-icon.svg';
import TagIcon from '@/assets/svgs/tag-icon.svg';

export const PageLinksSection = () => {
  return (
    <section className='container mt-[50px] flex flex-wrap items-center justify-center'>
      <BaseLink
        label='Lorem ipsum'
        url='/'
        Icon={<StepsIcon />}
        variant='contained'
        classes='mt-5'
      />

      <BaseLink
        label='Lorem ipsum'
        url='/'
        Icon={<FourCirclesIcon />}
        variant='contained'
        classes='mt-5'
      />
      <BaseLink
        label='Lorem ipsum'
        url='/'
        Icon={<TagIcon className='mb-0.5 text-[17px]' />}
        variant='contained'
        classes='mt-5'
      />
    </section>
  );
};
