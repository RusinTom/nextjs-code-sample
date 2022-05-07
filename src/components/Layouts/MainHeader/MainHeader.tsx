import Link from 'next/link';
import React from 'react';

import { MainNavigation } from '@/components/MainNavigation/MainNavigation';
import { SearchBar } from '@/components/SearchBar/SearchBar';

import LogoWhite from '../../../assets/logo-white.svg';

export const MainHeader = () => {
  return (
    <header>
      <div className='flex items-center justify-between bg-black px-10 pt-[26px] pb-[25px]'>
        <Link href='/'>
          <a>
            <LogoWhite className='h-[23px] w-[195px]' />
          </a>
        </Link>
        <SearchBar />
        <MainNavigation />
      </div>
      <div className='bg- h-1.5' style={{ background: 'var(--top-bar)' }} />
    </header>
  );
};
