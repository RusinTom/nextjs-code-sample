import Link from 'next/link';
import React from 'react';

import { clsxm } from '@/lib/clsxm';

import { navigation } from '@/data/fakeData';

import { SearchBar } from '@/components/SearchBar/SearchBar';

import LogoWhite from '@/assets/svgs/logo-white.svg';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <>
      <div
        className={clsxm(
          'fixed top-0 right-0 hidden h-full w-full bg-grayBg',
          isOpen && 'backdrop z-10 block'
        )}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={clsxm(
          'mobile-menu overflow-hidden rounded-bl-[10px]',
          isOpen && 'mobile-menu--active'
        )}
      >
        <div className='flex items-center justify-between bg-black px-2 py-4'>
          <Link href='/'>
            <a>
              <LogoWhite className='h-[28px] w-[150px]' />
            </a>
          </Link>
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
        <ul className=''>
          {navigation.map((item) => (
            <li className='active' key={item.key}>
              <a
                href={item.url}
                className='block border-b-2 bg-black px-2 py-4  text-sm font-semibold text-white'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <SearchBar classes='lg:flex' />
      </div>
    </>
  );
};
