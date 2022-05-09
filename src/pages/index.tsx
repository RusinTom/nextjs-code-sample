import * as React from 'react';

import { fakeBoxes } from '@/data/fakeData';

import { Accordion } from '@/components/Accordion/Accordion';
import { BaseLink } from '@/components/Links/BaseLink';
import Seo from '@/components/Seo';

import LinkExternalIcon from '@/assets/svgs/external-link-icon.svg';
import FourCirclesIcon from '@/assets/svgs/four-circles-icon.svg';
import InstagramIcon from '@/assets/svgs/instagram-icon.svg';
import PadIcon from '@/assets/svgs/pad-icon.svg';
import TwitterIcon from '@/assets/svgs/twitter-icon.svg';
import { CategoryBox } from '@/features/frontPage/components/CategoryBox';
import { HeaderImageSection } from '@/features/frontPage/components/HeaderImageSection';
import { PageDescription } from '@/features/frontPage/components/PageDescription';
import { PageLinksSection } from '@/features/frontPage/components/PageLinksSection';

const HomePage = () => {
  return (
    <>
      <Seo />

      <main className='base-gradient'>
        <section className='purple-gradient min-h-screen pt-10 pb-[66px]'>
          <HeaderImageSection />
          <PageDescription />
          <PageLinksSection />

          <div className='container mt-[73px] grid grid-cols-2 gap-x-[19px]  lg:grid-cols-1'>
            <Accordion
              title='Accordion 1'
              Icon={<FourCirclesIcon className='mr-2.5' />}
              containerClasses='mb-6'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
              <div className='mt-[33px]'>
                <div className='flex w-full flex-wrap'>
                  <BaseLink
                    label='Lorem ipsum.com'
                    url='/'
                    variant='inline'
                    classes='my-3 w-[40%] sm:w-full'
                    Icon={<LinkExternalIcon className='mr-5 text-xl' />}
                  />
                  <BaseLink
                    label='@Lorem ipsum'
                    url='/'
                    variant='inline'
                    classes='my-3 pl-5 sm:w-full sm:pl-0'
                    Icon={<InstagramIcon className='mr-5 text-xl' />}
                  />
                </div>
                <div className='flex w-full flex-wrap'>
                  <BaseLink
                    label='@Lorem ipsum'
                    url='/'
                    variant='inline'
                    classes='my-3 w-[40%] sm:w-full'
                    Icon={<PadIcon className='mr-5 text-xl' />}
                  />

                  <BaseLink
                    label='@Lorem ipsum'
                    url='/'
                    variant='inline'
                    classes='my-3 pl-5 sm:w-full sm:pl-0'
                    Icon={<TwitterIcon className='mr-5 text-xl' />}
                  />
                </div>
              </div>
            </Accordion>

            <div>
              <Accordion
                title='Accordion 2'
                maxContentHeight={320}
                containerClasses='mb-6'
              >
                <div className='grid grid-cols-3 gap-x-1.5 gap-y-2.5 pr-[20px] xl:grid-cols-2 xsm:grid-cols-1'>
                  {fakeBoxes.map((box) => (
                    <CategoryBox key={box.id} data={box} />
                  ))}
                </div>
              </Accordion>

              <Accordion
                containerClasses='col-start-2 lg:col-start-1'
                title='Accordion 3'
                Icon={<FourCirclesIcon className='mr-2.5' />}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
