import { motion } from 'framer-motion';
import * as React from 'react';

import { AnimatedGradient } from '@/components/AnimatedGradient/AnimatedGradient';
import Seo from '@/components/Seo';

import { CategoriesAccordion } from '@/features/frontPage/components/CategoriesAccordion';
import { DescriptionAccordion } from '@/features/frontPage/components/DescriptionAccordion';
import { HeaderImageSection } from '@/features/frontPage/components/HeaderImageSection';
import { PageDescription } from '@/features/frontPage/components/PageDescription';
import { PageLinksSection } from '@/features/frontPage/components/PageLinksSection';
import { SocialAccordion } from '@/features/frontPage/components/SocialAccordion';

const HomePage = () => {
  return (
    <>
      <Seo />
      <main className='base-gradient'>
        <motion.section className='purple-gradient relative z-0 pt-10 pb-[66px] transition-all'>
          <AnimatedGradient />
          <HeaderImageSection />
          <PageDescription />
          <PageLinksSection />
          <div className='container mt-[73px] grid grid-cols-2 gap-x-[19px]  lg:grid-cols-1'>
            <SocialAccordion />
            <div>
              <CategoriesAccordion />
              <DescriptionAccordion />
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default HomePage;
