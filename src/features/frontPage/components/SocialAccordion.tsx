import React from 'react';

import { Accordion } from '@/components/Accordion/Accordion';
import { BaseLink } from '@/components/Links/BaseLink';

import LinkExternalIcon from '@/assets/svgs/external-link-icon.svg';
import FourCirclesIcon from '@/assets/svgs/four-circles-icon.svg';
import InstagramIcon from '@/assets/svgs/instagram-icon.svg';
import PadIcon from '@/assets/svgs/pad-icon.svg';
import TwitterIcon from '@/assets/svgs/twitter-icon.svg';

export const SocialAccordion = () => {
  return (
    <Accordion
      title='Lorem ipsum'
      Icon={<FourCirclesIcon className='mr-2.5' />}
      containerClasses='mb-6'
    >
      {({ isAccordionOpen }) => (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          <div className='mt-[33px]'>
            <div className='flex w-full flex-wrap'>
              <BaseLink
                label='Lorem ipsum.com'
                url='/'
                variant='inline'
                classes='my-3 w-[40%] sm:w-full focus:text-red active:text-red'
                Icon={<LinkExternalIcon className='mr-5 text-xl' />}
                nonFocusable={!isAccordionOpen}
              />
              <BaseLink
                label='@Lorem ipsum'
                url='/'
                variant='inline'
                classes='my-3 pl-5 sm:w-full sm:pl-0 focus:text-red active:text-red'
                Icon={<InstagramIcon className='mr-5 text-xl' />}
                nonFocusable={!isAccordionOpen}
              />
            </div>
            <div className='flex w-full flex-wrap'>
              <BaseLink
                label='@Lorem ipsum'
                url='/'
                variant='inline'
                classes='my-3 w-[40%] sm:w-full focus:text-red active:text-red'
                Icon={<PadIcon className='mr-5 text-xl' />}
                nonFocusable={!isAccordionOpen}
              />
              <BaseLink
                label='@Lorem ipsum'
                url='/'
                variant='inline'
                classes='my-3 pl-5 sm:w-full sm:pl-0 focus:text-red active:text-red'
                Icon={<TwitterIcon className='mr-5 text-xl' />}
                nonFocusable={!isAccordionOpen}
              />
            </div>
          </div>
        </>
      )}
    </Accordion>
  );
};
