import Link from 'next/link';
import React from 'react';

import { useMobileMenu } from '@/hooks/useMobileMenu';

import { MainNavigation } from '@/components/MainNavigation/MainNavigation';
import { MobileMenu } from '@/components/MobileMenu/MobileMenu';
import { MobileMenuHamburger } from '@/components/MobileMenu/MobileMenuHamburger';
import { SearchBar } from '@/components/SearchBar/SearchBar';

import LogoWhite from '../../../assets/svgs/logo-white.svg';

export const MainHeader = () => {
  const { isOpen, setIsOpen } = useMobileMenu();

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
        <MobileMenuHamburger setIsOpen={setIsOpen} />
        <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div className='bg- h-1.5' style={{ background: 'var(--top-bar)' }} />
    </header>
  );
};
