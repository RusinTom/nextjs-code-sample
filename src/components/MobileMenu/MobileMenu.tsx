import React from 'react';

import { clsxm } from '@/lib/clsxm';

import { navigation } from '@/data/fakeData';

import { Backdrop } from '@/components/MobileMenu/Backdrop';
import { MobileLogo } from '@/components/MobileMenu/MobileLogo';
import { MobileMenuItem } from '@/components/MobileMenu/MobileMenuItem';
import { SearchBar } from '@/components/SearchBar/SearchBar';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <>
      <Backdrop active={isOpen} onClick={setIsOpen} />
      <div
        className={clsxm(
          'mobile-menu overflow-hidden rounded-bl-[10px] bg-black p-4',
          isOpen && 'mobile-menu--active'
        )}
      >
        <div className='flex items-center justify-between bg-black px-2 py-4'>
          <MobileLogo nonFocusable={!isOpen} />
          <button tabIndex={isOpen ? 0 : -1} onClick={() => setIsOpen(false)}>
            X
          </button>
        </div>
        <ul>
          {navigation.map((item) => (
            <MobileMenuItem key={item.key} item={item} nonFocusable={!isOpen} />
          ))}
        </ul>
        <SearchBar nonFocusable={!isOpen} classes='lg:flex lg:mt-4' />
      </div>
    </>
  );
};
